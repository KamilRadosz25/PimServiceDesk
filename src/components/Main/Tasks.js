import React from 'react'

import TaskItem from './TaskItem';
import classes from './Tasks.module.css';

const Tasks = (props) => {
  return (
    <div className={classes.tasks}>
    <TaskItem
        title={props.items[0].title}
        description={props.items[0].description}
        date={props.items[0].date}
      ></TaskItem>
      <TaskItem
        title={props.items[1].title}
        description={props.items[1].description}
        date={props.items[1].date}
      ></TaskItem>
      <TaskItem
        title={props.items[2].title}
        description={props.items[2].description}
        date={props.items[2].date}
      ></TaskItem>
      </div>
  )
}

export default Tasks