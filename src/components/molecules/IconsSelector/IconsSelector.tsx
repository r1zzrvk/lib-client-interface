/* eslint-disable max-lines-per-function */
import { theme } from '@constants'
import { TIcon } from '@types'
import { FC } from 'react'

type TIconsSelectorProps = {
  icon: TIcon
  size?: number
  color?: string
  isMirrored?: boolean
}

export const IconsSelector: FC<TIconsSelectorProps> = ({
  icon,
  size = 24,
  color = theme.colors.white,
  isMirrored = false,
}) => {
  const mirror = isMirrored ? { transform: 'rotate(180deg)' } : {}
  switch (icon) {
    case 'search':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M23.7728 22.6948L17.5762 16.5972C19.1989 14.8343 20.1959 12.5027 20.1959 9.93702C20.1951 4.44861 15.6745 0 10.0976 0C4.52065 0 0 4.44861 0 9.93702C0 15.4254 4.52065 19.874 10.0976 19.874C12.5072 19.874 14.7172 19.0406 16.4532 17.655L22.6738 23.7765C22.9769 24.0751 23.469 24.0751 23.7721 23.7765C24.0759 23.478 24.0759 22.9933 23.7728 22.6948ZM10.0976 18.3452C5.37889 18.3452 1.55365 14.5807 1.55365 9.93702C1.55365 5.29332 5.37889 1.52887 10.0976 1.52887C14.8163 1.52887 18.6415 5.29332 18.6415 9.93702C18.6415 14.5807 14.8163 18.3452 10.0976 18.3452Z"
            fill={color}
          />
        </svg>
      )
    case 'shoppingCart':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.65595 18.8511C6.27214 18.8511 5.15039 20.0037 5.15039 21.4256C5.15039 22.8474 6.27219 24.0001 7.65595 24.0001C9.03976 24.0001 10.1615 22.8474 10.1615 21.4256C10.1616 20.0037 9.03976 18.8511 7.65595 18.8511ZM7.65595 22.8559C6.88718 22.8559 6.26398 22.2155 6.26398 21.4256C6.26398 20.6357 6.88718 19.9954 7.65595 19.9954C8.42472 19.9954 9.04791 20.6357 9.04791 21.4256C9.04796 22.2155 8.42472 22.8559 7.65595 22.8559Z"
            fill={color}
          />
          <path
            d="M18.235 18.8511C16.8512 18.8511 15.7295 20.0037 15.7295 21.4256C15.7295 22.8474 16.8513 24.0001 18.235 24.0001C19.6188 24.0001 20.7406 22.8474 20.7406 21.4256C20.7406 20.0037 19.6189 18.8511 18.235 18.8511ZM18.235 22.8559C17.4663 22.8559 16.8431 22.2155 16.8431 21.4256C16.8431 20.6357 17.4663 19.9954 18.235 19.9954C19.0038 19.9954 19.627 20.6357 19.627 21.4256C19.6271 22.2155 19.0038 22.8559 18.235 22.8559Z"
            fill={color}
          />
          <path
            d="M23.8865 3.83318C23.7706 3.70303 23.6119 3.62156 23.4411 3.60431L5.31741 3.34687L4.8163 1.77355C4.46327 0.721805 3.50475 0.0117718 2.42206 0H0.556797C0.249277 0 0 0.256133 0 0.572111C0 0.888089 0.249277 1.14422 0.556797 1.14422H2.42206C3.02745 1.15796 3.56054 1.55739 3.75839 2.14543L7.29405 13.1013L7.01567 13.7592C6.70517 14.582 6.79842 15.5079 7.26623 16.2479C7.72956 16.9747 8.50904 17.4232 9.35423 17.4494H20.1839C20.4914 17.4494 20.7407 17.1932 20.7407 16.8772C20.7407 16.5613 20.4914 16.3051 20.1839 16.3051H9.35418C8.87688 16.2929 8.43753 16.0349 8.1849 15.6186C7.93509 15.2074 7.88377 14.7008 8.04571 14.2455L8.26845 13.7306L19.989 12.472C21.2764 12.3263 22.3354 11.3641 22.6338 10.0691L23.9701 4.31938C24.0303 4.15381 23.9984 3.9676 23.8865 3.83318ZM21.548 9.81168C21.3673 10.6453 20.6784 11.2603 19.8498 11.3278L8.26845 12.5578L5.67934 4.49109L22.7451 4.74854L21.548 9.81168Z"
            fill={color}
          />
        </svg>
      )
    case 'user':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_118)">
            <path
              d="M12.0001 0C5.38332 0 0.00012207 5.3832 0.00012207 12C0.00012207 14.898 1.03292 17.5592 2.74972 19.6352C2.75412 19.6412 2.75452 19.6488 2.75932 19.6544C3.99892 21.1492 5.55572 22.2952 7.29052 23.0356C7.31052 23.044 7.33012 23.0532 7.35012 23.0616C7.49052 23.1208 7.63252 23.1756 7.77492 23.2292C7.83092 23.2504 7.88692 23.272 7.94372 23.2924C8.06652 23.3364 8.19012 23.378 8.31452 23.418C8.39412 23.4436 8.47372 23.4688 8.55412 23.4928C8.66412 23.5256 8.77452 23.5572 8.88572 23.5872C8.98332 23.6136 9.08172 23.638 9.18012 23.6616C9.27972 23.6856 9.37972 23.7096 9.48012 23.7308C9.59212 23.7548 9.70532 23.776 9.81892 23.7968C9.91012 23.8136 10.0009 23.8312 10.0929 23.846C10.2189 23.8664 10.3457 23.8824 10.4729 23.8988C10.5549 23.9092 10.6365 23.9212 10.7189 23.93C10.8629 23.9452 11.0081 23.956 11.1537 23.966C11.2213 23.9708 11.2885 23.978 11.3565 23.9816C11.5689 23.9936 11.7837 24 12.0001 24C12.2165 24 12.4313 23.9936 12.6445 23.9824C12.7125 23.9788 12.7797 23.9716 12.8473 23.9668C12.9929 23.9564 13.1381 23.946 13.2821 23.9308C13.3645 23.922 13.4461 23.91 13.5281 23.8996C13.6553 23.8832 13.7821 23.8672 13.9081 23.8468C13.9997 23.832 14.0909 23.8144 14.1821 23.7976C14.2953 23.7768 14.4085 23.7556 14.5209 23.7316C14.6213 23.71 14.7209 23.6864 14.8209 23.6624C14.9193 23.6384 15.0177 23.614 15.1153 23.588C15.2265 23.5584 15.3369 23.5264 15.4469 23.4936C15.5273 23.4696 15.6069 23.4444 15.6865 23.4188C15.8109 23.3788 15.9345 23.3372 16.0573 23.2932C16.1137 23.2728 16.1697 23.2512 16.2261 23.23C16.3689 23.1764 16.5105 23.1212 16.6509 23.0624C16.6709 23.054 16.6905 23.0448 16.7105 23.0364C18.4449 22.296 20.0021 21.15 21.2417 19.6552C21.2465 19.6496 21.2469 19.6416 21.2513 19.636C22.9673 17.5592 24.0001 14.898 24.0001 12C24.0001 5.3832 18.6169 0 12.0001 0ZM16.8629 22.088C16.8569 22.0908 16.8513 22.094 16.8453 22.0968C16.7025 22.1656 16.5573 22.2304 16.4109 22.2936C16.3777 22.3076 16.3449 22.322 16.3117 22.336C16.1837 22.3896 16.0541 22.4404 15.9237 22.4892C15.8693 22.5096 15.8149 22.5296 15.7601 22.5488C15.6445 22.59 15.5285 22.6296 15.4113 22.6672C15.3385 22.6904 15.2653 22.7124 15.1921 22.734C15.0881 22.7652 14.9837 22.7952 14.8781 22.8232C14.7893 22.8468 14.6997 22.8684 14.6101 22.8896C14.5161 22.912 14.4225 22.9348 14.3277 22.9548C14.2241 22.9768 14.1197 22.9956 14.0157 23.0144C13.9313 23.03 13.8473 23.0464 13.7621 23.06C13.6449 23.0784 13.5265 23.0932 13.4085 23.108C13.3337 23.1176 13.2593 23.1288 13.1837 23.1368C13.0489 23.1512 12.9129 23.1604 12.7773 23.17C12.7169 23.174 12.6569 23.1808 12.5957 23.184C12.3977 23.1944 12.1993 23.2 12.0001 23.2C11.8009 23.2 11.6025 23.1944 11.4049 23.184C11.3441 23.1808 11.2841 23.1744 11.2233 23.17C11.0873 23.1608 10.9517 23.1512 10.8169 23.1368C10.7413 23.1288 10.6669 23.1176 10.5921 23.108C10.4741 23.0932 10.3557 23.0784 10.2385 23.06C10.1533 23.0464 10.0693 23.03 9.98492 23.0144C9.88052 22.9956 9.77612 22.9764 9.67292 22.9548C9.57812 22.9348 9.48412 22.912 9.39052 22.8896C9.30092 22.868 9.21132 22.8468 9.12252 22.8232C9.01732 22.7952 8.91252 22.7648 8.80852 22.734C8.73532 22.7124 8.66212 22.6904 8.58932 22.6672C8.47212 22.6296 8.35572 22.59 8.24052 22.5488C8.18572 22.5292 8.13132 22.5092 8.07692 22.4892C7.94652 22.4404 7.81692 22.3896 7.68892 22.336C7.65572 22.3224 7.62332 22.308 7.59012 22.294C7.44372 22.2312 7.29852 22.166 7.15532 22.0972C7.14932 22.0944 7.14372 22.0916 7.13772 22.0884C5.74212 21.4132 4.50932 20.4548 3.50892 19.2908C4.28212 16.4436 6.47092 14.1484 9.28692 13.2352C9.34252 13.2692 9.40052 13.2996 9.45772 13.3316C9.49132 13.3504 9.52452 13.3704 9.55852 13.3884C9.67772 13.4516 9.79852 13.5108 9.92212 13.564C10.0169 13.6056 10.1149 13.6408 10.2125 13.6768C10.2317 13.6836 10.2509 13.6912 10.2701 13.698C10.8125 13.89 11.3929 14 12.0001 14C12.6073 14 13.1877 13.89 13.7297 13.698C13.7489 13.6912 13.7681 13.6836 13.7873 13.6768C13.8849 13.6408 13.9829 13.6056 14.0777 13.564C14.2013 13.5108 14.3221 13.4516 14.4413 13.3884C14.4753 13.37 14.5085 13.3504 14.5421 13.3316C14.5993 13.2996 14.6577 13.2692 14.7137 13.2348C17.5297 14.1484 19.7181 16.4436 20.4917 19.2904C19.4913 20.454 18.2585 21.4124 16.8629 22.088ZM7.60012 8.8C7.60012 6.374 9.57412 4.4 12.0001 4.4C14.4261 4.4 16.4001 6.374 16.4001 8.8C16.4001 10.3432 15.5997 11.7012 14.3937 12.4868C14.2361 12.5892 14.0721 12.6808 13.9037 12.7608C13.8837 12.7704 13.8641 12.7804 13.8441 12.7896C12.6857 13.3164 11.3145 13.3164 10.1561 12.7896C10.1361 12.7804 10.1161 12.7704 10.0965 12.7608C9.92772 12.6808 9.76412 12.5892 9.60652 12.4868C8.40052 11.7012 7.60012 10.3432 7.60012 8.8ZM21.0917 18.5292C20.1849 15.8516 18.1161 13.6876 15.4729 12.6596C16.5301 11.7072 17.2001 10.332 17.2001 8.8C17.2001 5.9328 14.8673 3.6 12.0001 3.6C9.13292 3.6 6.80012 5.9328 6.80012 8.8C6.80012 10.332 7.47012 11.7072 8.52772 12.6596C5.88452 13.688 3.81572 15.8516 2.90892 18.5292C1.58372 16.6896 0.800122 14.4352 0.800122 12C0.800122 5.8244 5.82452 0.8 12.0001 0.8C18.1757 0.8 23.2001 5.8244 23.2001 12C23.2001 14.4352 22.4165 16.6896 21.0917 18.5292Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_1_118">
              <rect width={size} height={size} fill={color} />
            </clipPath>
          </defs>
        </svg>
      )
    case 'settings':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_121)">
            <path
              d="M5.12882 4.01866H0.705998C0.316105 4.01866 0.00012207 3.6961 0.00012207 3.29857C0.00012207 2.90105 0.316105 2.57849 0.705998 2.57849H5.12882C5.51871 2.57849 5.83469 2.90105 5.83469 3.29857C5.83469 3.6961 5.51871 4.01866 5.12882 4.01866Z"
              fill={color}
            />
            <path
              d="M7.65624 6.59671C5.87336 6.59671 4.42297 5.11714 4.42297 3.29854C4.42297 1.47958 5.87336 0 7.65624 0C9.43912 0 10.8895 1.47958 10.8895 3.29854C10.8895 5.11719 9.43912 6.59671 7.65624 6.59671ZM7.65624 1.44021C6.65184 1.44021 5.83473 2.27393 5.83473 3.29854C5.83473 4.32316 6.65184 5.1565 7.65624 5.1565C8.66065 5.1565 9.47776 4.32316 9.47776 3.29854C9.47776 2.27393 8.66065 1.44021 7.65624 1.44021Z"
              fill={color}
            />
            <path
              d="M23.2944 4.01866H12.7443C12.3544 4.01866 12.0385 3.6961 12.0385 3.29857C12.0385 2.90105 12.3544 2.57849 12.7443 2.57849H23.2943C23.6842 2.57849 24.0002 2.90105 24.0002 3.29857C24.0002 3.6961 23.6843 4.01866 23.2944 4.01866Z"
              fill={color}
            />
            <path
              d="M17.1338 15.2982C15.3509 15.2982 13.9005 13.8187 13.9005 12.0001C13.9005 10.1815 15.3509 8.7019 17.1338 8.7019C18.9167 8.7019 20.3671 10.1815 20.3671 12.0001C20.3671 13.8187 18.9167 15.2982 17.1338 15.2982ZM17.1338 10.1421C16.1294 10.1421 15.3123 10.9754 15.3123 12.0001C15.3123 13.0247 16.1294 13.858 17.1338 13.858C18.1382 13.858 18.9553 13.0247 18.9553 12.0001C18.9553 10.9754 18.1382 10.1421 17.1338 10.1421Z"
              fill={color}
            />
            <path
              d="M12.0459 12.7201H0.705998C0.316105 12.7201 0.00012207 12.3975 0.00012207 12C0.00012207 11.6025 0.316105 11.2799 0.705998 11.2799H12.0459C12.4358 11.2799 12.7518 11.6025 12.7518 12C12.7518 12.3975 12.4358 12.7201 12.0459 12.7201Z"
              fill={color}
            />
            <path
              d="M23.2944 12.7201H19.6613C19.2714 12.7201 18.9554 12.3975 18.9554 12C18.9554 11.6025 19.2714 11.2799 19.6613 11.2799H23.2944C23.6843 11.2799 24.0003 11.6025 24.0003 12C24.0003 12.3975 23.6843 12.7201 23.2944 12.7201Z"
              fill={color}
            />
            <path
              d="M6.86644 24C5.08357 24 3.63318 22.5205 3.63318 20.7015C3.63318 18.8829 5.08357 17.4033 6.86644 17.4033C8.64932 17.4033 10.0997 18.8829 10.0997 20.7015C10.0997 22.5205 8.64932 24 6.86644 24ZM6.86644 18.8435C5.86204 18.8435 5.04493 19.6769 5.04493 20.7015C5.04493 21.7261 5.86204 22.5598 6.86644 22.5598C7.87085 22.5598 8.68796 21.7261 8.68796 20.7015C8.68796 19.6769 7.87085 18.8435 6.86644 18.8435Z"
              fill={color}
            />
            <path
              d="M23.2942 21.4215H11.9543C11.5644 21.4215 11.2484 21.0989 11.2484 20.7014C11.2484 20.3039 11.5644 19.9813 11.9543 19.9813H23.2942C23.6841 19.9813 24.0001 20.3039 24.0001 20.7014C24.0001 21.0989 23.6841 21.4215 23.2942 21.4215Z"
              fill={color}
            />
            <path
              d="M4.33909 21.4214H0.705998C0.316105 21.4214 0.00012207 21.0989 0.00012207 20.7013C0.00012207 20.3038 0.316105 19.9812 0.705998 19.9812H4.33909C4.72899 19.9812 5.04497 20.3038 5.04497 20.7013C5.04497 21.0989 4.72899 21.4214 4.33909 21.4214Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_1_121">
              <rect width={size} height={size} fill={color} />
            </clipPath>
          </defs>
        </svg>
      )
    case 'minus':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_137)">
            <circle cx="12.0009" cy="12" r="11.5" stroke={color} />
            <line x1="7.63721" y1="11.5" x2="16.3645" y2="11.5" stroke={color} />
          </g>
          <defs>
            <clipPath id="clip0_1_137">
              <rect width={size} height={size} fill={color} transform="translate(0.000854492)" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'plus':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12.0009" cy="12" r="11.5" stroke={color} />
          <path
            d="M12.299 11.6274H15.8849V12.3496H12.299V15.9688H11.5768V12.3496H7.99915V11.6274H11.5768V8H12.299V11.6274Z"
            fill={color}
          />
        </svg>
      )
    case 'exit':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_131)">
            <path
              d="M23.2504 11.2501H13.7504C13.3364 11.2501 13.0004 10.9141 13.0004 10.5001C13.0004 10.0861 13.3364 9.75012 13.7504 9.75012H23.2504C23.6644 9.75012 24.0004 10.0861 24.0004 10.5001C24.0004 10.9141 23.6644 11.2501 23.2504 11.2501Z"
              fill={color}
            />
            <path
              d="M19.5002 15.0002C19.3081 15.0002 19.1162 14.9271 18.9701 14.7803C18.6771 14.4871 18.6771 14.0122 18.9701 13.7192L22.1902 10.4993L18.9701 7.27919C18.6771 6.98622 18.6771 6.51125 18.9701 6.21828C19.2632 5.92513 19.7382 5.92513 20.0312 6.21828L23.7812 9.96828C24.0742 10.2612 24.0742 10.7362 23.7812 11.0292L20.0312 14.7792C19.8842 14.9271 19.6923 15.0002 19.5002 15.0002V15.0002Z"
              fill={color}
            />
            <path
              d="M8.0003 24C7.78625 24 7.58319 23.97 7.38031 23.907L1.36218 21.902C0.543335 21.616 0.000244141 20.853 0.000244141 20.0001V2.00006C0.000244141 0.897034 0.897278 0 2.0003 0C2.21417 0 2.41724 0.0300293 2.6203 0.0930176L8.63824 2.09802C9.45727 2.38403 10.0002 3.14703 10.0002 3.99994V21.9999C10.0002 23.103 9.10333 24 8.0003 24ZM2.0003 1.5C1.72528 1.5 1.50024 1.72504 1.50024 2.00006V20.0001C1.50024 20.213 1.64325 20.4109 1.84723 20.482L7.83716 22.478C7.88019 22.4919 7.93622 22.5 8.0003 22.5C8.27533 22.5 8.50018 22.275 8.50018 21.9999V3.99994C8.50018 3.78699 8.35718 3.58905 8.1532 3.51801L2.16327 1.52197C2.12024 1.50806 2.06421 1.5 2.0003 1.5V1.5Z"
              fill={color}
            />
            <path
              d="M15.2501 8.00006C14.8361 8.00006 14.5001 7.66406 14.5001 7.25006V2.75006C14.5001 2.06103 13.9393 1.5 13.2502 1.5H2.00024C1.58624 1.5 1.25024 1.164 1.25024 0.75C1.25024 0.335999 1.58624 0 2.00024 0H13.2502C14.7673 0 16.0001 1.23303 16.0001 2.75006V7.25006C16.0001 7.66406 15.6641 8.00006 15.2501 8.00006Z"
              fill={color}
            />
            <path
              d="M13.2504 21.0002H9.25024C8.83624 21.0002 8.50024 20.6642 8.50024 20.2502C8.50024 19.8362 8.83624 19.5002 9.25024 19.5002H13.2504C13.9394 19.5002 14.5002 18.9391 14.5002 18.2501V13.7501C14.5002 13.3361 14.8362 13.0001 15.2502 13.0001C15.6642 13.0001 16.0002 13.3361 16.0002 13.7501V18.2501C16.0002 19.7672 14.7674 21.0002 13.2504 21.0002V21.0002Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_1_131">
              <rect width={size} height={size} fill={color} transform="translate(0.000244141)" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'arrow':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.31179 12.6586L17.4125 23.7286C17.7762 24.0911 18.365 24.0905 18.7281 23.7267C19.0909 23.363 19.09 22.7739 18.7263 22.4111L8.2863 12L18.7266 1.58889C19.0903 1.22607 19.0913 0.63728 18.7285 0.273532C18.5465 0.0911887 18.308 1.62129e-05 18.0696 1.62129e-05C17.8317 1.62129e-05 17.5942 0.090579 17.4125 0.271656L6.31179 11.3414C6.13662 11.5157 6.03833 11.7528 6.03833 12C6.03833 12.2471 6.1369 12.484 6.31179 12.6586Z"
            fill={color}
          />
        </svg>
      )
    case 'heart':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1_146)">
            <path
              d="M12 22.3523C11.6583 22.3523 11.3289 22.2286 11.0722 22.0037C10.1027 21.1559 9.16791 20.3592 8.3432 19.6565L8.33899 19.6528C5.92108 17.5923 3.83313 15.8129 2.38037 14.06C0.756409 12.1004 0 10.2424 0 8.21272C0 6.24067 0.676208 4.42133 1.90393 3.0896C3.1463 1.74213 4.85101 1 6.70459 1C8.08997 1 9.3587 1.43799 10.4755 2.3017C11.0391 2.73767 11.5499 3.27124 12 3.89362C12.4503 3.27124 12.9609 2.73767 13.5247 2.3017C14.6415 1.43799 15.9102 1 17.2956 1C19.149 1 20.8539 1.74213 22.0963 3.0896C23.324 4.42133 24 6.24067 24 8.21272C24 10.2424 23.2438 12.1004 21.6198 14.0598C20.1671 15.8129 18.0793 17.5921 15.6617 19.6524C14.8356 20.3563 13.8994 21.1543 12.9276 22.0041C12.6711 22.2286 12.3415 22.3523 12 22.3523V22.3523ZM6.70459 2.40589C5.24835 2.40589 3.91058 2.98706 2.93738 4.04249C1.94971 5.11384 1.4057 6.5948 1.4057 8.21272C1.4057 9.91982 2.04016 11.4466 3.46271 13.163C4.83765 14.8221 6.88275 16.5649 9.25067 18.5829L9.25507 18.5866C10.0829 19.2921 11.0213 20.0919 11.998 20.9459C12.9805 20.0902 13.9204 19.2892 14.7499 18.5826C17.1176 16.5645 19.1625 14.8221 20.5375 13.163C21.9598 11.4466 22.5943 9.91982 22.5943 8.21272C22.5943 6.5948 22.0503 5.11384 21.0626 4.04249C20.0896 2.98706 18.7516 2.40589 17.2956 2.40589C16.2288 2.40589 15.2494 2.745 14.3846 3.4137C13.6139 4.00989 13.077 4.76356 12.7623 5.2909C12.6004 5.56208 12.3155 5.72395 12 5.72395C11.6845 5.72395 11.3996 5.56208 11.2377 5.2909C10.9232 4.76356 10.3863 4.00989 9.61542 3.4137C8.75061 2.745 7.77118 2.40589 6.70459 2.40589V2.40589Z"
              fill={color}
            />
          </g>
          <defs>
            <clipPath id="clip0_1_146">
              <rect width={size} height={size} fill={color} transform="translate(0.000854492)" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'trash':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0621 8.69531C14.7516 8.69531 14.5 8.94692 14.5 9.25737V19.8803C14.5 20.1905 14.7516 20.4424 15.0621 20.4424C15.3725 20.4424 15.6241 20.1905 15.6241 19.8803V9.25737C15.6241 8.94692 15.3725 8.69531 15.0621 8.69531Z"
            fill={color}
          />
          <path
            d="M8.43059 8.69531C8.12014 8.69531 7.86853 8.94692 7.86853 9.25737V19.8803C7.86853 20.1905 8.12014 20.4424 8.43059 20.4424C8.74104 20.4424 8.99265 20.1905 8.99265 19.8803V9.25737C8.99265 8.94692 8.74104 8.69531 8.43059 8.69531Z"
            fill={color}
          />
          <path
            d="M3.59634 7.14503V20.993C3.59634 21.8115 3.89647 22.5801 4.42077 23.1317C4.94265 23.6847 5.66893 23.9987 6.42903 24H17.0634C17.8237 23.9987 18.55 23.6847 19.0716 23.1317C19.5959 22.5801 19.8961 21.8115 19.8961 20.993V7.14503C20.9383 6.86839 21.6136 5.86152 21.4742 4.79207C21.3346 3.72284 20.4236 2.923 19.3452 2.92278H16.4675V2.22021C16.4708 1.62939 16.2372 1.06206 15.8189 0.644685C15.4007 0.227532 14.8325 -0.00475635 14.2417 7.385e-05H9.25074C8.65992 -0.00475635 8.09172 0.227532 7.67346 0.644685C7.25521 1.06206 7.02161 1.62939 7.0249 2.22021V2.92278H4.1472C3.06875 2.923 2.15782 3.72284 2.01818 4.79207C1.87877 5.86152 2.55412 6.86839 3.59634 7.14503V7.14503ZM17.0634 22.8759H6.42903C5.46804 22.8759 4.72046 22.0504 4.72046 20.993V7.19443H18.7719V20.993C18.7719 22.0504 18.0244 22.8759 17.0634 22.8759ZM8.14902 2.22021C8.14529 1.92754 8.26033 1.64585 8.46803 1.43925C8.67551 1.23265 8.95786 1.11914 9.25074 1.12419H14.2417C14.5345 1.11914 14.8169 1.23265 15.0244 1.43925C15.2321 1.64563 15.3471 1.92754 15.3434 2.22021V2.92278H8.14902V2.22021ZM4.1472 4.0469H19.3452C19.904 4.0469 20.3569 4.49984 20.3569 5.05861C20.3569 5.61737 19.904 6.07031 19.3452 6.07031H4.1472C3.58844 6.07031 3.1355 5.61737 3.1355 5.05861C3.1355 4.49984 3.58844 4.0469 4.1472 4.0469V4.0469Z"
            fill={color}
          />
          <path
            d="M11.7463 8.69531C11.4358 8.69531 11.1842 8.94692 11.1842 9.25737V19.8803C11.1842 20.1905 11.4358 20.4424 11.7463 20.4424C12.0567 20.4424 12.3083 20.1905 12.3083 19.8803V9.25737C12.3083 8.94692 12.0567 8.69531 11.7463 8.69531Z"
            fill={color}
          />
        </svg>
      )
    case 'mobile-search':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.71 20.2905L18 16.6105C19.4401 14.8149 20.1375 12.5358 19.9488 10.2418C19.7601 7.94777 18.6997 5.81326 16.9855 4.27712C15.2714 2.74098 13.0338 1.91998 10.7329 1.98294C8.43203 2.0459 6.24272 2.98803 4.61514 4.61561C2.98756 6.24319 2.04543 8.43251 1.98247 10.7334C1.91951 13.0343 2.7405 15.2718 4.27664 16.986C5.81278 18.7001 7.9473 19.7606 10.2413 19.9493C12.5353 20.138 14.8144 19.4406 16.61 18.0005L20.29 21.6805C20.383 21.7742 20.4936 21.8486 20.6154 21.8994C20.7373 21.9501 20.868 21.9763 21 21.9763C21.132 21.9763 21.2627 21.9501 21.3846 21.8994C21.5064 21.8486 21.617 21.7742 21.71 21.6805C21.8902 21.494 21.991 21.2448 21.991 20.9855C21.991 20.7261 21.8902 20.4769 21.71 20.2905ZM11 18.0005C9.61553 18.0005 8.26215 17.5899 7.111 16.8208C5.95986 16.0516 5.06265 14.9583 4.53284 13.6793C4.00303 12.4002 3.8644 10.9927 4.1345 9.63484C4.4046 8.27697 5.07128 7.02969 6.05025 6.05073C7.02922 5.07176 8.2765 4.40507 9.63436 4.13498C10.9922 3.86488 12.3997 4.0035 13.6788 4.53332C14.9579 5.06313 16.0511 5.96034 16.8203 7.11148C17.5895 8.26263 18 9.616 18 11.0005C18 12.857 17.2625 14.6375 15.9497 15.9502C14.637 17.263 12.8565 18.0005 11 18.0005Z"
            fill={color}
          />
        </svg>
      )
    case 'mobile-home':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 8.00047L14 2.74047C13.45 2.24852 12.7379 1.97654 12 1.97654C11.2621 1.97654 10.55 2.24852 10 2.74047L4 8.00047C3.68237 8.28455 3.4289 8.63303 3.25648 9.02272C3.08405 9.4124 2.99662 9.83435 3 10.2605V19.0005C3 19.7961 3.31607 20.5592 3.87868 21.1218C4.44129 21.6844 5.20435 22.0005 6 22.0005H18C18.7957 22.0005 19.5587 21.6844 20.1213 21.1218C20.6839 20.5592 21 19.7961 21 19.0005V10.2505C21.002 9.82603 20.9139 9.40601 20.7415 9.01815C20.5691 8.63029 20.3164 8.28343 20 8.00047ZM14 20.0005H10V15.0005C10 14.7353 10.1054 14.4809 10.2929 14.2934C10.4804 14.1058 10.7348 14.0005 11 14.0005H13C13.2652 14.0005 13.5196 14.1058 13.7071 14.2934C13.8946 14.4809 14 14.7353 14 15.0005V20.0005ZM19 19.0005C19 19.2657 18.8946 19.52 18.7071 19.7076C18.5196 19.8951 18.2652 20.0005 18 20.0005H16V15.0005C16 14.2048 15.6839 13.4418 15.1213 12.8792C14.5587 12.3165 13.7957 12.0005 13 12.0005H11C10.2044 12.0005 9.44129 12.3165 8.87868 12.8792C8.31607 13.4418 8 14.2048 8 15.0005V20.0005H6C5.73479 20.0005 5.48043 19.8951 5.2929 19.7076C5.10536 19.52 5 19.2657 5 19.0005V10.2505C5.00018 10.1085 5.0306 9.96817 5.08922 9.83885C5.14784 9.70953 5.23333 9.59418 5.34 9.50047L11.34 4.25047C11.5225 4.09015 11.7571 4.00174 12 4.00174C12.2429 4.00174 12.4775 4.09015 12.66 4.25047L18.66 9.50047C18.7667 9.59418 18.8522 9.70953 18.9108 9.83885C18.9694 9.96817 18.9998 10.1085 19 10.2505V19.0005Z"
            fill={color}
          />
        </svg>
      )
    case 'mobile-categories':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 13.0005H3C2.73478 13.0005 2.48043 13.1058 2.29289 13.2934C2.10536 13.4809 2 13.7353 2 14.0005V21.0005C2 21.2657 2.10536 21.52 2.29289 21.7076C2.48043 21.8951 2.73478 22.0005 3 22.0005H10C10.2652 22.0005 10.5196 21.8951 10.7071 21.7076C10.8946 21.52 11 21.2657 11 21.0005V14.0005C11 13.7353 10.8946 13.4809 10.7071 13.2934C10.5196 13.1058 10.2652 13.0005 10 13.0005ZM9 20.0005H4V15.0005H9V20.0005ZM21 2.00047H14C13.7348 2.00047 13.4804 2.10583 13.2929 2.29337C13.1054 2.4809 13 2.73526 13 3.00047V10.0005C13 10.2657 13.1054 10.52 13.2929 10.7076C13.4804 10.8951 13.7348 11.0005 14 11.0005H21C21.2652 11.0005 21.5196 10.8951 21.7071 10.7076C21.8946 10.52 22 10.2657 22 10.0005V3.00047C22 2.73526 21.8946 2.4809 21.7071 2.29337C21.5196 2.10583 21.2652 2.00047 21 2.00047ZM20 9.00047H15V4.00047H20V9.00047ZM21 13.0005H14C13.7348 13.0005 13.4804 13.1058 13.2929 13.2934C13.1054 13.4809 13 13.7353 13 14.0005V21.0005C13 21.2657 13.1054 21.52 13.2929 21.7076C13.4804 21.8951 13.7348 22.0005 14 22.0005H21C21.2652 22.0005 21.5196 21.8951 21.7071 21.7076C21.8946 21.52 22 21.2657 22 21.0005V14.0005C22 13.7353 21.8946 13.4809 21.7071 13.2934C21.5196 13.1058 21.2652 13.0005 21 13.0005ZM20 20.0005H15V15.0005H20V20.0005ZM10 2.00047H3C2.73478 2.00047 2.48043 2.10583 2.29289 2.29337C2.10536 2.4809 2 2.73526 2 3.00047V10.0005C2 10.2657 2.10536 10.52 2.29289 10.7076C2.48043 10.8951 2.73478 11.0005 3 11.0005H10C10.2652 11.0005 10.5196 10.8951 10.7071 10.7076C10.8946 10.52 11 10.2657 11 10.0005V3.00047C11 2.73526 10.8946 2.4809 10.7071 2.29337C10.5196 2.10583 10.2652 2.00047 10 2.00047ZM9 9.00047H4V4.00047H9V9.00047Z"
            fill={color}
          />
        </svg>
      )
    case 'mobile-cart':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.49 7.52047C20.4843 7.49411 20.4843 7.46684 20.49 7.44047C20.4852 7.41739 20.4852 7.39355 20.49 7.37047V7.28047L20.43 7.13047C20.4056 7.08954 20.3753 7.05247 20.34 7.02047L20.25 6.94047H20.2L16.26 4.45047L12.54 2.15047C12.4539 2.0822 12.3555 2.03126 12.25 2.00047H12.17C12.0806 1.98555 11.9894 1.98555 11.9 2.00047H11.8C11.6838 2.02617 11.5725 2.07004 11.47 2.13047L4.00001 6.78047L3.91001 6.85047L3.82001 6.93047L3.72001 7.00047L3.67001 7.06047L3.61001 7.21047V7.30047V7.36047C3.60029 7.42679 3.60029 7.49416 3.61001 7.56047V16.2905C3.60967 16.4604 3.65264 16.6276 3.73488 16.7764C3.81711 16.9251 3.93589 17.0504 4.08001 17.1405L11.58 21.7805L11.73 21.8405H11.81C11.9792 21.8941 12.1608 21.8941 12.33 21.8405H12.41L12.56 21.7805L20 17.2105C20.1441 17.1204 20.2629 16.9951 20.3451 16.8464C20.4274 16.6976 20.4703 16.5304 20.47 16.3605V7.63047C20.47 7.63047 20.49 7.56047 20.49 7.52047ZM12 4.17047L13.78 5.27047L8.19001 8.73047L6.40001 7.63047L12 4.17047ZM11 19.1705L5.50001 15.8105V9.42047L11 12.8205V19.1705ZM12 11.0605L10.09 9.91047L15.68 6.44047L17.6 7.63047L12 11.0605ZM18.5 15.7805L13 19.2005V12.8205L18.5 9.42047V15.7805Z"
            fill={color}
          />
        </svg>
      )
    case 'mobile-user':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2.00047C10.0605 2.00416 8.16387 2.57178 6.54122 3.63421C4.91856 4.69664 3.63988 6.20801 2.86093 7.98424C2.08197 9.76047 1.83636 11.7249 2.15401 13.6382C2.47166 15.5516 3.33887 17.3312 4.64999 18.7605C5.58641 19.7755 6.72293 20.5856 7.98793 21.1397C9.25292 21.6938 10.619 21.9798 12 21.9798C13.381 21.9798 14.7471 21.6938 16.012 21.1397C17.277 20.5856 18.4136 19.7755 19.35 18.7605C20.6611 17.3312 21.5283 15.5516 21.846 13.6382C22.1636 11.7249 21.918 9.76047 21.139 7.98424C20.3601 6.20801 19.0814 4.69664 17.4588 3.63421C15.8361 2.57178 13.9395 2.00416 12 2.00047ZM12 20.0005C9.92845 19.9973 7.9389 19.1908 6.44999 17.7505C6.90203 16.65 7.67102 15.7088 8.65924 15.0464C9.64746 14.384 10.8103 14.0303 12 14.0303C13.1897 14.0303 14.3525 14.384 15.3407 15.0464C16.329 15.7088 17.0979 16.65 17.55 17.7505C16.0611 19.1908 14.0715 19.9973 12 20.0005ZM9.99999 10.0005C9.99999 9.60491 10.1173 9.21823 10.337 8.88933C10.5568 8.56043 10.8692 8.30409 11.2346 8.15271C11.6001 8.00134 12.0022 7.96173 12.3902 8.0389C12.7781 8.11607 13.1345 8.30655 13.4142 8.58626C13.6939 8.86596 13.8844 9.22233 13.9616 9.61029C14.0387 9.99825 13.9991 10.4004 13.8477 10.7658C13.6964 11.1313 13.44 11.4436 13.1111 11.6634C12.7822 11.8832 12.3955 12.0005 12 12.0005C11.4696 12.0005 10.9608 11.7898 10.5858 11.4147C10.2107 11.0396 9.99999 10.5309 9.99999 10.0005ZM18.91 16.0005C18.0165 14.4722 16.6414 13.2835 15 12.6205C15.5092 12.0431 15.8409 11.3311 15.9555 10.5699C16.07 9.80869 15.9625 9.03059 15.6457 8.32897C15.329 7.62735 14.8166 7.03203 14.1699 6.61444C13.5232 6.19685 12.7698 5.97472 12 5.97472C11.2302 5.97472 10.4768 6.19685 9.83008 6.61444C9.1834 7.03203 8.67096 7.62735 8.35424 8.32897C8.03752 9.03059 7.92997 9.80869 8.04452 10.5699C8.15906 11.3311 8.49082 12.0431 8.99999 12.6205C7.35859 13.2835 5.98346 14.4722 5.08999 16.0005C4.37793 14.7876 4.00171 13.4069 3.99999 12.0005C3.99999 9.87874 4.84284 7.84391 6.34313 6.34362C7.84342 4.84333 9.87826 4.00047 12 4.00047C14.1217 4.00047 16.1566 4.84333 17.6568 6.34362C19.1571 7.84391 20 9.87874 20 12.0005C19.9983 13.4069 19.622 14.7876 18.91 16.0005Z"
            fill={color}
          />
        </svg>
      )
    case 'mobile-heart':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.16 5.00047C19.1 3.93768 17.6948 3.28901 16.1983 3.17164C14.7019 3.05427 13.2128 3.47594 12 4.36047C10.7277 3.41411 9.14399 2.98499 7.56792 3.15951C5.99185 3.33404 4.54044 4.09925 3.50597 5.30106C2.47151 6.50287 1.93082 8.05199 1.9928 9.63649C2.05478 11.221 2.71482 12.7231 3.84 13.8405L10.05 20.0605C10.57 20.5723 11.2704 20.8591 12 20.8591C12.7296 20.8591 13.43 20.5723 13.95 20.0605L20.16 13.8405C21.3276 12.6657 21.9829 11.0767 21.9829 9.42047C21.9829 7.7642 21.3276 6.17521 20.16 5.00047ZM18.75 12.4605L12.54 18.6705C12.4693 18.7418 12.3852 18.7985 12.2925 18.8371C12.1999 18.8758 12.1004 18.8957 12 18.8957C11.8996 18.8957 11.8001 18.8758 11.7075 18.8371C11.6148 18.7985 11.5307 18.7418 11.46 18.6705L5.25 12.4305C4.46576 11.6288 4.02661 10.5519 4.02661 9.43047C4.02661 8.30901 4.46576 7.23213 5.25 6.43047C6.04916 5.64146 7.12697 5.19904 8.25 5.19904C9.37303 5.19904 10.4508 5.64146 11.25 6.43047C11.343 6.5242 11.4536 6.5986 11.5754 6.64937C11.6973 6.70013 11.828 6.72627 11.96 6.72627C12.092 6.72627 12.2227 6.70013 12.3446 6.64937C12.4664 6.5986 12.577 6.5242 12.67 6.43047C13.4692 5.64146 14.547 5.19904 15.67 5.19904C16.793 5.19904 17.8708 5.64146 18.67 6.43047C19.465 7.22162 19.9186 8.29267 19.9335 9.41416C19.9485 10.5357 19.5236 11.6184 18.75 12.4305V12.4605Z"
            fill={color}
          />
        </svg>
      )
    case 'mobile-back':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.50001 12.8005L14.2 18.4005C14.6 18.8005 15.2 18.8005 15.6 18.4005C16 18.0005 16 17.4005 15.6 17.0005L10.7 12.0005L15.6 7.00047C16 6.60047 16 6.00047 15.6 5.60047C15.4 5.40047 15.2 5.30047 14.9 5.30047C14.6 5.30047 14.4 5.40047 14.2 5.60047L8.50001 11.2005C8.10001 11.7005 8.10001 12.3005 8.50001 12.8005C8.50001 12.7005 8.50001 12.7005 8.50001 12.8005Z"
            fill={color}
          />
        </svg>
      )
    case 'mobile-plus':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 11.0005H13V5.00047C13 4.73526 12.8946 4.4809 12.7071 4.29337C12.5196 4.10583 12.2652 4.00047 12 4.00047C11.7348 4.00047 11.4804 4.10583 11.2929 4.29337C11.1054 4.4809 11 4.73526 11 5.00047V11.0005H5C4.73478 11.0005 4.48043 11.1058 4.29289 11.2934C4.10536 11.4809 4 11.7353 4 12.0005C4 12.2657 4.10536 12.52 4.29289 12.7076C4.48043 12.8951 4.73478 13.0005 5 13.0005H11V19.0005C11 19.2657 11.1054 19.52 11.2929 19.7076C11.4804 19.8951 11.7348 20.0005 12 20.0005C12.2652 20.0005 12.5196 19.8951 12.7071 19.7076C12.8946 19.52 13 19.2657 13 19.0005V13.0005H19C19.2652 13.0005 19.5196 12.8951 19.7071 12.7076C19.8946 12.52 20 12.2657 20 12.0005C20 11.7353 19.8946 11.4809 19.7071 11.2934C19.5196 11.1058 19.2652 11.0005 19 11.0005Z"
            fill={color}
          />
        </svg>
      )
    case 'mobile-minus':
      return (
        <svg
          width={size}
          height={size}
          style={mirror}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 11.0005H5C4.73478 11.0005 4.48043 11.1058 4.29289 11.2934C4.10536 11.4809 4 11.7353 4 12.0005C4 12.2657 4.10536 12.52 4.29289 12.7076C4.48043 12.8951 4.73478 13.0005 5 13.0005H19C19.2652 13.0005 19.5196 12.8951 19.7071 12.7076C19.8946 12.52 20 12.2657 20 12.0005C20 11.7353 19.8946 11.4809 19.7071 11.2934C19.5196 11.1058 19.2652 11.0005 19 11.0005Z"
            fill={color}
          />
        </svg>
      )
    default:
      return <svg />
  }
}
