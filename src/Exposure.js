import React from "react";

const Exposure = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M15 17v2h2v-2h2v-2h-2v-2h-2v2h-2v2h2zm5-15H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM5 5h6v2H5V5zm15 15H4L20 4v16z" />
  </svg>
);

Exposure.displayName = "Exposure";

Exposure.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Exposure;
