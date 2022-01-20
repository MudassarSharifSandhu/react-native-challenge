import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgExchanges = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Circle cx={17.5} cy={17.5} r={17.5} fill="#587BE0" />
    <Path
      d="m10 20 4-4 4 4 6-6"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 14h3v3"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgExchanges;
