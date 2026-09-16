import { useState } from "react";
import { MapPin, Star, SlidersHorizontal } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";

const filters = [
  { name: "All" },
  { name: "Restaurants" },
  { name: "Hotels" },
  { name: "Activities" },
  { name: "Shopping" },
  { name: "Rides" },
];

const places = [
  {
    name: "Fewa Lakeside Café",
    category: "Restaurants",
    location: "Lakeside, Pokhara",
    rating: 4.7,
    reviews: 328,
    price: "$$",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Hotel Barahi",
    category: "Hotels",
    location: "Lakeside, Pokhara",
    rating: 4.5,
    reviews: 512,
    price: "$$$",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sarangkot Sunrise Hike",
    category: "Activities",
    location: "Sarangkot",
    rating: 4.9,
    reviews: 890,
    price: "$",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mandala Street Market",
    category: "Shopping",
    location: "Old Bazaar, Pokhara",
    rating: 4.3,
    reviews: 204,
    price: "$",
    image:
      "https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Begnas Lake Boating",
    category: "Activities",
    location: "Begnas Lake",
    rating: 4.8,
    reviews: 156,
    price: "$$",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Green Valley Homestay",
    category: "Hotels",
    location: "Kaski, Pokhara",
    rating: 4.6,
    reviews: 98,
    price: "$$",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
  },
];

function Explore() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPlaces =
    activeFilter === "All"
      ? places
      : places.filter((place) => place.category === activeFilter);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Page banner with lake background, matching Home */}
      <div className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1562462181-b228e3cff9ad?auto=format&fit=crop&w=2400&q=85"
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
          />
        </div>
        {/* Light Background Overlay */}
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-[#f8f7f3]/20 via-[#f8f7f3]/35 to-[#f8f7f3]/70" />
        {/* Subtle Green Tint */}
        <div className="absolute inset-0 -z-10 bg-[#164a43]/5" />

        {/* Page Content */}
        <div className="relative z-10">
          <Header />

          <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#164a43]/10 bg-white/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#164a43] shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#b98545]" />
              Explore Pokhara
            </div>

            {/* Heading */}
            <h1 className="text-balance text-3xl font-semibold leading-[1.1] text-[#173f39] sm:text-4xl md:text-5xl">
              Find your next
              <span className="font-serif italic text-[#b98545]">
                {" "}
                favorite
              </span>{" "}
              spot.
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-white sm:text-base">
              Browse restaurants, stays, and experiences around the lake city —
              handpicked and always nearby.
            </p>

            {/* Search + Filter Bar */}
            <div className="mt-8 rounded-2xl border border-white/80 bg-white/70 p-2 shadow-[0_20px_60px_rgba(22,74,67,0.14)] backdrop-blur-md">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <div className="flex min-w-0 flex-1 items-center">
                  <label htmlFor="explore-search" className="sr-only">
                    Search places
                  </label>
                  <input
                    id="explore-search"
                    type="search"
                    placeholder="Search restaurants, hotels, activities..."
                    autoComplete="off"
                    className="min-w-0 flex-1 bg-transparent px-2.5 py-2 text-xs text-[#193b36] outline-none placeholder:text-[#8a9692] sm:px-3 sm:text-sm"
                  />
                </div>
                <button
                  type="button"
                  className="flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#164a43] px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-[#123e38] active:scale-[0.98] sm:px-5 sm:text-sm"
                >
                  <SlidersHorizontal className="h-3.5 w-3.5" strokeWidth={2} />
                  Filters
                </button>
              </div>
            </div>

            {/* Filter Chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.name}
                  type="button"
                  onClick={() => setActiveFilter(filter.name)}
                  className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all duration-200 sm:text-sm ${
                    activeFilter === filter.name
                      ? "border-[#164a43] bg-[#164a43] text-white shadow-sm"
                      : "border-[#164a43]/15 bg-white/70 text-[#164A43] backdrop-blur-md hover:bg-white"
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Grid */}
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-[#536762]">
            {filteredPlaces.length} places found
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPlaces.map((place) => (
            <button
              key={place.name}
              type="button"
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#DFE5E1] bg-white text-left shadow-[0_12px_40px_rgba(22,74,67,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(22,74,67,0.14)]"
            >
              {/* Image */}
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#164A43] backdrop-blur-md">
                  {place.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-2 p-4">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-[#173f39] sm:text-base">
                    {place.name}
                  </h3>
                  <span className="shrink-0 text-xs font-medium text-[#9A6A32]">
                    {place.price}
                  </span>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#667570]">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.8} />
                  {place.location}
                </div>

                <div className="mt-1 flex items-center gap-1.5 text-xs">
                  <Star
                    className="h-3.5 w-3.5 fill-[#b98545] text-[#b98545]"
                    strokeWidth={0}
                  />
                  <span className="font-semibold text-[#173f39]">
                    {place.rating}
                  </span>
                  <span className="text-[#8a9692]">
                    ({place.reviews} reviews)
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {filteredPlaces.length === 0 && (
          <div className="rounded-2xl border border-dashed border-[#DFE5E1] py-16 text-center">
            <p className="text-sm text-[#536762]">
              No places found for this category yet.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

export default Explore;
