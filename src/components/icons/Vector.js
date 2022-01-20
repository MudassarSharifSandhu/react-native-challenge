import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgVector = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 9 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="M8 9.625V5.25a3.5 3.5 0 1 0-7 0v4.375"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgVector;
