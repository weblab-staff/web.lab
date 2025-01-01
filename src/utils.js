export function starTrail(elementId) {
  let startTime = new Date().getTime();
  let container = document.getElementById(elementId);

  const originPosition = { x: 0, y: 0 };

  const last = {
    starTimestamp: startTime,
    starPosition: originPosition,
    mousePosition: originPosition,
  };

  const config = {
    starAnimationDuration: 1500,
    minimumTimeBetweenStars: 150,
    minimumDistanceBetweenStars: 50,
    colors: [
      "255 190 11",
      "251 86 7",
      "255 0 110",
      "131 56 236",
      "58 134 255",
      "255 255 255",
      "14 173 105",
    ],
    sizes: ["1.8rem", "1.4rem", "1.0rem"],
    animations: ["fall-1", "fall-2", "fall-3"],
  };

  let count = 0;

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min,
    selectRandom = (items) => items[rand(0, items.length - 1)];

  const withUnit = (value, unit) => `${value}${unit}`,
    px = (value) => withUnit(value, "px"),
    ms = (value) => withUnit(value, "ms");

  const calcDistance = (a, b) => {
    const diffX = b.x - a.x,
      diffY = b.y - a.y;

    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
  };

  const calcElapsedTime = (start, end) => end - start;

  const appendElement = (element) => container.appendChild(element),
    removeElement = (element, delay) =>
      setTimeout(() => container.removeChild(element), delay);

  const createStar = (position) => {
    const star = document.createElement("span"),
      color = selectRandom(config.colors);

    star.className = "star fa-solid fa-sparkle";

    star.style.left = px(position.x);
    star.style.top = px(position.y);
    star.style.fontSize = selectRandom(config.sizes);
    star.style.color = `rgb(${color})`;
    star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
    star.style.animationName = config.animations[count++ % 3];
    star.style.starAnimationDuration = ms(config.starAnimationDuration);

    appendElement(star);

    removeElement(star, config.starAnimationDuration);
  };

  const updateLastStar = (position) => {
    last.starTimestamp = new Date().getTime();

    last.starPosition = position;
  };

  const updateLastMousePosition = (position) => (last.mousePosition = position);

  const adjustLastMousePosition = (position) => {
    if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
      last.mousePosition = position;
    }
  };

  const handleOnMove = (e) => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    const mousePosition = { x: x, y: y };

    adjustLastMousePosition(mousePosition);

    const now = new Date().getTime(),
      hasMovedFarEnough =
        calcDistance(last.starPosition, mousePosition) >=
        config.minimumDistanceBetweenStars,
      hasBeenLongEnough =
        calcElapsedTime(last.starTimestamp, now) >
        config.minimumTimeBetweenStars;
    if (hasMovedFarEnough || hasBeenLongEnough) {
      createStar(mousePosition);

      updateLastStar(mousePosition);
    }

    updateLastMousePosition(mousePosition);
  };

  container.onmousemove = (e) => handleOnMove(e);

  container.ontouchmove = (e) => handleOnMove(e.touches[0]);

  container.onmouseleave = () => updateLastMousePosition(originPosition);
}

export function getTime(date) {
  date = new Date(
    date.toLocaleString("en-US", { timeZone: "America/New_York" }),
  );
  let h = date.getHours();
  let m = date.getMinutes();

  let period = h < 12 ? "AM" : "PM";
  if (!h) {
    h = 12;
  } else {
    h -= 12 * (h > 12);
  }

  // precede with 0 if needed
  h = ("0" + h).slice(-2);
  m = ("0" + m).slice(-2);

  return `${h}:${m}${period}`;
}

export function getFakeData() {
  return {
    [new Date().toLocaleDateString()]: [
      {
        name: "Lorem Ipsum Introduction Lecture",
        type: "lec",
        where: "Building 123, Room 456",
        links: ["https://example.com/slides", "https://example.com/recording"],
        start: "10:00AM",
        end: "11:30AM",
        lecturers: "Prof. John Doe",
      },
      {
        name: "Dolor Sit Amet Office Hours",
        type: "oh",
        where: "Virtual",
        links: ["https://zoom.us/fake-link"],
        start: "2:00PM",
        end: "4:00PM",
        lecturers: "Teaching Assistants",
      },
    ],
    [new Date(Date.now() + 86400000).toLocaleDateString()]: [
      {
        name: "Consectetur Advanced Topics",
        type: "lec",
        where: "Building 456, Room 789",
        links: [
          "https://example.com/slides-2",
          "https://example.com/recording-2",
        ],
        start: "9:30AM",
        end: "11:00AM",
        lecturers: "Prof. Jane Smith",
      },
      {
        name: "Project Milestone 1 Due",
        type: "hw",
        where: "Online Submission",
        links: ["https://example.com/milestone1"],
        start: "11:59PM",
        lecturers: undefined,
      },
    ],
    [new Date(Date.now() + 2 * 86400000).toLocaleDateString()]: [
      {
        name: "Adipiscing Elit Lab Session",
        type: "lec",
        where: "Lab Building, Room 101",
        links: ["https://example.com/lab-materials"],
        start: "1:00PM",
        end: "3:00PM",
        lecturers: "Dr. Alex Johnson",
      },
      {
        name: "Lunch",
        type: "lunch",
        where: undefined,
        start: "12:00PM",
        end: "1:00PM",
        lecturers: undefined,
      },
    ],
    [new Date(Date.now() + 3 * 86400000).toLocaleDateString()]: [
      {
        name: "Sed Do Eiusmod Workshop",
        type: "lec",
        where: "Innovation Hub",
        links: ["https://example.com/workshop"],
        start: "2:00PM",
        end: "4:00PM",
        lecturers: "Prof. John Doe, Dr. Jane Smith",
      },
    ],
    [new Date(Date.now() + 4 * 86400000).toLocaleDateString()]: [
      {
        name: "Tempor Incididunt Discussion",
        type: "lec",
        where: "Building 123, Room 456",
        links: ["https://example.com/discussion"],
        start: "10:00AM",
        end: "11:30AM",
        lecturers: "Teaching Assistants",
      },
      {
        name: "Extra Office Hours",
        type: "oh",
        where: "Virtual",
        links: ["https://zoom.us/extra-oh"],
        start: "3:00PM",
        end: "5:00PM",
        lecturers: "Prof. John Doe",
      },
      {
        name: "Weekly Assignment Due",
        type: "hw",
        where: "Online Submission",
        links: ["https://example.com/homework2"],
        start: "11:59PM",
        lecturers: undefined,
      },
    ],
  };
}
