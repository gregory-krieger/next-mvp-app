import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import getSessionWithActiveOrg from "@/lib/auth/get-session-with-active-org";
import SessionClientProvider from "@/lib/auth/session-client-provider";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
  params: Promise<{ org: string }>;
};

const OrganizationLayout = async (props: Props) => {
  const { children } = props;

  const { org } = await props.params;

  const session = await getSessionWithActiveOrg(org);
  if (!session) redirect("/");

  return (
    <SessionClientProvider session={session}>
      <SidebarProvider>
        <AppSidebar session={session} />
        {children}
      </SidebarProvider>
    </SessionClientProvider>
  );
};

export default OrganizationLayout;
