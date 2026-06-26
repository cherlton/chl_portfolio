import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <a
      href="mailto:cherltonmhangwana@gmail.com?subject=Hiring%20Inquiry"
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </a>
  );
};

export default NavbarBtn;
