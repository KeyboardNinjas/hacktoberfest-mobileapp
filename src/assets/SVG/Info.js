import React from 'react';
import Svg, { Path, G} from 'react-native-svg';

const Info = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      viewBox="0 0 20 20">
      <G
        fill="none"
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        transform="translate(-442 -288) translate(100 100) translate(340 186)">
        <Path d="M0 0L24 0 24 24 0 24z" />
        <Path
          fill="#FFFFFF"
          d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
        />
      </G>
    </Svg>
  );
};

export default Info;
