import { SidebarTrigger } from "@/components/ui/sidebar";

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

const Page = () => {
  return (
    <SidebarInset>
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
    </SidebarInset>
  );
};

export default Page;
