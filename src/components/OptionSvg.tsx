import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        clipPath="url(#prefix__clip0)"
        stroke="#2F3247"
        strokeWidth={2.122}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3.183 16.872v-5.57M3.183 8.12V2.55M9.548 16.872V9.71M9.548 6.529V2.55M15.913 16.872v-3.979M15.913 9.711v-7.16M.796 11.302h4.773M7.16 6.529h4.774M13.526 12.893h4.773" />
      </g>
      <defs>
        <clipPath id="prefix__clip0">
          <path
            fill="#fff"
            transform="translate(0 .164)"
            d="M0 0h19.095v19.095H0z"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
