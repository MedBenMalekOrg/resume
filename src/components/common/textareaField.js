import React from "react";
import classnames from "classnames";

const textareaField = ({ name, placeholder, value, error, onChange }) => {
  return (
    <div className="group-val ct-gr">
      <textarea
        className={classnames({
          error: error
        })}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default textareaField;
