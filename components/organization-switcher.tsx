"use client";

import { ChevronsUpDown, Plus } from "lucide-react";
import { Organization } from "better-auth/plugins";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
type props = {
  orgs: Organization[];
  currentOrgSlug: string;
};

export function OrganizationSwitcher(props: props) {
  const { orgs, currentOrgSlug } = props;
  const router = useRouter();

  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = useState(
    orgs.find((org) => org.slug === currentOrgSlug) || null
  );

  const switchOrg = (org: Organization) => {
    setActiveTeam(org);
    router.push(`/${org.slug}`);
  };

  if (!activeTeam) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                {activeTeam.logo ? (
                  <Image
                    src={activeTeam.logo}
                    alt={activeTeam.name}
                    width={32}
                    height={32}
                  />
                ) : (
                  <div className="size-8 bg-foreground/10" />
                )}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeTeam.name}</span>
                <span className="truncate text-xs">Pro plan</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            align="start"
            side={isMobile ? "bottom" : "right"}
            sideOffset={4}
          >
            <DropdownMenuLabel className="text-muted-foreground text-xs">
              Teams
            </DropdownMenuLabel>
            {orgs.map((org, index) => (
              <DropdownMenuItem
                key={org.name}
                onClick={() => switchOrg(org)}
                className="gap-2 p-2"
              >
                <div className="flex size-6 items-center justify-center rounded-md border">
                  {activeTeam.logo ? (
                    <Image
                      src={activeTeam.logo}
                      alt={activeTeam.name}
                      width={32}
                      height={32}
                    />
                  ) : (
                    <div className="size-8 bg-foreground/10" />
                  )}
                </div>
                {org.name}
                <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="gap-2 p-2"
              onClick={() => {
                router.push("/new");
              }}
            >
              <div className="flex size-6 items-center justify-center rounded-md border bg-transparent">
                <Plus className="size-4" />
              </div>
              <div className="text-muted-foreground font-medium">
                Create organization
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
