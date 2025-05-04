import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  console.log("DashboardLayout");
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) redirect("/sign-in");

  return (
    <SidebarProvider>
      <AppSidebar user={session.user} sideBarProps={{}} />
      {children}
    </SidebarProvider>
  );
};

export default DashboardLayout;
