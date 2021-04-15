import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.118 3.302l13.773 8.854L7.118 21.01V3.302z"
        stroke="#fff"
        strokeWidth={1.538}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.118 3.302l13.773 8.854L7.118 21.01V3.302z"
        stroke="#fff"
        strokeWidth={1.538}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default SvgComponent
