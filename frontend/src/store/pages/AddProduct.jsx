import React, {useRef} from "react";
import Input from "../../shared/components/input/Input";
import Button from "../../shared/components/button/Button";
import './AddProduct.css';
import { createProduct } from "../api/store";
import { AuthContext } from '../../shared/context/auth-context';

import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';

const AddProduct = () => {

const productRef = useRef();
const sellerRef = useRef();
const priceRef = useRef();
const imageRef = useRef();

const auth = useContext(AuthContext);
const history = useHistory();

const createProductMutation = useMutation({
  mutationFn: createProduct
});

const productSubmitHandler = async event => {
  event.preventDefault();
  createProductMutation.mutate({
    product: productRef.current.value,
    seller: sellerRef.current.value,
    price: priceRef.current.value,
    image: imageRef.current.value,
    token: auth.token
  })
  history.push('/');
};
  return (
    
<form className="product-form" onSubmit={productSubmitHandler}>
      <Input id="product" ref={productRef} type="text" label="product" />
      <Input id="seller" ref={sellerRef} type="text" label="seller" />
      <Input id="price" ref={priceRef} type="text" label="price" />
      <Input id="image" ref={imageRef} type="text" label="Image Link" />
      <Button type="submit">
        Add Product
      </Button>
    </form>
  )
};
export default AddProduct;