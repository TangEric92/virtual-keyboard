import React from "react";

function Key(props) {
  const { value, onClick, upperCase, isLockUpperCase } = props;
  const formatedValue = upperCase ? value.toUpperCase() : value;

  return (
    <div
      className="key"
      style={{ border: isLockUpperCase ? "red solid 10px" : "" }}
      onClick={() => onClick(formatedValue)}
    >
      {formatedValue}
    </div>
  );
}

export default Key;
