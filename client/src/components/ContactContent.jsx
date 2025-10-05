import React from "react";
import { Mail, Phone, MapPin, CheckCircle, AlertTriangle } from "lucide-react";

// The main page content component for the Contact Us page.
export default function ContactContent() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submissionStatus, setSubmissionStatus] = React.useState(null); // 'success' | 'error' | null

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);

    const formData = new FormData(event.target);
    const formspreeEndpoint = "https://formspree.io/f/mblzyeqy";

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmissionStatus("success");
        event.target.reset(); // Clear form fields
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="font-sans bg-background text-foreground">
      <main className="container mx-auto px-6 py-12 md:py-20">
        <section id="contact">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Contact Us
            </h1>
            <p className="text-lg text-secondary mb-6">
              We're here to help and answer any question you might have.
            </p>
            <div className="h-0.5 w-24 bg-gradient-to-r from-secondary to-transparent mx-auto my-4"></div>
          </div>

          {/* Main content grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-muted p-8 md:p-12 rounded-[0.75rem] shadow-xl border border-border">
            {/* Left Column: Contact Info */}
            <div className="flex flex-col space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  Get in Touch Directly
                </h2>
                <p className="text-muted-foreground mt-2">
                  Have a question or a proposal? Feel free to reach out to us
                  directly. We look forward to hearing from you.
                </p>
              </div>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <a
                      href="mailto:contact@bluecarboncare.dev"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      contact@bluecarboncare.dev
                    </a>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Call Us</h3>
                    <a
                      href="tel:+911234567890"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      +91 123 456 7890
                    </a>
                  </div>
                </div>
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">
                      Our Office
                    </h3>
                    <a
                      href="https://maps.app.goo.gl/rGCGbr1usMdnkyy88"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      23, Sir M. Visvesvaraya Marg, Indore (M.P.) - 452001
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    required
                    className="w-full bg-background border border-border rounded-md py-3 px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    required
                    className="w-full bg-background border border-border rounded-md py-3 px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                    className="w-full bg-background border border-border rounded-md py-3 px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Your Message..."
                    required
                    className="w-full bg-background border border-border rounded-md py-3 px-4 text-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-md hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-muted disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
              {submissionStatus === "success" && (
                <div className="mt-4 flex items-center space-x-2 text-green-500 bg-green-500/10 p-3 rounded-md">
                  <CheckCircle className="h-5 w-5" />
                  <p>Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}
              {submissionStatus === "error" && (
                <div className="mt-4 flex items-center space-x-2 text-red-500 bg-red-500/10 p-3 rounded-md">
                  <AlertTriangle className="h-5 w-5" />
                  <p>Something went wrong. Please try again later.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
