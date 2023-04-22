import React from "react";
import StoreItem from './StoreItem';
import './StoreList.css';
const StoreList = props => {
  console.log("dataaaaa", props)
  return <ul className="store-list">
    {props.items.map(store => 
      <StoreItem 
        id={store.id}
        product={store.product}
        seller={store.seller}
        price={store.price}
        image={store.image}
      />
    )}
    </ul>
};
export default StoreList;