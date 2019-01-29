import React from "react";

const FavoriteListing = ({ size, color, ...rest }) => (
  <svg
    width={size}
    height={size}
    fill={color}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 52 52"
    {...rest}
  >
    <path d="M49 23.872c-.2 0-.4-.06-.57-.18L25.947 8.09 3.572 23.692A1 1 0 0 1 2 22.872v-4a1 1 0 0 1 .428-.82l22.946-16a1 1 0 0 1 1.142-.002l23.054 16a1 1 0 0 1 .43.822v4a1 1 0 0 1-1 1zm-23.054-18c.199 0 .398.06.57.178L48 20.96v-1.565L25.947 4.09 4 19.393v1.562L25.374 6.051a.998.998 0 0 1 .572-.18z" />
    <path d="M49 50.128H3a1 1 0 0 1-1-1v-28a1 1 0 0 1 2 0v27h44v-27a1 1 0 0 1 2 0v28a1 1 0 0 1-1 1z" />
    <path d="M35.281 32.102a1 1 0 0 1-.74-1.672l.674-.743a1 1 0 0 1 1.539 1.274c-.242.321-.51.618-.8.88a.998.998 0 0 1-.673.26z" />
    <path d="M26 40.953a.999.999 0 0 1-.69-.277L16 31.792l-.685-.742a2.195 2.195 0 0 1-.074-.09A6.156 6.156 0 0 1 14 27.252c0-3.473 2.916-6.3 6.5-6.3 1.364 0 2.67.405 3.78 1.171a6.421 6.421 0 0 1 1.722 1.78 6.4 6.4 0 0 1 1.726-1.772 6.55 6.55 0 0 1 3.772-1.178c3.584 0 6.5 2.826 6.5 6.3a6.097 6.097 0 0 1-1.232 3.695.966.966 0 0 1-.105.118l-.642.708-9.331 8.902a.997.997 0 0 1-.69.277zm-5.5-18c-2.481 0-4.5 1.928-4.5 4.3 0 .9.288 1.764.833 2.496l.594.642L26 38.571l8.591-8.193.624-.69c.498-.665.785-1.526.785-2.436 0-2.37-2.019-4.3-4.5-4.3-.954 0-1.863.284-2.63.82-1.173.811-1.87 2.111-1.87 3.48a1 1 0 0 1-2 0c0-1.37-.696-2.674-1.86-3.485a4.618 4.618 0 0 0-2.64-.814z" />
  </svg>
);

FavoriteListing.displayName = "FavoriteListing";

FavoriteListing.defaultProps = {
  size: 24,
  color: "currentColor",
};

export default FavoriteListing;