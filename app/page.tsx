import { auth } from "@/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  const orgs = await auth.api.listOrganizations({
    headers: await headers(),
  });

  if (!orgs || orgs.length === 0) {
    redirect("/new");
  }

  redirect(`/${orgs[0].slug}`);
};

export default Page;
