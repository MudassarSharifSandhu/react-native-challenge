import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgDropDown = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 11 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="M9.791 0H1.96a1 1 0 0 0-.805 1.593L5.07 6.907a1 1 0 0 0 1.61 0l3.916-5.314A1 1 0 0 0 9.79 0Z"
      fill="#C4C4C4"
    />
  </Svg>
);

export default SvgDropDown;
