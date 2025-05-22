import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PageTabs = () => {
  return (
    <Tabs defaultValue="timeline">
      <TabsList className="p-0 bg-background">
        <TabsTrigger
          className="data-[state=active]:bg-foreground/5 data-[state=active]:shadow-none rounded-full"
          value="timeline"
        >
          Activity
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:bg-foreground/5 data-[state=active]:shadow-none rounded-full"
          value="health"
        >
          Deals
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:bg-foreground/5 data-[state=active]:shadow-none rounded-full"
          value="laboratory"
        >
          Tickets
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:bg-foreground/5 data-[state=active]:shadow-none rounded-full"
          value="documents"
        >
          Documents
        </TabsTrigger>
        <TabsTrigger
          className="data-[state=active]:bg-foreground/5 data-[state=active]:shadow-none rounded-full"
          value="invoices"
        >
          Invoices
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default PageTabs;
