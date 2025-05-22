import { SidebarInset } from "@/components/ui/sidebar";
import { GripVertical } from "lucide-react";
import PageTabs from "./_components/page-tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import PageNewAction from "./_components/page-new-action";
import PageEvent from "./_components/page-event";
import PageSidebarLeft from "./_components/page-sidebar-left";

const Page = () => {
  return (
    <SidebarInset className="bg-transparent flex flex-row gap-3">
      <PageSidebarLeft />
      {/* Main content */}
      <div className="w-full flex flex-col gap-2 h-full">
        <div className="flex flex-row justify-between items-center bg-background rounded-full px-3 py-2">
          <PageTabs />
        </div>
        <div className="flex flex-row gap-2 h-full">
          <div className="w-full h-full flex flex-col gap-2">
            {/* Actions */}
            <PageNewAction />
            <PageEvent />
          </div>
          <div className="h-full  max-w-[300px] w-full flex flex-col gap-2">
            <Card className="py-3 py-gap-2 rounded-[20px] gap-2">
              <CardHeader className="px-3 flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <div className="size-5 bg-foreground/50 rounded-sm"></div>
                  <p className="text-sm font-semibold">Problems</p>
                </div>
              </CardHeader>
              <CardContent className="px-3 text-sm font-medium ">
                <div className="flex flex-row gap-2 items-center py-1">
                  <GripVertical className="size-4 text-muted-foreground" />
                  <p>Douleur du coude gauche</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarInset>
  );
};

export default Page;
