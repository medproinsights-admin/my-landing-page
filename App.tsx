
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Search, 
  Lock, 
  Plus, 
  Minus,
  Star,
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import { FAQItem, LeadFormData } from './types';

// --- Sub-components ---

const ImagePlaceholder: React.FC<{ label: string; className?: string }> = ({ label, className = "" }) => (
  <div className={`bg-slate-200 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 font-medium p-8 rounded-lg ${className}`}>
    <div className="text-center">
      <p className="text-sm uppercase tracking-wider mb-2">Image Placeholder</p>
      <p className="text-lg">{label}</p>
      <p className="text-xs mt-2 italic text-slate-400 opacity-70">Manual replacement needed</p>
    </div>
  </div>
);

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 md:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const Accordion: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div key={index} className="border border-slate-200 rounded-xl bg-white shadow-sm overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
          >
            <span className="font-semibold text-slate-800 text-lg">{item.question}</span>
            {openIndex === index ? <Minus className="text-blue-600" /> : <Plus className="text-slate-400" />}
          </button>
          <div 
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-[500px] opacity-100 border-t border-slate-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="p-6 text-slate-600 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Header: React.FC = () => (
  <header className="bg-white border-b border-slate-100 sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div className="text-2xl font-extrabold text-slate-900 tracking-tight">
        MedPro <span className="text-blue-600">Insights</span>
      </div>
      {/* Minimalist: No extra navigation links as requested */}
    </div>
  </header>
);

// --- Main App Component ---

