import React from "react";

import "./UsersItem.css";

const UsersItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return <li onClick={deleteHandler}>{props.children}</li>;
};
export default UsersItem;
