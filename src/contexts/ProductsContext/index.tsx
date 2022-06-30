import { useState, createContext, useContext } from "react";

export const ProductsContext = createContext(null);

export function ProductsProvider(props) {
  const [listOfProducts, setListOfProducts] = useState();

  return (
    <ProductsContext.Provider
      value={{
        listOfProducts,
        setListOfProducts,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}

export const useProductsContext = () => {
  const contextHook = useContext(ProductsContext);
  if (!contextHook) {
    throw new Error("algo deu errado!");
  }
  return contextHook;
};
