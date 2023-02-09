import React from "react";
import TaskDate from "./TaskDate";
import classes from "./TaskItem.module.css";

const TaskItem = (props) => {
  return (
    <div className={classes["task-item"]}>
      <div className={classes["task-item__content"]}>
        <div className={classes["task-item__description"]}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
        <TaskDate date={props.date} />
      </div>
      <div className={classes["task-item__status"]}>
        <div className={classes["task-item__priority"]}>Urgent</div>
        <div className={classes["task-item__numberTicket"]}>#TEST-TEST-123</div>
        <div className={classes["task-item__messageCount"]}>123</div>
      </div>
    </div>
  );
};

export default TaskItem;
