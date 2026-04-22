import NavbarDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <NavbarDesktop />
        <NavMobile />
      </div>
    </header>
  );
};

export default Navbar;
