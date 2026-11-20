'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs.sendForm(
      'service_id67vde',
      'template_8pzkfqr',
      formRef.current,
      'df36CLck4yeROichd'
    )
      .then(
        () => {
          alert('Message sent successfully!');
          formRef.current?.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          alert('Failed to send message, please try again.');
        }
      );
  };

  return (
    // নেভবার ও হিরো সেকশনের সাথে হুবহু মিল রেখে max-w-6xl এবং px-4 দেওয়া হলো
    <section
      id="contact"
      className="py-14 sm:py-20 md:py-24 bg-slate-950 border-t border-slate-900 relative overflow-x-clip"
    >
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-14 md:mb-16">
          <span className="text-cyan-400 text-[11px] sm:text-xs font-semibold uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3.5 sm:px-4 py-1.5 rounded-full shadow-lg inline-block">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mt-3 sm:mt-4 tracking-tight">
            Lets Work Together!
          </h2>
          <p className="text-slate-400 mt-2.5 sm:mt-3 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed">
            I am currently open to full-stack MERN &amp; Next.js development projects, freelance work, or full-time opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Contact Info & Direct Chat */}
          <div className="space-y-4 sm:space-y-6 min-w-0">
            <div className="flex items-center gap-3.5 sm:gap-4 bg-slate-900/80 border border-slate-800 p-3.5 sm:p-4 rounded-2xl backdrop-blur-md">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <Mail className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-400 font-medium">Email Me</p>
                <a
                  href="mailto:mdjubayerislamjubo60@gmail.com"
                  className="text-white text-xs sm:text-sm md:text-base font-semibold hover:text-cyan-400 transition-colors break-all"
                >
                  mdjubayerislamjubo60@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3.5 sm:gap-4 bg-slate-900/80 border border-slate-800 p-3.5 sm:p-4 rounded-2xl backdrop-blur-md">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <MapPin className="w-5 h-5 sm:w-[22px] sm:h-[22px]" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-slate-400 font-medium">Location</p>
                <p className="text-white text-xs sm:text-sm md:text-base font-semibold">
                  DHAKA, Bangladesh
                </p>
              </div>
            </div>
            
            <div className="pt-1 sm:pt-2">
              <p className="text-xs sm:text-sm font-semibold text-slate-300 mb-3 sm:mb-4">
                Direct Chat With Me:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                
                <a 
                  href="https://wa.me/8801321901053"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-3.5 bg-slate-900/80 border border-emerald-500/30 hover:border-emerald-500 p-3.5 sm:p-4 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shrink-0">
                    <FaWhatsapp size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 font-medium">Chat on</p>
                    <p className="text-emerald-400 font-bold text-sm">WhatsApp</p>
                  </div>
                </a>

                {/* Messenger Card */}
                <a 
                  href="https://m.me/md.jubayer.islam.xubo"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-3.5 bg-slate-900/80 border border-blue-500/30 hover:border-blue-500 p-3.5 sm:p-4 rounded-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.02] group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
                    <FaFacebookMessenger size={20} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 font-medium">Chat on</p>
                    <p className="text-blue-400 font-bold text-sm">Messenger</p>
                  </div>
                </a>

              </div>
            </div>
          </div>
          
          {/* Right Column: EmailJS Form */}
          <div className="bg-slate-900/90 border border-slate-800/80 p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-xl shadow-2xl min-w-0">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  name="from_name"
                  placeholder="Enter your name" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Your Email
                </label>
                <input 
                  type="email" 
                  name="from_email"
                  placeholder="Enter your email" 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                  Message
                </label>
                <textarea 
                  name="message"
                  rows={4}
                  placeholder="Write your message here..." 
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 sm:px-4 py-3 sm:py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors text-sm resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-cyan-400 hover:bg-cyan-500 active:scale-[0.99] text-slate-950 font-bold py-3.5 sm:py-4 rounded-xl transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.4)] flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}