import React from "react";
import classes from "./HeaderTask.module.css";

const HeaderTask = () => {
  return (
    <div className={classes["header-task"]}>
      <div className={classes["header-task__header"]}>
        <h2>Zgłoszenia</h2>
        <button className={classes.newTicket}>Nowe Zgłoszenie</button>
      </div>
      <div className={classes["header-task__nav"]}>
        <ul className={classes["header-main__nav__list"]}>
          <li>Nie Przypisane</li>
          <li>Przypisane</li>
          <li>Wszystkie zgłoszenia</li>
          <li>Archiwum</li>
        </ul>
        <form>
          <input
            type="text"
            size="6"
            value="search"
            className={classes["header-main__nav__search"]}
          ></input>
        </form>
        <button className={classes["header-main__filter"]}>
          Filter <i class="fa-solid fa-arrow-down-wide-short fa-xs"></i></button>
      </div>
    </div>
  );
};
//Dodać ikonke do filter.
export default HeaderTask;
