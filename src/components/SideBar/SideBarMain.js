import React from 'react'
import HeaderTitle from './HeaderTitle'
import SideBarAccountInfo from './SideBarAccountInfo'
import SideBarNav from './SideBarNav'
import classes from './SideBarMain.module.css';

const SideBarMain = () => {
  return (
    <div className={classes.main}>
        <HeaderTitle />
        <SideBarNav />
        <SideBarAccountInfo/>
    </div>
  )
}

export default SideBarMain