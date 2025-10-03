export default function Footer() {
  return (
    <footer className="w-full bg-muted mt-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BlueCarbonCare - Connect. Building
            stronger communities together.
          </p>
        </div>
      </div>
    </footer>
  );
}
