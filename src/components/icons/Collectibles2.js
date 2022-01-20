import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg";

const SvgCollectibles2 = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 36 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Circle cx={18.481} cy={17.5} r={17.5} fill="#54AAF9" />
    <G
      clipPath="url(#Collectibles2_svg__a)"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m9.731 14 1.141.913a3.499 3.499 0 0 0 5.246-1.034l2.363-4.254 2.363 4.254a3.5 3.5 0 0 0 5.246 1.033L27.231 14l-1.535 7.674A2.243 2.243 0 0 1 24.5 23.24v0a13.459 13.459 0 0 1-12.038 0v0a2.243 2.243 0 0 1-1.196-1.566L9.73 14Z" />
      <Path d="M14.981 20.125c2.272 1.166 4.728 1.166 7 0" />
    </G>
    <Defs>
      <ClipPath id="Collectibles2_svg__a">
        <Path fill="#fff" transform="translate(7.981 7)" d="M0 0h21v21H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgCollectibles2;