export default function App() {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    hasWebsite: 'No',
    websiteType: 'Business'
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm interested in getting a professional website and would like to discuss next steps.
Details:
Name: ${formData.fullName}
Business: ${formData.businessName}
Phone: ${formData.phone}
Email: ${formData.email}
Has Website: ${formData.hasWebsite}
Type: ${formData.websiteType}`;
    
    // Replace YOUR_PHONE_NUMBER_HERE with actual number for production
    const customMsg = "Hello, I would like to get my free quote on WhatsApp";
const whatsappUrl = `https://wa.me/919980884031?text=${encodeURIComponent(customMsg)}`;

// Delay WhatsApp by 500ms so HubSpot has time to process the data
setTimeout(() => {
  window.open(whatsappUrl, '_blank');
}, 500);
  };

  const faqItems: FAQItem[] = [
    {
      question: "How is delivery in 7 days possible?",
      answer: "We have perfected a streamlined development workflow focusing on conversion-first frameworks. By utilizing pre-tested structural components and dedicated design sprints, we move from strategy to launch in record time without compromising quality."
    },
    {
      question: "Is there clear pricing with no hidden fees?",
      answer: "Yes. We operate with flat-rate transparent pricing. Your initial quote covers design, development, mobile optimization, and the basic SEO setup. We believe in building trust through transparency."
    },
    {
      question: "Will my website be compatible with mobile phones?",
      answer: "100%. We use a mobile-first approach. Every site we build is fully responsive, ensuring your customers have a seamless experience whether they are on a smartphone, tablet, or desktop."
    },
    {
      question: "How easy is it to manage the website after launch?",
      answer: "We build on intuitive platforms that allow you to update text and images easily. We also provide a complete key handover and a 1-hour training session to ensure you feel confident in your new digital home."
    },
    {
      question: "What do you need from me to get started?",
      answer: "All we need is your business logo, basic company information, and an overview of your services. We handle the heavy lifting of structure and design to get you live in 7 days."
    },
    {
      question: "What happens after the launch?",
      answer: "Our relationship doesn't end at launch. We provide a 30-day post-launch support window for any tweaks. We also offer optional maintenance packages to keep your site fast, secure, and updated."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Header />

      {/* 1. Hero Section - Mandatory 2-column layout */}
      <Section className="bg-white pt-10 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Text Content */}
          <div className="order-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6">
              <Clock size={16} />
              <span>Launch in 7 Days Guaranteed</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-4">
              Take Your Business Online <span className="text-blue-600">in Just 7 Days.</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800 mb-6">
              Expert Digital Solutions for Medical & Professional Growth.
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-xl">
              Stop losing customers to competitors who are already visible online. Build trust, gain credibility, and start converting traffic into sales with a premium agency-grade website tailored for MedPro Insights.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#lead-form" 
                className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2 group"
              >
                Start Your Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="text-center sm:text-left">
                <p className="text-sm text-slate-500 uppercase font-semibold">Starting Price</p>
                <p className="text-2xl font-bold text-slate-900">₹9,999 <span className="text-sm font-normal text-slate-500">Only</span></p>
              </div>
            </div>
          </div>

          {/* Right Column: Image Placeholder */}
          <div className="order-2 relative">
            {/* IMAGE PLACEHOLDER: Hero Section */}
            <img src="/hero-main.jpg" alt="Hero Banner" className="w-full h-full object-cover rounded-2xl shadow-lg" />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hidden md:block border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">100% Secure</p>
                  <p className="text-xs text-slate-500">⭐⭐⭐⭐⭐ Rated by Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 2. Authority / Visibility Section */}
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Your customers are online. <br />
            <span className="text-blue-600">Is your business visible?</span>
          </h2>
          <p className="text-lg text-slate-600">
            Every day you operate without a professional digital presence, you are handing your market share to your competitors.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="bg-red-50 p-2 h-fit rounded-lg">
                <Zap className="text-red-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Loss of Trust</h4>
                <p className="text-slate-600 text-sm">81% of customers research a business online before they even think about visiting or calling.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="bg-red-50 p-2 h-fit rounded-lg">
                <Search className="text-red-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Invisible to Search</h4>
                <p className="text-slate-600 text-sm">If you aren't on the first page of results, you don't exist to your local market.</p>
              </div>
            </div>
            <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="bg-red-50 p-2 h-fit rounded-lg">
                <Lock className="text-red-500" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Platform Dependency</h4>
                <p className="text-slate-600 text-sm">Relying only on social media means you don't own your data or your customer connection.</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-900 p-8 md:p-12 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">We break this cycle in just 7 days.</h3>
            <p className="text-slate-400 mb-8 leading-relaxed">
              Our proven framework allows us to deliver a high-performance website that acts as your 24/7 salesman. No more delays, no more missed opportunities.
            </p>
            <a href="#lead-form" className="inline-flex items-center justify-center w-full px-6 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-all">
              Claim Your 7-Day Turnaround
            </a>
          </div>
        </div>
      </Section>

      {/* 3. “Why This Offer?” Section */}
      <Section className="bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why This Offer?</h2>
          <p className="text-slate-600">More than just a website, we build a growth engine.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Instant Credibility", 
              desc: "Look like the market leader you are from day one. Premium design that builds psychological trust.",
              icon: <ShieldCheck size={32} />
            },
            { 
              title: "Total Technical Freedom", 
              desc: "You own everything. No proprietary locks. No recurring hidden maintenance fees you can't control.",
              icon: <Zap size={32} />
            },
            { 
              title: "Business Impact", 
              desc: "Designed to convert. Every button, every pixel is placed to turn visitors into paying customers.",
              icon: <BarChart3 size={32} />
            }
          ].map((card, i) => (
            <div key={i} className="bg-slate-900 text-white p-8 rounded-2xl flex flex-col items-center text-center group hover:scale-[1.02] transition-all">
              <div className="mb-6 text-blue-400 group-hover:text-blue-300 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. What You’ll Get Section */}
      <Section className="bg-slate-900 text-white">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">Everything You Need for Digital Dominance.</h2>
            <p className="text-slate-400 mb-8">
              We don't just give you a site; we give you the keys to your new business headquarters.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-500" />
                <span>Zero Technical Headache</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-500" />
                <span>Fixed Transparent Price</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-blue-500" />
                <span>Launch-Ready in 7 Days</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {[
              { title: "Professional Authority Design", desc: "Custom aesthetics that match your brand's unique identity." },
              { title: "100% Mobile Responsive", desc: "Perfect viewing experience on every single device type." },
              { title: "Lightning-Fast Loading", desc: "Optimized code for sub-2 second load times to prevent bounce." },
              { title: "Conversion-Optimized Structure", desc: "Built using conversion rate optimization (CRO) best practices." },
              { title: "Built-in SEO Foundation", desc: "Google-friendly architecture to help you climb the rankings." },
              { title: "Key Handover Guarantee", desc: "You own 100% of the code, domain, and assets at the end." }
            ].map((feature, i) => (
              <div key={i} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors">
                <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                <p className="text-slate-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Video + Testimonial Section */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* YOUTUBE VIDEO EMBED PLACEHOLDER */}
           <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
  <video 
    controls 
    className="w-full h-full object-cover"
    poster="/hero-main.jpg"
  >
    <source src="/promo-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
            <p className="mt-4 text-center text-slate-400 text-sm italic">Proven Speed. World-Class Design</p>
          </div>
          <div>
            <div className="mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#EAB308" className="inline text-yellow-500 mr-1" />)}
            </div>
            <blockquote className="text-2xl font-medium text-slate-800 italic leading-relaxed mb-8">
              "Working with the MedPro Insights team changed everything. We went from being invisible to having 3-4 new qualified leads every single week through our new site."
            </blockquote>
            <div className="flex items-center gap-4 mb-8">
              <img 
  src="/client-1.jpg" 
  alt="David Henderson" 
  className="w-12 h-12 rounded-full object-cover border border-slate-200" 
/>
              <div>
                <p className="font-bold text-slate-900">Amit Verma</p>
                <p className="text-slate-500 text-sm">Founder, Healthcare Axis</p>
              </div>
            </div>
            <p className="text-slate-600 mb-8">
              The foundation of every online sale is <strong>trust</strong>. Without a professional platform to showcase your expertise, you're asking customers to take a risk they won't take.
            </p>
            <a href="#lead-form" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-all">
              Book Your Design Session <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </Section>

      {/* 6. Testimonials Grid */}
      <Section className="bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-600">Real feedback from local business owners.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Geethu S", biz: "Owner - Home Baker", image: "/client-2.jpg", text: "MedPro Insights delivered our website in just 6 days. Clean, fast, and professional." },
            { name: "Rajesh Kumar", biz: "Proprietor - SK Logistics", image: "/client-3.jpg", text: "I was skeptical about the 7-day promise, but they actually did it. The UI is world-class." },
            { name: "Mary Pritisha", biz: "Chief Financial Officer", image: "/client-4.jpg", text: "Finally a developer who understands conversion. Our old site was a brochure; this one is a lead machine." }
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#EAB308" className="text-yellow-500 mr-0.5" />)}
              </div>
              <p className="text-slate-600 italic mb-6 flex-grow">"{t.text}"</p>
              <div className="flex items-center gap-3">
                {/* IMAGE PLACEHOLDER: Testimonial Profile */}
                <img 
  src={t.image} 
  alt={t.name} 
  className="w-10 h-10 rounded-full object-cover border border-slate-100" 
/>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500 uppercase tracking-tighter">{t.biz}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. Social Proof / Market Authority Strip */}
      <div className="bg-blue-600 py-10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-center md:justify-between gap-8 text-white">
          <div className="flex items-center gap-4">
            <ShieldCheck size={40} className="text-blue-200" />
            <div className="text-center md:text-left">
              <p className="text-sm opacity-80 uppercase tracking-widest font-semibold">Trust Factor</p>
              <p className="text-xl font-bold">Market Authority & Trust</p>
            </div>
          </div>
          <div className="h-10 w-px bg-blue-500 hidden md:block"></div>
          <div className="flex items-center gap-4">
            <Clock size={40} className="text-blue-200" />
            <div className="text-center md:text-left">
              <p className="text-sm opacity-80 uppercase tracking-widest font-semibold">Efficiency</p>
              <p className="text-xl font-bold">"Salesman Who Never Sleeps"</p>
            </div>
          </div>
          <div className="h-10 w-px bg-blue-500 hidden md:block"></div>
          <div className="flex items-center gap-4">
            <BarChart3 size={40} className="text-blue-200" />
            <div className="text-center md:text-left">
              <p className="text-sm opacity-80 uppercase tracking-widest font-semibold">Performance</p>
              <p className="text-xl font-bold">Rapid ROI Guaranteed</p>
            </div>
          </div>
        </div>
      </div>

      {/* 8. Proof / Opportunity Section */}
      <Section className="bg-white">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Millions are searching for what you do. <span className="text-blue-600">Don't be invisible.</span></h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Right now, in your city, people are typing your services into Google. If they don't find you, they find your competitor. Every single click you miss is a missed opportunity for revenue, growth, and long-term customer loyalty.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <p className="text-2xl font-bold text-blue-600">8.5B</p>
                <p className="text-xs text-slate-500 uppercase font-bold">Daily Google Searches</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                <p className="text-2xl font-bold text-blue-600">76%</p>
                <p className="text-xs text-slate-500 uppercase font-bold">Visit Local Business in 24h</p>
              </div>
            </div>
          </div>
          <div>
            {/* IMAGE PLACEHOLDER: Opportunity Grid */}
            <img src="/feature-detail.jpg" alt="Success Opportunity" className="w-full h-full object-cover rounded-2xl shadow-lg" />
          </div>
        </div>
      </Section>

      {/* 9. FAQ Section */}
      <Section className="bg-slate-50" id="faq">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600">Everything you need to know about your 7-day launch.</p>
        </div>
        <Accordion items={faqItems} />
      </Section>

      {/* 10. Final CTA Section + Lead Capture Form */}
      <Section className="bg-slate-900 text-white" id="lead-form">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Ready to Take Your Business to the Next Level?</h2>
            <p className="text-xl text-slate-400 mb-12">
              Reinforce your brand, build trust, and automate your lead generation. The first step is just a few clicks away.
            </p>
            <ul className="space-y-6">
              {[
                "7-Day Delivery Guarantee",
                "Conversion-First Design",
                "Mobile & SEO Optimized",
                "100% Ownership & Transparent Pricing"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-lg">
                  <div className="bg-blue-600 rounded-full p-1">
                    <CheckCircle2 size={24} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white text-slate-900 p-8 md:p-10 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Quote</h3>
            <form onSubmit={handleFormSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Business Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your Company LLC"
                    value={formData.businessName}
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                  <input 
                    required
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="(555) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Already have a website?</label>
                  <select 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.hasWebsite}
                    onChange={(e) => setFormData({...formData, hasWebsite: e.target.value})}
                  >
                    <option>No</option>
                    <option>Yes (Needs redesign)</option>
                    <option>Yes (Needs updates)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">What type of website?</label>
                  <select 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.websiteType}
                    onChange={(e) => setFormData({...formData, websiteType: e.target.value})}
                  >
                    <option>Business Service</option>
                    <option>E-commerce Shop</option>
                    <option>Personal Brand</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-lg shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 text-lg"
              >
                Get Started Now <MessageCircle size={24} />
              </button>
              <p className="text-center text-xs text-slate-400 mt-4">
                By clicking "Get Started Now", you'll be redirected to WhatsApp to confirm your inquiry.
              </p>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} MedPro Insights. All Rights Reserved. 
          <br className="md:hidden" /> Professional Web Development in 7 Days.
        </p>
      </footer>
    </div>
  );
}
