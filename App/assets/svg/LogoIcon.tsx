import * as React from 'react';
import Svg, { SvgProps, Path, Defs, Pattern, Use, Image } from 'react-native-svg';
function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={50}
      height={50}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#prefix__pattern0)" d="M0 0h50v50H0z" />
      <Defs>
        <Pattern id="prefix__pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
          <Use xlinkHref="#prefix__image0" transform="scale(.00024)" />
        </Pattern>
        <Image
          id="prefix__image0"
          width={4096}
          height={4096}
        />
      </Defs>
    </Svg>
  );
}
const LogoIcon = React.memo(SvgComponent);
export default LogoIcon;