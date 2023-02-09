import React from 'react'
import ScheduledTasks from './ScheduledTasks'
import classes from './ActivityBar.module.css';

const ActivityBar = () => {
  return (
    <div className={classes.bar}>
    <ScheduledTasks/>
    </div>
  )
}

export default ActivityBar