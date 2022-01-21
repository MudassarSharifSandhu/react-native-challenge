import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgHomeButton = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="M18.314 16.667v-6.522a3.331 3.331 0 0 0-1.044-2.423l-6.144-5.807a1.667 1.667 0 0 0-2.29 0L2.692 7.722a3.333 3.333 0 0 0-1.044 2.423v6.522a1.667 1.667 0 0 0 1.666 1.666h13.334a1.667 1.667 0 0 0 1.666-1.666Z"
      stroke="#6F6E73"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgHomeButton;
