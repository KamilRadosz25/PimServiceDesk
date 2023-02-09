import React from "react";
import classes from "./ScheduledTasks.module.css";
import ScheduledTaskItem from "./ScheduledTaskItem";

const ScheduledTasks = () => {
  return(
  <div className={classes.main}>
    <h3>Zaplanowane zadania</h3>
    <ScheduledTaskItem />
    <ScheduledTaskItem />
    <ScheduledTaskItem />
    <ScheduledTaskItem />
    <ScheduledTaskItem />
    <button className={classes.scheduledTask_extend}>Pokaż więcej</button>
  </div>
  )

};

export default ScheduledTasks;
