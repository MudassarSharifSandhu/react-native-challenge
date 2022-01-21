import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgBackButton = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="M11.064 4.583 4.648 11l6.416 6.417M4.648 11h14.666"
      stroke="#6F6E73"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgBackButton;
