import PropTypes from "prop-types";
import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
import { useTheme } from "../theme";

function Logo({ style, ...rest }) {
  const {
    palette: {
      common: { white },
    },
  } = useTheme();

  return (
    <Svg
      style={[{ width: 189, height: 23.261 }, style]}
      viewBox="0 0 189 23.261"
      {...rest}
    >
      <G>
        <G fill={white}>
          <Path
            data-name="Path 44"
            d="M45.054 7.432a.818.818 0 00-.31-.4.793.793 0 00-.461-.146.745.745 0 00-.5.125.973.973 0 00-.332.431l-3.446 8.244a.819.819 0 00-.043.263.715.715 0 00.185.521.724.724 0 00.547.194.715.715 0 00.431-.146.862.862 0 00.293-.4l.719-1.68h4.1l.719 1.667a1.012 1.012 0 00.31.431.728.728 0 00.431.151.745.745 0 00.534-.228.767.767 0 00.237-.586.913.913 0 00-.069-.332zm-2.223 5.406l1.365-3.222 1.4 3.226z"
          />
          <Path
            data-name="Path 45"
            d="M55.003 7.358a2.386 2.386 0 00-1.335-.431h-3.144a.818.818 0 00-.6.241.8.8 0 00-.241.6v7.968a.861.861 0 00.22.6.737.737 0 00.564.241.762.762 0 00.581-.233.861.861 0 00.22-.607v-2.589h2.4a2.386 2.386 0 001.335-.431 3.11 3.11 0 001.021-1.137 3.312 3.312 0 000-3.093 3.118 3.118 0 00-1.021-1.129zm-.4 3.411a1.65 1.65 0 01-.431.573.8.8 0 01-.517.22H51.26V8.521h2.4a.818.818 0 01.517.215 1.576 1.576 0 01.431.564 1.826 1.826 0 010 1.473z"
          />
          <Path
            data-name="Path 46"
            d="M65.559 15.237a.431.431 0 01-.245-.28 4.308 4.308 0 01-.112-.616 2.108 2.108 0 00-.043-.431 2.1 2.1 0 00-.948-1.624 3.041 3.041 0 00.965-1.042 2.7 2.7 0 00.37-1.344 3.015 3.015 0 00-.379-1.516 2.851 2.851 0 00-.991-1.055 2.55 2.55 0 00-1.352-.388h-3.988a.827.827 0 00-.6.241.818.818 0 00-.241.6v7.968a.741.741 0 00.3.6 1.081 1.081 0 00.7.241.663.663 0 00.53-.233.913.913 0 00.2-.607V13.07h2.584a1.344 1.344 0 01.93.289 1.008 1.008 0 01.323.788 2.423 2.423 0 00.991 2.3 1.223 1.223 0 00.607.151.78.78 0 00.633-.246.711.711 0 00.065-.827.861.861 0 00-.289-.293zm-1.955-4.462a1.757 1.757 0 01-.388.629.681.681 0 01-.482.233h-3.015v-3.11h3.015a.745.745 0 01.482.194 1.456 1.456 0 01.388.517 1.68 1.68 0 01.151.711 2.352 2.352 0 01-.151.821z"
          />
          <Path
            data-name="Path 47"
            d="M72.92 8.522a.861.861 0 00.607-.215.719.719 0 00.233-.556.754.754 0 00-.241-.586.836.836 0 00-.6-.228h-4.616a.823.823 0 00-.861.84v7.968a.823.823 0 00.861.861h4.617a.861.861 0 00.6-.22.719.719 0 00.241-.564.758.758 0 00-.241-.56.81.81 0 00-.6-.241h-3.734V12.45H72.3a.861.861 0 00.607-.215.719.719 0 00.233-.556.754.754 0 00-.241-.586.861.861 0 00-.6-.228h-3.114V8.522z"
          />
          <Path
            data-name="Path 48"
            d="M82.664 6.937a.724.724 0 00-.543.22.762.762 0 00-.215.551v5.929l-5.014-6.4a.672.672 0 00-.3-.22 1.051 1.051 0 00-.431-.082.823.823 0 00-.84.84v8.037a.775.775 0 00.207.551.706.706 0 00.538.22.737.737 0 00.771-.771V9.908l5.082 6.461a.525.525 0 00.267.172 1.266 1.266 0 00.379.06.818.818 0 00.6-.241.8.8 0 00.241-.6V7.707a.775.775 0 00-.207-.551.7.7 0 00-.538-.22z"
          />
          <Path
            data-name="Path 49"
            d="M91.838 7.578a3.833 3.833 0 00-2.227-.642h-3.295a.823.823 0 00-.861.84v7.968a.823.823 0 00.861.861h3.295a3.833 3.833 0 002.227-.668 4.07 4.07 0 001.421-1.723 6.392 6.392 0 000-4.893 4.07 4.07 0 00-1.421-1.744zm-.5 6.5a2.1 2.1 0 01-1.861.917h-2.274V8.538h2.274a2.1 2.1 0 011.839.9 4.019 4.019 0 01.625 2.322 4.053 4.053 0 01-.6 2.322z"
          />
          <Path
            data-name="Path 50"
            d="M100.788 8.521a.861.861 0 00.607-.215.724.724 0 00.254-.551.771.771 0 00-.241-.586.861.861 0 00-.6-.228h-4.635a.823.823 0 00-.84.84v7.968a.823.823 0 00.84.861h4.617a.861.861 0 00.6-.22.737.737 0 00.242-.559.775.775 0 00-.241-.56.827.827 0 00-.6-.241h-3.734v-2.58h3.114a.862.862 0 00.607-.215.724.724 0 00.237-.556.771.771 0 00-.241-.586.861.861 0 00-.6-.228H97.06V8.521z"
          />
          <Path
            data-name="Path 51"
            d="M110.535 6.937a.728.728 0 00-.547.22.762.762 0 00-.211.551v5.929l-5.018-6.4a.672.672 0 00-.3-.22 1.029 1.029 0 00-.4-.082.827.827 0 00-.6.241.814.814 0 00-.237.6v8.037a.792.792 0 00.2.551.715.715 0 00.538.22.741.741 0 00.56-.22.762.762 0 00.211-.551V9.908l5.061 6.461a.543.543 0 00.267.172 1.267 1.267 0 00.379.06.827.827 0 00.6-.241.818.818 0 00.241-.6V7.707a.793.793 0 00-.207-.551.706.706 0 00-.537-.219z"
          />
          <Path
            data-name="Path 52"
            d="M119.705 7.578a3.833 3.833 0 00-2.227-.642h-3.291a.827.827 0 00-.6.241.818.818 0 00-.241.6v7.968a.818.818 0 00.241.6.827.827 0 00.6.241h3.291a3.833 3.833 0 002.227-.646 4.07 4.07 0 001.421-1.723 6.34 6.34 0 000-4.893 4.07 4.07 0 00-1.421-1.746zm-.5 6.5a2.089 2.089 0 01-1.856.917h-2.279V8.538h2.279a2.1 2.1 0 011.852.917 4.018 4.018 0 01.625 2.322 4.053 4.053 0 01-.625 2.305z"
          />
          <Path
            data-name="Path 53"
            d="M129.797 7.462a4.7 4.7 0 00-4.811 0 4.557 4.557 0 00-1.667 1.8 5.5 5.5 0 000 5 4.557 4.557 0 001.667 1.8 4.7 4.7 0 004.811 0 4.6 4.6 0 001.671-1.8 5.462 5.462 0 000-5 4.6 4.6 0 00-1.671-1.8zm.116 5.974a3.062 3.062 0 01-1.034 1.193 2.765 2.765 0 01-2.985 0 2.916 2.916 0 01-1.021-1.193 4.036 4.036 0 010-3.36 2.916 2.916 0 011.021-1.193 2.765 2.765 0 012.985 0 3.062 3.062 0 011.034 1.193 3.976 3.976 0 010 3.351z"
          />
          <Path
            data-name="Path 54"
            d="M142.736 11.476a7.921 7.921 0 00-1.9-.53 4.6 4.6 0 01-1.533-.5 1.029 1.029 0 010-1.744 2.382 2.382 0 011.344-.323 3.377 3.377 0 011.154.241 3.627 3.627 0 011 .53.6.6 0 00.37.125.749.749 0 00.551-.241.784.784 0 00.233-.56.922.922 0 00-.4-.728 3.949 3.949 0 00-1.292-.689 4.975 4.975 0 00-1.637-.263 4.411 4.411 0 00-1.749.336 2.856 2.856 0 00-1.24.982 2.55 2.55 0 00-.457 1.508q0 2.373 3.015 2.813a4.738 4.738 0 011.753.53 1.1 1.1 0 01.551.973 1 1 0 01-.56.861 2.49 2.49 0 01-1.331.345 3.368 3.368 0 01-1.24-.207 3.971 3.971 0 01-1.072-.663.75.75 0 00-.47-.164.818.818 0 00-.8.8.965.965 0 00.375.728 4 4 0 001.447.861 5.668 5.668 0 001.762.25 4.337 4.337 0 001.753-.353 3.166 3.166 0 001.292-1 2.464 2.464 0 00.491-1.525 2.7 2.7 0 00-.362-1.482 2.443 2.443 0 00-1.048-.911z"
          />
          <Path
            data-name="Path 55"
            d="M151.209 8.521a.862.862 0 00.607-.215.72.72 0 00.228-.551.771.771 0 00-.241-.586.861.861 0 00-.6-.228h-4.613a.81.81 0 00-.6.241.8.8 0 00-.241.6v7.968a.8.8 0 00.241.6.81.81 0 00.6.241h4.617a.861.861 0 00.6-.22.737.737 0 00.241-.564.775.775 0 00-.241-.56.818.818 0 00-.6-.241h-3.734v-2.557h3.114a.862.862 0 00.607-.215.719.719 0 00.233-.556.771.771 0 00-.241-.586.861.861 0 00-.6-.228h-3.114V8.521z"
          />
          <Path
            data-name="Path 56"
            d="M161.998 6.924a.771.771 0 00-.379.1.836.836 0 00-.293.267l-3.088 4.617-3.015-4.617a.861.861 0 00-.314-.267.917.917 0 00-.431-.1.861.861 0 00-.616.246.814.814 0 00-.254.594v7.981a.861.861 0 00.22.6.737.737 0 00.564.241.762.762 0 00.581-.233.862.862 0 00.22-.607v-5.682l2.274 3.6a1.184 1.184 0 00.319.267.607.607 0 00.357.09.642.642 0 00.37-.09 1.254 1.254 0 00.319-.267l2.274-3.476v5.556a.81.81 0 00.241.607.861.861 0 00.625.233.827.827 0 00.62-.241.814.814 0 00.237-.6V7.754a.8.8 0 00-.254-.6.861.861 0 00-.577-.23z"
          />
          <Path
            data-name="Path 57"
            d="M170.242 7.358a2.386 2.386 0 00-1.335-.431h-3.144a.81.81 0 00-.6.241.8.8 0 00-.241.6v7.968a.862.862 0 00.22.6.736.736 0 00.564.241.771.771 0 00.581-.233.861.861 0 00.22-.607v-2.589h2.4a2.386 2.386 0 001.335-.431 3.109 3.109 0 001.021-1.137 3.312 3.312 0 000-3.093 3.118 3.118 0 00-1.021-1.133zm-.4 3.411a1.65 1.65 0 01-.431.573.8.8 0 01-.517.22h-2.4V8.521h2.4a.818.818 0 01.517.215 1.577 1.577 0 01.431.564 1.826 1.826 0 010 1.473z"
          />
          <Path
            data-name="Path 58"
            d="M180.798 15.237a.431.431 0 01-.246-.28 3.763 3.763 0 01-.112-.616 2.105 2.105 0 00-.043-.431 2.1 2.1 0 00-.952-1.624 2.959 2.959 0 00.965-1.042 2.666 2.666 0 00.375-1.344 3.015 3.015 0 00-.379-1.516 2.851 2.851 0 00-1.012-1.055 2.55 2.55 0 00-1.353-.392h-3.967a.827.827 0 00-.6.241.818.818 0 00-.241.6v7.968a.741.741 0 00.3.6 1.081 1.081 0 00.7.241.663.663 0 00.53-.233.913.913 0 00.2-.607V13.07h2.578a1.353 1.353 0 01.93.289 1.008 1.008 0 01.323.788 2.423 2.423 0 00.991 2.3 1.223 1.223 0 00.607.151.78.78 0 00.633-.246.711.711 0 00.065-.827.861.861 0 00-.289-.293zm-1.957-4.467a1.822 1.822 0 01-.388.629.689.689 0 01-.482.233h-3.015v-3.11h3.015a.754.754 0 01.482.194 1.512 1.512 0 01.388.517 1.681 1.681 0 01.151.711 2.352 2.352 0 01-.151.826z"
          />
          <Path
            data-name="Path 59"
            d="M188.16 14.999h-3.737v-2.55h3.114a.861.861 0 00.607-.215.719.719 0 00.233-.556.771.771 0 00-.241-.586.862.862 0 00-.6-.228h-3.113V8.521h3.734a.861.861 0 00.607-.215.719.719 0 00.233-.551.771.771 0 00-.241-.586.862.862 0 00-.6-.228h-4.617a.81.81 0 00-.6.241.8.8 0 00-.241.6v7.968a.8.8 0 00.241.6.81.81 0 00.6.241h4.617a.862.862 0 00.6-.22.737.737 0 00.241-.564.775.775 0 00-.241-.56.818.818 0 00-.6-.246z"
          />
          <Path
            data-name="Path 60"
            d="M15.11 8.16a.646.646 0 00.8-.431 2.666 2.666 0 015.22-.009.642.642 0 101.228-.361 4.307 4.307 0 00-1.8-2.438 2.8 2.8 0 10-3.82-.155 4.277 4.277 0 00-2.08 2.584.646.646 0 00.448.81zm3.626-6.865a1.508 1.508 0 11-1.507 1.51 1.508 1.508 0 011.507-1.51z"
          />
          <Path
            data-name="Path 61"
            d="M5.918 19.996a2.8 2.8 0 10-3.82-.155 4.277 4.277 0 00-2.072 2.584.646.646 0 101.24.362 2.817 2.817 0 012.61-2.107 2.817 2.817 0 012.61 2.119.642.642 0 101.232-.362 4.307 4.307 0 00-1.8-2.438zM4.092 16.37a1.508 1.508 0 11-1.508 1.51 1.508 1.508 0 011.508-1.51z"
          />
          <Path
            data-name="Path 62"
            d="M18.801 11.89H4.889a3.14 3.14 0 01-3.166-3.1v-.086a3.14 3.14 0 013.166-3.1h8.033a.646.646 0 000-1.292H4.889a4.428 4.428 0 00-4.458 4.39v.086a4.428 4.428 0 004.458 4.393h13.912a3.1 3.1 0 010 6.2H9.967a.646.646 0 100 1.292h8.834a4.394 4.394 0 100-8.787z"
          />
        </G>
      </G>
    </Svg>
  );
}

Logo.defaultProps = {
  style: null,
};

Logo.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Logo;
