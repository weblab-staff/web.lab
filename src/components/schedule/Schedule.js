import { getTime, getFakeData } from "@/utils";
import ScheduleBlock from "@/components/schedule/ScheduleBlock";
import WeekSelector from "@/components/schedule/WeekSelector";
import { metadata } from "@/data/metadata";

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
  // first replace all <br> with \n, then remove all html tags, then split by \n
  let metadata = event?.description
    ?.replaceAll("<br>", "\n")
    .replaceAll(/<[^>]*>/g, "")
    .split("\n");
  let numMetadata = metadata?.length;
  if (numMetadata > 1) {
    lecturers = metadata[1];
    if (numMetadata > 2) {
      links = metadata[2].split(",");
    }
  }

  return { lecturers, links };
}

function createEvent(event) {
  let start = new Date(event.start.dateTime || event.start.date);
  let end = new Date(event.end.dateTime || event.end.date);
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
    const nowYear = now.getFullYear();
    const nextYear = nowYear + 1;
    // Find first Monday of the year by starting at Jan 1 and moving forward until we hit a Monday
    const cutoffDate = new Date(nowYear, 0, 1);
    while (cutoffDate.getDay() !== 1) {
      // 1 represents Monday
      cutoffDate.setDate(cutoffDate.getDate() + 1);
    }

    // If it's after June of the current year, set cutoff to first monday of the next year
    if (now.getMonth() === 5 && now.getDate() > 1) {
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
  let fakeEvents = getFakeData();

  return !metadata.hideCalendar && dates.length > 0 ? (
    <>
      <WeekSelector dates={dates} />
      {dates.map((date) => {
        const startOfWeek =
          dates.indexOf(date) === 0 ||
          compareDates(date, dates[dates.indexOf(date) - 1]);

        if (startOfWeek) week++;

        return (
          <section
            key={date}
            id={startOfWeek ? `week-${week}` : undefined}
            className="z-[1] flex w-full flex-col gap-4 pt-16"
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
  ) : (
    <>
      <h1 className="absolute top-1/2 animate-pulse text-center text-3xl font-semibold tracking-tighter text-white lg:text-4xl 2xl:text-5xl">
        coming soon...
      </h1>
      {Object.keys(fakeEvents).map((date) => (
        <section
          key={date}
          className="z-[1] flex w-full flex-col gap-4 pt-16 blur-sm"
        >
          <h3 className="text-xl font-semibold tracking-tighter text-white lg:text-2xl 2xl:text-3xl">
            {new Date(date)
              .toLocaleDateString("en-us", {
                dateStyle: "full",
              })
              .toLowerCase()}
          </h3>
          <ul className="flex w-full flex-col">
            {fakeEvents[date].map((event, k) => (
              <ScheduleBlock event={event} type={event.type} key={k} />
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
