function displayButtons(container, pages, activeIndex) {
  const buttons = pages.map((_, pageIndex) => {
    return `<button class='page-btn ${
      activeIndex === pageIndex ? "active" : "null"
    }' data-index='${pageIndex}' >${pageIndex + 1}</button>`;
  });

  buttons.push(`<button class='next-btn'>next</button>`);
  if (activeIndex === pages.length - 1) {
    buttons.pop();
  }
  buttons.unshift(`<button class='prev-btn'>prev</button>`);
  if (activeIndex === 0) {
    buttons.shift();
  }
  container.innerHTML = buttons.join("");
}
export default displayButtons;
