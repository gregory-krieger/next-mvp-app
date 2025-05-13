"use client";

import { ChevronsUpDown, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SessionWithActiveOrg } from "@/lib/auth/get-session-with-active-org";

type props = {
  session: SessionWithActiveOrg;
};

export function OrganizationSwitcher(props: props) {
  const { activeOrg, organizations } = props.session;

  const router = useRouter();
  const { isMobile } = useSidebar();

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
                {activeOrg.logo ? (
                  <Image
                    src={activeOrg.logo}
                    alt={activeOrg.name}
                    width={32}
                    height={32}
                  />
                ) : (
                  <div className="size-8 bg-foreground/10" />
                )}
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{activeOrg.name}</span>
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
              Organizations
            </DropdownMenuLabel>
            {organizations.map((org) => (
              <DropdownMenuItem key={org.id} className="p-2">
                <Link href={`/${org.slug}`} className="flex items-center gap-2">
                  <div className="size-6 shrink-0">
                    {org.logo ? (
                      <Image
                        src={org.logo}
                        alt={org.name}
                        width={24}
                        height={24}
                      />
                    ) : (
                      <div className="flex size-6 items-center justify-center rounded-md border bg-foreground/10" />
                    )}
                  </div>
                  {org.name}
                </Link>
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
