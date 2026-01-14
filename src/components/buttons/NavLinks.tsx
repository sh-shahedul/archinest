"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import  { ReactNode } from 'react';
type NavLinksProps = {
   href: string;
   children: ReactNode;
};
const NavLinks = ({href,children}:NavLinksProps) => {
    

      const path = usePathname()
     const active  =   href === "/" ? path === "/" : path.startsWith(href)



    return (
        <div>
          <Link className={`${active?  "text-orange-400 border-b-2  border-b-orange-400 " : ""} font-bold`} href={href}> {children}</Link>   
        </div>
    );
};

export default NavLinks;

