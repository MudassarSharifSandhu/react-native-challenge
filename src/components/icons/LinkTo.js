import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgLinkTo = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="m11.106 7.875 5.625-5.625M12.981 2.25h3.75V6M16.731 10.5v3.75a1.5 1.5 0 0 1-1.5 1.5h-10.5a1.5 1.5 0 0 1-1.5-1.5V3.75a1.5 1.5 0 0 1 1.5-1.5h3.75"
      stroke="#587BE0"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SvgLinkTo;
