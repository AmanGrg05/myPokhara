function HeroSection() {
  function handleSearch(event) {
    event.preventDefault();
  }

  return (
    <section className="relative isolate min-h-[620px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1562462181-b228e3cff9ad?auto=format&fit=crop&w=2400&q=85"
          alt="Phewa Lake and the mountains of Pokhara"
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Image Overlay */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#f8f7f3]/65 via-[#f8f7f3]/75 to-[#f8f7f3]" />

      {/* Subtle image tint */}
      <div className="absolute inset-0 -z-10 bg-[#164a43]/5" />

      {/* Hero Content */}
      <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-24 sm:px-8 lg:px-12">
        <div className="w-full">
          {/* Content Container */}
          <div className="mx-auto max-w-4xl text-center">
            {/* Eyebrow */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#164a43]/10 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#164a43] shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b98545]" />
              Discover Pokhara
            </div>

            {/* Main Heading */}
            <h1 className="text-balance text-5xl font-semibold leading-[1.04] text-[#173f39] sm:text-6xl md:text-7xl lg:text-[76px]">
              Everything{" "}
              <span className="font-serif italic text-[#b98545]">Pokhara</span>
              <br className="hidden sm:block" />
              at your fingertips.
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[#536762] sm:text-lg">
              Discover the best places to eat, stay, explore, and experience
              Pokhara — all in one place.
            </p>

            {/* Search */}
            <form
              onSubmit={handleSearch}
              role="search"
              className="mx-auto mt-10 max-w-2xl"
            >
              <div className="flex flex-col gap-2 rounded-2xl border border-white/80 bg-white p-2 shadow-[0_20px_60px_rgba(22,74,67,0.14)] transition-shadow duration-300 focus-within:shadow-[0_20px_70px_rgba(22,74,67,0.2)] sm:flex-row sm:items-center">
                {/* Search Input */}
                <div className="flex min-w-0 flex-1 items-center">
                  {/* Search Icon */}
                  <div className="flex shrink-0 items-center pl-3 sm:pl-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.8"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5 text-[#7b8985]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-4.35-4.35m2.1-5.4a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                      />
                    </svg>
                  </div>

                  {/* Accessible Label */}
                  <label htmlFor="hero-search" className="sr-only">
                    Search Pokhara
                  </label>

                  {/* Input */}
                  <input
                    id="hero-search"
                    type="search"
                    placeholder="What are you looking for?"
                    autoComplete="off"
                    className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-[#193b36] outline-none placeholder:text-[#8a9692] sm:px-4 sm:text-base"
                  />
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  className="w-full shrink-0 rounded-xl bg-[#164a43] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#123e38] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98545] focus-visible:ring-offset-2 active:scale-[0.98] sm:w-auto sm:px-7"
                >
                  Search
                </button>
              </div>
            </form>

            {/* Search Suggestions */}
            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-[#667570] sm:text-sm">
              <span>Try:</span>

              <button className="font-medium text-[#164a43] underline decoration-[#164a43]/30 underline-offset-4 transition hover:text-[#b98545]">
                Restaurants
              </button>

              <span className="text-[#aab2ae]">·</span>

              <button className="font-medium text-[#164a43] underline decoration-[#164a43]/30 underline-offset-4 transition hover:text-[#b98545]">
                Hotels
              </button>

              <span className="text-[#aab2ae]">·</span>

              <button className="font-medium text-[#164a43] underline decoration-[#164a43]/30 underline-offset-4 transition hover:text-[#b98545]">
                Activities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
