import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarInset } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import PageTabs from "./_components/page-tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ResizableHandle } from "@/components/ui/resizable";
import { ResizablePanel } from "@/components/ui/resizable";
import { ResizablePanelGroup } from "@/components/ui/resizable";
import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Collapsible } from "@/components/ui/collapsible";
import { Mail, Map, Phone, Plus } from "lucide-react";

const Page = () => {
  return (
    <SidebarInset>
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mr-2 data-[orientation=vertical]:h-4"
              />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="#">Parent page</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Page title</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-8 p-4 pt-0">
            {/* Page header */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start justify-between pb-1">
                <div className="flex flex-items-center gap-4">
                  <Avatar className="size-15">
                    <AvatarImage src="/gradient-avatars/gradient-avatar-red.svg" />
                    <AvatarFallback>O</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-semibold tracking-tight">
                      Ophélie Delaunay
                    </h2>
                    <p className="text-muted-foreground flex row gap-1">
                      <span>Female</span>
                      <span>•</span>
                      <span>25 y.o (24.09.1994)</span>
                      <span>•</span>
                      <span>12345678</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="ghost">Tertiary action</Button>
                  <Button variant="outline">Secondary action</Button>
                  <Button variant="outline">Secondary action</Button>
                  <Button>Primary action</Button>
                </div>
              </div>
            </div>
            {/* Tabs */}
            <PageTabs />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel className="text-sidebar-foreground flex h-full flex-col">
          <SidebarContent>
            <SidebarGroup className="border-b">
              <Collapsible defaultOpen>
                <CollapsibleTrigger>
                  <SidebarGroupLabel>Contact points</SidebarGroupLabel>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Phone />
                        +41 78 123 45 67
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>
                        <Mail />
                        ophdelaunay@gmail.com
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
            <SidebarGroup className="border-b">
              <Collapsible defaultOpen>
                <CollapsibleTrigger>
                  <SidebarGroupLabel>Addresses</SidebarGroupLabel>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton size={"lg"}>
                        <Map />
                        <p className="flex flex-col">
                          <span>Rue de la Gare 12</span>
                          <span>1200 Genève</span>
                        </p>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
            <SidebarGroup className="border-b">
              <Collapsible defaultOpen>
                <CollapsibleTrigger>
                  <SidebarGroupLabel>Payment methods</SidebarGroupLabel>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton size={"lg"}>
                        <Avatar className="rounded-sm">
                          <AvatarImage src="/allianz.png" />
                          <AvatarFallback>M</AvatarFallback>
                        </Avatar>
                        <p className="flex flex-col">
                          <span className="font-medium">Allianz Suisse</span>
                          <span className="text-muted-foreground">LAA</span>
                        </p>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton size={"lg"}>
                        <Avatar>
                          <AvatarImage src="/mastercard.png" />
                          <AvatarFallback>M</AvatarFallback>
                        </Avatar>
                        <p className="flex flex-col">
                          <span className="font-medium">Mastercard ••42</span>
                          <span className="text-muted-foreground">
                            Exp. 01/2025
                          </span>
                        </p>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
            <SidebarGroup className="border-b group">
              <Collapsible defaultOpen>
                <CollapsibleTrigger className="w-full flex flex-row justify-between items-center hover:bg-foreground/5 pr-2 rounded-md">
                  <SidebarGroupLabel>Relations</SidebarGroupLabel>
                  <SidebarGroupAction>
                    <Plus /> <span className="sr-only">Add Project</span>
                  </SidebarGroupAction>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton size={"lg"}>
                        <Avatar className="rounded-sm">
                          <AvatarImage src="/gradient-avatars/gradient-avatar-aqua.svg" />
                          <AvatarFallback>M</AvatarFallback>
                        </Avatar>
                        <p className="flex flex-col">
                          <span className="font-medium">
                            Dr. Matthieu Rocher
                          </span>
                          <span className="text-muted-foreground">
                            Family doctor
                          </span>
                        </p>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </CollapsibleContent>
              </Collapsible>
            </SidebarGroup>
          </SidebarContent>
        </ResizablePanel>
      </ResizablePanelGroup>
    </SidebarInset>
  );
};

export default Page;
