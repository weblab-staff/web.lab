export function starTrail(elementId) {
  let start = new Date().getTime();
  let container = document.getElementById(elementId);

  const originPosition = { x: 0, y: 0 };

  const last = {
    starTimestamp: start,
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
