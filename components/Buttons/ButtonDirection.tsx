interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
      title?: string | undefined;
      titleId?: string | undefined;
    } & React.RefAttributes<SVGSVGElement>
  >;
}

const ButtonDirection = ({ icon: Icon, ...props }: Props) => {
  return (
    <button
      aria-label="slide forward"
      className="z-30 mr-10 focus:outline-none cursor-pointer hover:bg-custom-50 rounded-full p-2 transition-colors duration-200 "
      id="next"
      {...props}
    >
      <Icon className="stroke-custom-300" width={24} strokeWidth={2} />
    </button>
  );
};

export default ButtonDirection;
