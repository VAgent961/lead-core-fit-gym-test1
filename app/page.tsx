import React from 'react';
import { Metadata } from 'next';
import { Dumbbell, Users, User, Camera, MapPin, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Core Fit Gym | Your Community Fitness Center in Chouf',
  description: 'Start your fitness journey at Core Fit Gym. Expert-led training, strength, and community support in the heart of Chouf. Join us today!',
  keywords: ['Core Fit Gym', 'Gym in Chouf', 'Fitness center Chouf', 'Strength training Chouf', 'Personal training Lebanon'],
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1600&q=80" 
            alt="Members training at Core Fit Gym facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Your Fitness Journey Starts at <span className="text-primary">Core Fit</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Build strength, improve your health, and join the most welcoming fitness community in Chouf.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://instagram.com/corefit.lb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-2"
            >
              <Camera size={20} />
              Follow on Instagram
            </a>
            <a 
              href="#about" 
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800&q=80" 
                alt="Core Fit Gym atmosphere" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl hidden lg:block">
                <p className="text-3xl font-bold">Chouf</p>
                <p className="text-sm uppercase tracking-widest">Lebanon</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Built for the Chouf Community</h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                At Core Fit Gym, we believe fitness is for everyone. We provide a clean, motivating space where you can focus on your goals, whether you are a beginner or an experienced athlete. Our mission is to help you feel your best through consistent, smart training.
              </p>
              <div className="flex items-center gap-4 text-dark font-semibold">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <span>Located in the heart of Chouf, Lebanon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Core Fitness Offerings</h2>
            <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Strength Training",
                desc: "Access to modern weightlifting equipment and machines to help you build muscle and improve performance.",
                icon: <Dumbbell size={32} />
              },
              {
                title: "Personal Training",
                desc: "Receive personalized guidance and tailored workout programs to reach your specific fitness goals faster.",
                icon: <User size={32} />
              },
              {
                title: "Group Classes",
                desc: "High-energy group sessions designed to keep you motivated and connected with the local community.",
                icon: <Users size={32} />
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-primary mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-dark mb-4">{service.title}</h3>
                <p className="text-muted leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Inside Core Fit Gym</h2>
            <p className="text-muted">Take a look at our facility and equipment</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 row-span-2">
              <img 
                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80" 
                alt="Weightlifting area at Core Fit Gym" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=800&q=80" 
                alt="Fitness equipment" 
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=800&q=80" 
                alt="Gym interior" 
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
            <div className="col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80" 
                alt="Training session" 
                className="w-full h-64 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            We are proud to serve the Chouf community. Get in touch with us today to learn more about our memberships or stop by for a tour.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <span className="text-primary uppercase tracking-widest text-sm font-bold">Location</span>
              <p className="text-xl">Chouf, Lebanon</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="https://instagram.com/corefit.lb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full transition-all"
              >
                <Camera className="text-primary" />
                <span className="font-bold">Follow on Instagram</span>
                <ExternalLink size={16} className="opacity-50" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
