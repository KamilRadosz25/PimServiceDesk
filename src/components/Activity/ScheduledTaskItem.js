import React from 'react';
import Avatarimage from '../../icons/default_avatar.png';
import classes from './ScheduledTaskItem.module.css';

const ScheduledTaskItem = () => {
  return (
    <div className={classes.taskItem}>
        <img src={Avatarimage} alt="Service technician IT" />
        <div>
        <p>
        <span>Adam Nowak</span> zaplanował spotkanie dla <span> MP Balicka</span>
        </p>
        <div> 1 sty. 2023</div>
        </div>
    </div>
  )
}

export default ScheduledTaskItem