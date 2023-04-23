import React, { useContext, useState } from "react";
import { useMutation } from 'react-query';
import './StoreItem.css';
import Card from '../../shared/components/card/Card';
import Button from '../../shared/components/button/Button'
import { AuthContext } from '../../shared/context/auth-context';
import Modal from '../../shared/components/modal/Modal';

import { deleteProduct } from "../api/store";

const StoreItemOwn = props => {
  const auth = useContext(AuthContext);

const [showConfirmationModal, setShowConfirmationModal] = useState(false);
const showConfirmationHandler = () => setShowConfirmationModal(true);
const cancelConfirmationHandler = () => setShowConfirmationModal(false);

const deleteProductMutation = useMutation({
  mutationFn: deleteProduct, 
  onSuccess: (data) => {
    console.log(data);
  },
  onError: (error) => {
    console.log(error)
  }
})

const deleteConfirmedHandler = () => {
  setShowConfirmationModal(false);
  console.log("Do we get here?", props);
  deleteProductMutation.mutate({
    id: props.id,
    token: auth.token
  })
}
  return (
    <>
  <Modal  
        show={showConfirmationModal}
        header="Are you sure?" 
        footerClass="place-item__modal-actions"
        footer={
          <React.Fragment>
            <Button inverse onClick={cancelConfirmationHandler}>Cancel</Button>
            <Button delete onClick={deleteConfirmedHandler}>Delete</Button>
          </React.Fragment>
        }
      >
        <p>Do you really want to delete it?</p>
      </Modal>
    <li className="store-item">
    <Card className="store-item__content">
     <div className="store-item__image">
      <img src={props.image} alt={props.product} />
    </div>
    <div className="store-item__info">
      <h3>{props.product} - {props.seller}- {props.price}€</h3>
    </div>
    <div className="store-item_actions">
    {auth.isLoggedIn && (
          <Button danger onClick={showConfirmationHandler}>Delete</Button>
        )}
    </div>
    </Card>
  </li>
  </>
  )
};

export default StoreItemOwn;