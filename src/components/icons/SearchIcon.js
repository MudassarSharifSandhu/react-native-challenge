import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSearchIcon(props) {
  return (
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
        d="M17.481 17.5l-3.738-3.745L17.48 17.5zm-1.667-8.75a7.084 7.084 0 11-14.167 0 7.084 7.084 0 0114.167 0v0z"
        stroke="#6F6E73"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgSearchIcon;
