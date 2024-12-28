import Link from "next/link";

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
              <p className="text-xs text-neutral-400 sm:text-sm">
                {event.lecturers}
              </p>
            )}
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="whitespace-nowrap text-sm text-neutral-400">
              {event.where}
            </p>
            <div className="flex flex-row items-center gap-2 fill-neutral-400">
              {event?.links?.map((link) => (
                <>
                  {link.includes("youtube.com") || link.includes("youtu.be") ? (
                    <Link href={link}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M11.363 2C15.518 2 14 8 14 8s6-1.65 6 2.457V22H4V2zm.826-2H2v24h20V9.614C22 7.223 15.352 0 12.189 0M17 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698H17zm-4.9 0h-1.599v3.686H12.1c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459m-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948q-.193.527-.754.528h-.637v-2.12zM8.668 13H7v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763a1.4 1.4 0 0 0 0-.885c-.16-.484-.606-.761-1.224-.761m-.761.732h.546c.235 0 .467.028.576.228a.62.62 0 0 1 0 .489c-.109.199-.341.227-.576.227h-.546z"></path>
                      </svg>
                    </Link>
                  ) : link.includes("docs.google.com") ? (
                    <Link href={link}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816M9 16V8l8 3.993z"></path>
                      </svg>
                    </Link>
                  ) : null}
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
