import * as React from 'react';
import Svg, { SvgProps, Path, Rect, Circle } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={77} height={77} viewBox="0 0 77 77" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Path
        d="M70 42a34.837 34.837 0 01-5.978 19.569c-6.29 9.31-16.94 4.771-29.022 4.771-11.899 0-22.41 4.722-28.735-4.351A34.84 34.84 0 010 42C0 22.67 15.67 7 35 7s35 15.67 35 35z"
        fill="#42A391"
      />
      <Path
        d="M64 14.186v47.992a35.323 35.323 0 01-2.586 3.263c-6.47 7.245-15.906 3.572-26.414 3.572-10.414 0-19.776 3.754-26.241-3.38A35.336 35.336 0 016 62.179V14.186C6 11.321 8.335 9 11.213 9h47.574C61.665 9 64 11.321 64 14.186z"
        fill="#4D526D"
      />
      <Path
        d="M32.5 72C41.06 72 48 65.06 48 56.5 48 47.94 41.06 41 32.5 41 23.94 41 17 47.94 17 56.5 17 65.06 23.94 72 32.5 72z"
        fill="#A8ACD3"
      />
      <Path
        d="M43.46 67.403a15.366 15.366 0 01-21.92 0c-6.053-6.129-6.053-16.066 0-22.196.068-.07.138-.139.209-.207h21.503c.07.068.14.138.208.207 6.053 6.13 6.053 16.068 0 22.196z"
        fill="#B8BEDE"
      />
      <Path
        d="M58.265 19.342v48.806A34.861 34.861 0 0135 77a34.861 34.861 0 01-23.266-8.852V19.342a4.013 4.013 0 014.013-4.013h38.505a4.013 4.013 0 014.013 4.013z"
        fill="#CAE4FF"
      />
      <Path
        d="M34.727 67.053c8.575 0 15.526-6.951 15.526-15.526S43.302 36 34.727 36 19.2 42.952 19.2 51.526c0 8.576 6.952 15.527 15.527 15.527z"
        fill="#EFC64C"
      />
      <Path
        d="M46.42 61.74a15.06 15.06 0 01-.715.766c-6.063 6.063-15.894 6.064-21.958 0-6.064-6.063-6.064-15.895 0-21.959.249-.248.504-.488.766-.715-5.338 6.097-5.099 15.378.715 21.192 5.815 5.815 15.095 6.053 21.193.715z"
        fill="#E3A12F"
      />
      <Path
        d="M34.726 62.818c6.236 0 11.291-5.056 11.291-11.292s-5.055-11.291-11.291-11.291c-6.236 0-11.291 5.055-11.291 11.291 0 6.236 5.055 11.292 11.291 11.292z"
        fill="#E3A12F"
      />
      <Path
        d="M42.71 43.542c4.41 4.41 4.41 11.56 0 15.97-.203.203-.413.396-.627.583 3.816-4.436 3.621-11.134-.585-15.34-4.206-4.206-10.904-4.4-15.34-.585.186-.214.38-.424.584-.628 4.41-4.409 11.559-4.409 15.968 0z"
        fill="#DE8635"
      />
      <Path
        d="M33.824 50.39c-1.062.508-2.256 1.143-3.113 1.143-.115 0-.47-.155-.66-.436-.102-.149-.411-.677-.118-1.222.6-1.118 1.592-1.24 1.703-1.25.375-.035.702-.21.938-.466l1.121-1.122-.633-.633-.214.215a1.456 1.456 0 00-1.478-.892 4.897 4.897 0 00-2.027.685l-.239-.239-.949-1.109-1.109 1.11a1.455 1.455 0 000 2.057l.305.304c-.69 1.317-.578 2.923.296 4.203.816 1.195 2.123 1.84 3.413 1.684 1.265-.153 2.679-.766 4.018-1.405 1.022-.489 1.622.066 1.888.44.448.63.577 1.665-.199 2.451-.514.523-1.706.494-1.706.494l-1.128 1.128a1.453 1.453 0 001.304 2.474c1.126-.236 1.837-.55 2.516-1.067l.269.27c.568.567 1.49.567 2.058 0l1.109-1.11-1.486-1.325c.888-1.709.573-3.683-.366-5.003-1.276-1.79-3.491-2.344-5.513-1.378z"
        fill="#DE8635"
      />
      <Path
        d="M34.932 49.282c-1.062.507-2.256 1.142-3.112 1.142-.116 0-.47-.155-.661-.436-.102-.148-.41-.677-.118-1.222.6-1.118 1.593-1.24 1.704-1.25a1.455 1.455 0 00-.267-2.898 4.895 4.895 0 00-2.026.685l-.24-.239a1.455 1.455 0 00-2.057 2.058l.304.304c-.69 1.317-.578 2.923.297 4.203.815 1.195 2.123 1.84 3.413 1.684 1.265-.153 2.678-.766 4.018-1.405 1.022-.489 1.621.066 1.888.44.448.63.577 1.665-.2 2.452-.818.831-1.094 1.03-2.125 1.246a1.455 1.455 0 10.596 2.849c1.126-.236 1.836-.55 2.515-1.067l.27.27a1.455 1.455 0 102.057-2.059l-.377-.376c.888-1.708.574-3.683-.366-5.003-1.275-1.79-3.49-2.344-5.513-1.378z"
        fill="#EFC64C"
      />
      <Rect x={26} y={12} width={18} height={7} rx={2} fill="#4D526D" />
      <Rect x={28} y={15} width={11} height={2} rx={1} fill="#696E87" />
      <Rect x={40} y={15} width={2} height={2} rx={1} fill="#696E87" />
      <Circle cx={60.5} cy={16.5} r={16.5} fill="#4DCD7F" />
      <Path
        d="M60.727 19.589a1.452 1.452 0 010 2.017l-1.125 1.125a1.453 1.453 0 01-2.018 0l-4.927-4.966a1.452 1.452 0 010-2.017l1.125-1.125a1.452 1.452 0 012.018 0l4.927 4.966z"
        fill="#fff"
      />
      <Path
        d="M65.363 11.015a1.452 1.452 0 012.018 0l1.125 1.125a1.452 1.452 0 010 2.017l-8.535 8.497a1.453 1.453 0 01-2.018 0l-1.125-1.125a1.452 1.452 0 010-2.018l8.535-8.496z"
        fill="#fff"
      />
    </Svg>
  );
}

const SavedPaymentIcon = React.memo(SvgComponent);
export default SavedPaymentIcon;