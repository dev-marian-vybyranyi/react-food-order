import { createContext, useReducer, useState } from "react";

const CardContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cardReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];

      const updatedItem = {
        ...existingItem,
        quantity: state.items[existingCartItemIndex].quantity + 1,
      };

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    return state;
  }

  return state;
}

export function CardContextProvider({ children }) {
  useReducer(cardReducer, { items: [] });
  return <CardContext>{children}</CardContext>;
}

export default CardContext;
