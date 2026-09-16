import Header from "../components/header";
import HeroSection from "../components/heroSection";
import Footer from "../components/footer";

function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      {/* Main content with lake background */}
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
          <main className="pb-24 md:pb-0">
            <HeroSection />
          </main>
        </div>
      </div>
      {/* Footer */} <Footer />
    </div>
  );
}
export default Home;
