import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducer";

const initialState = {
  cartList: [],
  total: 0,
};

const cartContext = createContext(initialState);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  function addToCart(product) {
    const updatedCart = state.cartList.concat(product);
    getTotalcost(updatedCart);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        product: updatedCart,
      },
    });
  }
  function removeFromCart(product) {
    const updatedCart = state.cartList.filter(
      (current) => current["EAN number"] !== product["EAN number"]
    );
    getTotalcost(updatedCart);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        product: updatedCart,
      },
    });
  }
  function getTotalcost(products) {
    let total = 0;
    products.forEach((product) => (total += product["RRP (£) inc VAT"]));
    dispatch({
      type: "GET_TOTAL",
      payload: {
        total,
      },
    });
  }

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
  };
  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}
export function useCart() {
  return useContext(cartContext);
}
