interface ButtonProps {
  text: string;
  onClick?: () => void;
  width?: string;
  height?: string;
  radius?: string;
  borderColor?: string;
  textColor?: string;
  bgColor?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  showHoverIcon?: boolean;
  onHoverColor?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const Button = ({
  text,
  onClick,
  width = "auto",
  height = "auto",
  radius = "8px",
  textColor = "white",
  bgColor = "rgb(var(--color-primary))",
  fontSize = "16px",
  fontWeight = "500",
  padding = "12px 24px",
  borderColor = "transparent",
  onHoverColor = "rgb(var(--color-primary-hover))",
  showHoverIcon = false,
  disabled = false,
  icon,
  className = "",
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`transition-all duration-300 flex items-center gap-2 justify-center ${
        disabled ? "opacity-50 cursor-not-allowed" : `hover:bg-${onHoverColor} hover:shadow-lg ${showHoverIcon ? "cursor-pointer" : ""}`
      } ${className}`}
      style={{
        width,
        height,
        borderRadius: radius,
        borderColor,
        color: textColor,
        backgroundColor: bgColor,
        fontSize,
        fontWeight,
        padding,
        border: "none",
      }}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};
