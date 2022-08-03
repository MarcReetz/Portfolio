import React from "react";
import styles from "./Nav.module.css"

export default function Nav(prop) {
  return (
    <header className={styles.header}>
      {prop.isVisible && <button className={styles.button} onClick={prop.onClick}><i class="fa-solid fa-bars"></i></button>}
    </header>
  )
}
