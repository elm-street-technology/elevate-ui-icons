import React from "react";

const DoNotContact = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" width={size} height={size} fill={color}>
    <path d="m 3.3233699,4.0605469 c -0.9349998,0 -1.6914062,0.7516182 -1.6914062,1.6699219 l -0.00781,10.0175782 c 0,0.918304 0.7642189,1.669922 1.6992187,1.669922 h 8.6289066 c -0.215516,-0.595627 -0.326523,-1.224006 -0.328125,-1.857422 0,-3.037566 2.462434,-5.5 5.5,-5.5 0.507518,0.0021 1.012307,0.07437 1.5,0.214844 V 5.7304688 c 0,-0.9183038 -0.764219,-1.6699219 -1.699219,-1.6699219 z m 0,1.6699219 6.8007811,4.1738281 6.800781,-4.1738281 V 7.4003906 L 10.124151,11.574219 3.3233699,7.4003906 Z M 17.637015,10.938646 c -2.798726,3.28e-4 -5.067157,2.269634 -5.066406,5.068359 3.27e-4,2.797963 2.268442,5.066078 5.066406,5.066406 2.797964,-3.28e-4 5.06608,-2.268443 5.066407,-5.066406 7.51e-4,-2.798725 -2.267681,-5.068031 -5.066407,-5.068359 z m 0,1.068359 c 0.831339,0.0011 1.641679,0.261203 2.31836,0.744141 l -5.574219,5.572265 c -0.482552,-0.676138 -0.742634,-1.485734 -0.744141,-2.316406 0,-2.209139 1.790861,-4 4,-4 z m 3.253907,1.683594 c 0.483246,0.675905 0.744015,1.485521 0.746093,2.316406 0,2.209139 -1.790861,4 -4,4 -0.831552,-0.0017 -1.641911,-0.262462 -2.318359,-0.746094 z" />
  </svg>
);

DoNotContact.displayName = "DoNotContact";

DoNotContact.defaultProps = {
  size: 24,
  color: "currentcolor",
};

export default DoNotContact;
