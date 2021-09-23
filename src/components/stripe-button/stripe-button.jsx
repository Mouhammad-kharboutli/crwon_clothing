import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  // this is because Stripe is taking that in cents
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51Jc2l0B2KG6iuf7Gnm7JoW9z0AgZCmG5h7xu51XI6da2M5yXJRAqzETDXLoS1x8Z8euvYROUUf6UQUTGfHYX1RLk00tlQBTP8D";
  const onToken = (token) => {
    console.log(token);
    alert("Successful Payment");
  };
  return (
    <StripeCheckout
      name="CROWN CLOTHING LTD."
      email="info@crown.se"
      description="Pay now"
      image="https://sendeyo.com/updownload/file/script/d/f3eb2117da"
      shippingAddress
      billingAdress
      allowRememberMe
      stripeKey={publishableKey}
      token={onToken}
      amount={stripePrice}
    />
  );
};
export default StripeButton;
