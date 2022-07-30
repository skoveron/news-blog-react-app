import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={styles.nav}>
      <Link to="/">Blogologo</Link>
      <Search />
      <Link to="/auth">Auth</Link>
    </div>
  );
};

export default Navigation;
