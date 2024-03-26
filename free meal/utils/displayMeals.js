import get from "./getElement.js";
const mealsContainer = get(".meals-container");
console.log(mealsContainer);
function displayMeals(meals) {
  const newMeals = meals
    .map(meal => {
      const { idMeal: id, strMeal: title, strMealThumb: img } = meal;
      // if (title.length > 25) {
      //   let newTitle = title.slice(0, 25);
      // }

      return `<a href="#" class="meal-link">
        <article class="meal-container">
          <img
            src=${img}
            ,
            alt=${title}
            class="meal-img"
          />
          <div class="meal-title" title=${title}>${
        title.length > 25 ? `${title.slice(0, 22)}...` : title
      }</div>
        </article>
      </a>`;
    })
    .join("");
  mealsContainer.innerHTML = newMeals;
}
export default displayMeals;
