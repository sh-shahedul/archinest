import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";

import React from "react";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex-1">
        {children}
      </div>
      <Footer/>
    </div>
  );
}