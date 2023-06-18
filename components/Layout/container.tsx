import clsx from "clsx";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  full?: boolean;
}

const Container = ({ children, full, className, ...props }: Props) => {
  return (
    <div
      className={clsx(
        `w-full z-0 ${className}`,
        full ? `px-0` : `px-4 sm:px-12 md:px-14`
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
