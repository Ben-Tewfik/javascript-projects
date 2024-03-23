const url = "https://randomuser.me/api/";

async function fetchUser() {
  const response = await fetch(url);
  const data = await response.json();
  const person = data.results[0];
  const { first, last } = person.name;
  const { email, phone } = person;
  const { age } = person.dob;
  const {
    street: { number, name },
  } = person.location;
  const {
    login: { password },
  } = person;
  const { large: image } = person.picture;
  return {
    name: `${first} ${last}`,
    email,
    phone,
    age,
    street: `${number} ${name}`,
    password,
    image,
  };
}
export default fetchUser;
