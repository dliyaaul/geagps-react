import React from 'react';
import Svg, { Circle, G, Path, Rect, SvgProps } from 'react-native-svg';

interface IconProps extends SvgProps {
  color?: string;
  size?: number;
  percentage?: number;
}

const CircleIcon: React.FC<IconProps> = ({ color = 'blue', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100" {...props}>
    <Circle cx="50" cy="50" r="40" fill={color} />
  </Svg>
);

const SquareIcon: React.FC<IconProps> = ({ color = 'green', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 100 100" {...props}>
    <Rect x="10" y="10" width="80" height="80" fill={color} />
  </Svg>
);

const HomeOutlineRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <Path
      d="M9.15722 20.7714V17.7047C9.1572 16.9246 9.79312 16.2908 10.581 16.2856H13.4671C14.2587 16.2856 14.9005 16.9209 14.9005 17.7047V17.7047V20.7809C14.9003 21.4432 15.4343 21.9845 16.103 22H18.0271C19.9451 22 21.5 20.4607 21.5 18.5618V18.5618V9.83784C21.4898 9.09083 21.1355 8.38935 20.538 7.93303L13.9577 2.6853C12.8049 1.77157 11.1662 1.77157 10.0134 2.6853L3.46203 7.94256C2.86226 8.39702 2.50739 9.09967 2.5 9.84736V18.5618C2.5 20.4607 4.05488 22 5.97291 22H7.89696C8.58235 22 9.13797 21.4499 9.13797 20.7714V20.7714"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const HomeInlineRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M9.14373 20.7821V17.7152C9.14372 16.9381 9.77567 16.3067 10.5584 16.3018H13.4326C14.2189 16.3018 14.8563 16.9346 14.8563 17.7152V17.7152V20.7732C14.8563 21.4473 15.404 21.9951 16.0829 22H18.0438C18.9596 22.0023 19.8388 21.6428 20.4872 21.0007C21.1356 20.3586 21.5 19.4868 21.5 18.5775V9.86585C21.5 9.13139 21.1721 8.43471 20.6046 7.9635L13.943 2.67427C12.7785 1.74912 11.1154 1.77901 9.98539 2.74538L3.46701 7.9635C2.87274 8.42082 2.51755 9.11956 2.5 9.86585V18.5686C2.5 20.4637 4.04738 22 5.95617 22H7.87229C8.19917 22.0023 8.51349 21.8751 8.74547 21.6464C8.97746 21.4178 9.10793 21.1067 9.10792 20.7821H9.14373Z" fill={color} />
  </Svg>
);

const ProfileInlineRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M19.5195 19.3911C18.5035 16.1781 15.7735 14.3371 12.0265 14.3371H11.9995C8.24255 14.3161 5.49855 16.1701 4.48055 19.3911L4.36255 19.7651L4.69655 19.9691C6.65455 21.1631 9.09655 21.7681 11.9525 21.7681C11.9845 21.7681 12.0165 21.7681 12.0475 21.7681C14.9435 21.7681 17.3175 21.1791 19.3035 19.9691L19.6375 19.7651L19.5195 19.3911Z" fill={color} />
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.0001 12.1089C14.7231 12.1089 16.9391 9.89393 16.9391 7.17093C16.9391 4.44693 14.7231 2.23193 12.0001 2.23193C9.27707 2.23193 7.06207 4.44693 7.06207 7.17093C7.06207 9.89393 9.27707 12.1089 12.0001 12.1089Z" fill={color} />
  </Svg>
);

const ProfileOutlineRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M12 21.2496C9.42303 21.2566 7.00803 20.7746 4.95703 19.5236C5.97603 16.3016 8.74003 14.8106 12 14.8186C15.256 14.8106 18.025 16.3056 19.043 19.5236C17.893 20.2256 16.627 20.6856 15.284 20.9526" stroke={color} stroke-width="1.5" stroke-linecap="square" />
    <Path d="M11.9649 2.75024C14.4059 2.75024 16.3849 4.72924 16.3849 7.17024C16.3849 9.61124 14.4059 11.5892 11.9649 11.5892C9.52392 11.5892 7.54492 9.61124 7.54492 7.17024C7.54492 6.31824 7.78592 5.52324 8.20292 4.84824" stroke={color} stroke-width="1.5" stroke-linecap="square" />
  </Svg>
);

const ProfileInCircleIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg {...props} viewBox="0 0 24 24" width={size} height={size}>
    <Path
      d="M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M12,7c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3
      C9,8.3,10.3,7,12,7z M12,20c-2.2,0-4.3-0.9-5.8-2.5c2.2-3.2,6.5-4,9.7-1.8c0.7,0.5,1.3,1.1,1.8,1.8C16.3,19.1,14.2,20,12,20z"
      fill={color}  // Warna biru yang diinginkan
    />
  </Svg>
);

const DocumentOutlineRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15.7161 16.2234H8.49609"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.7161 12.0369H8.49609"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.2511 7.86011H8.49609"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.5 21.1583C14.4521 21.1576 15.9389 21.1568 15.9455 21.1568C18.7055 21.1398 20.4155 19.3228 20.4155 16.5528V7.3568C20.4155 4.5728 18.6925 2.7498 15.9085 2.7498C15.9085 2.7498 8.23149 2.7538 8.21949 2.7538C5.45949 2.7708 3.75049 4.5868 3.75049 7.3568V16.5528C3.75049 19.3368 5.47249 21.1598 8.25649 21.1598C8.25649 21.1598 8.18469 21.1596 9 21.1593"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const DocumentInlineRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M16.191 2C19.28 2 21 3.78 21 6.83V17.16C21 20.26 19.28 22 16.191 22H7.81C4.77 22 3 20.26 3 17.16V6.83C3 3.78 4.77 2 7.81 2H16.191ZM8.08 15.74C7.78 15.71 7.49 15.85 7.33 16.11C7.17 16.36 7.17 16.69 7.33 16.95C7.49 17.2 7.78 17.35 8.08 17.31H15.92C16.319 17.27 16.62 16.929 16.62 16.53C16.62 16.12 16.319 15.78 15.92 15.74H8.08ZM15.92 11.179H8.08C7.649 11.179 7.3 11.53 7.3 11.96C7.3 12.39 7.649 12.74 8.08 12.74H15.92C16.35 12.74 16.7 12.39 16.7 11.96C16.7 11.53 16.35 11.179 15.92 11.179ZM11.069 6.65H8.08C7.649 6.66 7.3 7.01 7.3 7.44C7.3 7.87 7.649 8.22 8.08 8.22H11.069C11.5 8.22 11.85 7.87 11.85 7.429C11.85 7 11.5 6.65 11.069 6.65Z" fill={color} />
  </Svg>
);

const AlertOutlineRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12.25 21.7847C5.313 21.7847 3 19.4717 3 12.5347C3 5.59767 5.313 3.28467 12.25 3.28467C19.187 3.28467 21.5 5.59767 21.5 12.5347C21.5 18.1707 19.973 20.7547 15.68 21.5257"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.25 8.63953V12.5345"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12.245 16.0345H12.254"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const AlertInlineRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.254 16.7847C11.84 16.7847 11.499 16.4487 11.499 16.0347C11.499 15.6207 11.831 15.2847 12.245 15.2847H12.254C12.668 15.2847 13.004 15.6207 13.004 16.0347C13.004 16.4487 12.668 16.7847 12.254 16.7847ZM11.5 8.63967C11.5 8.22567 11.836 7.88967 12.25 7.88967C12.664 7.88967 13 8.22567 13 8.63967V12.5347C13 12.9487 12.664 13.2847 12.25 13.2847C11.836 13.2847 11.5 12.9487 11.5 12.5347V8.63967ZM12.25 2.78467C5.052 2.78467 2.5 5.33667 2.5 12.5347C2.5 19.7327 5.052 22.2847 12.25 22.2847C19.448 22.2847 22 19.7327 22 12.5347C22 5.33667 19.448 2.78467 12.25 2.78467Z" fill={color}></Path>
  </Svg>
);

const LocationOutlineRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.7367 10.8068C14.7367 9.43285 13.6237 8.31885 12.2507 8.31885C10.8767 8.31885 9.76367 9.43285 9.76367 10.8068C9.76367 12.1788 10.8767 13.2928 12.2507 13.2928"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <Path
      d="M12.2496 2.75C16.3696 2.75 19.8366 6.445 19.7096 10.597C19.5256 16.632 12.2496 21.25 12.2496 21.25C12.2496 21.25 4.9736 16.511 4.7906 10.597C4.7076 7.926 6.1126 5.445 8.2226 4.014"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="square"
    />
  </Svg>
);

const LocationInlineRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg id="Location" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 13.495C10.741 13.495 9.51302 12.268 9.51302 10.759C9.51302 9.25 10.741 8.022 12.25 8.022C13.759 8.022 14.986 9.25 14.986 10.759C14.986 12.268 13.759 13.495 12.25 13.495ZM17.864 4.652C16.333 3.073 14.339 2.203 12.25 2.203C10.159 2.203 8.16502 3.073 6.63302 4.653C5.07802 6.257 4.22402 8.412 4.29102 10.566C4.48002 16.67 11.67 21.423 11.977 21.622L12.246 21.797L12.518 21.625C12.824 21.431 20.019 16.793 20.209 10.565C20.275 8.412 19.42 6.256 17.864 4.652Z" fill={color}></Path>
  </Svg>
);

const CalendarOutlineRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M3.09277 9.40427H20.9167" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M16.442 13.3097H16.4512" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M12.0045 13.3097H12.0137" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M7.55769 13.3097H7.56695" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M16.442 17.1962H16.4512" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M12.0045 17.1962H12.0137" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M7.55769 17.1962H7.56695" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M16.0438 2V5.29078" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M7.96564 2V5.29078" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M5.5 3.99048C3.91999 4.65065 3 6.09257 3 8.22221V17.2719C3 20.3262 4.83427 22 7.77096 22H12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M16.2383 3.57919C19.1842 3.57919 21.0092 5.21513 21 8.22222V17.3475C21 20.3546 19.175 22 16.229 22H15.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M8 3.57919H12.0046L13.5 3.57919" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const CalendarInlineRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...props}>
    <G id="Iconly/Bold/Calendar" stroke="none" strokeWidth="1.5" fill={color} fillRule="evenodd">
      <G id="Calendar" transform="translate(3.000000, 2.000000)" fill={color} fillRule="nonzero">
        <Path d="M12.6496583,2.25524422e-06 C13.0742093,-0.000994978687 13.4099008,0.32883983 13.4108881,0.768619575 L13.4108881,0.768619575 L13.4118754,1.51824414 C16.1665203,1.73413601 17.9861656,3.61119592 17.9891276,6.48975425 L17.9891276,6.48975425 L17.9999941,14.9155344 C18.0039375,18.0539625 16.0322437,19.9849954 12.8718071,19.9899929 L12.8718071,19.9899929 L5.15189025,20.0000023 C2.0112002,20.0039859 0.0148231956,18.0269761 0.010873884,14.8795524 L0.010873884,14.8795524 L6.62739655e-06,6.55272272 C-0.00393603445,3.6551739 1.75153297,1.78311149 4.5061778,1.53023813 L4.5061778,1.53023813 L4.50519047,0.780613568 C4.50420314,0.340833823 4.83002135,0.00999951493 5.26444563,0.00999951493 C5.6988699,0.00900001551 6.02468811,0.338834824 6.02567543,0.778614569 L6.02567543,0.778614569 L6.02666276,1.47826416 L11.8913905,1.47026817 L11.8904031,0.770618574 C11.8894158,0.330838829 12.215234,0.00100402015 12.6496583,2.25524422e-06 Z M13.0524881,14.1918968 L13.0426148,14.1918968 C12.588444,14.2028913 12.22412,14.5837006 12.2339933,15.0434703 C12.2349806,15.50324 12.6012792,15.8820503 13.0554501,15.8920453 C13.5185068,15.8910458 13.8936914,15.5102365 13.8927061,15.0404718 C13.8927061,14.5707071 13.5165322,14.1918968 13.0524881,14.1918968 L13.0524881,14.1918968 Z M4.91690621,14.1928941 C4.46273537,14.2128863 4.10729733,14.5936956 4.10828261,15.0534653 C4.12901854,15.513235 4.50420314,15.8730548 4.95837398,15.8520653 C5.40365886,15.8320753 5.75810957,15.4512661 5.73737569,14.9914963 C5.72750241,14.5417216 5.36120376,14.1918968 4.91690621,14.1928941 Z M8.98469714,14.1878967 C8.53052631,14.2088883 8.1760756,14.5886981 8.1760756,15.0484678 C8.19680948,15.5082375 8.57199408,15.8670578 9.02616491,15.8470678 C9.47046247,15.8260783 9.82590051,15.4462686 9.80516663,14.9854993 C9.79529335,14.5367241 9.4289947,14.1868993 8.98469714,14.1878967 Z M4.91196957,10.5946962 C4.45779873,10.6146884 4.10334802,10.9954976 4.10433329,11.4552674 C4.1240819,11.9150371 4.50025383,12.2748569 4.95442467,12.2538674 C5.39872222,12.2338774 5.75317294,11.8530681 5.73243905,11.3932984 C5.72256577,10.9435237 5.35725445,10.5936989 4.91196957,10.5946962 Z M8.98074783,10.5597138 C8.526577,10.5797059 8.17113896,10.9605152 8.17212423,11.4202849 C8.19187284,11.8800546 8.56804477,12.2388749 9.0222156,12.2188849 C9.46651316,12.1978954 9.82096387,11.8180857 9.80121731,11.3583159 C9.79035671,10.9085412 9.42504539,10.5587164 8.98074783,10.5597138 Z M13.0485388,10.5647113 C12.5943679,10.5747084 12.2389299,10.9445232 12.2399152,11.4042929 L12.2399152,11.4042929 L12.2399152,11.4152874 C12.2497905,11.8750571 12.6249751,12.2238824 13.0801333,12.2138874 C13.5244308,12.2028929 13.8788815,11.8220837 13.8690083,11.3623139 C13.8482744,10.9225342 13.491849,10.5637139 13.0485388,10.5647113 Z M11.8933651,3.00949727 L6.02863742,3.01749327 L6.02962475,3.8260883 C6.02962475,4.25687255 5.70479387,4.59670235 5.27036959,4.59670235 C4.83594532,4.59770185 4.50913978,4.25887155 4.50913978,3.8280873 L4.50913978,3.8280873 L4.50815246,3.05847275 C2.58286306,3.25137613 1.51753626,4.38280948 1.52049208,6.55072372 L1.52049208,6.55072372 L1.52148557,6.86156804 L16.4696299,6.84157805 L16.4696299,6.49175325 C16.4271748,4.3428295 15.3490128,3.21539415 13.4138501,3.04747825 L13.4138501,3.04747825 L13.4148374,3.81709281 C13.4148374,4.24687756 13.0801333,4.58770686 12.6555823,4.58770686 C12.221158,4.58870636 11.8943525,4.24887655 11.8943525,3.8190918 L11.8943525,3.8190918 L11.8933651,3.00949727 Z" />
      </G>
    </G>
  </Svg>
);

const OpenEyeIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M8.83838 12.0531C8.83838 10.3061 10.2534 8.8911 11.9994 8.8911C13.7454 8.8911 15.1614 10.3061 15.1614 12.0531C15.1614 13.7991 13.7454 15.2141 11.9994 15.2141C11.2398 15.2141 10.5429 14.9463 9.99788 14.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></Path>
    <Path d="M21.25 12.0529C19.289 7.4889 15.806 4.7509 11.998 4.7509H12.002C8.194 4.7509 4.711 7.4889 2.75 12.0529C4.711 16.6169 8.194 19.3549 12.002 19.3549H11.998C14.848 19.3549 17.5159 17.8213 19.5 15.1363" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></Path>
  </Svg>
);

const CloseEyeIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M21.5 8.0109C19.539 12.139 16.056 14.6155 12.248 14.6155H12.252C8.444 14.6155 4.961 12.139 3 8.0109" stroke={color} stroke-width="1.5" stroke-linecap="square"></Path>
    <Path d="M18.8398 11.8795L20.951 13.9906" stroke={color} stroke-width="1.5" stroke-linecap="square"></Path>
    <Path d="M5.5813 11.8795L3.47019 13.9906" stroke={color} stroke-width="1.5" stroke-linecap="square"></Path>
    <Path d="M15.4268 17.197L14.5823 14.2875" stroke={color} stroke-width="1.5" stroke-linecap="square"></Path>
    <Path d="M8.99338 17.1973L9.83789 14.2877" stroke={color} stroke-width="1.5" stroke-linecap="square"></Path>
  </Svg>
);

const SearchRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg {...props} width={size} height={size} viewBox="0 0 24 24">
    <Path
      d="M20.3317 14.5002C20.6066 13.6382 20.7549 12.7197 20.7549 11.7666C20.7549 6.80236 16.7306 2.77805 11.7664 2.77805C6.80215 2.77805 2.77783 6.80236 2.77783 11.7666C2.77783 16.7308 6.80215 20.7552 11.7664 20.7552C14.1293 20.7552 16.2793 19.8434 17.8837 18.3524"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <Path
      d="M18.0181 18.4851L21.5421 22"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const ArrowLeftRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props} >
    <Path d="M4.25 12.2743L19.25 12.2743" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></Path>
    <Path d="M10.2998 18.2987L7.2748 15.2867L6.51855 14.5337M4.2498 12.2747L10.2998 6.24969" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></Path>
  </Svg>
);

const SearchUserRoundIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg {...props} viewBox="0 0 21.09 21.17" width={size} height={size}>
    <Path d="M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10,10-4.5,10-10S15.5,0,10,0ZM11.08,6.01c.52-.45,1.19-.67,1.87-.67s1.34.22,1.87.67c1.27,1.04,1.49,2.91.45,4.18-1.04,1.27-2.91,1.49-4.18.45.15-.15.37-.3.45-.45,1.04-1.34.82-3.13-.45-4.18ZM7.72,5.34c1.64,0,2.98,1.34,2.98,2.98s-1.34,2.98-2.98,2.98-2.98-1.34-2.98-2.98,1.34-2.98,2.98-2.98ZM13.24,17.28s0,.01,0,.02c-1,.46-2.11.72-3.29.72-2.75,0-5.16-1.4-6.58-3.52,1.03-1.28,2.62-2.07,4.35-2.07,2.76,0,5.15,2.01,5.52,4.78v.07ZM14.6,16.5c-.47-1.74-1.78-3.18-3.52-3.78.6-.22,1.19-.3,1.87-.3,1.5,0,2.86.61,3.87,1.6-.56.97-1.32,1.82-2.22,2.47Z" fill={color} />
  </Svg>
);

const ArrowRightIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg id="Arrow - Right 2" width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path d="M8.5 5L12 8.5L12.875 9.375M15.5 12L8.5 19" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></Path>
  </Svg>
);

const StreetViewIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
    <Path
      d="M917.66,484.56c-.57-8.36-1.39-16.69-2.47-24.98-.81-6.22-1.76-12.42-2.85-18.59-.73-4.11-1.52-8.21-2.37-12.3-1.28-6.13-2.7-12.23-4.26-18.3s-3.26-12.09-5.09-18.08c-11.63-37.91-28.76-74.16-51.03-107.38-2.34-3.5-4.74-6.96-7.2-10.39-50.37-70.3-124.43-125.89-218.37-153.21C308.35,29.52,19.69,339.07,129,648.34c23.71,67.09,62.08,122.75,109.6,165.8,3.17,2.87,6.38,5.68,9.63,8.44,11.37,9.65,23.22,18.61,35.48,26.86,3.5,2.36,7.04,4.66,10.61,6.9,17.84,11.21,36.47,20.98,55.69,29.25,3.84,1.65,7.71,3.25,11.6,4.78,29.18,11.51,59.59,19.64,90.56,24.24,6.19.92,12.41,1.7,18.64,2.34,20.77,2.12,41.73,2.67,62.67,1.59,6.28-.32,12.56-.79,18.84-1.41,8.36-.82,16.72-1.91,25.04-3.26,4.16-.67,8.32-1.42,12.47-2.22,8.3-1.61,16.56-3.5,24.78-5.65,14.38-3.76,28.63-8.35,42.67-13.77,4.01-1.55,8-3.17,11.98-4.85,17.89-7.59,35.4-16.58,52.38-26.98,1.89-1.16,3.77-2.33,5.64-3.52,28.11-17.88,54.71-39.72,79.13-65.68,26.3-27.97,47.76-58.08,64.61-89.53,1.05-1.97,2.09-3.94,3.1-5.91,7.12-13.83,13.35-27.91,18.73-42.16.77-2.04,1.52-4.08,2.25-6.12,2.93-8.17,5.58-16.4,7.95-24.67,1.78-6.2,3.4-12.43,4.87-18.68,1.96-8.33,3.65-16.69,5.06-25.07s2.56-16.78,3.43-25.19c.44-4.21.81-8.41,1.11-12.62.31-4.21.54-8.42.72-12.62.43-10.52.45-21.03.07-31.5-.15-4.19-.37-8.38-.66-12.56ZM499.77,238.08c65.59-8.24,112.86,60.37,79.41,118.41-34.95,60.66-126,47.59-143.68-19.67-11.56-43.99,18.27-92.97,64.26-98.75ZM636.26,783.57c-63.05,24.35-151.83,25.25-217.44,10.94-34.49-7.52-98.28-28.09-93.8-73.18,4-40.3,70.41-59.89,103.99-63.52l-39.98-177.51c1.75-29.61,27.64-56.11,56.48-61.49,42.22,2.52,88.28-3.33,130.04-.03,28.16,2.23,56.81,32.21,58.87,60.18l-40.37,178.82-7.44,29.04c-10.82,48.73-75.32,63.09-115.64,42.55-16.6-8.46-29.1-23.06-33.05-41.44-2.5-2.15-37.06,7.96-42.42,9.87-20.79,7.43-57.02,23.46-25.39,45.43,56.02,38.91,201.6,36.07,262.58,8.76,9.13-4.09,31.68-16.13,27.04-28.34-5.12-13.48-27.12-22.9-48.75-29.57l8.76-30.45c8.04,2.18,11.57,3.58,19.25,6.7,75.07,30.49,70.57,84.92-2.74,113.23Z"
      fill={color}
    />
  </Svg>
);

const EditIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg {...props} viewBox="0 0 1024 1024" width={size} height={size}>
    <Path d="M484.06,106.18c296.29-17.41,505.86,267.39,411.77,541.31-105.43,306.96-519.79,368.44-713.6,105.91C-3,502.49,165.92,124.88,484.06,106.18ZM524.02,371.89c6.32,4.76,50.11,39.62,47.57,50.84-4.87,21.52-27.57,32.21-33.93,28.2-7.77-4.89-21.65-25.07-50.25-41.02-56.26,63.98-123.86,128.42-178.69,193.58-22.18,28.22-39.49,101.33-29.94,110.6,19.27,16.2,96.9-3.93,124.64-32.26,70.79-72.32,299.59-311.45,292.67-322.1-6.53-10.04-83.5-72.83-87.31-71.5-4.82,1.69-55.61,50.48-84.76,83.66ZM555.56,677.27c-30.98-.16-30.42,51,1.11,51.02l163.42.12c31.86.02,30.12-51.31-.13-51.31l-164.4.16Z" fill={color} />
  </Svg>
);

const DebugIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg {...props} id="debug" viewBox="0 0 32 32" width={size} height={size}>
    <Path d="M23 13c-.45 0-.85-.3-.97-.75-.14-.54.19-1.08.72-1.21l.12-.03c1.84-.46 3.13-2.11 3.13-4 0-.55.45-1 1-1s1 .45 1 1c0 2.82-1.91 5.26-4.64 5.94l-.12.03c-.08.02-.17.03-.25.03ZM28 21c-.42 0-.81-.26-.95-.68-.46-1.39-1.75-2.32-3.21-2.32h-.84c-.55 0-1-.45-1-1s.45-1 1-1h.84c2.32 0 4.38 1.48 5.11 3.68.17.52-.11 1.09-.63 1.26-.1.04-.21.05-.32.05ZM6 30c-.55 0-1-.45-1-1v-.84c0-2.32 1.48-4.38 3.68-5.11.52-.18 1.09.11 1.26.63.17.52-.11 1.09-.63 1.26-1.39.46-2.32 1.75-2.32 3.21v.84c0 .55-.45 1-1 1ZM9 13c-.08 0-.17 0-.25-.03l-.12-.03c-2.73-.68-4.63-3.12-4.63-5.94 0-.55.45-1 1-1s1 .45 1 1c0 1.9 1.28 3.54 3.12 4l.12.03c.54.14.86.68.72 1.21-.11.45-.52.75-.97.75ZM4 21c-.1 0-.21-.02-.32-.05-.52-.17-.81-.74-.63-1.26.73-2.2 2.79-3.68 5.11-3.68h.84c.55 0 1 .45 1 1s-.45 1-1 1h-.84c-1.46 0-2.75.93-3.21 2.32-.14.42-.53.68-.95.68Z" fill={color}></Path>
    <Path d="m23.68,23.21c.2-.7.32-1.44.32-2.21v-9c0-1.86-1.28-3.41-3-3.86v-.14c0-1.02-.31-1.96-.83-2.75l1.54-1.54c.39-.39.39-1.02,0-1.41s-1.02-.39-1.41,0l-1.54,1.54c-.79-.52-1.74-.83-2.75-.83s-1.96.31-2.75.83l-1.54-1.54c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l1.54,1.54c-.52.79-.83,1.74-.83,2.75v.14c-1.72.45-3,2-3,3.86v9c0,4.41,3.59,8,8,8,2.94,0,5.5-1.6,6.89-3.96,1.27.52,2.11,1.74,2.11,3.12v.84c0,.55.45,1,1,1s1-.45,1-1v-.84c0-2.19-1.32-4.12-3.32-4.95Zm-7.68-18.21c1.65,0,3,1.35,3,3h-6c0-1.65,1.35-3,3-3Zm-1,21.92c-2.83-.48-5-2.95-5-5.92v-9c0-1.1.9-2,2-2h3v16.92Zm7-5.92c0,2.97-2.17,5.44-5,5.92V10h3c1.1,0,2,.9,2,2v9Z" fill={color}></Path>
  </Svg>
);

