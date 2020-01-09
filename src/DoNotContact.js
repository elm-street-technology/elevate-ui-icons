import React from "react";

const DoNotContactIcon = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M15.3,0 L1.7,0 C0.765,0 0.0085,0.751339286 0.0085,1.66964286 L0,11.6875 C0,12.6058036 0.765,13.3571429 1.7,13.3571429 L15.3,13.3571429 C16.235,13.3571429 17,12.6058036 17,11.6875 L17,1.66964286 C17,0.751339286 16.235,0 15.3,0 L15.3,0 Z M15.3,3.33928571 L8.5,7.51339286 L1.7,3.33928571 L1.7,1.66964286 L8.5,5.84375 L15.3,1.66964286 L15.3,3.33928571 L15.3,3.33928571 Z M 4.5 0 A 4.5 4.5 0 0 1 4.5 9 A 4.5 4.5 0 0 1 4.5 0 M 15.5 6 A 5.5 5.5 0 0 1 15.5 17 A 5.5 5.5 0 0 1 15.5 6" />
  </svg>
);

DoNotContactIcon.displayName = "DoNotContactIcon";

DoNotContactIcon.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default DoNotContactIcon;
