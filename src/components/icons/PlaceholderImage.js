import * as React from "react";
import Svg, { Rect } from "react-native-svg";

const SvgPlaceholderImage = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Rect width={60} height={60} rx={10} fill="#DFDFE0" />
  </Svg>
);

export default SvgPlaceholderImage;
