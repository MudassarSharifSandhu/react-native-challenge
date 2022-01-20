import * as React from "react";
import Svg, { Rect } from "react-native-svg";

const SvgCircularImage = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 36 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Rect
      x={-25.263}
      y={10.351}
      width={33.143}
      height={32}
      rx={6}
      transform="rotate(-34 -25.263 10.35)"
      fill="#39C0BA"
    />
    <Rect
      x={6.175}
      y={20.171}
      width={33.143}
      height={32}
      rx={6}
      transform="rotate(-79 6.175 20.171)"
      fill="#FFCE20"
    />
    <Rect
      x={26.844}
      y={48.771}
      width={33.143}
      height={32}
      rx={6}
      transform="rotate(-112 26.844 48.771)"
      fill="#BB85FF"
    />
    <Rect
      x={17.703}
      y={53.951}
      width={33.143}
      height={32}
      rx={6}
      transform="rotate(-154 17.703 53.951)"
      fill="#FF8B20"
    />
  </Svg>
);

export default SvgCircularImage;
