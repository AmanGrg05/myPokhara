import Header from "../components/header";
import HeroSection from "../components/heroSection";
import QuickCategories from "../components/quickCategories";
import Footer from "../components/footer";
function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 pb-24 md:pb-0">
        <HeroSection />
        <QuickCategories />
      </main>
      <Footer />
    </div>
  );
}
export default Home;
