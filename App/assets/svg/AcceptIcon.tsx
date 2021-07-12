import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SVGComponent = props => (
  <Svg width={props.width || 17} height={props.height || 17} viewBox="0 0 17 17" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 8.5C17 10.7543 16.1045 12.9163 14.5104 14.5104C12.9163 16.1045 10.7543 17 8.5 17C6.24566 17 4.08365 16.1045 2.48959 14.5104C0.895533 12.9163 0 10.7543 0 8.5C0 6.24566 0.895533 4.08365 2.48959 2.48959C4.08365 0.895533 6.24566 0 8.5 0C10.7543 0 12.9163 0.895533 14.5104 2.48959C16.1045 4.08365 17 6.24566 17 8.5ZM12.7819 5.28062C12.706 5.20499 12.6156 5.14545 12.5162 5.10554C12.4167 5.06564 12.3103 5.04619 12.2032 5.04838C12.096 5.05056 11.9905 5.07432 11.8927 5.11824C11.795 5.16216 11.7071 5.22534 11.6344 5.304L7.94431 10.0056L5.7205 7.78069C5.56944 7.63993 5.36964 7.5633 5.1632 7.56694C4.95675 7.57058 4.75978 7.65421 4.61378 7.80021C4.46778 7.94622 4.38414 8.14319 4.3805 8.34963C4.37686 8.55608 4.45349 8.75588 4.59425 8.90694L7.40562 11.7194C7.48136 11.795 7.57155 11.8545 7.67081 11.8945C7.77007 11.9345 7.87636 11.9541 7.98335 11.9521C8.09035 11.9501 8.19584 11.9266 8.29355 11.883C8.39126 11.8394 8.47918 11.7765 8.55206 11.6981L12.7936 6.39625C12.9382 6.2459 13.018 6.04486 13.0161 5.83627C13.0141 5.62768 12.9304 5.42819 12.7829 5.28062H12.7819Z"
      fill={props.fill || '#CFF5DE'}
    />
  </Svg>
);

export default SVGComponent;