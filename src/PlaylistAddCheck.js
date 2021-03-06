import React from "react";

const PlaylistAddCheck = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zM2 16h8v-2H2v2zm19.5-4.5L23 13l-6.99 7-4.51-4.5L13 14l3.01 3 5.49-5.5z" />
  </svg>
);

PlaylistAddCheck.displayName = "PlaylistAddCheck";

PlaylistAddCheck.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default PlaylistAddCheck;
