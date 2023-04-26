import { SVGProps } from 'react';

export type IconProps = Partial<SVGProps<SVGSVGElement>>;

export const Icons = {
  Analytics: (props: IconProps) => (
    <svg viewBox="0 0 21 20" {...props}>
      <path
        d="M10.0512 19.949C7.4872 19.9468 5.022 18.9598 3.16491 17.1919C1.30782 15.4241 0.200732 13.0104 0.0723654 10.4497C-0.0560012 7.88887 0.804163 5.37661 2.47515 3.43189C4.14614 1.48718 6.50027 0.258612 9.0512 0V4.04C7.9665 4.22351 6.95322 4.70199 6.12235 5.42304C5.29149 6.1441 4.67509 7.07991 4.34068 8.12796C4.00627 9.17602 3.96674 10.2959 4.22642 11.3649C4.4861 12.4339 5.03499 13.4109 5.81294 14.1887C6.5909 14.9666 7.56792 15.5153 8.63698 15.7748C9.70604 16.0344 10.8259 15.9947 11.8739 15.6601C12.9219 15.3255 13.8576 14.709 14.5786 13.878C15.2995 13.0471 15.7779 12.0337 15.9612 10.949H20.0002C19.7491 13.4143 18.5928 15.699 16.755 17.3614C14.9172 19.0237 12.5283 19.9457 10.0502 19.949H10.0512ZM20.0012 8.949H15.9612C15.7536 7.72232 15.1693 6.59067 14.2895 5.71103C13.4097 4.8314 12.2779 4.24738 11.0512 4.04V0C13.3446 0.234573 15.487 1.25263 17.1173 2.88257C18.7476 4.51251 19.7661 6.65467 20.0012 8.948V8.949Z"
        fill="currentColor"
      />
    </svg>
  ),
  DiscoverWeb3: (props: IconProps) => (
    <svg viewBox="0 0 22 24" {...props}>
      <path
        d="M12.0498 2.92301C18.8514 5.97967 20.3331 0.333008 20.3331 0.333008C20.3331 0.333008 19.0381 7.41468 13.0881 10.308C11.8748 10.903 11.1164 11.218 11.1164 11.218L1.35143 6.45801L11.1164 2.45634C11.1164 2.45634 10.8831 2.38634 12.0498 2.92301ZM9.9731 23.6663L0.884766 18.743V8.58134L9.9731 13.213V23.6663ZM12.0264 23.6663L21.1264 18.743V8.58134L12.0264 13.213V23.6663Z"
        fill="currentColor"
      />
    </svg>
  ),
  Dashboard: (props: IconProps) => (
    <svg viewBox="0 0 22 22" {...props}>
      <g clipPath="url(#clip0_115_827)">
        <path
          d="M8.49986 0.0909424H1.68167C0.804432 0.0909424 0.0908203 0.804554 0.0908203 1.6818V5.77271C0.0908203 6.65011 0.804432 7.36373 1.68167 7.36373H8.49986C9.37726 7.36373 10.0909 6.65011 10.0909 5.77271V1.6818C10.0909 0.804554 9.37726 0.0909424 8.49986 0.0909424Z"
          fill="currentColor"
        />
        <path
          d="M8.49998 9.18176H1.6818C0.804554 9.18176 0.0909424 9.89537 0.0909424 10.7728V20.3182C0.0909424 21.1955 0.804554 21.9091 1.6818 21.9091H8.49998C9.37739 21.9091 10.091 21.1955 10.091 20.3182V10.7728C10.091 9.89537 9.37739 9.18176 8.49998 9.18176Z"
          fill="currentColor"
        />
        <path
          d="M20.318 14.6362H13.4998C12.6224 14.6362 11.9088 15.3498 11.9088 16.2273V20.3182C11.9088 21.1954 12.6224 21.909 13.4998 21.909H20.318C21.1953 21.909 21.9089 21.1954 21.9089 20.3182V16.2273C21.9089 15.3498 21.1953 14.6362 20.318 14.6362Z"
          fill="currentColor"
        />
        <path
          d="M20.318 0.0909424H13.4998C12.6224 0.0909424 11.9088 0.804554 11.9088 1.6818V11.2273C11.9088 12.1047 12.6224 12.8183 13.4998 12.8183H20.318C21.1953 12.8183 21.9089 12.1047 21.9089 11.2273V1.6818C21.9089 0.804554 21.1953 0.0909424 20.318 0.0909424V0.0909424Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_115_827">
          <rect
            width="21.8182"
            height="21.8182"
            fill="white"
            transform="translate(0.0908203 0.0909424)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  Ecosystem: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M8.31867 9.16919L11.6896 7.21374C11.7849 7.16146 11.8918 7.13405 12.0005 7.13405C12.1092 7.13405 12.2161 7.16146 12.3114 7.21374L15.6823 9.16919L12.0005 11.2883L8.31867 9.16919ZM11.3869 12.3519L7.70503 10.2246V14.1274C7.70536 14.2346 7.73341 14.3399 7.78645 14.4331C7.83949 14.5263 7.91573 14.6042 8.00776 14.6592L11.3869 16.6065V12.3519ZM12.6141 12.3519V16.6065L15.9932 14.6592C16.0852 14.6042 16.1615 14.5263 16.2145 14.4331C16.2676 14.3399 16.2956 14.2346 16.2959 14.1274V10.2246L12.6141 12.3519ZM21.8596 13.7837C21.5988 15.1941 21.041 16.5328 20.2232 17.711C20.3921 17.996 20.4825 18.3207 20.485 18.6519C20.485 19.1402 20.2911 19.6084 19.9458 19.9536C19.6006 20.2989 19.1324 20.4928 18.6441 20.4928C18.3212 20.486 18.0055 20.3958 17.7278 20.231C16.5495 21.0488 15.2108 21.6066 13.8005 21.8674C13.6993 22.2636 13.469 22.6148 13.1461 22.8657C12.8231 23.1165 12.4258 23.2527 12.0169 23.2527C11.6079 23.2527 11.2106 23.1165 10.8877 22.8657C10.5647 22.6148 10.3344 22.2636 10.2332 21.8674C8.8229 21.6066 7.48419 21.0488 6.30594 20.231C6.02097 20.3999 5.6963 20.4903 5.36503 20.4928C4.87679 20.4928 4.40855 20.2989 4.06332 19.9536C3.71808 19.6084 3.52413 19.1402 3.52413 18.6519C3.52457 18.3277 3.60914 18.0091 3.76958 17.7274C2.95181 16.5491 2.39401 15.2104 2.13322 13.8001C1.737 13.6989 1.38577 13.4686 1.13493 13.1457C0.884086 12.8227 0.747925 12.4254 0.747925 12.0165C0.747925 11.6075 0.884086 11.2102 1.13493 10.8873C1.38577 10.5643 1.737 10.334 2.13322 10.2328C2.39401 8.82251 2.95181 7.4838 3.76958 6.30556C3.60066 6.02058 3.51032 5.69592 3.50776 5.36465C3.50616 5.12271 3.55313 4.88291 3.64588 4.65945C3.73864 4.43599 3.8753 4.23342 4.04776 4.06374C4.34351 3.78989 4.71938 3.61823 5.12001 3.57404C5.52065 3.52985 5.92489 3.61547 6.27322 3.81829C7.44837 2.99489 8.78835 2.43657 10.2005 2.18192C10.3017 1.78571 10.532 1.43447 10.8549 1.18363C11.1779 0.932792 11.5752 0.796631 11.9841 0.796631C12.3931 0.796631 12.7904 0.932792 13.1133 1.18363C13.4363 1.43447 13.6666 1.78571 13.7678 2.18192C15.1913 2.43202 16.5429 2.99053 17.7278 3.81829C18.0807 3.61603 18.4895 3.53306 18.8934 3.5817C19.2973 3.63034 19.6747 3.80801 19.9696 4.08829C20.142 4.25797 20.2787 4.46054 20.3715 4.684C20.4642 4.90746 20.5112 5.14726 20.5096 5.38919C20.4923 5.70238 20.3966 6.00621 20.2314 6.27283C21.0492 7.45107 21.607 8.78979 21.8678 10.2001C22.264 10.3013 22.6152 10.5316 22.8661 10.8545C23.1169 11.1775 23.2531 11.5748 23.2531 11.9837C23.2531 12.3927 23.1169 12.79 22.8661 13.1129C22.6152 13.4359 22.264 13.6662 21.8678 13.7674L21.8596 13.7837ZM19.2741 16.9092C19.9452 15.9223 20.4074 14.8085 20.6323 13.6365C20.3134 13.4915 20.043 13.2578 19.8534 12.9632C19.6638 12.6687 19.563 12.3258 19.563 11.9756C19.563 11.6253 19.6638 11.2824 19.8534 10.9879C20.043 10.6934 20.3134 10.4596 20.6323 10.3146C20.4101 9.14312 19.9507 8.0294 19.2823 7.04192C19.0809 7.11762 18.8675 7.15642 18.6523 7.15647C18.1641 7.15647 17.6958 6.96251 17.3506 6.61728C17.0054 6.27204 16.8114 5.8038 16.8114 5.31556C16.81 5.11234 16.8432 4.91037 16.9096 4.71829C15.9221 4.0499 14.8084 3.59049 13.6369 3.36829C13.4919 3.68715 13.2582 3.95755 12.9636 4.14717C12.6691 4.33679 12.3262 4.43762 11.9759 4.43762C11.6257 4.43762 11.2828 4.33679 10.9883 4.14717C10.6937 3.95755 10.46 3.68715 10.315 3.36829C9.16061 3.59683 8.06418 4.056 7.0914 4.71829C7.1671 4.9197 7.2059 5.13311 7.20594 5.34829C7.20594 5.83652 7.01199 6.30477 6.66675 6.65C6.32152 6.99524 5.85327 7.18919 5.36503 7.18919C5.14538 7.19638 4.92628 7.1631 4.71867 7.09101C4.05029 8.07849 3.59088 9.19221 3.36867 10.3637C3.68754 10.5087 3.95793 10.7424 4.14755 11.037C4.33717 11.3315 4.438 11.6744 4.438 12.0247C4.438 12.3749 4.33717 12.7178 4.14755 13.0123C3.95793 13.3069 3.68754 13.5406 3.36867 13.6856C3.59359 14.8576 4.05578 15.9714 4.72685 16.9583C5.00242 16.8549 5.29898 16.82 5.59102 16.8566C5.88307 16.8932 6.16184 17.0002 6.40334 17.1685C6.64484 17.3367 6.84184 17.5611 6.97738 17.8224C7.11291 18.0837 7.18293 18.374 7.1814 18.6683C7.18135 18.8835 7.14255 19.0969 7.06685 19.2983C8.05433 19.9667 9.16805 20.4261 10.3396 20.6483C10.4846 20.3294 10.7183 20.059 11.0128 19.8694C11.3073 19.6798 11.6502 19.579 12.0005 19.579C12.3508 19.579 12.6937 19.6798 12.9882 19.8694C13.2827 20.059 13.5164 20.3294 13.6614 20.6483C14.8329 20.4261 15.9466 19.9667 16.9341 19.2983C16.8584 19.0969 16.8196 18.8835 16.8196 18.6683C16.818 18.374 16.8881 18.0837 17.0236 17.8224C17.1591 17.5611 17.3561 17.3367 17.5976 17.1685C17.8391 17.0002 18.1179 16.8932 18.41 16.8566C18.702 16.82 18.9986 16.8549 19.2741 16.9583V16.9092Z"
        fill="currentColor"
      />
    </svg>
  ),
  Server: (props: IconProps) => (
    <svg viewBox="0 0 24 20" {...props}>
      <path
        d="M22.5132 0.595947H1.70459C0.883691 0.595947 0.218262 1.30979 0.218262 2.19041V6.9738C0.218262 7.85439 0.883691 8.56827 1.70459 8.56827H22.5132C23.334 8.56827 23.9995 7.85439 23.9995 6.9738V2.19041C23.9995 1.30979 23.334 0.595947 22.5132 0.595947ZM23.2563 6.9738C23.2563 7.41336 22.923 7.77103 22.5132 7.77103H1.70459C1.29481 7.77103 0.961426 7.41336 0.961426 6.9738V2.19041C0.961426 1.75078 1.29481 1.39318 1.70459 1.39318H22.5132C22.923 1.39318 23.2563 1.75078 23.2563 2.19041V6.9738Z"
        fill="currentColor"
      />
      <path
        d="M23.2563 6.9738C23.2563 7.41336 22.923 7.77103 22.5132 7.77103H1.70459C1.29481 7.77103 0.961426 7.41336 0.961426 6.9738V2.19041C0.961426 1.75078 1.29481 1.39318 1.70459 1.39318H22.5132C22.923 1.39318 23.2563 1.75078 23.2563 2.19041V6.9738Z"
        fill="currentColor"
      />
      <path
        d="M22.5132 11.8319H1.70459C0.883691 11.8319 0.218262 12.5458 0.218262 13.4264V18.2098C0.218262 19.0903 0.883691 19.8042 1.70459 19.8042H22.5132C23.334 19.8042 23.9995 19.0903 23.9995 18.2098V13.4264C23.9995 12.5458 23.334 11.8319 22.5132 11.8319ZM23.2563 18.2098C23.2563 18.6493 22.923 19.007 22.5132 19.007H1.70459C1.29481 19.007 0.961426 18.6493 0.961426 18.2098V13.4264C0.961426 12.9867 1.29481 12.6291 1.70459 12.6291H22.5132C22.923 12.6291 23.2563 12.9867 23.2563 13.4264V18.2098Z"
        fill="currentColor"
      />
      <path
        d="M23.2563 18.2098C23.2563 18.6493 22.923 19.007 22.5132 19.007H1.70459C1.29481 19.007 0.961426 18.6493 0.961426 18.2098V13.4264C0.961426 12.9867 1.29481 12.6291 1.70459 12.6291H22.5132C22.923 12.6291 23.2563 12.9867 23.2563 13.4264V18.2098Z"
        fill="currentColor"
      />
      <path
        d="M10.6226 4.18909H3.19095C2.98848 4.18909 2.82446 4.36504 2.82446 4.58228C2.82446 4.79949 2.98848 4.97544 3.19095 4.97544H10.6226C10.8251 4.97544 10.9891 4.79949 10.9891 4.58228C10.9891 4.36504 10.8251 4.18909 10.6226 4.18909Z"
        fill="white"
        stroke="white"
        strokeWidth="0.6"
      />
      <path
        d="M19.912 5.77721C20.5275 5.77721 21.0264 5.24197 21.0264 4.58172C21.0264 3.92147 20.5275 3.38623 19.912 3.38623C19.2965 3.38623 18.7976 3.92147 18.7976 4.58172C18.7976 5.24197 19.2965 5.77721 19.912 5.77721Z"
        fill="white"
        stroke="white"
        strokeWidth="0.6"
      />
      <path
        d="M10.6226 15.4248H3.19095C2.98848 15.4248 2.82446 15.6008 2.82446 15.818C2.82446 16.0352 2.98848 16.2112 3.19095 16.2112H10.6226C10.8251 16.2112 10.9891 16.0352 10.9891 15.818C10.9891 15.6008 10.8251 15.4248 10.6226 15.4248Z"
        fill="white"
        stroke="white"
        strokeWidth="0.6"
      />
      <path
        d="M19.912 17.0134C20.5275 17.0134 21.0264 16.4782 21.0264 15.8179C21.0264 15.1577 20.5275 14.6224 19.912 14.6224C19.2965 14.6224 18.7976 15.1577 18.7976 15.8179C18.7976 16.4782 19.2965 17.0134 19.912 17.0134Z"
        fill="white"
        stroke="white"
        strokeWidth="0.6"
      />
    </svg>
  ),
  Teams: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 21.75C6.62391 21.75 2.25 17.3761 2.25 12C2.25 6.62391 6.62391 2.25 12 2.25C17.3761 2.25 21.75 6.62391 21.75 12C21.75 17.3761 17.3761 21.75 12 21.75ZM12 3.75C7.45312 3.75 3.75 7.45312 3.75 12C3.75 16.5469 7.45312 20.25 12 20.25C16.5469 20.25 20.25 16.5492 20.25 12C20.25 7.45078 16.5492 3.75 12 3.75Z"
        fill="currentColor"
      />
      <path
        d="M15.1721 13.6875C14.3565 13.6875 13.5685 13.3256 12.953 12.6689C12.3442 12.0086 11.9803 11.1595 11.9218 10.2633C11.8529 9.29297 12.1505 8.4 12.7599 7.74984C13.3693 7.09969 14.221 6.75 15.1721 6.75C16.1161 6.75 16.9707 7.10719 17.5782 7.75594C18.1857 8.40469 18.4908 9.30281 18.4219 10.2642C18.3623 11.1599 17.9985 12.0083 17.3907 12.6689C16.7747 13.3256 15.9872 13.6875 15.1721 13.6875ZM7.67911 13.845C6.28411 13.845 5.05739 12.5555 4.94489 10.9702C4.88724 10.1583 5.13942 9.40781 5.65599 8.85703C6.17255 8.30625 6.88505 8.01328 7.67864 8.01328C8.47224 8.01328 9.18427 8.31516 9.69755 8.86359C10.2108 9.41203 10.471 10.1677 10.4124 10.973C10.298 12.5559 9.07177 13.845 7.67911 13.845ZM19.7049 16.6537C19.6304 16.4334 19.449 16.1986 19.0852 15.9759C17.9855 15.3042 16.6327 14.9489 15.1721 14.9489C13.7391 14.9489 12.3488 15.3192 11.2566 15.9919C10.0261 16.7498 9.19927 17.8552 8.86599 19.1878C8.78724 19.5014 8.67239 20.085 8.79521 20.4117C10.7661 21.1612 12.9374 21.1956 14.931 20.5089C16.9246 19.8222 18.6141 18.4579 19.7054 16.6537H19.7049ZM7.67021 18.8142C8.00161 17.4919 8.70708 16.3894 9.80161 15.4978C9.85336 15.4551 9.8927 15.3993 9.91555 15.3363C9.93839 15.2732 9.94391 15.2052 9.93151 15.1392C9.91911 15.0733 9.88925 15.0119 9.84505 14.9615C9.80085 14.911 9.74392 14.8733 9.6802 14.8523C9.1177 14.6728 8.47552 14.5767 7.67911 14.5767C6.56255 14.5767 5.37708 14.8791 4.48505 15.4284C4.23192 15.5845 3.98349 15.6445 3.79224 15.698C4.56008 17.395 5.83345 18.8135 7.43817 19.7592L7.52208 19.7527C7.54043 19.4357 7.59004 19.1214 7.67021 18.8142Z"
        fill="currentColor"
      />
    </svg>
  ),
  CaretRight: (props: IconProps) => (
    <svg viewBox="0 0 11 18" fill="none" {...props}>
      <path
        d="M1.33343 17.0011L9.33343 9.0011L1.33343 1.0011"
        stroke="#2B3E9B"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Logout: (props: IconProps) => (
    <svg viewBox="0 0 21 20" {...props}>
      <path
        d="M18.8333 9.99996L19.38 10.4372L19.7298 9.99996L19.38 9.56267L18.8333 9.99996ZM11.3333 9.29996C10.9467 9.29996 10.6333 9.61336 10.6333 9.99996C10.6333 10.3866 10.9467 10.7 11.3333 10.7V9.29996ZM16.0466 14.6039L19.38 10.4372L18.2867 9.56267L14.9534 13.7293L16.0466 14.6039ZM19.38 9.56267L16.0466 5.39601L14.9534 6.27058L18.2867 10.4372L19.38 9.56267ZM18.8333 9.29996H11.3333V10.7H18.8333V9.29996Z"
        fill="currentColor"
      />
      <path
        d="M12.1667 13.2234V13.3861C12.1667 14.8989 12.1667 15.6554 11.749 16.1956C11.7125 16.2429 11.6739 16.2884 11.6333 16.3322C11.1691 16.833 10.4229 16.9573 8.93065 17.206V17.206C5.90122 17.7109 4.3865 17.9634 3.35692 17.1847C3.26875 17.118 3.18434 17.0465 3.10406 16.9705C2.16666 16.0829 2.16666 14.5473 2.16666 11.4761L2.16666 8.52401C2.16666 5.45278 2.16666 3.91717 3.10406 3.02963C3.18434 2.95362 3.26875 2.88211 3.35692 2.81542C4.3865 2.03668 5.90173 2.28922 8.93217 2.79429V2.79429C10.4227 3.04272 11.168 3.16694 11.6321 3.66652C11.6735 3.71117 11.7129 3.75769 11.7502 3.80593C12.1667 4.34578 12.1667 5.1011 12.1667 6.61174V6.61174"
        stroke="#4B516A"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  ),
  LightMode: (props: IconProps) => (
    <svg viewBox="0 0 18 16" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.79954 0C9.08244 0 9.35375 0.105357 9.55378 0.292893C9.75382 0.48043 9.8662 0.734784 9.8662 1V2C9.8662 2.26522 9.75382 2.51957 9.55378 2.70711C9.35375 2.89464 9.08244 3 8.79954 3C8.51664 3 8.24533 2.89464 8.04529 2.70711C7.84525 2.51957 7.73287 2.26522 7.73287 2V1C7.73287 0.734784 7.84525 0.48043 8.04529 0.292893C8.24533 0.105357 8.51664 0 8.79954 0ZM13.0662 8C13.0662 9.06087 12.6167 10.0783 11.8165 10.8284C11.0164 11.5786 9.93113 12 8.79954 12C7.66795 12 6.5827 11.5786 5.78255 10.8284C4.98239 10.0783 4.53287 9.06087 4.53287 8C4.53287 6.93913 4.98239 5.92172 5.78255 5.17157C6.5827 4.42143 7.66795 4 8.79954 4C9.93113 4 11.0164 4.42143 11.8165 5.17157C12.6167 5.92172 13.0662 6.93913 13.0662 8ZM12.5713 12.95L13.3254 13.657C13.5266 13.8392 13.796 13.94 14.0757 13.9377C14.3554 13.9354 14.6229 13.8302 14.8207 13.6448C15.0184 13.4594 15.1306 13.2086 15.1331 12.9464C15.1355 12.6842 15.028 12.4316 14.8337 12.243L14.0795 11.536C13.8784 11.3538 13.6089 11.253 13.3292 11.2553C13.0496 11.2576 12.782 11.3628 12.5843 11.5482C12.3865 11.7336 12.2743 11.9844 12.2719 12.2466C12.2695 12.5088 12.377 12.7614 12.5713 12.95ZM14.8326 2.343C15.0326 2.53053 15.1449 2.78484 15.1449 3.05C15.1449 3.31516 15.0326 3.56947 14.8326 3.757L14.0795 4.464C13.9811 4.55951 13.8634 4.63569 13.7333 4.6881C13.6032 4.74051 13.4632 4.7681 13.3216 4.76925C13.1799 4.7704 13.0395 4.7451 12.9084 4.69482C12.7773 4.64454 12.6582 4.57029 12.5581 4.4764C12.4579 4.3825 12.3787 4.27085 12.3251 4.14795C12.2714 4.02506 12.2444 3.89338 12.2457 3.7606C12.2469 3.62782 12.2763 3.4966 12.3322 3.3746C12.3881 3.25259 12.4694 3.14225 12.5713 3.05L13.3254 2.343C13.5254 2.15553 13.7967 2.05021 14.0795 2.05021C14.3624 2.05021 14.6336 2.15553 14.8337 2.343H14.8326ZM16.2662 9C16.5491 9 16.8204 8.89464 17.0205 8.70711C17.2205 8.51957 17.3329 8.26522 17.3329 8C17.3329 7.73478 17.2205 7.48043 17.0205 7.29289C16.8204 7.10536 16.5491 7 16.2662 7H15.1995C14.9166 7 14.6453 7.10536 14.4453 7.29289C14.2453 7.48043 14.1329 7.73478 14.1329 8C14.1329 8.26522 14.2453 8.51957 14.4453 8.70711C14.6453 8.89464 14.9166 9 15.1995 9H16.2662ZM8.79954 13C9.08244 13 9.35375 13.1054 9.55378 13.2929C9.75382 13.4804 9.8662 13.7348 9.8662 14V15C9.8662 15.2652 9.75382 15.5196 9.55378 15.7071C9.35375 15.8946 9.08244 16 8.79954 16C8.51664 16 8.24533 15.8946 8.04529 15.7071C7.84525 15.5196 7.73287 15.2652 7.73287 15V14C7.73287 13.7348 7.84525 13.4804 8.04529 13.2929C8.24533 13.1054 8.51664 13 8.79954 13ZM3.51954 4.464C3.61857 4.55691 3.73616 4.63062 3.86558 4.68093C3.995 4.73124 4.13372 4.75716 4.27383 4.7572C4.41393 4.75725 4.55268 4.73142 4.68213 4.6812C4.81159 4.63098 4.92923 4.55734 5.02834 4.4645C5.12744 4.37166 5.20607 4.26142 5.25973 4.14009C5.31339 4.01876 5.34104 3.8887 5.34109 3.75735C5.34114 3.62601 5.31359 3.49593 5.26002 3.37457C5.20645 3.2532 5.12791 3.14291 5.02887 3.05L4.27367 2.343C4.0725 2.16084 3.80305 2.06005 3.52338 2.06233C3.2437 2.0646 2.97617 2.16977 2.7784 2.35518C2.58063 2.54059 2.46845 2.7914 2.46602 3.0536C2.46359 3.3158 2.5711 3.5684 2.7654 3.757L3.51954 4.464ZM5.0278 12.95L4.27367 13.657C4.0725 13.8392 3.80305 13.94 3.52338 13.9377C3.2437 13.9354 2.97617 13.8302 2.7784 13.6448C2.58063 13.4594 2.46845 13.2086 2.46602 12.9464C2.46359 12.6842 2.5711 12.4316 2.7654 12.243L3.51954 11.536C3.72071 11.3538 3.99016 11.253 4.26983 11.2553C4.54951 11.2576 4.81704 11.3628 5.01481 11.5482C5.21258 11.7336 5.32476 11.9844 5.32719 12.2466C5.32962 12.5088 5.22211 12.7614 5.0278 12.95ZM2.39954 9C2.68244 9 2.95375 8.89464 3.15378 8.70711C3.35382 8.51957 3.4662 8.26522 3.4662 8C3.4662 7.73478 3.35382 7.48043 3.15378 7.29289C2.95375 7.10536 2.68244 7 2.39954 7H1.33287C1.04997 7 0.778663 7.10536 0.578624 7.29289C0.378585 7.48043 0.266205 7.73478 0.266205 8C0.266205 8.26522 0.378585 8.51957 0.578624 8.70711C0.778663 8.89464 1.04997 9 1.33287 9H2.39954Z"
        fill="currentColor"
      />
    </svg>
  ),
  DarkMode: (props: IconProps) => (
    <svg viewBox="0 0 16 17" fill="none" {...props}>
      <path
        d="M15.7884 12.4531C14.1158 12.8832 12.3431 12.8253 10.7064 12.287C9.06983 11.7488 7.64702 10.7558 6.62757 9.44032C5.60812 8.12487 5.04044 6.54941 5.00015 4.92386C4.95987 3.2983 5.44889 1.69983 6.40208 0.341411C5.07056 0.683356 3.8474 1.32303 2.83754 2.20555C1.82768 3.08808 1.06126 4.18711 0.604045 5.40836C0.146827 6.6296 0.0124564 7.93661 0.212461 9.21724C0.412465 10.4979 0.940873 11.7139 1.75235 12.761C2.56383 13.8081 3.63416 14.655 4.8715 15.2291C6.10885 15.8031 7.47627 16.0872 8.85647 16.0569C10.2367 16.0267 11.5884 15.6829 12.7958 15.0552C14.0031 14.4275 15.03 13.5346 15.7884 12.4531Z"
        fill="currentColor"
      />
    </svg>
  ),
};

export type Icon = keyof typeof Icons;
