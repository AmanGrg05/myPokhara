import {
  Utensils,
  Hotel,
  Car,
  CalendarDays,
  ShoppingBag,
  Briefcase,
  ShieldAlert,
  ChevronRight,
} from "lucide-react";

function QuickCategories() {
  const categories = [
    {
      name: "Restaurants",
      icon: Utensils,
      style: "bg-[#EAF1EF] text-[#164A43]",
    },
    {
      name: "Hotels",
      icon: Hotel,
      style: "bg-[#F4EEE4] text-[#9A6A32]",
    },
    {
      name: "Rides",
      icon: Car,
      style: "bg-[#EAF1EF] text-[#164A43]",
    },
    {
      name: "Activities",
      icon: CalendarDays,
      style: "bg-[#F4EEE4] text-[#9A6A32]",
    },
    {
      name: "Shopping",
      icon: ShoppingBag,
      style: "bg-[#EAF1EF] text-[#164A43]",
    },
    {
      name: "Jobs",
      icon: Briefcase,
      style: "bg-[#EAF1EF] text-[#164A43]",
    },
    {
      name: "Emergency",
      icon: ShieldAlert,
      style: "bg-[#F5E9E7] text-[#A54B42]",
    },
    {
      name: "More",
      icon: ChevronRight,
      style: "bg-[#F0F1EE] text-[#65736F]",
    },
  ];

  return (
    <section className="relative z-20 mx-auto -mt-10 max-w-7xl px-5 sm:px-8 lg:px-12">
      <div className="rounded-[28px] border border-[#DFE5E1] bg-white p-4 shadow-[0_12px_40px_rgba(22,74,67,0.08)] sm:p-5">
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto scrollbar-none sm:grid sm:grid-cols-4 lg:grid-cols-8 sm:gap-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                key={category.name}
                type="button"
                className="group flex min-w-[92px] shrink-0 flex-col items-center justify-center gap-2 rounded-2xl px-2 py-3 transition-all duration-200 hover:bg-[#F7F9F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#164A43]/30 sm:min-w-0 sm:py-4"
              >
                {/* Icon Container */}
                <div
                  className={`
                    flex h-12 w-12 items-center justify-center
                    rounded-2xl
                    
                    transition-all duration-200
                    group-hover:-translate-y-0.5
                    group-hover:scale-105
                    sm:h-15 sm:w-15
                    ${category.style}
                  `}
                >
                  <Icon className="h-5 w-5 " strokeWidth={1.8} />
                </div>

                {/* Category Name */}
                <span className="whitespace-nowrap text-xs font-medium text-[#536762] transition-colors duration-200 group-hover:text-[#164A43] sm:text-sm">
                  {category.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default QuickCategories;
