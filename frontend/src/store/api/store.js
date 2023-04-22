export const getStore = async () => {
    const res = await fetch(
      "https://{{process.env.ADDRESS}}/api/store"
    );
    return await res.json();
  };
  
  export const createProduct = async ({product, seller, price, image, token}) => {
    //console.log("Apin viesti",product, seller, price, image);
    const res = await fetch(
      "https://{{process.env.ADDRESS}}/api/store", 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: 'Bearer ' + token
        },
        body: JSON.stringify({
          "product":product,
          "seller":seller,
          "price":price,
          "image":image
        })
      }
    );
    return await res.json();
  };


export const deleteProduct = async ({id, token}) => {
  //console.log("Apin viesti deletellä", id);
    const res = await fetch(
      "https://{{process.env.ADDRESS}}/api/store/" + id,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: 'Bearer ' + token
        }
      }
    );
    
    return await res.json();
  };