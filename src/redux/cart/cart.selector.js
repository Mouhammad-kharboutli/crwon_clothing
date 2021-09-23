import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectedItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity,
        0
      )
)

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
    (accumelatedQuantity,cartItem) => ( accumelatedQuantity + cartItem.quantity * cartItem.price)
    ,0)
)