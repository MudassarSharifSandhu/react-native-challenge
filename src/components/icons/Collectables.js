import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgCollectables = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 21 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="m1.731 6 1.141.913a3.5 3.5 0 0 0 5.246-1.034l2.363-4.254 2.363 4.254a3.5 3.5 0 0 0 5.246 1.033L19.231 6l-1.535 7.674A2.243 2.243 0 0 1 16.5 15.24v0a13.459 13.459 0 0 1-12.038 0v0a2.243 2.243 0 0 1-1.196-1.566L1.73 6Z"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgCollectables;
