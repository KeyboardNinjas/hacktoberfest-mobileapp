import React from 'react';
import Svg, { Path } from 'react-native-svg';

const BackArrow = props => (
  <Svg {...props} width={30} height={30} viewBox="0 0 61 64" fill="none">
    <Path
      d="M61 28.16H14.602L35.895 6.409 30.5.896 0 32.056l30.5 31.159 5.395-5.512L14.602 35.95H61v-7.79z"
      fill="#fff"
    />
  </Svg>
);

export default BackArrow;
