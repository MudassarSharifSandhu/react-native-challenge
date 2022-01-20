import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgNotification = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="m14.762 5.42-1.588-.003c-3.623-.009-6.768 2.934-6.793 6.5v4.106c0 .855-.108 1.69-.575 2.402l-.31.475c-.474.72.035 1.683.885 1.683h15.2c.85 0 1.358-.964.886-1.683l-.311-.475c-.466-.711-.575-1.548-.575-2.404v-4.103c-.044-3.567-3.196-6.49-6.819-6.498Z"
      fill="#BEBEC2"
    />
    <Path
      d="M17.231 20.583a3.25 3.25 0 0 1-6.5 0M13.98 2.167a2.167 2.167 0 0 1 2.168 2.166v1.084h-4.334V4.333a2.166 2.166 0 0 1 2.167-2.166Z"
      fill="#6F6E73"
    />
    <Circle cx={20.481} cy={9.75} r={3.75} fill="#DD736D" stroke="#F5F5F5" />
  </Svg>
);

export default SvgNotification;
