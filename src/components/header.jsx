import { Link } from "react-router";
function Header() {
  return (
    <div>
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/mypokhara.jpg"
              alt="myPokhara"
              className="h-10 w-10 object-contain rounded-md"
            />
            <span className="font-serif font-bold text-xl text-primary hidden sm:block">
              myPokhara
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <Link
                to="/"
                className="hover:text-primary text-[15px] transition-colors font-medium"
              >
                Home
              </Link>

              <Link
                to="/explore"
                className="hover:text-primary text-[15px] transition-colors font-medium"
              >
                Explore
              </Link>
              <Link
                to="/services"
                className="hover:text-primary text-[15px] transition-colors font-medium"
              >
                Services
              </Link>
              <Link
                to="/bookings"
                className="hover:text-primary text-[15px] transition-colors font-medium"
              >
                Bookings
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
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
