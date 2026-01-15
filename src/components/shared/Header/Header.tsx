// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
// import { Calendar, Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
// import { useAuth } from "@/hooks/useAuth";
// import NavLinks from "@/components/buttons/NavLinks";


// export const Header = () => {
//   const router = useRouter();
//   const { isAuthenticated, logout ,user} = useAuth();
//   const [mobileOpen, setMobileOpen] = useState(false);

 

//   const menuItems = [
//     { title: "Home", url: "/" },
//     { title: "Service", url: "/service" },
//     { title: "About", url: "/about" },
//     { title: "Contact", url: "/contact" },
//     { title: "Blog", url: "/blog" },
//   ];

//   const handleNavigation = (url: string) => {
//     router.push(url);
//     setMobileOpen(false);
//   };

//   const handleLogoutClick = () => {
//     setMobileOpen(false);
//     logout();
//   };

//   // Nav items JSX
//   const navLinks = menuItems.map((item) => (
//     <li key={item.url}>
//       <NavLinks href={item.url}>{item.title}</NavLinks>
//     </li>
//   ));

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF4E7]/90 backdrop-blur-xl">
//       <div className="max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-4">

//         {/* Logo */}
//         <button
//           onClick={() => handleNavigation("/")}
//           className="flex items-center gap-2 font-semibold text-xl hover:opacity-80 transition-opacity"
//         >
//           <Calendar className="h-6 w-6" />
//           <span>ArchiNest</span>
//         </button>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-6">
//           <ul className="flex items-center gap-4">{navLinks}</ul>
//         </div>

//         {/* Desktop Auth Buttons */}
//         <div className="hidden md:flex items-center gap-3">
//           {isAuthenticated ? (
//             <>
//               <div className="text-sm text-muted-foreground">{user.name}</div>
//               <Button onClick={handleLogoutClick} size="sm">
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button
//                 variant="outline"
//                 onClick={() => handleNavigation("/signup")}
//                 size="sm"
//               >
//                 Sign Up
//               </Button>
//               <Button variant="outline" onClick={() => signIn()} size="sm">
//                 Log In
//               </Button>
//             </>
//           )}
//         </div>

//         {/* Mobile Menu */}
//         <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
//           <SheetTrigger asChild className="md:hidden">
//             <Button variant="ghost" size="icon">
//               <Menu className="h-5 w-5" />
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="right" className="w-75">
//             <SheetHeader>
//               <SheetTitle className="flex items-center gap-2">
//                 <Calendar className="h-5 w-5" />
//                 ArchiNest
//               </SheetTitle>
//             </SheetHeader>

//             <ul className="flex flex-col gap-2 mt-8">{navLinks}</ul>

//             <div className="flex flex-col gap-2 pt-4 border-t">
//               {isAuthenticated ? (
//                 <>
//                   <div className="px-3 py-2 text-sm text-muted-foreground">
//                     <div className="font-medium text-foreground">{user.name}</div>
//                     <div className="text-xs">{user.email}</div>
//                   </div>
//                   <Button onClick={handleLogoutClick} variant="outline" className="w-full">
//                     Logout
//                   </Button>
//                 </>
//               ) : (
//                 <>
//                   <Button onClick={() => signIn()} variant="outline" className="w-full">
//                     Log In
//                   </Button>
//                   <Button onClick={() => handleNavigation("/signup")} className="w-full">
//                     Sign Up
//                   </Button>
//                 </>
//               )}
//             </div>
//           </SheetContent>
//         </Sheet>
//       </div>
//     </header>
//   );
// };

// export default Header;

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAuth } from "@/hooks/useAuth";
import NavLinks from "@/components/buttons/NavLinks";

export const Header = () => {
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { title: "Home", url: "/" },
    { title: "Service", url: "/service" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Blog", url: "/blog" },
  ];

  const handleNavigation = (url: string) => {
    router.push(url);
    setMobileOpen(false);
  };

  const handleLogoutClick = () => {
    logout();
    setMobileOpen(false);
  };

  const navLinks = menuItems.map((item) => (
    <li key={item.url}>
      <NavLinks href={item.url}>{item.title}</NavLinks>
    </li>
  ));

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF4E7]/90 backdrop-blur-xl">
      <div className="max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("/")}
          className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity"
        >
          <Calendar className="h-6 w-6 text-[#005461]" />
          <span>ArchiNest</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-4">{navLinks}</ul>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated ? (
            <>
              {/* <span className="text-sm text-muted-foreground">{user.name}</span> */}
              <Button onClick={handleLogoutClick} size="sm">
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                onClick={() => handleNavigation("/register")}
                size="sm"
              >
                Sign Up
              </Button>
              <Button variant="outline" onClick={() => signIn()} size="sm">
                Log In
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

          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                ArchiNest
              </SheetTitle>
            </SheetHeader>

            <ul className="flex flex-col gap-2 mt-6">{navLinks}</ul>

            <div className="flex flex-col gap-2 mt-6 border-t pt-4">
              {isAuthenticated ? (
                <>
                  {/* <div className="px-3 py-2 text-sm text-muted-foreground">
                    <div className="font-medium text-foreground">{user.name}</div>
                    <div className="text-xs">{user.email}</div>
                  </div> */}
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
                    onClick={() => signIn()}
                    
                    variant="outline"
                    className="w-full"
                  >
                    Log In
                  </Button>
                  <Button
                    onClick={() => handleNavigation("/register")}
                    className="w-full"
                    
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

