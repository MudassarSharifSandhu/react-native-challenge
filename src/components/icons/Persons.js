import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgPersons = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="M5.648 5.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7.648 8H4.913a2 2 0 0 0-1.984 1.752l-.427 3.416a1.333 1.333 0 0 0 1.323 1.499H6.98M15.46 13.168l-.426-3.416A2 2 0 0 0 13.048 8h-1.47a2 2 0 0 0-1.983 1.752l-.427 3.416a1.333 1.333 0 0 0 1.324 1.499h3.645a1.335 1.335 0 0 0 1.323-1.499ZM12.314 5.333a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      fill="#6F6E73"
    />
  </Svg>
);

export default SvgPersons;
