import React from "react";
import classnames from "classnames";

const textField = ({ name, placeholder, value, error, type, onChange }) => {
  return (
    <div className="group-val">
      <input
        className={classnames({
          error: error
        })}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default textField;
