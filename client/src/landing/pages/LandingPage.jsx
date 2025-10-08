import Header from "../components/Header";
import Hero from "../components/Hero";
import RoleSelector from "../components/RoleSelector";
import Footer from "../../components/Footer";

export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen bg-background flex flex-col">
            <a href="#main-content" className="sr-only focus:not-sr-only">
              Skip to main content
            </a>
            <Header />
            <main id="main-content" className="flex-1">
              <Hero />
              <RoleSelector />
            </main>
            <Footer />
          </div>
    </>
  );
}
