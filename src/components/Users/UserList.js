import React, { useState } from "react";
import classes from "./UserList.module.css";
import Card from "../UI/Card";
import UsersItem from "./UsersItem";
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <UsersItem key={user.id} id={user.id} onDelete={props.onDeleteItem}>
            {user.firstName} {user.lastName}
          </UsersItem>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
