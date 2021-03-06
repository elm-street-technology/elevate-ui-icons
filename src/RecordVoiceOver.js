import React from "react";

const RecordVoiceOver = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="M 9 5 A 4 4 0 0 1 9 13 A 4 4 0 0 1 9 5 M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z" />
  </svg>
);

RecordVoiceOver.displayName = "RecordVoiceOver";

RecordVoiceOver.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default RecordVoiceOver;
