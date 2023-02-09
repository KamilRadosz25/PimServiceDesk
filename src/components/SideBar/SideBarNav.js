import React from "react";
import classes from './SideBarNav.module.css';

const SideBarNav = () => {
  return (
    <div>
      <ul className={classes['siderbarnav-list']}>
        <li><i class="fa-solid fa-box"></i> Przegląd</li>
        <li><i class="fa-solid fa-chart-line"></i>Analiza</li>
        <li><i class="fa-regular fa-comment"></i>Czat - Wiadomości</li>
        <li className={classes['sidebarnav-lastButton']}><i class="fa-solid fa-ticket"></i>Zgłoszenia</li>

      </ul>
    </div>
  );
};

export default SideBarNav;
