import React from "react";
import "./checkout-page.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import CheckoutItem from "../../components/cart-checkout-item/checkout-item";
import StripeButton from "../../components/stripe-button/stripe-button";

const CheckOut = ({ cartItems, total, ...restProps }) => {
  //dispatch will be added here automatically if I do not add the second
  // parameter to connect
  console.log(restProps);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Qunatity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>

        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: $ {total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit*
        <br />
        4242 4242 4242 4242 - Exp:01/20 - CVV:123
      </div>
      
      <StripeButton price={total} />
      
    </div>
  );
};

const mapsToStateProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapsToStateProps)(CheckOut);
