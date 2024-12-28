import { getTime } from "@/utils";
import ScheduleBlock from "@/components/schedule/ScheduleBlock";

function inferType(event) {
  const title = event.summary.toLowerCase();
  const desc = event?.description;
  if (title.includes("lunch") || (desc !== undefined && desc.includes("lunch")))
    return "lunch";
  if (
    title.includes("milestone") ||
    (desc !== undefined && (desc.includes("milestone") || desc.includes("hw")))
  )
    // remove includes milestone after we update everything
    return "hw";
  if (
    title.includes("office hours") ||
    (desc !== undefined && desc.includes("office hours"))
  )
    return "oh";
  return "lec";
}

function parseDesc(event) {
  let lecturers = undefined;
  let links = undefined;
  let metadata = event?.description?.split("\n");
  let numMetadata = metadata?.length;

  if (numMetadata > 1) {
    lecturers = metadata[0];
    if (numMetadata > 2) {
      links = metadata[2].split(",");
    }
  }

  return { lecturers, links };
}

function createEvent(event) {
  let start = new Date(event.start.dateTime || event.start.date);
  let end = new Date(event.end.dateTime || event.start.date);
  let { lecturers, links } = parseDesc(event);

  return {
    name: event.summary,
    type: inferType(event),
    where: event.location,
    links: links,
    start: event.start.dateTime ? getTime(start) : "11:59PM",
    end: getTime(start) != getTime(end) ? getTime(end) : undefined,
    lecturers: lecturers,
  };
}

async function getEvents() {
  const data = await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/cc1fa1082653a6746650dce3a7403bfcdd6c898294210579915103e4c450d3e2@group.calendar.google.com/events?key=AIzaSyBWw7tnK1X91Fuv67TqYtc_fRCIo8FWW4Y",
  );
  const json = await data.json();
  const filteredEvents = json.items.filter((event) => {
    const eventDate = new Date(event.start.dateTime);
    const now = new Date();
    const nextYear = now.getFullYear() + 1;
    const cutoffDate = new Date(nextYear, 0, 1); // January 1st of the following year

    // If it's after February of the current year, set cutoff to January 1st of the year after next
    if (now.getMonth() === 1 && now.getDate() > 1) {
      cutoffDate.setFullYear(nextYear + 1);
    }

    return eventDate >= cutoffDate && event.status !== "cancelled";
  });

  const sortedEvents = filteredEvents.sort(
    (a, b) => new Date(a.start.dateTime) - new Date(b.start.dateTime),
  );

  const groupedEvents = {};

  sortedEvents.map((e) => {
    const date = new Date(e.start.dateTime).toLocaleDateString();
    if (groupedEvents[date] == undefined) {
      groupedEvents[date] = [];
    }
    groupedEvents[date].push(createEvent(e));
  });
  return groupedEvents;
}

// helper function to determine the start of the week
function compareDates(firstDate, secondDate) {
  // getDay() has sunday as index 0, so shift the days so that monday is 0 (start of the week)
  const firstDay =
    new Date(firstDate).getDay() === 0 ? 6 : new Date(firstDate).getDay() - 1;
  const secondDay =
    new Date(secondDate).getDay() === 0 ? 6 : new Date(secondDate).getDay() - 1;

  return firstDay < secondDay;
}

export default async function Schedule() {
  const events = await getEvents();
  let week = 0;
  const dates = Object.keys(events);

  return (
    <>
      {dates.map((date) => {
        let startOfWeek = false;
        if (dates.indexOf(date) == 0) {
          startOfWeek = true;
          week++;
        } else {
          let currentIndex = dates.indexOf(date);
          let previousDate = dates[currentIndex - 1];

          if (compareDates(date, previousDate)) {
            startOfWeek = true;
            week++;
          }
        }

        return (
          <section
            key={date}
            id={startOfWeek ? `week-${week}` : undefined}
            className="flex w-full flex-col gap-4 pt-16"
          >
            <h3 className="text-xl font-semibold tracking-tighter text-white lg:text-2xl 2xl:text-3xl">
              {new Date(date)
                .toLocaleDateString("en-us", {
                  dateStyle: "full",
                })
                .toLowerCase()}
            </h3>
            <ul className="flex w-full flex-col">
              {events[date].map((event, k) => (
                <ScheduleBlock event={event} type={event.type} key={k} />
              ))}
            </ul>
          </section>
        );
      })}
    </>
  );
}
