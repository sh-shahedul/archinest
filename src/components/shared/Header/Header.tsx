// "use client";

// import { Button } from "@/components/ui/button";
// import {
//   Calendar,
//   Menu,
//   X,
//   ChevronDown,
// } from "lucide-react";
// import Link from "next/link";
// import { useState } from "react";

// const navigation = [
//   { name: "Home", href: "/" },
//   { 
//     name: "Products", 
//     href: "#",
//     dropdown: [
//       { name: "Features", href: "/features" },
//       { name: "Pricing", href: "/pricing" },
//       { name: "Integrations", href: "/integrations" },
//     ]
//   },
//   { 
//     name: "Resources", 
//     href: "#",
//     dropdown: [
//       { name: "Blog", href: "/blog" },
//       { name: "Help Center", href: "/help" },
//       { name: "Documentation", href: "/docs" },
//     ]
//   },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState("");

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm">
//       <nav className="max-w-screen-2xl mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link
//             href="/"
//             className="flex items-center gap-3 group"
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-blue-500 rounded-xl blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
//               <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-2 rounded-xl">
//                 <Calendar className="h-6 w-6 text-white" />
//               </div>
//             </div>
//             <span className="font-bold text-2xl bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
//               ArchiNest
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden lg:flex items-center gap-1">
//             {navigation.map((item) => (
//               <div
//                 key={item.name}
//                 className="relative"
//                 onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
//                 onMouseLeave={() => setOpenDropdown("")}
//               >
//                 <Link
//                   href={item.href}
//                   className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors rounded-lg hover:bg-blue-50"
//                 >
//                   {item.name}
//                   {item.dropdown && (
//                     <ChevronDown className="h-4 w-4" />
//                   )}
//                 </Link>

//                 {/* Dropdown Menu */}
//                 {item.dropdown && openDropdown === item.name && (
//                   <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
//                     {item.dropdown.map((subItem) => (
//                       <Link
//                         key={subItem.name}
//                         href={subItem.href}
//                         className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
//                       >
//                         {subItem.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="hidden lg:flex items-center gap-3">
//             <Button variant="ghost" className="text-gray-700 hover:text-blue-600 font-medium">
//               Sign In
//             </Button>
//             <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300">
//               Get Started
//             </Button>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="lg:hidden p-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
//           >
//             {mobileMenuOpen ? (
//               <X className="h-6 w-6" />
//             ) : (
//               <Menu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden py-4 border-t border-gray-200">
//             <div className="space-y-1">
//               {navigation.map((item) => (
//                 <div key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
//                     onClick={() => !item.dropdown && setMobileMenuOpen(false)}
//                   >
//                     {item.name}
//                     {item.dropdown && (
//                       <ChevronDown className="h-4 w-4" />
//                     )}
//                   </Link>
                  
//                   {/* Mobile Dropdown */}
//                   {item.dropdown && (
//                     <div className="ml-4 mt-1 space-y-1">
//                       {item.dropdown.map((subItem) => (
//                         <Link
//                           key={subItem.name}
//                           href={subItem.href}
//                           className="block px-4 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors text-sm"
//                           onClick={() => setMobileMenuOpen(false)}
//                         >
//                           {subItem.name}
//                         </Link>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* Mobile CTA */}
//             <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-gray-200">
//               <Button variant="outline" className="w-full text-gray-700 border-gray-300 hover:text-blue-600 hover:border-blue-600 font-medium">
//                 Sign In
//               </Button>
//               <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold shadow-lg shadow-blue-500/30">
//                 Get Started
//               </Button>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// }

"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "#",
    dropdown: [
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "Integrations", href: "/integrations" },
    ],
  },
  {
    name: "Resources",
    href: "#",
    dropdown: [
      { name: "Blog", href: "/blog" },
      { name: "Help Center", href: "/help" },
      { name: "Documentation", href: "/docs" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState("");

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF4E7]/90 backdrop-blur-xl ">
      <nav className="max-w-screen-2xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-300 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative bg-[#FF900E] p-2 rounded-xl">
                <Calendar className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="font-bold text-2xl text-[#131313]">
              ArchiNest
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown("")}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 text-[#131313] hover:text-[#FF900E] font-medium rounded-lg hover:bg-orange-100 transition"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown */}
                {item.dropdown && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-orange-100 py-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-[#131313] hover:text-[#FF900E] hover:bg-orange-100 transition"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-[#131313] hover:text-[#FF900E]"
            >
              Sign In
            </Button>
            <Button className="bg-[#FF900E] hover:bg-orange-600 text-white font-semibold shadow-md shadow-orange-300/50">
              Get Started
            </Button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#131313] hover:text-[#FF900E] hover:bg-orange-100 rounded-lg"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-orange-200">
            <div className="space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 text-[#131313] hover:text-[#FF900E] hover:bg-orange-100 rounded-lg font-medium"
                    onClick={() => !item.dropdown && setMobileMenuOpen(false)}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown className="h-4 w-4" />}
                  </Link>

                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-[#727272] hover:text-[#FF900E] hover:bg-orange-100 rounded-lg text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-orange-200">
              <Button
                variant="outline"
                className="border-orange-300 text-[#131313] hover:bg-orange-100"
              >
                Sign In
              </Button>
              <Button className="bg-[#FF900E] hover:bg-orange-600 text-white font-semibold">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
