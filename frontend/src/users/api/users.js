export const signUpUser = async ({name, email, password}) => {
  const res = await fetch(
    "http://{{process.env.ADDRESS}}/api/users/signup",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "name":name,
        "email":email,
        "password":password
      })
    }
  );
  
  return await res.json();
};

export const loginUser = async ({email, password}) => {
  const res = await fetch(
    "http://{{process.env.ADDRESS}}/api/users/login",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "password":password
      })
    }
  );
  
  return await res.json();
};
