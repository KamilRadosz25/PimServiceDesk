import React from 'react'
import HeaderTask from './HeaderTask'
import Tasks from './Tasks'
import classes from './MainSection.module.css';

const MainSection = (props) => {
  return (
    <div className={classes.wrap}>
    <HeaderTask/>
    <Tasks items={props.items}/>
    </div>
  )
}

export default MainSection