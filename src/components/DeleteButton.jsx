import React from "react";

const DeleteButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="button clear"
  >
    Delete All Tasks
  </button>
);

export default DeleteButton;