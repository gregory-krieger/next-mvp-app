import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

type Props = {
  children: React.ReactNode;
  params: Promise<{ org: string }>;
};

const OrganizationLayout = async (props: Props) => {
  const { children } = props;

  const { org } = await props.params;

  return (
    <SidebarProvider>
      <AppSidebar currentOrgSlug={org} />
      {children}
    </SidebarProvider>
  );
};

export default OrganizationLayout;
