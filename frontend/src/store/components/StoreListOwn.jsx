import React from "react";
import StoreItemOwn from './StoreItemOwn';
import './StoreList.css';
const StoreListOwn = props => {
  console.log("dataaaaa", props)
  return <ul className="store-list">
    {props.items.map(store => 
      <StoreItemOwn 
        id={store.id}
        product={store.product}
        seller={store.seller}
        price={store.price}
        image={store.image}
      />
    )}
    </ul>
};
export default StoreListOwn;