export const getUserApi = async (token) => {
  const response = await fetch('http://localhost:5000/userlogin', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token} `
    }
  })
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export const getAllUsers = async (token) => {
  const response = await fetch('http://localhost:5000/all_users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token} `
    }
  })
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export const getAllPets = async (token) => {
  const response = await fetch('http://localhost:5000/allpets', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token} `
    }
  })
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}
export const getUserById = async (token, id) => {
  const response = await fetch(`http://localhost:5000/users/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token} `
    }
  })
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export const getPetById = async (token, id) => {
  const response = await fetch(`http://localhost:5000/pets/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token} `
    }
  });
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export const getImgById = async (token, id) => {
  try {
    const response = await fetch(`http://localhost:5000/images/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token} `
      }
    });
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  } catch (error) {
    console.log(error)
  }
}

export const searchPetByType = async (type) => {
  const response = await fetch(`http://localhost:5000/search_type/${type}`);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export const advancedSearchPet = async (status, height, weight, type, name) => {
  const response = await fetch(`http://localhost:5000/adv_search?status=${status}&height=${height}&weight=${weight}&type=${type}&name=${name}`);
  try {
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  } catch (error) {
    console.log(error)
    return {'name' : '', 'type' : '', 'breed' : '' }
  }
}

export const savingPet = async (userId, petId) =>{


}