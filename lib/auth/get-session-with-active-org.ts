"server only";

import { headers } from "next/headers";
import { auth } from "./auth";

const getSessionWithActiveOrg = async (orgSlug: string) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || !session.user) {
    return null;
  }

  const activeOrg = session.organizations.find((o) => o.slug === orgSlug);
  if (!activeOrg) {
    return null;
  }

  return {
    ...session,
    activeOrg,
  };
};

export default getSessionWithActiveOrg;

export type SessionWithActiveOrg = NonNullable<
  Awaited<ReturnType<typeof getSessionWithActiveOrg>>
>;
