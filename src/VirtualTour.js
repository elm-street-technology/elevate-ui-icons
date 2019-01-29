import React from "react";

const VirtualTour = ({ size, color, ...rest }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    {...rest}
  >
    <path d="M49 39.5H3a1 1 0 0 1-1-1v-33a1 1 0 0 1 1-1h46a1 1 0 0 1 1 1v33a1 1 0 0 1-1 1zm-45-2h44v-31H4v31z" />
    <path d="M34 47.5H18a1 1 0 0 1-1-1v-1.739a1 1 0 0 1 .293-.707l6.262-6.261a1 1 0 0 1 .707-.293h3.477a1 1 0 0 1 .707.293l6.261 6.261a1 1 0 0 1 .293.707V46.5a1 1 0 0 1-1 1zm-15-2h14v-.325L27.325 39.5h-2.65L19 45.175v.325zM26 35.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm0-2.001v.001-.001zM49 29.5H3a1 1 0 1 1 0-2h46a1 1 0 1 1 0 2zM33 25.5H19a1 1 0 0 1-1-1v-11a1 1 0 1 1 2 0v10h12v-10a1 1 0 1 1 2 0v11a1 1 0 0 1-1 1z" />
    <path d="M35.999 15.5a.995.995 0 0 1-.446-.105L26 10.618l-9.553 4.777a1 1 0 0 1-.894-1.79l10-5c.281-.14.613-.14.894 0l10 5A1 1 0 0 1 36 15.5z" />
  </svg>
);

VirtualTour.displayName = "VirtualTour";

VirtualTour.defaultProps = {
  size: 24,
  color: "currentColor",
};

export default VirtualTour;
