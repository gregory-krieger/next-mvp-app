import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import PageTabs from "./_components/page-tabs";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { promises as fs } from "fs";
import path from "path";

import { z } from "zod";
import { taskSchema } from "./_data/schema";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(process.cwd(), "app/[org]/table/_data/tasks.json")
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

const Page = async () => {
  const data = await getTasks();
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
            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-semibold tracking-tight">Tasks</h2>
              <p className="text-muted-foreground">Manage your tasks</p>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost">Tertiary action</Button>
              <Button variant="outline">Secondary action</Button>
              <Button variant="outline">Secondary action</Button>
              <Button>Primary action</Button>
            </div>
          </div>
          <PageTabs />
        </div>
        {/* Tabs */}

        <DataTable columns={columns} data={data} />
      </div>
    </SidebarInset>
  );
};

export default Page;
