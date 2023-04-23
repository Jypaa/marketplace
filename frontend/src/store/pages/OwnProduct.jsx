import React  from "react";
import StoreListOwn from '../components/StoreListOwn';
import { useQuery } from 'react-query'
import { findProduct } from "../api/store";

//import LoadingSpinner from "../../../shared/components/loadingspinner/LoadingSpinner";


import { getStore } from "../api/store";

const OwnProduct = () => {



const userdata = JSON.parse(localStorage.getItem('userData'))
console.log("userdata",userdata.userId)

const { isLoading,error, data } =   useQuery("storeData", () => fetch(
    "http://localhost:5000/api/store/" + userdata.userId
).then((res) => res.json())
);

//console.log("nimi",data)

if (isLoading) return "Loading...";
if (error) return "An error has occurred: " + error.message;

if(data.length == 0) return "No added product yet"
return (
    <StoreListOwn items={data} />
)
};

export default OwnProduct;
//<StoreListOwn items={data} />
 