import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
//we import connect because our APP.js will update the status of our current user

import { setCurrentUser } from "./redux/user/user.action";

import { createStructuredSelector } from 'reselect';
import {selectCurrentUser} from "./redux/user/user.selectors";

import "./App.css";

import CheckOut from "./pages/checkout/checkout-page";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* currentUser={this.state.currentUser} THIS CAN BE DELETED from here
      this is becuase we will not send any property via APP.js , we send it via redux state store
       */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
//dispatch will be an action to set our new user
const mapDispatchToProps = (dispatch) => ({
  //dispatch will pass an action object that will be passed to every reducer
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

// if we need mapStateToProps we replace null but our APP.js is not doing any thing with it
// so that we put the first argument as null. We are not using currentUser here
// we are setting it ONLY
export default connect(mapStateToProps, mapDispatchToProps)(App);
