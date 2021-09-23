import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
//connect is making our component as HOC and it will give us access to 
//  the state inside our STORE 

import {selectCurrentUser} from "../../redux/user/user.selectors"
import {selectCartHidden} from "../../redux/cart/cart.selector"
import { createStructuredSelector } from 'reselect';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';

//cuurentUser is coming from ROOT reucer now 
const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null: <CartDropDown /> }
  </div>
);

//connect will take two parameters AS FUNCTIONS and it is HOC 
// the first one is the direct value to the our user reducer
const mapStateToProps = createStructuredSelector({

hidden:selectCartHidden,
currentUser:selectCurrentUser
  // this is called DESTRUCTURE NESTED VALUES
  // this means that destructure the user from STATE and then destructure 
  // from that user the currentUser value
// const mapStateToProps = (state.user.currentUser) => ({

//state is the root reducer which means that the state is the state inside root reducer
//  currentUser,
//  hidden
// currentUser: state.user.currentUser
//state.user is coming from the ROOT reducer 
// currentUser is coming from root reducer
});

export default connect(mapStateToProps)(Header) ;
// now we can pass the current user from the CONNECT function // from ROOTREDUCER
//(not this is passed to header)

