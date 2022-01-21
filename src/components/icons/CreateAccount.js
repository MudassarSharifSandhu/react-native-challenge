import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SvgCreateAccount = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <G
      clipPath="url(#create-account_svg__a)"
      stroke="#6F6E73"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M11.981 11H8.314m3.667-3.667V11 7.333Zm0 3.667v3.667V11Zm0 0h3.667-3.667ZM11.981 20.167a9.167 9.167 0 1 0 0-18.334 9.167 9.167 0 0 0 0 18.334Z" />
    </G>
    <Defs>
      <ClipPath id="create-account_svg__a">
        <Path fill="#fff" transform="translate(.981)" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgCreateAccount;
