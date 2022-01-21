import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

const SvgImportAccount = (props) => (
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
      clipPath="url(#import-account_svg__a)"
      stroke="#6F6E73"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="m11.981 13.75 3.667-3.667M11.98 13.75v-11 11Zm0 0-3.667-3.667 3.667 3.667ZM2.814 15.583l.57 2.278a1.833 1.833 0 0 0 1.778 1.389H18.8a1.834 1.834 0 0 0 1.778-1.389l.57-2.278" />
    </G>
    <Defs>
      <ClipPath id="import-account_svg__a">
        <Path fill="#fff" transform="translate(.981)" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgImportAccount;
