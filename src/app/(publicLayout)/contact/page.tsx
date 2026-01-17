'use client';

import React, { useState, ChangeEvent } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users, Zap, MessageSquare, ArrowRight, Star } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  type: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    type: 'general',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        type: 'general',
        message: ''
      });

      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@archiconnect.com',
      subtext: 'We reply within 24 hours',
    },
    {
      icon: Phone,
      title: 'Call Us',
      info: '+880 1700-000-000',
      subtext: 'Mon-Fri, 9am-6pm',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: 'Dhaka, Bangladesh',
      subtext: 'Office & Studio',
    }
  ];

  const benefits = [
    { icon: Zap, title: 'Fast Response', desc: 'Quick replies to all inquiries' },
    { icon: Users, title: 'Expert Team', desc: 'Professional architects available' },
    { icon: Clock, title: '24/7 Support', desc: 'Always here when you need us' },
    { icon: Star, title: 'Top Quality', desc: 'Excellence in every project' }
  ];

  const faqItems = [
    {
      q: 'How long does it take to get a response?',
      a: 'We typically respond to all inquiries within 24 hours during business days.'
    },
    {
      q: 'What services do you offer?',
      a: 'We offer residential design, commercial design, interior design, and consultation services.'
    },
    {
      q: 'Do you work with international clients?',
      a: 'Yes! We work with clients from around the world. Remote collaboration is available.'
    },
    {
      q: 'What is your pricing structure?',
      a: 'Pricing varies based on project scope. Contact us for a detailed quote.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fffaf567] text-[#131313]">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-20">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-orange-100 border border-orange-300 text-[#FF900E] text-sm font-semibold mb-6">
              Get In Touch With Us
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-[#131313] mb-4 leading-tight">
              Lets Build <br />
              <span className="text-[#FF900E]">Something Great</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#727272] max-w-3xl mx-auto leading-relaxed">
              Have questions about our architectural services? Want to collaborate with us? We are here to help and would love to hear from you.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {contactInfo.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group"
                  style={{
                    animation: `slideUp 0.6s ease-out ${idx * 100}ms forwards`,
                    opacity: 0
                  }}
                >
                  <div className="bg-white rounded-3xl p-8 border border-orange-200 shadow-lg hover:shadow-xl hover:border-[#FF900E] transition-all duration-300">
                    <div className="inline-block p-4 bg-orange-100 rounded-2xl group-hover:bg-orange-200 transition-all duration-300 mb-6">
                      <Icon className="w-8 h-8 text-[#FF900E]" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#131313] mb-2">{item.title}</h3>
                    <p className="text-2xl text-[#FF900E] font-semibold mb-2">{item.info}</p>
                    <p className="text-[#727272]">{item.subtext}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[#131313] text-center mb-4">Why Contact Us?</h2>
          <p className="text-xl text-[#727272] text-center mb-16 max-w-2xl mx-auto">
            We are committed to providing exceptional service and support to all our clients
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-orange-200 hover:border-[#FF900E] hover:shadow-lg transition-all duration-300"
                >
                  <Icon className="w-10 h-10 text-[#FF900E] mb-4" />
                  <h3 className="text-lg font-bold text-[#131313] mb-2">{item.title}</h3>
                  <p className="text-[#727272]">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#131313] mb-4">Send Us a Message</h2>
            <p className="text-xl text-[#727272]">Fill out the form below and we will get back to you as soon as possible</p>
          </div>

          <div className="bg-white rounded-3xl p-10 md:p-16 border border-orange-200 shadow-lg">
            <div className="space-y-8">
              {/* Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-[#131313] mb-3 uppercase tracking-wide">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#FFFAF5] border border-orange-200 rounded-xl focus:outline-none focus:border-[#FF900E] focus:ring-2 focus:ring-orange-200 text-[#131313] placeholder-[#727272] transition-all text-lg"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#131313] mb-3 uppercase tracking-wide">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#FFFAF5] border border-orange-200 rounded-xl focus:outline-none focus:border-[#FF900E] focus:ring-2 focus:ring-orange-200 text-[#131313] placeholder-[#727272] transition-all text-lg"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone and Subject */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-bold text-[#131313] mb-3 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[#FFFAF5] border border-orange-200 rounded-xl focus:outline-none focus:border-[#FF900E] focus:ring-2 focus:ring-orange-200 text-[#131313] placeholder-[#727272] transition-all text-lg"
                    placeholder="+880 1700-000-000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#131313] mb-3 uppercase tracking-wide">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-[#FFFAF5] border border-orange-200 rounded-xl focus:outline-none focus:border-[#FF900E] focus:ring-2 focus:ring-orange-200 text-[#131313] placeholder-[#727272] transition-all text-lg"
                    placeholder="Project Inquiry"
                  />
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-bold text-[#131313] mb-3 uppercase tracking-wide">Service Type</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[#FFFAF5] border border-orange-200 rounded-xl focus:outline-none focus:border-[#FF900E] focus:ring-2 focus:ring-orange-200 text-[#131313] transition-all text-lg"
                >
                  <option value="general">General Inquiry</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Design</option>
                  <option value="interior">Interior Design</option>
                  <option value="consultation">Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-[#131313] mb-3 uppercase tracking-wide">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full px-5 py-4 bg-[#FFFAF5] border border-orange-200 rounded-xl focus:outline-none focus:border-[#FF900E] focus:ring-2 focus:ring-orange-200 text-[#131313] placeholder-[#727272] transition-all resize-none text-lg"
                  placeholder="Tell us about your project or question..."
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading || isSubmitted}
                className={`w-full group relative px-8 py-4 rounded-xl font-bold text-white text-lg overflow-hidden transition-all ${
                  isSubmitted
                    ? 'bg-green-600'
                    : 'bg-[#FF900E] hover:bg-orange-600 hover:shadow-xl'
                } ${isLoading ? 'opacity-75' : ''}`}
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <div className="relative flex items-center justify-center gap-3">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : isLoading ? (
                    <>
                      <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending Your Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Send Message</span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-[#131313] text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-[#727272] text-center mb-16">Quick answers to common questions</p>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-xl border border-orange-200 hover:border-[#FF900E] hover:shadow-lg transition-all"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                  <span className="text-lg font-semibold text-[#131313]">{faq.q}</span>
                  <MessageSquare className="w-5 h-5 text-[#FF900E] group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-[#727272] border-t border-orange-200">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#131313] mb-6">Ready to Start?</h2>
          <p className="text-xl text-[#727272] mb-10">
            Do not hesitate to reach out. Our team is ready to help bring your vision to life.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-[#FF900E] text-white font-bold rounded-xl hover:bg-orange-600 hover:shadow-xl transition-all">
              Start A Project
            </button>
            <button className="px-8 py-4 bg-white border border-orange-300 text-[#131313] font-bold rounded-xl hover:bg-orange-50 transition-all">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
