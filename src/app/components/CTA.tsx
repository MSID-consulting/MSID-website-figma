import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTA() {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="p-12 lg:p-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Transform Your Data?
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                Let's discuss how we can help you consolidate your data, unlock insights, 
                and achieve data-driven excellence.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-white">
                  <Mail className="size-5" />
                  <a href="mailto:info@mitrasolusiintegrasi.com" className="hover:underline">
                    info@mitrasolusiintegrasi.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <Phone className="size-5" />
                  <a href="https://wa.me/6281533305750" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    +62 815 3330 5750
                  </a>
                </div>
              </div>
              <button 
                onClick={scrollToContact}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="size-5" />
              </button>
            </div>
            <div className="hidden lg:block h-full">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29ya3xlbnwxfHx8fDE3NzI3Mzg1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}