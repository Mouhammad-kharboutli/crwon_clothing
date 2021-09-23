import React from "react";
import { connect } from "react-redux";
import { selectedItemsCount } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect';
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-icon.scss";

const CartIcon = ({ toggleCartHidden, itemsCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemsCount}</span>
    </div>
  );
};

const mapDisptatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapToStateProps = createStructuredSelector ({
  
  itemsCount: selectedItemsCount 
});

export default connect(mapToStateProps, mapDisptatchToProps)(CartIcon);
