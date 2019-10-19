import React from 'react';
import Svg, {G, Rect, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Add = () => (
  <Svg width={145} height={100} viewBox="0 0 145 145" fill="none">
    <G filter="url(#filter0_d)">
      <Rect x={10} width={125} height={125} rx={15} fill="#A21CC8" />
    </G>
    <Rect x={69} y={25} width={8} height={75} fill="white" />
    <Rect x={35} y={59} width={75} height={8} fill="white" />
    <Defs />
  </Svg>
);

export default Add;
