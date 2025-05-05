"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Frame,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { OrganizationSwitcher } from "@/components/organization-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Skeleton } from "./ui/skeleton";
import { authClient } from "@/lib/auth/auth-client";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

type props = {
  sideBarProps?: React.ComponentProps<typeof Sidebar>;
  currentOrgSlug: string;
};

const AppSidebar = (props: props) => {
  const { sideBarProps, currentOrgSlug } = props;

  const {
    data: session,
    isPending, //loading state
    error, //error object
  } = authClient.useSession();

  if (isPending) {
    return (
      <Sidebar collapsible="icon" {...sideBarProps}>
        <SidebarHeader>
          <Skeleton className="h-10 w-full" />
        </SidebarHeader>
      </Sidebar>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (session && session.user) {
    console.log(session);
    return (
      <Sidebar collapsible="icon" {...sideBarProps}>
        <SidebarHeader>
          <OrganizationSwitcher
            orgs={session.organizations}
            currentOrgSlug={currentOrgSlug}
          />
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
          <NavProjects projects={data.projects} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser user={session.user} />
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    );
  }

  return null;
};

export default AppSidebar;
