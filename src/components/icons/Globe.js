import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgGlobe = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 23 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="M11.981 20.167a9.167 9.167 0 1 0 0-18.334 9.167 9.167 0 0 0 0 18.334Z"
      stroke="#587BE0"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.314 11c0 5.063 1.642 9.167 3.667 9.167s3.667-4.104 3.667-9.167-1.642-9.167-3.667-9.167S8.314 5.937 8.314 11ZM2.814 11h18.334"
      stroke="#587BE0"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgGlobe;
