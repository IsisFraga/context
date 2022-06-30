import { useContext } from "react";
import { CountContext } from "../../App";
import { Header } from "./Header";

export function Card() {
  const props = useContext(CountContext);
  console.log("teste", props);
  return (
    <>
      <button onClick={() => props.setCount(props.count + 1)}>
        {" "}
        aumentar que vem do card
      </button>
      <Header
        setCount={(otherCount) => props.setCount(otherCount)}
        count={props.count}
      />
    </>
  );
}
