"use client";

import { useState } from "react";

function getWeekDates(dates, weekNum) {
  const weekStart = dates.findIndex((date, i) => {
    if (i === 0) return weekNum === 1;
    return (
      compareDates(date, dates[i - 1]) && weekNum === getWeekNumber(dates, date)
    );
  });

  if (weekStart === -1) return null;

  let dateOptions = { month: "numeric", day: "numeric" };
  return {
    start: new Date(dates[weekStart]).toLocaleDateString("en-us", dateOptions),
    end: new Date(
      dates[Math.min(weekStart + 4, dates.length - 1)],
    ).toLocaleDateString("en-us", dateOptions),
  };
}

function getWeekNumber(dates, currentDate) {
  let weekCount = 1;
  for (let i = 1; i < dates.indexOf(currentDate) + 1; i++) {
    if (compareDates(dates[i], dates[i - 1])) {
      weekCount++;
    }
  }
  return weekCount;
}

function getCurrentWeek(dates) {
  const today = new Date().toLocaleDateString();
  for (let i = 0; i < dates.length; i++) {
    if (new Date(dates[i]) >= new Date(today)) {
      return getWeekNumber(dates, dates[i]);
    }
  }
  return 1;
}

function compareDates(firstDate, secondDate) {
  // getDay() has sunday as index 0, so shift the days so that monday is 0 (start of the week)
  const firstDay =
    new Date(firstDate).getDay() === 0 ? 6 : new Date(firstDate).getDay() - 1;
  const secondDay =
    new Date(secondDate).getDay() === 0 ? 6 : new Date(secondDate).getDay() - 1;

  return firstDay < secondDay;
}

export default function WeekSelector({ dates }) {
  const [locationHash, setLocationHash] = useState(null);
  const currentWeek = getCurrentWeek(dates);

  return (
    <div className="z-[1] flex w-full flex-col gap-2 pt-4 text-sm text-neutral-300">
      <div className="flex items-center gap-2">
        <select
          id="week-select"
          className="rounded border-r-8 border-transparent bg-neutral-800 px-3 py-2 text-white focus:outline-none"
          defaultValue=""
          onChange={(e) => setLocationHash(e.target.value)}
        >
          <option value="" disabled>
            Select week...
          </option>
          <option value={`week-${currentWeek}`}>Current Week</option>
          {Array.from({ length: 4 }, (_, i) => i + 1).map((weekNum) => {
            const weekDates = getWeekDates(dates, weekNum);
            return (
              <option key={weekNum} value={`week-${weekNum}`}>
                Week {weekNum} ({weekDates?.start} - {weekDates?.end})
              </option>
            );
          })}
        </select>
        <button
          onClick={() => {
            if (locationHash) window.location.hash = locationHash;
          }}
          disabled={!locationHash}
          className="rounded bg-yellow-500 px-4 py-2 font-medium text-black transition ease-linear hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 disabled:opacity-50 hover:disabled:bg-yellow-500"
        >
          Jump
        </button>
      </div>
    </div>
  );
}
