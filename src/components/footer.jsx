function Footer() {
  return (
    <footer className="border-t border-[#dfe5e1] bg-[#edf1ee] text-[#193b36]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="mb-5 inline-flex items-center gap-3">
              <img
                src="/mypokhara.jpg"
                alt="myPokhara"
                className="h-9 w-9 rounded-lg object-contain"
              />

              <span className="font-serif text-xl font-semibold tracking-tight text-[#164a43]">
                myPokhara
              </span>
            </a>

            <p className="max-w-xs text-sm leading-6 text-[#65736f]">
              Your all-in-one guide to discovering the best of Pokhara. Find
              places to eat, stay, explore, and experience the city.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#193b36]">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[#65736f] transition-colors hover:text-[#164a43]"
                >
                  Restaurants
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#65736f] transition-colors hover:text-[#164a43]"
                >
                  Hotels & Stays
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#65736f] transition-colors hover:text-[#164a43]"
                >
                  Activities
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#65736f] transition-colors hover:text-[#164a43]"
                >
                  Shopping
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#193b36]">
              Services
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[#65736f] transition-colors hover:text-[#164a43]"
                >
                  Ride Booking
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#65736f] transition-colors hover:text-[#164a43]"
                >
                  Local Services
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#65736f] transition-colors hover:text-[#164a43]"
                >
                  Jobs Portal
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#65736f] transition-colors hover:text-[#164a43]"
                >
                  Emergency Contacts
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#193b36]">
              myPokhara
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#"
                  className="text-[#65736f] transition-colors hover:text-[#164a43]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#65736f] transition-colors hover:text-[#164a43]"
                >
                  Partner with Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#65736f] transition-colors hover:text-[#164a43]"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-[#65736f] transition-colors hover:text-[#164a43]"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-[#dfe5e1] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#7a8783]">
            © 2026 myPokhara. All rights reserved.
          </p>

          <p className="text-xs text-[#7a8783]">Made for Pokhara, Nepal.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
