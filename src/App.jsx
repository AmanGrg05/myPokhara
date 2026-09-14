import Header from "./components/header";
import HeroSection from "./components/heroSection";

const App = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col w-full overflow-x-hidden">
      <Header />
      <main className="flex-1 pb-24 md:pb-0">
        <HeroSection />
      </main>
    </div>
  );
};

export default App;
