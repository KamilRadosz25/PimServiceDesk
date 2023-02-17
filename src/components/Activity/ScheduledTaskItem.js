import React from "react";
import Avatarimage from "../../icons/default_avatar.png";
import classes from "./ScheduledTaskItem.module.css";

const ScheduledTaskItem = (props) => {
  const { name, date } = props;
  return (
    <div className={classes.taskItem}>
      <img
        className={classes.taskItem_img}
        src={Avatarimage}
        alt="Service technician IT"
      />
      <div>
        <p>
          <span>{name}</span> zaplanował spotkanie dla <span> MP Balicka</span>
        </p>
        <div> {date}</div>
      </div>
    </div>
  );
};

export default ScheduledTaskItem;
