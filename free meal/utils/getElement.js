function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return;
  } else {
    throw new Error(`No such ${selection} found`);
  }
}
export default getElement;
