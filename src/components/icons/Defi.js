import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgDefi = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Circle cx={17.5} cy={17.5} r={17.5} fill="#F98F54" />
    <Path
      d="M25.375 21v-7a1.75 1.75 0 0 0-.875-1.514l-6.125-3.5a1.75 1.75 0 0 0-1.75 0l-6.125 3.5A1.75 1.75 0 0 0 9.625 14v7a1.75 1.75 0 0 0 .875 1.514l6.125 3.5a1.75 1.75 0 0 0 1.75 0l6.125-3.5A1.75 1.75 0 0 0 25.375 21Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m9.861 13.09 7.639 4.419 7.639-4.419M17.5 26.32V17.5"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgDefi;
