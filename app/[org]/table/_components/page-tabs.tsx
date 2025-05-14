import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PageTabs = () => {
  return (
    <Tabs defaultValue="all-tasks">
      <TabsList>
        <TabsTrigger value="all-tasks">All tasks</TabsTrigger>
        <TabsTrigger value="my-tasks">My tasks</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default PageTabs;
