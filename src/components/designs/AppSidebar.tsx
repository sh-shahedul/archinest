// "use client"

// import * as React from "react"
// import {
//   AudioWaveform,
//   BookOpen,
//   Bot,
//   Command,
//   Frame,
//   GalleryVerticalEnd,
//   Home,
//   Map,
//   PieChart,
//   Settings2,
//   SquareTerminal,
// } from "lucide-react"

// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarHeader,
//   SidebarRail,
// } from "@/components/ui/sidebar"
// import { TeamSwitcher } from "./TeamSwitcher"
// import { NavMain } from "./NavMain"
// // import { NavProjects } from "./NavProjects"
// import { NavUser } from "./NavUser"
// import { useAuth } from "@/hooks/useAuth"
// // import { url } from "inspector"




// export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
//     const {user} = useAuth()
//     console.log(user);
//     // This is sample data.
// const data = {

//   user: {
//     name: user?.name,
//     email: user?.email,
//     avatar: user?.image,
//   },
//   teams: [
//     {
//       name: "Home",
//       logo: Home,
//       plan: "ArchiNest",
//     }
   
//   ],
//   navMain: [
//     {
//       title: "Service",
//       url: "dashboard",
//       icon: SquareTerminal,
//       isActive: true,
//       items: [
//         {
//           title: "Create Service",
//           url: "createService",
//         },
//         {
//           title: "All Service",
//           url: "allService",
//         },
//         // {
//         //   title: "Settings",
//         //   url: "#",
//         // },
//       ],
//     },
//     // {
//     //   title: "Models",
//     //   url: "#",
//     //   icon: Bot,
//     //   items: [
//     //     {
//     //       title: "Genesis",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Explorer",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Quantum",
//     //       url: "#",
//     //     },
//     //   ],
//     // },
//     // {
//     //   title: "Documentation",
//     //   url: "#",
//     //   icon: BookOpen,
//     //   items: [
//     //     {
//     //       title: "Introduction",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Get Started",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Tutorials",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Changelog",
//     //       url: "#",
//     //     },
//     //   ],
//     // },
//     // {
//     //   title: "Settings",
//     //   url: "#",
//     //   icon: Settings2,
//     //   items: [
//     //     {
//     //       title: "General",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Team",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Billing",
//     //       url: "#",
//     //     },
//     //     {
//     //       title: "Limits",
//     //       url: "#",
//     //     },
//     //   ],
//     // },
//   ],
// }
  
//   return (
//     <Sidebar collapsible="icon" {...props}>
//       <SidebarHeader>
//         <TeamSwitcher teams={data.teams} />
//       </SidebarHeader>
//       <SidebarContent>
//         <NavMain items={data.navMain} />
        
//       </SidebarContent>
//       <SidebarFooter>
//         <NavUser user={data.user} />
//       </SidebarFooter>
//       <SidebarRail />
//     </Sidebar>
//   )
// }


"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Home,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "./TeamSwitcher"
import { NavMain } from "./NavMain"
import { NavUser } from "./NavUser"
import { useAuth } from "@/hooks/useAuth"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuth()
  console.log(user)

  // Default fallback values to satisfy NavUser type
  const data = {
    user: {
      name: user?.name || "Anonymous",
      email: user?.email || "noemail@example.com",
      avatar: user?.image || "/default-avatar.png",
    },
    teams: [
      {
        name: "Home",
        logo: Home,
        plan: "ArchiNest",
      },
    ],
    navMain: [
      {
        title: "Service",
        url: "dashboard",
        icon: SquareTerminal,
        isActive: true,
        items: [
          { title: "Create Service", url: "createService" },
          { title: "All Service", url: "allService" },
        ],
      },
    ],
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
