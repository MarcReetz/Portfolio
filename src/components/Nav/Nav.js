import React from "react";
import styles from "./Nav.module.css"

export default function Nav() {
  return (
    <header className={styles.header}>
      <button className={styles.button}><i class="fa-solid fa-bars"></i></button>
    </header>
  )
}
