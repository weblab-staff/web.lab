export default function ScheduleBlock({ event, type }) {
  return (
    <li
      className={`flex w-full flex-col border-t border-neutral-700 py-4 ${
        type == "lunch" ? "bg-white/5" : "bg-transparent"
      }`}
    >
      {type == "lunch" ? (
        <h4 className="text-center font-mono text-sm tracking-wider text-neutral-300 lg:text-base">
          {event.name.toLowerCase() != "lunch"
            ? event.name
            : "let event = getLunch();"}
        </h4>
      ) : type == "hw" ? (
        <div className="flex flex-row items-center gap-4 lg:gap-8">
          <div className="flex w-fit flex-col text-neutral-400">
            <span className="font-mono tabular-nums">{event.start}</span>
          </div>
          <h4 className="text-neutral-300">{event.name}</h4>
        </div>
      ) : (
        <div className="flex flex-row items-center gap-4 lg:gap-8">
          <div className="flex w-fit flex-col font-mono text-sm tabular-nums text-neutral-400 lg:text-base">
            <span>{event.start}</span>
            <span>{event.end}</span>
          </div>
          <div className="w-full overflow-hidden">
            <h4 className="text-neutral-300">{event.name}</h4>
            {event.lecturers && (
              <p className="text-sm text-neutral-400">{event.lecturers}</p>
            )}
          </div>
        </div>
      )}
    </li>
  );
}
