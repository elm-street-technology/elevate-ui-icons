import React from "react";

const Audiotrack = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3h-7z" />
  </svg>
);

Audiotrack.displayName = "Audiotrack";

Audiotrack.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Audiotrack;
