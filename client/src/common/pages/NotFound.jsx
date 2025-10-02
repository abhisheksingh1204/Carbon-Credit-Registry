import HeaderMinimal from "../components/HeaderMinimal";
import Footer from "../components/Footer";
import NotFoundBox from "../components/NotFoundBox";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <HeaderMinimal />
      <main className="flex-1 flex items-center justify-center">
        <NotFoundBox />
      </main>
      <Footer />
    </div>
  );
}
