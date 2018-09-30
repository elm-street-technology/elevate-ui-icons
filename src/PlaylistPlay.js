import React from "react";

const PlaylistPlay = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M19 9H2v2h17V9zm0-4H2v2h17V5zM2 15h13v-2H2v2zm15-2v6l5-3-5-3z" />
  </svg>
);

PlaylistPlay.displayName = "PlaylistPlay";

PlaylistPlay.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default PlaylistPlay;
