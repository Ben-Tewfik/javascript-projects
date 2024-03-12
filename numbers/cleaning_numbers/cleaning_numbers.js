const numbers = [...document.querySelectorAll(".item span")];

const result = numbers.forEach(number => {
  const value = parseInt(number.dataset.value);
  const increment = Math.ceil(value / 100);
  let initialValue = 0;
  const counter = setInterval(() => {
    if (initialValue > value) {
      if (number.classList.contains("percent")) {
        number.textContent = `${value}%`;
      } else {
        number.textContent = value;
      }
      clearInterval(counter);
    } else {
      initialValue += increment;
      if (number.classList.contains("percent")) {
        number.textContent = `${initialValue}%`;
      } else {
        number.textContent = initialValue;
      }
    }
  }, 1);
});
