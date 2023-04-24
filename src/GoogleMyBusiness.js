import React from "react";

const GoogleMyBusiness = ({ size, color, ...props }) => (
  <svg {...props} viewBox="0 0 32 32" width={size} height={size} fill={color}>
    <path d="M7.28516 2.28503C4.52373 2.28503 2.28516 4.52361 2.28516 7.28504V24.715C2.28516 27.4765 4.52373 29.715 7.28516 29.715H24.7152C27.4766 29.715 29.7152 27.4765 29.7152 24.715V7.28503C29.7152 4.52361 27.4766 2.28503 24.7152 2.28503H7.28516ZM5.87391 8.06476C5.97593 7.66916 6.41207 7.1713 6.81084 6.99508C7.10554 6.86492 7.53801 6.85839 15.9863 6.85684C23.832 6.85543 24.8852 6.86848 25.136 6.97038C25.4886 7.11367 25.8107 7.40595 25.9899 7.74518C26.0653 7.88795 26.4262 9.32303 26.7918 10.9343C27.5282 14.1798 27.5621 14.5214 27.2213 15.2691C27.0132 15.7254 26.5306 16.3373 26.2236 16.5337L25.9918 16.682L25.9916 20.8546C25.9914 24.9467 25.9883 25.0335 25.8303 25.3605C25.6539 25.7255 25.3266 26.031 24.9454 26.1864C24.7444 26.2682 23.1333 26.2863 16.0411 26.2863C8.38528 26.2863 7.34922 26.273 7.0986 26.1711C6.73901 26.025 6.42724 25.7379 6.21718 25.3593C6.05492 25.0667 6.05233 25.0054 6.03266 20.8794L6.01268 16.6963L5.72599 16.4912C5.36336 16.2318 4.9706 15.7024 4.74484 15.1684C4.44976 14.4709 4.49146 14.0776 5.17975 11.0638C5.51745 9.58528 5.82984 8.2357 5.87391 8.06476ZM10.3237 11.3962C10.5524 9.57171 10.754 8.02055 10.7717 7.94913C10.8016 7.82847 10.6875 7.81957 9.15256 7.82224C7.50973 7.82513 7.11995 7.87623 6.97256 8.10814C6.94427 8.15271 6.61351 9.5327 6.23746 11.1748C5.61665 13.8859 5.56129 14.1903 5.63533 14.4856C5.80918 15.1789 6.19926 15.6587 6.85323 15.9836C7.11819 16.1152 7.32665 16.1549 7.7682 16.1574C8.44399 16.1613 8.8892 15.9946 9.31855 15.577C9.85975 15.0505 9.8721 14.9991 10.3237 11.3962ZM15.1618 15.1421C15.4728 14.6947 15.4692 14.0288 15.4692 11.0691V7.81934H13.6553H11.8414L11.4368 11.039C11.0418 14.1813 11.035 14.2683 11.1534 14.6646C11.4807 15.7596 12.7488 16.4191 13.9008 16.0934C14.2456 15.9959 14.4348 15.8787 14.7831 15.5469C14.9442 15.3935 15.0675 15.2779 15.1618 15.1421ZM20.8955 14.4942C20.9423 14.3078 20.8477 13.3305 20.5596 11.027L20.1584 7.81957L18.3476 7.81942L16.5367 7.81934V11.1169C16.5367 14.2311 16.5451 14.4365 16.6889 14.8102C16.869 15.2784 17.3268 15.7558 17.8237 15.9941C18.3172 16.2306 19.1757 16.2257 19.6628 15.9836C20.2963 15.6689 20.7327 15.1415 20.8955 14.4942ZM25.0621 8.23667C25.0095 8.10955 24.8725 7.98243 24.7226 7.92147C24.5359 7.8456 24.0535 7.81934 22.8444 7.81934H21.2175L21.6203 10.9528C21.8418 12.6762 22.0238 14.1894 22.0247 14.3154C22.0257 14.4415 22.1325 14.7509 22.262 15.0031C23.1865 16.8025 25.9101 16.4598 26.3658 14.4868C26.4306 14.2062 26.3612 13.8193 25.795 11.3085C25.4403 9.7362 25.1106 8.35385 25.0621 8.23667ZM15.5645 16.2622C14.3526 17.4264 12.5822 17.5249 11.2051 16.5046C11.0616 16.3983 10.8557 16.1936 10.7477 16.0497L10.5512 15.7883L10.0938 16.2411C9.38564 16.942 8.38459 17.3117 7.48921 17.2029L7.07801 17.153L7.09906 21.0502L7.1201 24.9474L7.29379 25.1162L7.46741 25.2851L15.9098 25.3048C22.2923 25.3197 24.4055 25.303 24.5711 25.2364C24.9945 25.0662 25.0002 25.0089 25.0002 20.9059V17.1523L24.5236 17.2012C23.5308 17.303 22.4497 16.8757 21.7535 16.1065L21.4438 15.7642L21.3133 15.9791C21.1307 16.2797 20.6064 16.6806 20.1022 16.9051C18.8268 17.4731 17.4344 17.2302 16.4414 16.2665L16.0029 15.841L15.5645 16.2622ZM18.3103 20.3439C18.6654 19.6407 19.477 19.0164 20.2228 18.8729C20.7126 18.7786 20.9653 18.7862 21.4577 18.9096C21.8541 19.009 22.636 19.4272 22.6363 19.5402C22.6364 19.562 22.4678 19.7416 22.2617 19.939L21.887 20.2981L21.6344 20.1231C21.2757 19.8747 20.4924 19.8337 20.0756 20.0416C19.3737 20.3917 19.0469 21.0822 19.2163 21.8576C19.3624 22.526 20.0946 23.0964 20.8065 23.0964C21.3421 23.0964 21.9178 22.7753 22.1436 22.3505C22.205 22.2349 22.2552 22.1221 22.2552 22.0997C22.2552 22.0773 21.9121 22.0589 21.4928 22.0589H20.7303V21.5769V21.0948H22.0742H23.4181L23.3831 21.7067C23.3377 22.5002 23.127 22.9752 22.6094 23.4514C22.0751 23.9429 21.6324 24.0985 20.7684 24.0984C20.1851 24.0984 20.0193 24.0692 19.6628 23.9037C19.0405 23.6148 18.6372 23.2353 18.3508 22.6688C18.1203 22.213 18.0998 22.1148 18.0998 21.4667C18.0998 20.8463 18.1252 20.7107 18.3103 20.3439Z" />
  </svg>
);

GoogleMyBusiness.displayName = "GoogleMyBusiness";

GoogleMyBusiness.defaultProps = {
  size: 32,
  color: "currentcolor",
};

export default GoogleMyBusiness;
