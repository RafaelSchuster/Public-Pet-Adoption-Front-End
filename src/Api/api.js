export const getUserApi = async () => {
  const response = await fetch('http://localhost:5000/userlogin');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export const getAllUsers = async () => {
  const response = await fetch('http://localhost:5000/all_users');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export const getAllPets = async () => {
  const response = await fetch('http://localhost:5000/allpets');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}
export const getUserById = async (id) => {
  const response = await fetch(`http://localhost:5000/users/${id}`);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export const getPetById = async (id) => {
  const response = await fetch(`http://localhost:5000/pets/${id}`);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export const getImgById = async (id) => {
  const response = await fetch(`http://localhost:5000/images/${id}`);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export const searchPetByType = async (type) => {
  const response = await fetch(`http://localhost:5000/search_type/${type}`);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export const advancedSearchPet = async (status, height, weight, type, name) => {
  const response = await fetch(`http://localhost:5000/adv_search?status=${status}&height=${height}&weight=${weight}&type=${type}&name=${name}`);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}