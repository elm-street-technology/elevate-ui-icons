import React from "react";

const TransferWithinAStation = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M16.49 15.5v-1.75L14 16.25l2.49 2.5V17H22v-1.5z M19.51 19.75H14v1.5h5.51V23L22 20.5 19.51 18z M9.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5.75 8.9L3 23h2.1l1.75-8L9 17v6h2v-7.55L8.95 13.4l.6-3C10.85 12 12.8 13 15 13v-2c-1.85 0-3.45-1-4.35-2.45l-.95-1.6C9.35 6.35 8.7 6 8 6c-.25 0-.5.05-.75.15L2 8.3V13h2V9.65l1.75-.75" />
  </svg>
);

TransferWithinAStation.displayName = "TransferWithinAStation";

TransferWithinAStation.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default TransferWithinAStation;