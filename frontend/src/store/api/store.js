export const getStore = async () => {
    const res = await fetch(
      "http://localhost:5000/api/store"
    );
    return await res.json();
  };
  export const findProduct = async (name) => {
    const res = await fetch(
      "http://localhost:5000/api/store/seller/"+ name,
    );
    return await res.json();
  };
  
  export const createProduct = async ({product, seller, price, image, token, tunnus}) => {
    //console.log("Apin viesti",product, seller, price, image);
    const res = await fetch(
      "http://localhost:5000/api/store", 
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
          "image":image,
          "tunnus":tunnus
        })
      }
    );
    return await res.json();
  };


export const deleteProduct = async ({id, token}) => {
  //console.log("Apin viesti deletellä", id);
    const res = await fetch(
      "http://localhost:5000/api/store/" + id,
      
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