import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PageTabs = () => {
  return (
    <Tabs defaultValue="timeline">
      <TabsList>
        <TabsTrigger value="timeline">Timeline</TabsTrigger>
        <TabsTrigger value="health">Health</TabsTrigger>
        <TabsTrigger value="laboratory">Laboratory</TabsTrigger>
        <TabsTrigger value="administration">Administration</TabsTrigger>
        <TabsTrigger value="documents">Documents</TabsTrigger>
        <TabsTrigger value="invoices">Invoices</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default PageTabs;
