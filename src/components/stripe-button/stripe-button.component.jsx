import React from "react";

import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HIHuSJ67BLVdOdnp7jY5EvBfgCX7DHmN4Xe2mDSu7oaL8KtHTF061XoU57G0tIoscQxCEonRcVk1gFPskP44vOM00e2wnJs4d";
  const onToken = (token) => {
    console.log(token);
    alert("payment recieved");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is £${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
