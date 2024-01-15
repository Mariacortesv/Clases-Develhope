import { useState } from "react";

export function Container({ title, subtitle, children }) {
  const [collapsed, setCollapsed] = useState(false);

  function handleCollapse() {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  }

  return (
    <div className="container">
      <div className="container-title">
        {title} {subtitle}
        <button onClick={handleCollapse}>Show</button>
      </div>

      <div className={!collapsed ? "container-contenido" : "container-contenido-hidden"}>
        {children}
      </div>
    </div>
  );
}
