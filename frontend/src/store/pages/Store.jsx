import React from "react";
import StoreList from '../components/StoreList';
import { useQuery } from 'react-query'
//import LoadingSpinner from "../../../shared/components/loadingspinner/LoadingSpinner";


import { getStore } from "../api/store";

const Store = () => {
  
const { isLoading, error, data } = useQuery("storeData", () =>
fetch(
  "http://{{process.env.ADDRESS}}/api/store"
).then((res) => res.json())
);

if (isLoading) return "Loading...";

if (error) return "An error has occurred: " + error.message;

return (
<StoreList items={data} />
)
};

export default Store;