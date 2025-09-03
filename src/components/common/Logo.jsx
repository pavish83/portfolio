export default function Logo({ size = 60, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ display: "block" }}
    >
      <rect width="60" height="60" rx="15" fill="url(#grad)" />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="'JetBrains Mono', 'Fira Mono', monospace"
        fontWeight="bold"
        fontSize="28"
        fill="#fff"
        letterSpacing="1"
      >
        {"<P>"}
      </text>
      <rect
        x="18"
        y="47"
        width="24"
        height="4"
        rx="2"
        fill="#36e4c7"
        opacity="0.65"
      />
      <rect
        x="22"
        y="53"
        width="16"
        height="3"
        rx="1.5"
        fill="#7f67e6"
        opacity="0.65"
      />
      <defs>
        <linearGradient
          id="grad"
          x1="0"
          y1="0"
          x2="60"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2b9df2" />
          <stop offset="1" stopColor="#6e60f9" />
        </linearGradient>
      </defs>
    </svg>
  );
}