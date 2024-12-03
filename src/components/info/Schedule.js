import moment from "moment";

const firstWeek = [
  {
    start: "1130",
    end: "1230",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];

const secondWeek = [];

const schedule = firstWeek;

export default function Schedule() {
  return (
    <div className="w-full rounded-2xl border border-neutral-700 bg-transparent p-4 backdrop-blur-2xl transition duration-300 ease-in-out lg:p-8">
      <div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr className="divide-x divide-neutral-700">
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-neutral-300 sm:pl-0"
                >
                  Time
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-semibold text-neutral-300"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-4 py-3.5 text-left text-sm font-semibold text-neutral-300"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-neutral-300 sm:pr-0"
                >
                  Role
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
                    {week.title}
                  </td>
                  <td className="whitespace-nowrap p-4 text-sm text-neutral-300">
                    {week.email}
                  </td>
                  <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-neutral-300 sm:pr-0">
                    {week.role}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
