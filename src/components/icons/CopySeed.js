import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCopySeed = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="M8.981 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L17.064 2.57A2 2 0 0 0 15.666 2h-4.685a2 2 0 0 0-2 2v0Z"
      stroke="#885FFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.981 18v2a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"
      stroke="#885FFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgCopySeed;
