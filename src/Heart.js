import React from "react";

const Heart = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path
      fill="#b3bac1"
      d="M20.08,12.49a4.87,4.87,0,0,0,1.54-3.63,4.9,4.9,0,0,0-1.54-3.63,5,5,0,0,0-3.53-1.5A5.06,5.06,0,0,0,13,5.06L12,5.92l-.95-.86a5.06,5.06,0,0,0-3.6-1.33,5,5,0,0,0-3.53,1.5A4.91,4.91,0,0,0,2.37,8.86a4.88,4.88,0,0,0,1.55,3.63L11.53,20a.55.55,0,0,0,.94,0Z"
    />
    <path d="M4.44,8.73A2.8,2.8,0,0,1,5.3,6.67a2.82,2.82,0,0,1,2.06-.86.31.31,0,0,1,.34.35.3.3,0,0,1-.34.34,2.2,2.2,0,0,0-1.57.65,2.11,2.11,0,0,0-.67,1.58.31.31,0,0,1-.34.35A.31.31,0,0,1,4.44,8.73Z" />
    <path d="M21.07,4.27a6.21,6.21,0,0,0-4.49-1.89A6.41,6.41,0,0,0,12,4.09,6.41,6.41,0,0,0,7.42,2.38,6.21,6.21,0,0,0,2.93,4.27,6.29,6.29,0,0,0,1,8.89H1A6.26,6.26,0,0,0,2.93,13.5Q10.51,21,10.54,21a2.05,2.05,0,0,0,2.92,0l7.61-7.52A6.26,6.26,0,0,0,23,8.89,6.29,6.29,0,0,0,21.07,4.27Zm-1,8.22L12.47,20a.55.55,0,0,1-.94,0L3.92,12.49A4.87,4.87,0,0,1,2.38,8.86,4.9,4.9,0,0,1,3.92,5.23a5,5,0,0,1,3.53-1.5,5.06,5.06,0,0,1,3.6,1.33l.95.86L13,5.06a5.06,5.06,0,0,1,3.6-1.33,5,5,0,0,1,3.53,1.5,4.9,4.9,0,0,1,1.54,3.63A4.87,4.87,0,0,1,20.08,12.49Z" />
  </svg>
);

Heart.displayName = "Heart";

Heart.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default Heart;
