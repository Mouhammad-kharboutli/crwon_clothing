import React from "react";
import "./checkout-item.scss";
import { connect } from "react-redux";
import { removeItemFromCart, addItem, removeItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, removeItemFromCart,removeItem,addItem }) => {
  const { name, price, imageUrl, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name"> {name}</span>
      
      <div className="quantity">
        <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </div>

      <span className="price"> {price} </span>
      <span className="remove-button" onClick={() => removeItemFromCart(cartItem)}>
        {" "}
        &#10005;{" "}
      </span>
    </div>
  );
};

const dispatchToStateProps = (dispatch) => ({
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
});
export default connect(null, dispatchToStateProps)(CheckoutItem);
