import moment from "moment";

const schedule = [
  {
    start: "1100",
    end: "1130",
    eventTitle: "Lecture 1",
    lecturers: "John Doe, Jane Doe",
    location: "26-100",
    resources: [""],
  },
  {
    start: "1130",
    end: "1200",
    eventTitle: "Lunch",
    location: "26-100",
  },
  {
    start: "1230",
    end: "1300",
    eventTitle: "Lecture 3",
    lecturers: "John Doe, Jane Doe",
    location: "26-100",
    resources: ["1"],
  },
];

function inferType(event) {
  const title = event.summary.toLowerCase();
  if (title.includes("lunch")) return "lunch";
  if (title.includes("milestone")) return "milestone";
  if (title.includes("office hours")) return "oh";
  return "lec";
}

function createEvent(event) {
  return {
    name: event.summary,
    type: inferType(event),
    where: event.location,
    links: event.attachments || [],
    start: event.start.dateTime,
    end: event.end.dateTime,
    lecturers: event.description,
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

  return filteredEvents;
}

export default async function Schedule() {
  const events = await getEvents();

  console.log(events);
  return (
    <div className="w-full rounded-2xl border border-neutral-700 bg-transparent p-4 backdrop-blur-2xl transition duration-300 ease-in-out lg:p-8">
      <h3 className="text-lg font-semibold tracking-tighter text-white lg:text-xl 2xl:text-2xl">
        Monday
      </h3>
      <table className="min-w-full divide-y divide-neutral-700">
        <thead>
          <tr className="divide-x divide-neutral-700">
            <th
              scope="col"
              className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-neutral-300 sm:pl-0"
            >
              time
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-left text-sm font-semibold text-neutral-300"
            >
              event
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-left text-sm font-semibold text-neutral-300"
            >
              lecturers
            </th>
            <th
              scope="col"
              className="px-4 py-3.5 text-left text-sm font-semibold text-neutral-300"
            >
              location
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-neutral-300 sm:pr-0"
            >
              resources
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-neutral-700 bg-transparent">
          {events.map((week) => (
            <tr key={week.name} className="divide-x divide-neutral-700">
              <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-neutral-300 sm:pl-0">
                {`${moment(week.start.dateTime).format("h:mm A")} - ${moment(week.end.dateTime).format("h:mm A")}`}
              </td>
              <td className="whitespace-nowrap p-4 text-sm text-neutral-300">
                {week.name}
              </td>
              <td className="whitespace-nowrap p-4 text-sm text-neutral-300">
                {week.lecturers}
              </td>
              <td className="whitespace-nowrap p-4 text-sm text-neutral-300">
                {week.where}
              </td>
              <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-neutral-300 sm:pr-0">
                {/* {week.resources.map((resource, key) => (
                  <a href={resource} key={key}>
                    {resource}
                  </a>
                ))} */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
