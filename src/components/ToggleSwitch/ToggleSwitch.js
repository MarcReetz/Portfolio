import React, { useState } from "react";
import style from "./ToggleSwitch.module.css";

export default function ToggleSwitch(props) {
  return (
    <label className={style.toggleSwitch}>
      <input type="checkbox" checked={props.isGerman} onChange={props.onChange} />
      <span className={style.switch} />
    </label>
  );
}
