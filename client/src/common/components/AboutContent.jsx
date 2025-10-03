import { Blocks, CircleDollarSign, Users } from "lucide-react";

export default function AboutContent() {
  const features = [
    {
      icon: <Blocks className="h-12 w-12 text-secondary mx-auto mb-4" />,
      title: "Immutable Ledger",
      description:
        "Utilizing blockchain for a tamper-proof and transparent record of all restoration data and carbon credit transactions.",
    },
    {
      icon: (
        <CircleDollarSign className="h-12 w-12 text-secondary mx-auto mb-4" />
      ),
      title: "Tokenized Carbon Credits",
      description:
        "Smart contracts automate the creation and transfer of carbon credits, ensuring accuracy and liquidity in the market.",
    },
    {
      icon: <Users className="h-12 w-12 text-secondary mx-auto mb-4" />,
      title: "Community Empowerment",
      description:
        "Providing accessible tools for NGOs, local communities, and panchayats to easily onboard and manage their projects.",
    },
  ];

  return (
    <div className="font-sans bg-background text-foreground">
      <main className="container mx-auto px-6 py-12 md:py-20">
        {/* About Us Section */}
        <section id="about" className="text-center mb-20 md:mb-32">
          <h1 className="text-primary text-4xl md:text-5xl font-bold mb-4">
            About Our Mission
          </h1>
          <p className="text-lg text-secondary mb-6">
            Innovating for a Sustainable Coastal Future.
          </p>
          <div className="h-0.5 w-24 bg-gradient-to-r from-secondary to-transparent mx-auto my-4"></div>
          <div className="max-w-4xl mx-auto text-left text-foreground space-y-6">
            <p>
              We are developing a cutting-edge solution to bring transparency
              and efficiency to the blue carbon market. Our platform leverages
              blockchain technology to create a trustworthy and scalable system
              for monitoring and verifying carbon credits from vital coastal
              ecosystems like mangroves, seagrasses, and salt marshes.
            </p>
            <p className="font-semibold text-foreground">
              Our goal is to build the foundation for a scalable and verifiable
              blue carbon economy in India by providing accessible tools for
              NGOs, coastal communities, and government bodies.
            </p>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Features
            </h2>
            <p className="text-lg text-secondary mb-6">
              The pillars of our transparent ecosystem.
            </p>
            <div className="h-0.5 w-24 bg-gradient-to-r from-secondary to-transparent mx-auto my-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-muted p-8 rounded-[0.75rem] shadow-xl border border-border text-center transition-transform duration-300 hover:-translate-y-2"
              >
                {feature.icon}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
