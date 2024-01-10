import { Color } from "./Color";


export function Colors({ colorArray }) {
  return (
    <div>
    <h3>Ejercicio List 1</h3>
    <ul>
      {colorArray.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </ul>
    </div>
  );
}
