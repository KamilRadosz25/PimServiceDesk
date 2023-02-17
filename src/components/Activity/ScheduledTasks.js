import React from "react";
import classes from "./ScheduledTasks.module.css";
import ScheduledTaskItem from "./ScheduledTaskItem";

const plannedTaskList = [
  {
    id: 1,
    name: "Adam Nowak",
    date: "1 sty. 2023",
  },
  {
    id: 2,
    name: "Domino Abrigado",
    date: "1 sty. 2023",
  },
  {
    id: 3,
    name: "Kamil R",
    date: "1 sty. 2023",
  },
  {
    id: 4,
    name: "Pawel Fullstack",
    date: "1 sty. 2023",
  },
  {
    id: 5,
    name: "Karol .net Dev",
    date: "4 sty. 2024",
  },
];

const ScheduledTasks = () => {
  return (
    <div className={classes.main}>
      <h3>Zaplanowane zadania</h3>
      {plannedTaskList.map((plannedTask) => {
        return <ScheduledTaskItem {...plannedTask} key={plannedTask.id} />;
      })}
      <button className={classes.scheduledTask_extend}>Pokaż więcej</button>
    </div>
  );
};

export default ScheduledTasks;