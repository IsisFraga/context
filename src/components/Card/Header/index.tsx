export function Header(props) {
  return (
    <button onClick={() => props.setCount(props.count + 1)}>
      aumentar que vem do header
    </button>
  );
}
