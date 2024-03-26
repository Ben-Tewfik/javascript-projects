async function fetchMeals(url) {
  try {
    const response = await fetch(url);
    const { meals } = await response.json();
    return meals;
  } catch (error) {
    console.log(error);
  }
}

export default fetchMeals;
