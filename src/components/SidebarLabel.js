import React from "react";
import SidebarIcon from "./SidebarIcon";

export default function SidebarLabel({ icon, label }) {
  return (
    <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <SidebarIcon type={icon} />
      <span>{label}</span>
    </span>
  );
}
