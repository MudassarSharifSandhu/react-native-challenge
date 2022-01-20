import * as React from "react";
import Svg, { Circle, G, Path, Defs, ClipPath } from "react-native-svg";

const SvgUtilities = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 36 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Circle cx={18.481} cy={17.5} r={17.5} fill="#885FFF" />
    <G clipPath="url(#Utilities_svg__a)">
      <Path
        d="M12.736 16.113a4.359 4.359 0 1 0 0-8.717 4.359 4.359 0 0 0 0 8.717Z"
        fill="#fff"
      />
    </G>
    <G clipPath="url(#Utilities_svg__b)">
      <Path
        d="M23.547 8.529a.793.793 0 0 1 1.359 0l3.355 5.592a.792.792 0 0 1-.68 1.2h-6.71a.793.793 0 0 1-.68-1.2l3.356-5.592Z"
        fill="#fff"
      />
    </G>
    <G clipPath="url(#Utilities_svg__c)">
      <Path
        d="M27.396 19.283h-6.34a.792.792 0 0 0-.792.793v6.34c0 .437.355.791.792.791h6.34a.792.792 0 0 0 .793-.792v-6.34a.792.792 0 0 0-.793-.792Z"
        fill="#fff"
      />
      <G clipPath="url(#Utilities_svg__d)">
        <Path
          d="M23.675 19.511a.78.78 0 0 1 1.102 0l3.183 3.184a.78.78 0 0 1 0 1.101l-3.183 3.183a.779.779 0 0 1-1.102 0l-3.183-3.183a.78.78 0 0 1 0-1.101l3.183-3.184Z"
          fill="#fff"
        />
      </G>
    </G>
    <Path
      d="M12.185 19.511a.78.78 0 0 1 1.101 0l3.184 3.184a.779.779 0 0 1 0 1.101l-3.184 3.183a.778.778 0 0 1-1.101 0l-3.183-3.183a.779.779 0 0 1 0-1.101l3.183-3.184Z"
      fill="#fff"
    />
    <Defs>
      <ClipPath id="Utilities_svg__a">
        <Path
          fill="#fff"
          transform="translate(7.981 7)"
          d="M0 0h9.509v9.509H0z"
        />
      </ClipPath>
      <ClipPath id="Utilities_svg__b">
        <Path
          fill="#fff"
          transform="translate(19.471 7)"
          d="M0 0h9.509v9.509H0z"
        />
      </ClipPath>
      <ClipPath id="Utilities_svg__c">
        <Path
          fill="#fff"
          transform="translate(19.471 18.49)"
          d="M0 0h9.509v9.509H0z"
        />
      </ClipPath>
      <ClipPath id="Utilities_svg__d">
        <Path
          fill="#fff"
          transform="translate(19.471 18.49)"
          d="M0 0h9.509v9.509H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgUtilities;
