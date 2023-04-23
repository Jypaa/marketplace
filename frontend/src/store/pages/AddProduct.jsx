import React, {useRef, useContext} from "react";
import Input from "../../shared/components/input/Input";
import Button from "../../shared/components/button/Button";
import './AddProduct.css';
import { createProduct } from "../api/store";
import { AuthContext } from '../../shared/context/auth-context';
import { useQuery } from 'react-query'
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';


const AddProduct = () => {

const userdata = JSON.parse(localStorage.getItem('userData'))
//console.log("userdata",userdata.userId)
const {isLoading,error, data } = useQuery("storeData", () => fetch(
  "http://localhost:5000/api/users/" + userdata.userId
).then((res) => res.json())
);


if (isLoading) return "Loading...";
if (error) return "An error has occurred: " + error.message;

//console.log("nimi",data[0].name)
const productRef = useRef();
//const sellerRef = data[0].name;
const priceRef = useRef();
const imageRef = useRef();
//const tunnus = userdata.userId;

const auth = useContext(AuthContext);
const history = useHistory();

const createProductMutation = useMutation({
  mutationFn: createProduct
});

const productSubmitHandler = async event => {
  
  
  event.preventDefault();
  createProductMutation.mutate({
    product: productRef.current.value,
    seller: data[0].name,
    price: priceRef.current.value,
    image: imageRef.current.value,
    token: auth.token,
    tunnus: userdata.userId
  })
  history.push('/');
};
  return (
    
<form className="product-form" onSubmit={productSubmitHandler}>
      <Input id="product" ref={productRef} type="text" label="Product" />    
      <Input id="price" ref={priceRef} type="text" label="Price" />
      <Input id="image" ref={imageRef} type="text" label="Image Link" />
      <Button type="submit">
        Add Product
      </Button>
    </form>
  )
};
export default AddProduct;

//<Input id="seller" ref={sellerRef} type="text" label="Seller" />