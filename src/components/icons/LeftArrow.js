import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLeftArrow = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 13 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="m10.985 3.414-8.607 8.607-1.414-1.414L9.57 2H1.985V0h11v11h-2V3.414Z"
      fill="#fff"
    />
  </Svg>
);

export default SvgLeftArrow;
