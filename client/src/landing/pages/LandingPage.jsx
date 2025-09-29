import Header from "../components/Header";
import Hero from "../components/Hero";
import RoleSelector from "../components/RoleSelector";
import Footer from "../components/Footer";

export default function LandingPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <Hero />
          <RoleSelector />
        </main>
        <Footer />
      </div>
    </>
  );
}
