import { NavLink } from "react-router";
function Header() {
  const navLinkClass = ({ isActive }) =>
    [
      "relative inline-block text-sm font-medium transition-colors duration-200",
      "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-0.5",
      "after:transition-transform after:duration-700 after:origin-center",
      isActive
        ? "text-[#b98545] font-semibold after:bg-[#b98545] after:scale-x-100"
        : "text-white hover:text-[#e9d9c2] after:bg-white after:scale-x-0 hover:after:scale-x-100",
    ].join(" ");

  return (
    <div>
      <header className="sticky top-0 z-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 -ml-2 sm:-ml-4">
            <img
              src="/mypokhara.jpg"
              alt="myPokhara"
              className="h-10 w-10 object-contain rounded-md"
            />
            <span className="font-serif font-bold text-xl text-white hidden sm:block">
              myPokhara
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <NavLink to="/" end className={navLinkClass}>
                Home
              </NavLink>

              <NavLink to="/explore" className={navLinkClass}>
                Explore
              </NavLink>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
              <NavLink to="/bookings" className={navLinkClass}>
                Bookings
              </NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-4 -mr-2 sm:-mr-4">
            <button className="rounded-full bg-[#0D3B3A] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0A302F]">
              Register
            </button>
            <button className="rounded-full bg-[#0D3B3A] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0A302F]">
              Login
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
