import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {toggleCartHidden} from "../../redux/cart/cart.actions"
import { selectCartItems } from "../../redux/cart/cart.selector";
import "../custom-button/custom-button.component";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item";

import "./cart-dropdown.scss";

const CartDropDown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartElement) => {
          return <CartItem key={cartElement.id} item={cartElement} />;
        })
      ) : (
        <span className='empty-msg'> You cart is empty </span>
      )}

      <CustomButton onClick={()=> {
        history.push('/checkout');
        dispatch(toggleCartHidden())
        
        }}>GO TO CHECKOUT </CustomButton>
    </div>
  </div>
);
const mapToStateProps = (state) => ({
  cartItems: selectCartItems(state),
});
export default withRouter(connect(mapToStateProps)(CartDropDown));
