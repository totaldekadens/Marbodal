import clsx from "clsx";

interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  full?: boolean;
}

const Container = ({ children, full, className, ...props }: Props) => {
  return (
    <div
      className={clsx(
        `w-full z-0 flex flex-col ${className}`,
        full ? `px-0` : `px-4 md:px-6 lg:px-14 xl:px-[96px]`
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
