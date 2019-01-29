import React from "react";

const Calculator = ({ size, color, ...rest }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    {...rest}
  >
    <path d="M47 50H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h42a1 1 0 0 1 1 1v46a1 1 0 0 1-1 1zM6 48h40V4H6v44z" />
    <path d="M43 18H9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm-33-2h32V8H10v8zM16 25h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM29 25h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM42.001 25h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM16 31h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM29 31h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM42.001 31h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM16 37h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM29 37h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM42.001 37h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM16 43h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM29 43h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zM42.001 43h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z" />
  </svg>
);

Calculator.displayName = "Calculator";

Calculator.defaultProps = {
  size: 24,
  color: "currentColor",
};

export default Calculator;
