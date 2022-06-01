import React, { useState } from "react";

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="custom-checkbox">
      <label
        htmlFor="check"
        onClick={() => {
          setIsChecked(false);
        }}
        data-active={!isChecked}
      >
        Monthly
      </label>
      <input type="checkbox" id="check" />
      <span
        className="fake-box"
        data-testid="fake-box"
        data-ischecked={isChecked}
        onClick={() => {
          setIsChecked(!isChecked);
        }}
      ></span>
      <label
        htmlFor="check"
        onClick={() => {
          setIsChecked(true);
        }}
        data-active={isChecked}
      >
        Yearly
      </label>
    </div>
  );
}
