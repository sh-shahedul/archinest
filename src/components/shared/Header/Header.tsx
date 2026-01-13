// "use client";

// import { Button } from "@/components/ui/button";
// import { Calendar, Menu, X, ChevronDown } from "lucide-react";
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
//     ],
//   },
//   {
//     name: "Resources",
//     href: "#",
//     dropdown: [
//       { name: "Blog", href: "/blog" },
//       { name: "Help Center", href: "/help" },
//       { name: "Documentation", href: "/docs" },
//     ],
//   },
//   { name: "About", href: "/about" },
//   { name: "Contact", href: "/contact" },
// ];

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState("");

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF4E7]/90 backdrop-blur-xl ">
//       <nav className="max-w-screen-2xl mx-auto px-6">
//         <div className="flex items-center justify-between h-20">
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3 group">
//             <div className="relative">
//               <div className="absolute inset-0 bg-orange-300 rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity" />
//               <div className="relative bg-[#FF900E] p-2 rounded-xl">
//                 <Calendar className="h-6 w-6 text-white" />
//               </div>
//             </div>
//             <span className="font-bold text-2xl text-[#131313]">
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
//                   className="flex items-center gap-1 px-4 py-2 text-[#131313] hover:text-[#FF900E] font-medium rounded-lg hover:bg-orange-100 transition"
//                 >
//                   {item.name}
//                   {item.dropdown && <ChevronDown className="h-4 w-4" />}
//                 </Link>

//                 {/* Dropdown */}
//                 {item.dropdown && openDropdown === item.name && (
//                   <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-orange-100 py-2">
//                     {item.dropdown.map((subItem) => (
//                       <Link
//                         key={subItem.name}
//                         href={subItem.href}
//                         className="block px-4 py-3 text-[#131313] hover:text-[#FF900E] hover:bg-orange-100 transition"
//                       >
//                         {subItem.name}
//                       </Link>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <div className="hidden lg:flex items-center gap-3">
//             <Button
//               variant="ghost"
//               className="text-[#131313] hover:text-[#FF900E]"
//             >
//               Sign In
//             </Button>
//             <Button className="bg-[#FF900E] hover:bg-orange-600 text-white font-semibold shadow-md shadow-orange-300/50">
//               Get Started
//             </Button>
//           </div>

//           {/* Mobile Button */}
//           <button
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             className="lg:hidden p-2 text-[#131313] hover:text-[#FF900E] hover:bg-orange-100 rounded-lg"
//           >
//             {mobileMenuOpen ? <X /> : <Menu />}
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="lg:hidden py-4 border-t border-orange-200">
//             <div className="space-y-1">
//               {navigation.map((item) => (
//                 <div key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="flex items-center justify-between px-4 py-3 text-[#131313] hover:text-[#FF900E] hover:bg-orange-100 rounded-lg font-medium"
//                     onClick={() => !item.dropdown && setMobileMenuOpen(false)}
//                   >
//                     {item.name}
//                     {item.dropdown && <ChevronDown className="h-4 w-4" />}
//                   </Link>

//                   {item.dropdown && (
//                     <div className="ml-4 mt-1 space-y-1">
//                       {item.dropdown.map((subItem) => (
//                         <Link
//                           key={subItem.name}
//                           href={subItem.href}
//                           className="block px-4 py-2 text-[#727272] hover:text-[#FF900E] hover:bg-orange-100 rounded-lg text-sm"
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

//             <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-orange-200">
//               <Button
//                 variant="outline"
//                 className="border-orange-300 text-[#131313] hover:bg-orange-100"
//               >
//                 Sign In
//               </Button>
//               <Button className="bg-[#FF900E] hover:bg-orange-600 text-white font-semibold">
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
// import { useAuth } from "@/hooks/useAuth";
import { Calendar, Menu } from "lucide-react";
import Link from "next/link";
// import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const user = {
    name: "Touhid",
    email: "user@gmail.com",
  };

  const menuItems = [
    { title: "Home", url: "/" },
    { title: "service", url: "/service" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Blog", url: "/blog" },
    ...(isAuthenticated ? [{ title: "My Events", url: "/my-events" }] : []),
    ...(isAuthenticated
      ? [{ title: "Create Event", url: "/events/create" }]
      : []),
  ];

  const handleNavigation = (url: string) => {
    router.push(url);
    setMobileOpen(false);
  };

  const handleLogoutClick = () => {
    setMobileOpen(false);
    logout();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF4E7]/90 backdrop-blur-xl ">
      <div className="max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("/")}
          className="flex items-center gap-2 font-semibold text-xl hover:opacity-80 transition-opacity"
        >
          <Calendar className="h-6 w-6" />
          <span>ArchiNest</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item,i) => (
            <Link href={item.url} key={i}>
              <button
                key={item.url}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {item.title}
              </button>
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              <div className="text-sm text-muted-foreground">{user.name}</div>
              <Button onClick={handleLogoutClick} size="sm">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={() => handleNavigation("/signup")}
                size="sm"
              >
                Sign Up
              </Button>
              <Button onClick={() => handleNavigation("/login")} size="sm">
                Login
              </Button>
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-75">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                EventHub
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-8">
              {/* Mobile Navigation */}
              <nav className="flex flex-col gap-2">
                {menuItems.map((item) => (
                  <Link href={item.url} key={item.url}>
                    <button
                      
                      className="text-left px-3 py-2 rounded-md hover:bg-accent transition-colors"
                    >
                      {item.title}
                    </button>
                  </Link>
                ))}
              </nav>

              {/* Mobile Auth Buttons */}
              <div className="flex flex-col gap-2 pt-4 border-t">
                {isAuthenticated ? (
                  <>
                    <div className="px-3 py-2 text-sm text-muted-foreground">
                      <div className="font-medium text-foreground">
                        {user.name}
                      </div>
                      <div className="text-xs">{user.email}</div>
                    </div>
                    <Button
                      onClick={handleLogoutClick}
                      variant="outline"
                      className="w-full"
                    >
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      onClick={() => handleNavigation("/login")}
                      variant="outline"
                      className="w-full"
                    >
                      Login
                    </Button>
                    <Button
                      onClick={() => handleNavigation("/signup")}
                      className="w-full"
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};