import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us — ShillongWander',
  description: 'Get in touch with the ShillongWander team for travel advice, local guide bookings, or partnership inquiries.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 selection:bg-teal-500/30">
      
      {/* Editorial Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative bg-slate-950 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800">
          
          {/* Abstract Ambient Glows - Inviting, professional tones */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-cyan-400 rounded-full" />
              <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <MessageSquare className="w-4 h-4" /> We're Here to Help
              </p>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Get in <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-400 to-emerald-400">
                Touch
              </span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
              Planning a trip and need specific advice? Want to book a vetted local guide? Or perhaps you're a local business looking to partner. Send us a message.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content: Form & Contact Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Contact Form Area */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2rem] border border-slate-100 p-8 sm:p-10 shadow-xl shadow-slate-200/20">
              <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 tracking-tight">
                Send a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</label>
                    <input 
                      type="text" 
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-slate-700 bg-slate-50 transition-all"
                      placeholder="Jane"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-slate-700 bg-slate-50 transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-slate-700 bg-slate-50 transition-all"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-slate-700">Inquiry Type</label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-slate-700 bg-slate-50 transition-all appearance-none"
                  >
                    <option value="general">General Travel Question</option>
                    <option value="guide">Book a Local Guide</option>
                    <option value="partnership">Partnership / Business</option>
                    <option value="correction">Report an Inaccuracy</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-slate-700">Your Message</label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 text-slate-700 bg-slate-50 transition-all resize-none"
                    placeholder="How can we help you plan your trip?"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-700 transition-all duration-300 hover:shadow-lg hover:shadow-teal-900/20 hover:-translate-y-0.5"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details Bento Grid */}
          <div className="lg:col-span-5 space-y-6">
            {[
              {
                icon: Mail,
                title: "Email Us",
                desc: "For general queries and guide bookings.",
                value: "hello@shillongwander.com",
                link: "mailto:hello@shillongwander.com",
                color: "text-cyan-600",
                bg: "bg-cyan-50"
              },
              {
                icon: Phone,
                title: "Call Us",
                desc: "Mon-Sat from 9am to 6pm IST.",
                value: "+91 98765 43210",
                link: "tel:+919876543210",
                color: "text-teal-600",
                bg: "bg-teal-50"
              },
              {
                icon: MapPin,
                title: "Our Base",
                desc: "We explore from the heart of Meghalaya.",
                value: "Laitumkhrah, Shillong 793003",
                link: "#",
                color: "text-amber-600",
                bg: "bg-amber-50"
              }
            ].map((method, idx) => (
              <a 
                key={idx} 
                href={method.link}
                className="group flex items-start gap-6 bg-white rounded-3xl border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`${method.bg} w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`w-6 h-6 ${method.color}`} />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-900 text-xl mb-1">{method.title}</h3>
                  <p className="text-slate-500 text-sm mb-3">{method.desc}</p>
                  <p className={`font-semibold ${method.color}`}>{method.value}</p>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}