const CloseIcon: React.FC<IconProps> = ({ color = 'black', size = 24, ...props }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.711 14.9237L14.65 15.9847L12.249 13.5857L9.849 15.9817L8.789 14.9207L11.188 12.5257L8.789 10.1277L9.85 9.06667L12.25 11.4657L14.651 9.06867L15.711 10.1307L13.311 12.5257L15.711 14.9237ZM12.25 2.78467C6.874 2.78467 2.5 7.15867 2.5 12.5347C2.5 17.9107 6.874 22.2847 12.25 22.2847C17.626 22.2847 22 17.9107 22 12.5347C22 7.15867 17.626 2.78467 12.25 2.78467Z" fill={color}></Path>
  </Svg>
);

const BatteryIcon: React.FC<IconProps> = ({ color = 'black', size = 24, percentage = 100, ...props }) => {
  const batteryFillHeight = (percentage / 100) * 14;

  return (
    <Svg {...props} width={size} height={size} viewBox="0 0 24 24">
      <Path fill="none" d="M0 0h24v24H0V0z" />

      <Rect
        x="7"
        y={21 - batteryFillHeight}
        width="10"
        height={batteryFillHeight}
        fill={color}
      />

      <Path
        fillOpacity=".3"
        d="M17,5.33c0-.73-.6-1.33-1.33-1.33h-1.67v-2h-4v2h-1.67c-.73,0-1.33.6-1.33,1.33v15.34h10V5.33Z"
        fill={color}
      />

      <Path
        d="M7,20.67h0c0,.73.6,1.33,1.33,1.33h7.33c.74,0,1.34-.6,1.34-1.33H7Z"
        fill={color}
      />
    </Svg>
  );
};

const icons = {
  circle: CircleIcon,
  square: SquareIcon,
  homeOutlineRound: HomeOutlineRoundIcon,
  homeInlineRound: HomeInlineRoundIcon,
  profileInlineRound: ProfileInlineRoundIcon,
  profileOutlineRound: ProfileOutlineRoundIcon,
  ProfileInCircle: ProfileInCircleIcon,
  DocumentOutlineRound: DocumentOutlineRoundIcon,
  DocumentInlineRound: DocumentInlineRoundIcon,
  AlertInlineRound: AlertInlineRoundIcon,
  AlertOutlineRound: AlertOutlineRoundIcon,
  LocationOutlineRound: LocationOutlineRoundIcon,
  LocationInlineRound: LocationInlineRoundIcon,
  CalendarOutlineRound: CalendarOutlineRoundIcon,
  CalendarInlineRound: CalendarInlineRoundIcon,
  OpenEye: OpenEyeIcon,
  CloseEye: CloseEyeIcon,
  SearchRound: SearchRoundIcon,
  ArrowLeftRound: ArrowLeftRoundIcon,
  SearchUserRound: SearchUserRoundIcon,
  ArrowRight: ArrowRightIcon,
  StreetView: StreetViewIcon,
  Edit: EditIcon,
  BatteryLevel: BatteryIcon,
  Debug: DebugIcon,
  Close: CloseIcon,
};

interface IconLibraryProps {
  name: keyof typeof icons;
  color?: string;
  size?: number;
}

interface IconBatteryLibraryProps {
  color?: string;
  size?: number;
  percentage?: number;
}

const RandyIcon: React.FC<IconLibraryProps> = ({ name, color, size }) => {
  const IconComponent = icons[name];
  return <IconComponent color={color} size={size} />;
};

export const RandyBatteryIcon: React.FC<IconBatteryLibraryProps> = ({ color, size, percentage }) => {
  return <BatteryIcon color={color} size={size} percentage={percentage} />;
};

export default RandyIcon;
