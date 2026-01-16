
// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signIn } from "next-auth/react";
// import { Calendar, Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { useAuth } from "@/hooks/useAuth";
// import NavLinks from "@/components/buttons/NavLinks";

// export const Header = () => {
//   const router = useRouter();
//   const { isAuthenticated, logout , user} = useAuth();
//   console.log(user);
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
//     logout();
//     setMobileOpen(false);
//   };

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
//           className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity"
//         >
//           <Calendar className="h-6 w-6 text-[#005461]" />
//           <span>ArchiNest</span>
//         </button>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-6">
//           <ul className="flex items-center gap-4">{navLinks}</ul>
//         </nav>

//         {/* Desktop Auth Buttons */}
//         <div className="hidden md:flex items-center gap-3">
//           {isAuthenticated ? (
//             <>
//               {/* <span className="text-sm text-muted-foreground">{user.name}</span> */}
//               <Button onClick={handleLogoutClick} size="sm">
//                 Logout
//               </Button>
//             </>
//           ) : (
//             <>
//               <Button
//                 variant="outline"
//                 onClick={() => handleNavigation("/register")}
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

//           <SheetContent side="right" className="w-72">
//             <SheetHeader>
//               <SheetTitle className="flex items-center gap-2">
//                 <Calendar className="h-5 w-5" />
//                 ArchiNest
//               </SheetTitle>
//             </SheetHeader>

//             <ul className="flex flex-col gap-2 mt-6">{navLinks}</ul>

//             <div className="flex flex-col gap-2 mt-6 border-t pt-4">
//               {isAuthenticated ? (
//                 <>
//                   {/* <div className="px-3 py-2 text-sm text-muted-foreground">
//                     <div className="font-medium text-foreground">{user.name}</div>
//                     <div className="text-xs">{user.email}</div>
//                   </div> */}
//                   <Button
//                     onClick={handleLogoutClick}
//                     variant="outline"
//                     className="w-full"
//                   >
//                     Logout
//                   </Button>
//                 </>
//               ) : (
//                 <>
//                   <Button
//                     onClick={() => signIn()}
                    
//                     variant="outline"
//                     className="w-full"
//                   >
//                     Log In
//                   </Button>
//                   <Button
//                     onClick={() => handleNavigation("/register")}
//                     className="w-full"
                    
//                   >
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
import { useRouter } from "next/navigation";
import { signIn, useSession, signOut } from "next-auth/react";
import { Calendar, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "@/components/buttons/NavLinks";

export const Header = () => {
  const router = useRouter();
  const { data: session, status } = useSession(); // ✅ NextAuth session check
  const isAuthenticated = status === "authenticated"; // session active হলে true
  const user = session?.user; // user info
  const [mobileOpen, setMobileOpen] = useState(false);
  console.log(session);
  console.log(user);

  const menuItems = [
    { title: "Home", url: "/" },
    { title: "Service", url: "/services" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Blog", url: "/blog" },
  ];

  const handleNavigation = (url: string) => {
    router.push(url);
    setMobileOpen(false);
  };

  const handleLogoutClick = () => {
    signOut(); // ✅ NextAuth logout
    setMobileOpen(false);
  };

  const navLinks = menuItems.map((item) => (
    <li key={item.url}>
      <NavLinks href={item.url}>{item.title}</NavLinks>
    </li>
  ));

  // loading state handle করা (optional)
  if (status === "loading") return null;

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
  <div className="flex items-center gap-2">
    {/* User Avatar */}
    <Image
      
      src={user?.image || ''} // যদি image না থাকে default ব্যবহার
      alt={''}
      width={32}
      height={32}
      className="rounded-full object-cover"
    />

    {/* User Name */}
    {/* <span className="text-sm text-muted-foreground">{user?.name}</span> */}

    {/* Logout Button */}
    <Button onClick={handleLogoutClick} size="sm">
      Logout
    </Button>
  </div>
) : (
  <div className="flex gap-2">
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
  </div>
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
                  <div className="px-3 py-2 text-sm text-muted-foreground">
                    <div className="font-medium text-foreground">{user?.name}</div>
                    <div className="text-xs">{user?.email}</div>
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
