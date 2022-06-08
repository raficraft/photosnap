import React, {
  useImperativeHandle,
  useState,
  forwardRef,
  useRef,
} from "react";

export const Checkbox = forwardRef(({ external }, ref) => {
  const [isChecked, setIsChecked] = useState(false);

  const checkBoxRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      checkBoxRef.current.focus();
    },
    get input() {
      return checkBoxRef.current;
    },
    get error() {
      return errorMessage.current;
    },
  }));

  return (
    <div className="custom-checkbox">
      <label htmlFor="check" data-active={isChecked}>
        Monthly
      </label>
      <input
        type="checkbox"
        id="check"
        ref={checkBoxRef}
        defaultChecked={!isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
          external();
        }}
      />
      <label
        htmlFor="check"
        className="fake-box"
        data-testid="fake-box"
        data-ischecked={isChecked}
      ></label>
      <label htmlFor="check" data-active={!isChecked}>
        Yearly
      </label>
    </div>
  );
});
