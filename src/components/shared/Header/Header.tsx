// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { signIn, useSession, signOut } from "next-auth/react";
// import { Calendar, Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// // import logo from "public/archNest.png"
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import NavLinks from "@/components/buttons/NavLinks";

// export const Header = () => {
//   const router = useRouter();
//   const { data: session, status } = useSession(); 
//   const isAuthenticated = status === "authenticated";
//   const user = session?.user; // user info
//   const [mobileOpen, setMobileOpen] = useState(false);
//   console.log(session);
//   console.log(user);

//   const menuItems = [
//     { title: "Home", url: "/" },
//     { title: "Service", url: "/services" },
//     { title: "About", url: "/about" },
//     { title: "Contact", url: "/contact" },
//     { title: "Blog", url: "/blog" },
//     // { title: "Dashboard", url: "/dashboard/allService" },
//   ];
//   const finalMenuItems = isAuthenticated
//   ? [...menuItems, { title: "Dashboard", url: "/dashboard/allService" }]
//   : menuItems;

//   const handleNavigation = (url: string) => {
//     router.push(url);
//     setMobileOpen(false);
//   };

//   const handleLogoutClick = () => {
//     signOut(); 
//     setMobileOpen(false);
//   };

//   // const navLinks = menuItems.map((item) => (
//   //   <li key={item.url}>
//   //     <NavLinks href={item.url}>{item.title}</NavLinks>
//   //   </li>
//   // ));
//   const navLinks = finalMenuItems.map((item) => (
//   <li key={item.url}>
//     <NavLinks href={item.url}>{item.title}</NavLinks>
//   </li>
// ));


//   if (status === "loading") return null;

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF4E7]/90 backdrop-blur-xl">
//       <div className="max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-6">
//         {/* Logo */}
//         <button
//           onClick={() => handleNavigation("/")}
//           className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity"
//         >
//           <img src='/archNest.png' className="w-39"  alt="" />
//         </button>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-6">
//           <ul className="flex items-center gap-4">{navLinks}</ul>
//         </nav>

//         {/* Desktop Auth Buttons */}
//         <div className="hidden md:flex items-center gap-3">
//          {isAuthenticated ? (
//   <div className="flex  items-center gap-2 ">
//     {/* User Avatar */}
//    <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-orange-400 flex-shrink-0">
//      <Image 
//       src={user?.image || ''} 
//       alt={''}
//       width={32}
//       height={32}
//       className="rounded-full object-cover  "
//     />
//    </div>

//     {/* User Name */}
//     {/* <span className="text-sm text-muted-foreground">{user?.name}</span> */}

//     {/* Logout Button */}
//     <Button onClick={handleLogoutClick} size="sm" className="bg-orange-400">
//       Logout
//     </Button>
//   </div>
// ) : (
//   <div className="flex gap-2">
//     <Button
//       variant="outline"
//       onClick={() => handleNavigation("/register")}
//       size="sm"
//       className=" bg-white text-orange-400 border-2 border-orange-400 "
//     >
//       Sign Up
//     </Button>
//     <Button variant="outline" onClick={() => signIn()} size="sm"  className=" bg-orange-400 text-white">
//       Log In
//     </Button>
//   </div>
// )}

//         </div>

//         {/* Mobile Menu */}
//         <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
//           <SheetTrigger asChild className="md:hidden">
//             <Button variant="ghost" size="icon">
//               <Menu className="h-5 w-5" />
//             </Button>
//           </SheetTrigger>

//           <SheetContent side="right" className="w-72 ">
//             <SheetHeader>
//               <img src="/archnest.png" className="w-30" alt="" />
//             </SheetHeader>

//             <ul className="flex flex-col gap-2  px-5">{navLinks}</ul>

//             <div className="flex flex-col gap-2 mt-6 border-t pt-4">
//               {isAuthenticated ? (
//                 <>
//                   <div className="px-3 py-2 text-sm text-muted-foreground">
//                     <div className="flex items-center gap-3">
//                     <div className=" w-12 h-12">
//                        {/* <img 
//                        src={user?.image}
//                         alt=""  
//                         className="rounded-full"/> */}
//                          <button
//           onClick={() => handleNavigation("/")}
//           className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity rounded-full "
//         >
//           <img src={user?.image} className="w-39 rounded-full borded border-orange-400 "  alt="" />
//         </button>
                      
