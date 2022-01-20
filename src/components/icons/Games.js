import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

const SvgGames = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Circle cx={17.5} cy={17.5} r={17.5} fill="#414047" />
    <Path
      d="m14.875 20.125-2.597 2.597a2.066 2.066 0 0 1-3.528-1.461v-1.136l1.187-5.936a3.5 3.5 0 0 1 3.432-2.814h8.262a3.5 3.5 0 0 1 3.432 2.814l1.187 5.936v1.135a2.067 2.067 0 0 1-3.528 1.461l-2.597-2.596h-5.25Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="m14.875 11.375.875 1.75h3.5l.875-1.75"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgGames;
