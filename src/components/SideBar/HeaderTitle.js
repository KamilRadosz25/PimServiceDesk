import React from "react";
import logoImage from "../../icons/logo.png";
import classes from "./HeaderTitle.module.css";

const HeaderTitle = () => {
  return (
    <div className={classes.header}>
      <div className={classes["header-logo"]}>
        <img src={logoImage} alt="logo Pim" />
      </div>
      <div className={classes["header-title"]}>
        <h2>Servicedesk</h2>
      </div>
    </div>
  );
};

export default HeaderTitle;
