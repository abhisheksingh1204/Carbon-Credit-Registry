import HeaderMinimal from "../components/HeaderMinimal";
import Footer from "../components/Footer";
import AboutContent from "../components/AboutContent";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeaderMinimal />
      <main className="flex-1 flex items-center justify-center">
        <AboutContent />
      </main>
      <Footer />
    </div>
  );
}