//                     </div>
//                     <div>

//                     <div className="font-medium text-foreground">{user?.name}</div>
//                     <div className="text-xs">{user?.email}</div>
//                     </div>

//                     </div>

//                   </div>
//                   <Button
//                     onClick={handleLogoutClick}
//                     variant="outline"
//                     className="w-full bg-orange-400"
//                   >
//                     Logout
//                   </Button>
//                 </>
//               ) : (
//                 <div className=" p-2 flex flex-col gap-2">
//                   <Button
//                     onClick={() => signIn()}
//                     variant="outline"
//                     className="w-full bg-orange-400 text-white"
//                   >
//                     Log In
//                   </Button>
//                   <Button
//                     onClick={() => handleNavigation("/register")}
//                     className="w-full bg-white text-orange-400 border-2 border-orange-400 "
//                   >
//                     Sign Up
//                   </Button>
//                 </div>
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
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "@/components/buttons/NavLinks";
import { toast } from "react-toastify";

export const Header = () => {
  const router = useRouter();
  const { data: session, status } = useSession(); 
  const isAuthenticated = status === "authenticated";
  const user = session?.user;
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { title: "Home", url: "/" },
    { title: "Service", url: "/services" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Blog", url: "/blog" },
  ];
  const finalMenuItems = isAuthenticated
    ? [...menuItems, { title: "Dashboard", url: "/dashboard/allService" }]
    : menuItems;

  const handleNavigation = (url: string) => {
    router.push(url);
    setMobileOpen(false);
  };

  const handleLogoutClick = () => {
    signOut({ redirect: false });
    toast.success("Logged out successfully!");
    setMobileOpen(false);
  };

  const navLinks = finalMenuItems.map((item) => (
    <li key={item.url}>
      <NavLinks href={item.url}>{item.title}</NavLinks>
    </li>
  ));

  if (status === "loading") return null;

  const avatarSrc = user?.image || "/default-avatar.png"; // fallback

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFF4E7]/90 backdrop-blur-xl">
      <div className="max-w-screen-2xl mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <button
          onClick={() => handleNavigation("/")}
          className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity"
        >
          <img src="/archnest.png" className="w-39" alt="Logo" />
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
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-orange-400 flex-shrink-0">
                <Image
                  src={avatarSrc}
                  alt={user?.name || "User Avatar"}
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>

              {/* Logout Button */}
              <Button
                onClick={handleLogoutClick}
                size="sm"
                className="bg-orange-400"
              >
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => handleNavigation("/register")}
                size="sm"
                className="bg-white text-orange-400 border-2 border-orange-400"
              >
                Sign Up
              </Button>
              <Button
                variant="outline"
                onClick={() => signIn()}
                size="sm"
                className="bg-orange-400 text-white"
              >
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
              <img src="/archnest.png" className="w-30" alt="Logo" />
            </SheetHeader>

            <ul className="flex flex-col gap-2 px-5">{navLinks}</ul>

            <div className="flex flex-col gap-2 mt-6 border-t pt-4">
              {isAuthenticated ? (
                <>
                  <div className="px-3 py-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12">
                        <Image
                          src={avatarSrc}
                          alt={user?.name || "User Avatar"}
                          width={48}
                          height={48}
                          className="rounded-full object-cover border-2 border-orange-400"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">
                          {user?.name}
                        </div>
                        <div className="text-xs">{user?.email}</div>
                      </div>
                    </div>
                  </div>
                  <Button
                    onClick={handleLogoutClick}
                    variant="outline"
                    className="w-full bg-orange-400"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <div className="p-2 flex flex-col gap-2">
                  <Button
                    onClick={() => signIn()}
                    variant="outline"
                    className="w-full bg-orange-400 text-white"
                  >
                    Log In
                  </Button>
                  <Button
                    onClick={() => handleNavigation("/register")}
                    className="w-full bg-white text-orange-400 border-2 border-orange-400"
                  >
                    Sign Up
                  </Button>
                </div>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
