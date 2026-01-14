"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Calendar, Facebook, Github, Instagram, Twitter } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const footerSections = [
  {
    title: "Company",
    links: [
      { title: "About Us", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { title: "Blog", href: "#" },
      { title: "Help Center", href: "#" },
      { title: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Products",
    links: [
      { title: "Pricing", href: "#" },
      { title: "Features", href: "#" },
      { title: "Integrations", href: "#" },
    ],
  },
];

const socialLinks = [
  { name: "GitHub", url: "#", icon: <Github />, color: "hover:bg-[#FFB95C]" },
  { name: "Twitter", url: "#", icon: <Twitter />, color: "hover:bg-[#FF900E]" },
  { name: "Facebook", url: "#", icon: <Facebook />, color: "hover:bg-[#FF900E]/80" },
  { name: "Instagram", url: "#", icon: <Instagram />, color: "hover:bg-[#FF6A3D]" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      console.log("Subscribing:", email);
      setEmail("");
    }
  };

  return (
    <footer className=" bg-[#FFF8F0] text-[#131313] ">
  
      <div className=" max-w-screen-2xl mx-auto px-6 py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 group mb-6">
              <div className="">
                <div className=" inset-0 bg-[#FF900E]/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className=" bg-gradient-to-br from-[#FF900E] to-[#FFB95C] p-2.5 rounded-xl">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
              </div>
              <span className="font-bold text-3xl bg-gradient-to-r from-[#131313] to-[#FF900E] bg-clip-text text-transparent">
                ArchiNest
              </span>
            </Link>
            <p className="text-[#727272] text-lg mb-6 leading-relaxed">
              Build modern, scalable web experiences with cutting-edge technology and innovative solutions.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h6 className="font-bold text-[#131313] text-lg mb-4 relative inline-block">
                {section.title}
                <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-[#FF900E] to-[#FFB95C]"></span>
              </h6>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-[#727272] hover:text-[#131313] hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="bg-[#FF900E]/10 backdrop-blur-sm border border-[#FF900E]/20 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h6 className="font-bold text-[#131313] text-2xl mb-2">Stay in the loop</h6>
              <p className="text-[#727272]">
                Subscribe to get the latest news, updates, and special offers delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto md:min-w-[400px]">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-[#FF900E]/30 text-[#131313] placeholder:text-[#727272] focus:border-[#FF900E] focus:ring-[#FF900E]/20"
              />
              <Button
                onClick={handleSubscribe}
                className="bg-gradient-to-r from-[#FF900E] to-[#FFB95C] hover:from-[#FFB95C] hover:to-[#FF900E] text-white font-semibold px-8 shadow-lg shadow-[#FF900E]/30 hover:shadow-[#FFB95C]/40 transition-all duration-300"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="bg-[#FF900E]/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-[#727272] text-sm">
            &copy; {new Date().getFullYear()} ArchiNest. All rights reserved. Crafted with ❤️
          </span>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-white/5 rounded-xl border border-white/10 ${social.color} hover:border-transparent transition-all duration-300 hover:scale-110 hover:shadow-lg group`}
              >
                <span className="text-[#131313] group-hover:text-white transition-colors font-bold text-sm">
                  {social.icon}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-[#FF900E] via-[#FFB95C] to-[#FF6A3D]"></div>
    </footer>
  );
}
