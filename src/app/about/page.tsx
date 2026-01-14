'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Zap, Users, Shield, Star, Sparkles } from 'lucide-react';

// Type Definitions
interface Value {
  title: string;
  description: string;
  icon: React.ElementType;
}

interface Stat {
  value: string;
  label: string;
}

interface BenefitGroup {
  title: string;
  points: string[];
}

const AboutPage: React.FC = () => {
  const stats: Stat[] = [
    { value: '500+', label: 'Architects' },
    { value: '1200+', label: 'Projects' },
    { value: '50M+', label: 'Total Value' }
  ];

  const values: Value[] = [
    {
      title: 'Trust & Security',
      description: 'Bank-level encryption, verified professionals, and protected designs ensure every transaction is safe.',
      icon: Shield
    },
    {
      title: 'Efficiency',
      description: 'Streamlined processes from discovery to delivery - saving time and money for everyone.',
      icon: Zap
    },
    {
      title: 'Community',
      description: 'Building a global network of architects supporting each other and creating meaningful work.',
      icon: Users
    }
  ];

  const problems: string[] = [
    'Architects spend 60% of their time finding clients instead of creating',
    'Clients struggle to find trusted, verified architectural professionals',
    'The booking, payment, and delivery process was fragmented and unsafe',
    'Great designs were being lost in miscommunication and delays'
  ];

  const benefits: BenefitGroup[] = [
    {
      title: 'For Architects',
      points: ['Find quality clients', 'Secure payments', 'Portfolio showcase', 'Project management']
    },
    {
      title: 'For Clients',
      points: ['Verified professionals', 'Transparent pricing', 'Real-time tracking', 'Quality guarantee']
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.6 }
    })
  };

  return (
    <div className="bg-[#FFF4E7] text-[#131313] overflow-hidden">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-[#FF900E]">
              About ArchiNest
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Where Architecture
              <span className="block text-[#FF900E]">Meets Opportunity</span>
            </h1>

            <p className="text-xl text-[#727272] max-w-2xl mx-auto leading-relaxed">
              we are building the bridge between talented architects and clients who need their expertise. One secure transaction at a time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-16 bg-white/50 backdrop-blur max-w-screen-2xl mx-auto w-full">
        <div className="">
          <div className="grid grid-cols-3 gap-8 md:gap-16">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#FF900E]">{stat.value}</div>
                <p className="text-[#727272] mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="px-6 py-24 md:py-32 max-w-screen-2xl mx-auto w-full">
        <div className="">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-[#FF900E] mb-6">
                  Our Mission
                </span>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Revolutionizing
                  <span className="block text-[#FF900E]">Architecture</span>
                </h2>
              </div>

              <p className="text-xl text-[#727272] leading-relaxed">
                To revolutionize the architecture industry by creating a secure, transparent, and efficient platform where architects find clients and clients discover trusted professionals.
              </p>

              <div className="space-y-4">
                {[
                  'Empowering architects with digital tools',
                  'Connecting talented professionals globally',
                  'Building trust through verified transactions',
                  'Simplifying the entire design process'
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex gap-4 items-start"
                  >
                    <CheckCircle2 className="text-[#FF900E] flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-[#727272]">{point}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF900E] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2 mt-4"
              >
                Learn More <ArrowRight size={20} />
              </motion.button>
            </motion.div>

            {/* Right - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-3xl border-4 border-orange-200 bg-white p-6 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                  alt="Our Mission"
                  className="w-full h-[450px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-6 rounded-2xl font-bold shadow-xl"
              >
                <div className="text-3xl">🎯</div>
                <p className="text-sm mt-2">Mission Driven</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="px-6 py-24 md:py-32 bg-orange-50/50">
        <div className="max-w-screen-2xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="rounded-3xl border-4 border-orange-200 bg-white p-6 shadow-2xl overflow-hidden group hover:shadow-3xl transition-all">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop"
                  alt="Our Vision"
                  className="w-full h-[450px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                className="absolute -bottom-8 -left-8 bg-gradient-to-r from-amber-400 to-orange-500 text-white px-8 py-6 rounded-2xl font-bold shadow-xl"
              >
                <div className="text-3xl">✨</div>
                <p className="text-sm mt-2">Vision Focused</p>
              </motion.div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8 order-1 md:order-2"
            >
              <div>
                <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-[#FF900E] mb-6">
                  Our Vision
                </span>
                <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Universal
                  <span className="block text-[#FF900E]">Opportunity</span>
                </h2>
              </div>

              <p className="text-xl text-[#727272] leading-relaxed">
                A world where architectural talent is universally accessible, where projects are completed with integrity, and where creativity meets opportunity. We envision a future where every architect can thrive and every client can access world-class design.
              </p>

              <div className="space-y-4">
                {[
                  'Making quality design accessible worldwide',
                  'Empowering creative professionals globally',
                  'Building sustainable architectural practices',
                  'Creating meaningful professional relationships'
                ].map((point, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex gap-4 items-start"
                  >
                    <Sparkles className="text-[#FF900E] flex-shrink-0 mt-1" size={24} />
                    <p className="text-lg text-[#727272]">{point}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF900E] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2 mt-4"
              >
                Join Us <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Built This Section */}
      <section className="px-6 py-24">
        <div className="max-w-screen-2xl mx-auto w-full">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Why We Built ArchiNest
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {problems.map((point, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex gap-4 bg-white p-6 rounded-2xl border border-orange-200 hover:border-[#FF900E] transition-all hover:shadow-lg"
                >
                  <CheckCircle2 className="text-[#FF900E] flex-shrink-0 mt-1" size={24} />
                  <p className="text-lg text-[#727272] leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-3xl p-10 text-white space-y-6 shadow-2xl">
                <h3 className="text-3xl font-bold">The Solution</h3>
                <p className="text-lg leading-relaxed text-white/90">
                  We are solving these problems with ArchiNest - a comprehensive platform designed by architects, for architects and clients.
                </p>
                <div className="pt-4 space-y-3">
                  {['Secure Payments', 'Verified Professionals', 'Digital Delivery', 'Real-time Tracking'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-white rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className=" py-24 bg-white/50">
        <div className="max-w-screen-2xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white border-2 border-orange-200 rounded-3xl p-8 hover:border-[#FF900E] transition-all duration-300 hover:shadow-2xl h-full">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-[#FF900E] transition-colors mb-6">
                    <value.icon className="text-[#FF900E] group-hover:text-white transition-colors" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-[#727272] leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="px-6 py-24 bg-gradient-to-r from-orange-400 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Our Journey</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Founded in 2024, ArchiNest emerged from a simple observation: the architecture industry deserved better. Better tools, better security, better opportunities. We are just getting started.
            </p>

            <div className="inline-block bg-white/20 backdrop-blur border border-white/30 rounded-2xl px-8 py-6 hover:bg-white/30 transition-all">
              <p className="text-3xl font-bold">2024 → The Future</p>
              <p className="text-white/80 mt-2">Building the architecture platform the world needs</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-6 mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold">Join Our Community</h2>
            <p className="text-xl text-[#727272] max-w-2xl mx-auto">
              Whether you are an architect looking to grow your business or a client searching for the perfect design partner, ArchiNest is your platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((group, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white border-2 border-orange-200 rounded-3xl p-8 hover:border-[#FF900E] hover:shadow-2xl transition-all"
              >
                <h3 className="text-2xl font-bold mb-8 text-[#FF900E]">{group.title}</h3>
                <ul className="space-y-4">
                  {group.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-3 text-[#727272] text-lg">
                      <div className="w-3 h-3 bg-[#FF900E] rounded-full" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 bg-orange-50/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold"
          >
            Ready to Transform Architecture?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#727272]"
          >
            Join hundreds of architects and clients already using ArchiNest
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#FF900E] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
            >
              Find an Architect <ArrowRight size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-orange-300 hover:bg-orange-100 text-[#131313] px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Join as Architect
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;