import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Data Into{" "}
              <span className="text-blue-600">Actionable Insights</span>
            </h1>
            <p className="text-xl text-gray-600">
              We consolidate scattered data across systems and build powerful business
              intelligence solutions to drive data-driven decision making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="size-5" />
              </button>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjY4NDIyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Data Analytics Dashboard"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}