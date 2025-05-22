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
        <div className="min-h-screen w-full flex flex-row py-2 px-1 pr-2 bg-gradient-to-b from-sky-100 to-sky-200 dark:from-background dark:to-background dark:bg-background">
          <AppSidebar
            session={session}
            sideBarProps={{
              collapsible: "icon",
              variant: "floating",
            }}
          />
          {children}
        </div>
      </SidebarProvider>
    </SessionClientProvider>
  );
};

export default OrganizationLayout;
