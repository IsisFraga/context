import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider(props) {
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const contextHook = useContext(CartContext);

  if (!contextHook) {
    throw new Error("algo deu errado");
  }
  return contextHook;
};
