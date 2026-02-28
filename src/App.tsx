import { motion } from "motion/react";
import { Scissors, Phone, MapPin, Clock, Instagram, Facebook, ChevronRight, Star, User, Calendar } from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-dark/90 backdrop-blur-md py-4 border-b border-white/5" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 items-center">
        <div className="flex items-center">
          <span className="font-display font-bold text-xl tracking-tighter uppercase">
            Wow <span className="text-gold">Barbershop</span>
          </span>
        </div>

        <div className="hidden md:flex items-center justify-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
          <a href="#about" className="hover:text-gold transition-colors">Our Story</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#gallery" className="hover:text-gold transition-colors">Gallery</a>
          <a href="#team" className="hover:text-gold transition-colors">Barbers</a>
          <a href="#reviews" className="hover:text-gold transition-colors">Reviews</a>
        </div>

        <div className="flex justify-end">
          <a
            href="https://booksy.com/en-ca/17273_club-des-couffeurs-vip_barbershop_856322_vanier"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-gold/50 text-gold text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=2070&auto=format&fit=crop" 
          alt="Barber Shop" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">Est. 2018 — Premium Grooming</span>
          </div>
          
          <h1 className="font-display text-7xl md:text-9xl font-bold leading-[0.85] uppercase mb-8">
            Where Craft <br />
            <span className="text-stroke italic font-serif normal-case">Meets</span> <br />
            & Tradition
          </h1>

          <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed">
            Step into a world where every cut tells a story. Our master barbers blend time-honored techniques with contemporary artistry to craft your signature look.
          </p>

          <div className="flex flex-wrap items-center gap-8">
            <a href="#booking" className="bg-gold text-dark px-10 py-5 text-xs font-bold uppercase tracking-widest flex items-center gap-3 hover:bg-gold-light transition-all group">
              Reserve Your Chair <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-3 hover:text-gold transition-colors group">
              Explore Services <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Image Decoration (as seen in screenshot) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 hidden lg:block w-1/2 h-[80%] z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2070&auto=format&fit=crop"
          alt="Barber Tools" 
          className="w-full h-full object-contain opacity-60"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop" 
                alt="Barbering" 
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-[3/4] object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2070&auto=format&fit=crop" 
                alt="Details" 
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=2070&auto=format&fit=crop" 
                alt="Shop" 
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop" 
                alt="Vibe" 
                className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 aspect-[3/4] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="absolute -top-10 -right-10 text-[12rem] font-display font-bold text-white/5 select-none leading-none">
            WOW
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">Our Story</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mb-8 leading-tight">
            More Than A <br /> Barbershop. <br />
            <span className="italic font-serif normal-case text-gold">A Legacy.</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Founded in the heart of Ottawa, Wow Barbershop was born from a passion for authentic craftsmanship and the belief that every person deserves a grooming experience that goes beyond the ordinary. Our shop is a sanctuary — a place where tradition is honored, conversation flows freely, and every detail matters.
          </p>
          <p className="text-white/60 text-lg mb-12 leading-relaxed">
            From the warm towels to the final brush of talc, every visit is choreographed to perfection. We don't just cut hair; we build confidence, one client at a time.
          </p>

          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
            <div>
              <div className="text-4xl font-display font-bold text-gold mb-2">7+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Years of Excellence</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-gold mb-2">15K+</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-gold mb-2">6</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Master Barbers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { name: "Signature Cut", price: "$35", duration: "45 MIN", desc: "A tailored haircut experience with consultation, hot towel treatment, and precision styling.", icon: <Scissors size={24} /> },
    { name: "Beard Sculpting", price: "$20", duration: "30 MIN", desc: "Expert beard shaping, trimming, and conditioning with premium oils and balms.", icon: <Star size={24} /> },
    { name: "The VIP Combo", price: "$50", duration: "75 MIN", desc: "Our complete package: signature cut and beard grooming for the ultimate look.", icon: <User size={24} /> },
    { name: "The Royal", price: "$75", duration: "90 MIN", desc: "Signature cut, hot shave, beard grooming, facial treatment, and scalp massage.", icon: <Star size={24} /> },
    { name: "Hair Design", price: "From $10", duration: "15 MIN", desc: "Custom artistic designs and patterns crafted with precision.", icon: <Scissors size={24} /> },
    { name: "Hot Towel Shave", price: "$25", duration: "40 MIN", desc: "Traditional straight-razor shave with hot towel prep and aftershave balm.", icon: <Clock size={24} /> },
  ];

  return (
    <section id="services" className="py-32 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-gold"></div>
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">What We Offer</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold uppercase leading-tight">
              Our <span className="italic font-serif normal-case text-gold">Premium</span> <br /> Services
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-right hidden md:block">
            Each service is crafted with precision and care, using only the finest products and time-tested techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {services.map((s, i) => (
            <div key={i} className="bg-dark p-10 hover:bg-dark-lighter transition-colors group cursor-default">
              <div className="text-gold mb-8 group-hover:scale-110 transition-transform duration-500">{s.icon}</div>
              <h3 className="text-xl font-display font-bold uppercase mb-4 tracking-tight">{s.name}</h3>
              <p className="text-white/40 text-sm mb-8 leading-relaxed h-20">{s.desc}</p>
              <div className="flex items-end justify-between">
                <div className="text-2xl font-display font-bold text-gold">{s.price}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{s.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const barbers = [
    { name: "Marcus V.", role: "Master Barber", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" },
    { name: "Julian K.", role: "Senior Stylist", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop" },
    { name: "Elena R.", role: "Beard Specialist", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop" },
  ];

  return (
    <section id="team" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] w-12 bg-gold"></div>
          <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">The Team</span>
        </div>
        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mb-20 leading-tight">
          Meet Our <span className="italic font-serif normal-case text-gold">Master</span> <br /> Barbers
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {barbers.map((b, i) => (
            <div key={i} className="group relative overflow-hidden aspect-[4/5]">
              <img 
                src={b.img} 
                alt={b.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10">
                <h3 className="text-2xl font-display font-bold uppercase mb-1">{b.name}</h3>
                <p className="text-gold text-xs font-bold uppercase tracking-widest">{b.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517941823-815bea90d291?q=80&w=2070&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-32 bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">Our Work</span>
            <div className="h-[1px] w-12 bg-gold"></div>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase leading-tight">
            The <span className="italic font-serif normal-case text-gold">Craft</span> In Detail
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98 }}
              className={`relative overflow-hidden group cursor-pointer ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <img 
                src={img} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstagramFeed = () => {
  const feed = [
    "https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559599189-fe84dea4eb79?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517941823-815bea90d291?q=80&w=400&auto=format&fit=crop",
  ];

  return (
    <section className="py-20 bg-dark border-t border-white/5">
      <div className="text-center mb-12">
        <h2 className="font-display text-4xl font-bold uppercase mb-4">
          ON <span className="italic font-serif normal-case text-gold">Instagram</span>
        </h2>
        <a href="#" className="text-gold text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:text-white transition-colors">
          <Instagram size={14} /> @wowbarbershop
        </a>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6">
        {feed.map((img, i) => (
          <div key={i} className="aspect-square overflow-hidden relative group">
            <img 
              src={img} 
              alt={`Instagram ${i}`} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Instagram className="text-white" size={24} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="reviews" className="py-32 bg-dark-lighter relative overflow-hidden">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03]">
        <div className="text-[30vw] font-display font-bold uppercase select-none">REVIEWS</div>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-[1px] w-8 bg-gold"></div>
          <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">Testimonials</span>
          <div className="h-[1px] w-8 bg-gold"></div>
        </div>
        
        <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mb-16 leading-tight">
          What Our <span className="italic font-serif normal-case text-gold">Clients</span> Say
        </h2>

        <div className="flex justify-center gap-1 mb-10">
          {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-gold text-gold" />)}
        </div>

        <p className="font-serif italic text-2xl md:text-4xl leading-relaxed text-white/90 mb-12">
          "I've been to barbershops all over the world, and Wow Barbershop ranks among the very best. The atmosphere, the skill, the conversation — everything comes together perfectly. Marcus shaped my beard into a work of art."
        </p>

        <div>
          <div className="text-lg font-display font-bold uppercase tracking-widest mb-1">Alexander Hunt</div>
          <div className="text-gold text-[10px] font-bold uppercase tracking-[0.2em]">Client Since 2021</div>
        </div>

        <div className="flex justify-center gap-3 mt-16">
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
          <div className="w-2 h-2 rounded-full bg-gold"></div>
          <div className="w-2 h-2 rounded-full bg-white/20"></div>
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section id="booking" className="py-32 bg-dark">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
        <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-2xl">
          <img 
            src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=2070&auto=format&fit=crop" 
            alt="Shop Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border-[20px] border-dark/50"></div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-gold"></div>
            <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">Reserve Your Spot</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold uppercase mb-12 leading-tight">
            Book Your <span className="italic font-serif normal-case text-gold">Visit</span>
          </h2>

          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">First Name</label>
                <input type="text" placeholder="John" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Email</label>
                <input type="email" placeholder="john@email.com" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Phone</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Select Service</label>
              <select className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors appearance-none">
                <option className="bg-dark">Choose a service...</option>
                <option className="bg-dark">Signature Cut</option>
                <option className="bg-dark">Beard Sculpting</option>
                <option className="bg-dark">The VIP Combo</option>
              </select>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Date</label>
                <input type="date" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-white/40">Time</label>
                <input type="time" className="w-full bg-transparent border-b border-white/10 py-3 focus:border-gold outline-none transition-colors" />
              </div>
            </div>

            <button 
              type="button"
              onClick={() => window.open("https://booksy.com/en-ca/17273_club-des-couffeurs-vip_barbershop_856322_vanier", "_blank")}
              className="w-full bg-gold text-dark py-6 text-xs font-bold uppercase tracking-widest hover:bg-gold-light transition-all flex items-center justify-center gap-3"
            >
              Confirm Booking <ChevronRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark-lighter pt-32 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="font-display font-bold text-3xl tracking-tighter uppercase mb-8">
              Wow <span className="text-gold">Barbershop</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              Where tradition meets modern craft. Premium grooming services for the modern individual in Ottawa.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-gold hover:text-gold transition-all"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-10">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#about" className="hover:text-gold transition-colors">Our Story</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors">Services</a></li>
              <li><a href="#team" className="hover:text-gold transition-colors">Barbers</a></li>
              <li><a href="#reviews" className="hover:text-gold transition-colors">Reviews</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-10">Services</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li>Signature Cut</li>
              <li>Beard Sculpting</li>
              <li>The VIP Combo</li>
              <li>The Royal</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold mb-10">Visit Us</h4>
            <ul className="space-y-6 text-sm text-white/60">
              <li className="flex gap-4">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>281 Montreal Rd, Vanier, <br /> Ottawa, ON K1L 6C4</span>
              </li>
              <li className="flex gap-4">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+1 (613) 744-1111</span>
              </li>
              <li className="flex gap-4">
                <Clock size={18} className="text-gold shrink-0" />
                <span>Mon – Sat: 10:30am – 9:30pm <br /> Sun: 11:00am – 5:30pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/20">
          <div>© 2026 Wow Barbershop. All Rights Reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-dark selection:bg-gold selection:text-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Team />
        <Testimonials />
        <Booking />
        <InstagramFeed />
      </main>
      <Footer />
    </div>
  );
}
