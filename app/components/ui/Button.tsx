import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out whitespace-nowrap";

  const variants = {
    primary:
      "bg-[var(--accent)] text-white hover:bg-[var(--accent-hover)] shadow-[var(--shadow-md)]",
    secondary:
      "bg-[var(--foreground)] text-white hover:bg-[var(--foreground-secondary)]",
    outline:
      "bg-transparent text-[var(--foreground)] border border-[var(--border-strong)] hover:bg-[var(--background-secondary)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-[13px] rounded-[var(--radius-sm)]",
    md: "px-6 py-3 text-[14px] rounded-[var(--radius-md)]",
    lg: "px-8 py-4 text-[16px] rounded-[var(--radius-lg)]",
  };

  const styles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}
