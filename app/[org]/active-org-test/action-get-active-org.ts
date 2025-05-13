"use server";

import getSessionWithActiveOrg from "@/lib/auth/get-session-with-active-org";

type Props = {
  orgSlug: string;
};

export const actionGetActiveOrg = async (props: Props) => {
  const { orgSlug } = props;

  const session = await getSessionWithActiveOrg(orgSlug);

  console.log(session?.activeOrg?.slug);
  return null;
};
