export const getUserApi = async (token) => {
  try {
    const response = await fetch('https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/userlogin', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token} `
      }
    })
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    console.log(body)
    return body;
  } catch (error) {
    const response = await fetch('https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/adminlogin', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token} `
      }
    })
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) throw Error(body.message);
    return body;
  }

}
export const getAdminApi = async (token) => {
  try {
    const response = await fetch('https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/adminlogin', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token} `
      }
    })
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) throw Error(body.message);
    return body;
  } catch (error) {
    return false;
  }
}

export const getAllUsers = async (token) => {
  const response = await fetch('https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/all_users', {
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
  const response = await fetch('https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/allpets', {
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
  const response = await fetch(`https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/users/${id}`, {
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
  const response = await fetch(`https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/pets/${id}`, {
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
    const response = await fetch(`https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/images/${id}`, {
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
  const response = await fetch(`https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/search_type/${type}`);
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
}

export const advancedSearchPet = async (status, height, weight, type, name) => {
  const response = await fetch(`https://us-central1-pet-project-backend-9c241.cloudfunctions.net/app/adv_search?status=${status}&height=${height}&weight=${weight}&type=${type}&name=${name}`);
  try {
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  } catch (error) {
    console.log(error)
    return {
      'name': '',
      'type': '',
      'breed': ''
    }
  }
}