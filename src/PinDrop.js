import React from "react";

const PinDrop = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M18 8c0-3.31-2.69-6-6-6S6 4.69 6 8c0 4.5 6 11 6 11s6-6.5 6-11zm-8 0c0-1.1.9-2 2-2s2 .9 2 2-.89 2-2 2c-1.1 0-2-.9-2-2zM5 20v2h14v-2H5z" />
  </svg>
);

PinDrop.displayName = "PinDrop";

PinDrop.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default PinDrop;
