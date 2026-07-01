import type {
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

const Button = ({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps &
  (
    | AnchorHTMLAttributes<HTMLAnchorElement>
    | ButtonHTMLAttributes<HTMLButtonElement>
  )) => {
  const styles =
    variant === "secondary" ? "btn btn--secondary" : "btn btn--primary";

  if (href) {
    return (
      <a href={href} className={`${styles} ${className}`} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={`${styles} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
