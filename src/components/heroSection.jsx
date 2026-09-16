function HeroSection() {
  function handleSearch(event) {
    event.preventDefault();
  }
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden">
      {/* Hero Content */}
      <div className="mx-auto flex min-h-[620px] max-w-7xl items-center px-9 py-24 sm:px-12 lg:px-16">
        <div className="w-full">
          {/* Content Container */}
          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#164a43]/10 bg-white/70 px-7.5 py-1.5 text-[15px] font-semibold uppercase tracking-[0.14em] text-[#164a43] shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b98545]" />
              Discover Pokhara
            </div>

            {/* Main Heading */}
            <h1 className="text-balance text-3xl font-semibold leading-[1.1] text-[#173f39] sm:text-4xl md:text-5xl lg:text-[66px]">
              Everything
              <span className="font-serif italic text-[#b98545]"> Pokhara</span>
              <br className="hidden sm:block" /> at your fingertips.
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white sm:text-base">
              Discover the best places to eat, stay, explore, and experience
              Pokhara — all in one place.
            </p>
          </div>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            role="search"
            className="mx-auto mt-10 max-w-lg"
          >
            <div className="flex flex-col gap-1.5 rounded-xl border border-white/80 bg-white p-1.5 shadow-[0_20px_60px_rgba(22,74,67,0.14)] transition-shadow duration-300 focus-within:shadow-[0_20px_70px_rgba(22,74,67,0.2)] sm:flex-row sm:items-center">
              {/* Search Input */}
              <div className="flex min-w-0 flex-1 items-center">
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
                  className="min-w-0 flex-1 bg-transparent px-2.5 py-2 text-xs text-[#193b36] outline-none placeholder:text-[#8a9692] sm:px-3 sm:text-sm"
                />
              </div>
              {/* Search Button */}
              <button
                type="submit"
                className="w-full shrink-0 rounded-lg bg-[#164a43] px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#123e38] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b98545] focus-visible:ring-offset-2 active:scale-[0.98] sm:w-auto sm:px-5 sm:text-sm"
              >
                Search
              </button>
            </div>
          </form>

          {/* Search Suggestions */}
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white sm:text-sm">
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
    </section>
  );
}
export default HeroSection;
