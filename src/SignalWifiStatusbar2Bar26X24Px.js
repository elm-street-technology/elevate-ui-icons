import React from "react";

const SignalWifiStatusbar2Bar26X24Px = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 26 24" width={size} height={size} fill={color}>
    <path d="M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z M13.01 21.99l7.54-9.4C20.26 12.38 17.36 10 13 10c-4.36 0-7.26 2.38-7.55 2.59l7.54 9.4h.02z" />
  </svg>
);

SignalWifiStatusbar2Bar26X24Px.displayName = "SignalWifiStatusbar2Bar26X24Px";

SignalWifiStatusbar2Bar26X24Px.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default SignalWifiStatusbar2Bar26X24Px;
