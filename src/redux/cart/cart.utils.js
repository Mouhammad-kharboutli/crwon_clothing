export const addItemToCart = (cartItems, itemToAddtoCart) => {
  const existingCartItem = cartItems.find(
    (cartitem) => cartitem.id === itemToAddtoCart.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === itemToAddtoCart.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...itemToAddtoCart, quantity: 1 }];
};

export const removeItemfromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
