import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgChevronRight(props) {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 8 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className=""
      {...props}
    >
      <Path
        d="M1.333 1.667L6.667 7l-5.334 5.333"
        stroke="#6F6E73"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgChevronRight;
