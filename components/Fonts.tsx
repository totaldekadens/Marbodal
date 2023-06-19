import clsx from "clsx";

interface H2Props {
  title: string;
  color: "dark" | "light";
  className?: string;
}

interface PProps {
  text: string;
  color: "dark" | "light";
  className?: string;
}

export const H2 = ({ title, className, color }: H2Props) => {
  return (
    <h2
      className={clsx(
        `${className}`,
        color == "dark" ? `text-custom-300` : `text-custom-50`,
        "text-[46px] lg:text-[55px] leading-none font-serif"
      )}
    >
      {title}
    </h2>
  );
};

export const P = ({ text, className, color }: PProps) => {
  return (
    <p
      className={clsx(
        `${className}`,
        color == "dark" ? `text-custom-300` : `text-custom-50`
      )}
    >
      {text}
    </p>
  );
};
