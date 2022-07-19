import React from "react";
import style from "./SkillIcon.module.css"
import {vars} from "./../../variables"

export default function SkillIcon (props) {

  let colorStyle = "";

  switch (props.icon.relations) {
    case 1:
      colorStyle = vars.color.selectedTechColor;
      break;
    case 2:
      colorStyle = vars.color.highRelationTechColor;
      break;
    case 3:
      colorStyle =vars.color.mediumRelationTechColor;
      break;
    default:
      colorStyle = "";
  }

  const classes = "fa-brands " + props.icon.iconClass + " " + style.icon + " ";
  const staticStyle = {
    color: colorStyle
  }

  return(
    <button className={style.button} onClick={props.onClick}>   
      <i className={classes} style={staticStyle}/>
    </button>
  )
}