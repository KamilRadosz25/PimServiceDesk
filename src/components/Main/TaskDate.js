import React from "react";
import classes from './TaskDate.module.css';

const TaskDate = (props) => {
  const month = props.date.toLocaleString("pl-PL", { month: "short" });
  const day = props.date.toLocaleString("pl-PL", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className={classes['task-item__date']}>
      <div>{day}.</div>
      <div>{month}.</div>
      <div>{year}</div>
    </div>
  );
};

export default TaskDate;
