import HeaderMinimal from "../components/HeaderMinimal";
import Footer from "../components/Footer";
import ContactContent from "../components/ContactContent";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeaderMinimal />
      <main className="flex-1 flex items-center justify-center">
        <ContactContent />
      </main>
      <Footer />
    </div>
  );
}