import React, { useState } from "react";
import style from "./ToggleSwitch.module.css";

export default function ToggleSwitch() {
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);
  return (
    <label className={style.toggleSwitch}>
      <input type="checkbox" checked={isToggled} onChange={onToggle} />
      <span className={style.switch} />
    </label>
  );
}
