import React from "react";

const AirlineSeatLegroomExtra = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M4 12V3H2v9c0 2.76 2.24 5 5 5h6v-2H7c-1.66 0-3-1.34-3-3zm18.83 5.24c-.38-.72-1.29-.97-2.03-.63l-1.09.5-3.41-6.98c-.34-.68-1.03-1.12-1.79-1.12L11 9V3H5v8c0 1.66 1.34 3 3 3h7l3.41 7 3.72-1.7c.77-.36 1.1-1.3.7-2.06z" />
  </svg>
);

AirlineSeatLegroomExtra.displayName = "AirlineSeatLegroomExtra";

AirlineSeatLegroomExtra.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default AirlineSeatLegroomExtra;
