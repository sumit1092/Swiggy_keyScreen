type StarIconProps = {
  size?: number;
  className?: string;
};

export const StarIcon = ({
  size = 10,
  className = "",
}: StarIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 2L14.94 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L9.06 8.26L12 2Z" />
  </svg>
);