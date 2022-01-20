import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSearchIcon = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 19 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="m17.481 17.5-3.738-3.745L17.48 17.5Zm-1.667-8.75a7.084 7.084 0 1 1-14.167 0 7.084 7.084 0 0 1 14.167 0v0Z"
      stroke="#6F6E73"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgSearchIcon;
