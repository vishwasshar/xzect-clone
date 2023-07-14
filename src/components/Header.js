import React from "react";
import classes from "./Header.module.css";
import logo from "../xzect-logo.svg";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} width={40} height={40} />
        <h2 style={{ fontSize: "2.3rem", fontWeight: "400" }}>Xzect</h2>
      </div>
      <button className={classes.button}>
        <HiOutlineMenuAlt1 size={40} color="white" />
      </button>
    </header>
  );
};

export default Header;
