import { useState } from "react";

export function MyContainer({ title, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleToggleCollapse() {
    setCollapsed((t) => !t);
  }

  return (
    <div className="app">
      <div className="app-title">
        {title}
        <button onClick={handleToggleCollapse}>Toggle</button>
      </div>

      {/* No usamos este porque destuye su contenido
       {!collapsed && <div className="app-content">{children}</div>} */}
     
      <div className={!collapsed ? "app-content" : "app-content-hidden"}>
        {children}
      </div>
    </div>
  );
}

// Podemos crear el contenedor collapsable, que muestre y oculte el contenido dependiento del valor del state variable
