import React from "react";
import StoreItem from './StoreItem';
import './StoreList.css';
const StoreList = props => {
  return <ul className="store-list">
    {props.items.map(store => 
      <StoreItem 
        key={store.id}
        product={store.product}
        seller={store.seller}
        price={store.price}
        image={store.image}
      />
    )}
    </ul>
};
export default StoreList;