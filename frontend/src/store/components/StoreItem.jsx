import React from "react";

import './StoreItem.css';
import Card from '../../shared/components/card/Card';

const StoreItem = props => {

  return (
    <>
    <li className="store-item">
    <Card className="store-item__content">
     <div className="store-item__image">
      <img src={props.image} alt={props.product} />
    </div>
    <div className="store-item__info">
      <h3>{props.product} - {props.seller}- {props.price}€</h3>
    </div>
    <div className="store-item_actions">

    </div>
    </Card>
  </li>
  </>
  )
};

export default StoreItem;