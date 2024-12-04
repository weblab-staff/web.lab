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

export default function Schedule() {
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
          {schedule.map((week) => (
            <tr key={week.title} className="divide-x divide-neutral-700">
              <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-neutral-300 sm:pl-0">
                {`${new moment(week.start, "HH:mm:ss").format("h:mm A")} - ${new moment(week.end, "HH:mm:ss").format("h:mm A")}`}
              </td>
              <td className="whitespace-nowrap p-4 text-sm text-neutral-300">
                {week.eventTitle}
              </td>

              <td className="whitespace-nowrap p-4 text-sm text-neutral-300">
                {week?.lecturers}
              </td>
              <td className="whitespace-nowrap p-4 text-sm text-neutral-300">
                {week.location}
              </td>

              <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-neutral-300 sm:pr-0">
                {week?.resources &&
                  week.resources.map((resource) => (
                    <a href={resource} key={resource}>
                      {resource}
                    </a>
                  ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
