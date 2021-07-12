import * as React from 'react';
import Svg, { SvgProps, Rect, Defs, Pattern, Use, Image } from 'react-native-svg';
function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={47}
      height={47}
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Rect width={47} height={47} rx={12} fill="url(#prefix__pattern0)" />
      <Defs>
        <Pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#prefix__image0" transform="translate(-.167) scale(.00182)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={732}
          height={549}
        />
      </Defs>
    </Svg>
  );
}
const AppleIcon = React.memo(SvgComponent);
export default AppleIcon;