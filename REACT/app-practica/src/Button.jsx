//custom component, empieza con upper case

export function Button({ label, onclick }) {
  return <button onClick={onclick}>{label}</button>;
}
