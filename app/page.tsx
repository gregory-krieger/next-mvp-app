import { auth } from "@/lib/auth/auth";
import { Organization } from "better-auth/plugins/organization";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async () => {
  let orgs: Organization[] = [];
  try {
    orgs = await auth.api.listOrganizations({
      headers: await headers(),
    });
  } catch {
    redirect("/sign-in");
  }

  if (!orgs || orgs.length === 0) {
    redirect("/new");
  }

  redirect(`/${orgs[0].slug}`);
};

export default Page;
