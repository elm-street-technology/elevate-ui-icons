import React from "react";

const LinkedCamera = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M 12 10.8 A 3.2 3.2 0 0 1 12 17.2 A 3.2 3.2 0 0 1 12 10.8 M 12 9 A 5 5 0 0 0 12 19 A 5 5 0 0 0 12 9 M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6v1.33M16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33V6 M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9h-5zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
  </svg>
);

LinkedCamera.displayName = "LinkedCamera";

LinkedCamera.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default LinkedCamera;
