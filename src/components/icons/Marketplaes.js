import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgMarketplaes = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Circle cx={17.5} cy={17.5} r={17.5} fill="#34AE91" />
    <Path
      d="M10.48 15.61A1.75 1.75 0 0 1 12.225 14h10.55a1.75 1.75 0 0 1 1.745 1.61l.703 8.75a1.75 1.75 0 0 1-1.744 1.89H11.52a1.75 1.75 0 0 1-1.744-1.89l.703-8.75v0Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M21 16.625V12.25a3.5 3.5 0 1 0-7 0v4.375"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgMarketplaes;
