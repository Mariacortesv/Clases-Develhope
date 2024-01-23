import { Link, Outlet } from "react-router-dom";

export function Catalogue() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        <li>
          <Link to="/products/guitar"> Guitar </Link>
        </li>
        <li>
          <Link to="/products/radio"> Radio Gris </Link>
        </li>
        <li>
          <Link to="/products/radio2"> Radio Azul</Link>
        </li>
        <li>
          <Link to="/products/radio3"> Radio Negra</Link>
        </li>
        <li>
          <Link to="/products/radio4"> Radio Verde </Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}

// Al dar click en el producto navegare a una sub ruta del producto, se renderia sin ir a otra pagina
