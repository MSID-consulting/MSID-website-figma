import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xdaldovn', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("Thank you for your message! We will contact you soon.");
        form.reset();
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Organization/Company *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="+62 xxx xxxx xxxx"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="question"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Question/Message *
              </label>
              <textarea
                id="question"
                name="question"
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your project or requirements..."
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="size-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}