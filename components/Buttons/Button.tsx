import clsx from "clsx";
import Link from "next/link";

const variantStyle = {
  light: "text-custom-300 bg-custom-50 hover:bg-custom-50/90",
  dark: "text-custom-50 bg-custom-300 hover:bg-custom-300/90",
  modest: "text-custom-300 border border-custom-300 hover:bg-custom-300/10",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "light" | "dark" | "modest";
  title: string;
  className?: string;
  href?: string;
  small?: boolean;
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant: "light" | "dark" | "modest";
  title: string;
  className?: string;
  href?: string;
}

const Button = ({
  variant,
  className,
  href,
  title,
  small,
  ...props
}: ButtonProps & LinkProps) => {
  className = clsx(
    "rounded-sm font-sans text-center",
    variantStyle[variant],
    className,
    small ? "text-xs lg:text-base p-2.5" : "text-base px-5 py-3"
  );
  return href ? (
    <Link href={href} className={className} {...props}>
      {title}
    </Link>
  ) : (
    <button className={className} {...props}>
      {title}
    </button>
  );
};

export default Button;
