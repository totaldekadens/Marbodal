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

interface WideUpperCTextProps {
  title: string;
  color: "dark" | "light";
  className?: string;
}

export const H2 = ({ title, className, color }: H2Props) => {
  return (
    <h2
      className={clsx(
        `${className}`,
        color == "dark" ? `text-custom-300` : `text-custom-50`,
        "text-[34px] sm:text-[46px] lg:text-[55px] leading-[3.5rem] font-serif"
      )}
    >
      {title}
    </h2>
  );
};

export const H2Small = ({ title, className, color }: H2Props) => {
  return (
    <h2
      className={clsx(
        `${className}`,
        color == "dark" ? `text-custom-300` : `text-custom-50`,
        "text-[34px] lg:text-[55px] leading-[2.8rem] lg:leading-[3.5rem] font-serif"
      )}
    >
      {title}
    </h2>
  );
};

export const H3 = ({ title, className, color }: H2Props) => {
  return (
    <h2
      className={clsx(
        `${className}`,
        color == "dark" ? `text-custom-300` : `text-custom-50`,
        "text-[34px] sm:text-[46px] lg:text-[55px] leading-[3.5rem] font-serif"
      )}
    >
      {title}
    </h2>
  );
};

export const WideUpperCText = ({ title, className }: WideUpperCTextProps) => {
  return (
    <p
      className={clsx(
        `${className}`,
        `text-sm uppercase font-normal tracking-widest`
      )}
    >
      {title}
    </p>
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
