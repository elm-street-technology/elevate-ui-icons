import React from "react";

const BorderColor = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96c.39-.39.39-1.02 0-1.41L18.37.29c-.39-.39-1.02-.39-1.41 0L15 2.25 18.75 6l1.96-1.96z M0 20h24v4H0z" />
  </svg>
);

BorderColor.displayName = "BorderColor";

BorderColor.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default BorderColor;
