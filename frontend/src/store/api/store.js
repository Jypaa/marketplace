export const getStore = async () => {
    const res = await fetch(
      "http://localhost:5000/api/store"
    );
    return await res.json();
  };
  
  export const createProduct = async ({product, seller, price, image, token}) => {
    console.log("Apin viesti",product, seller, price, image);
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
          "image":image
        })
      }
    );
    return await res.json();
  };


export const deleteProduct = async ({id, token}) => {
    const res = await fetch(
      "http://localhost:5000/api/store/" + id,
      {
        method: 'DELETE',
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    );
    
    return await res.json();
  };