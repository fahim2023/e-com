export function cartReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return { ...state, cartList: payload.product };
    case "REMOVE_FROM_CART":
      return { ...state, cartList: payload.product };
    case "GET_TOTAL":
      return { ...state, total: payload.total };
    default:
      throw new Error("no case found");
  }
}
