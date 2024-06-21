import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <h4 className={styles.navHeader}>Demo App</h4>
      </div>
      <div className={styles.navlinks}>
        <Link to="/">Login</Link>
        <Link to="/table">Table</Link>
        <Link to="/forms">Forms</Link>
        <Link to="/charts">Charts</Link>
      </div>
    </nav>
  );
}
