import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgTopArrow = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 14 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="M1.648 6.667 6.98 1.333l5.333 5.334"
      stroke="#6F6E73"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgTopArrow;
