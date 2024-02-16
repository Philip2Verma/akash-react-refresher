import React from "react";
import classes from './Users.module.css'

export default function Users(props) {
  const data = props.userData.users;
  console.log(data);
  console.log(typeof data);
  return (
    <div className={classes.userContainer}>
      {data.map((user) => (
        <div key={user.id} className={classes.user}>
          <h1>{user.name}</h1>
          <h1>{user.age}</h1>
          <h1>{user.city}</h1>
        </div>
      ))}
    </div>
  );
}
