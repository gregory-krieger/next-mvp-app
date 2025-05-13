import { eq } from "drizzle-orm";
import { db } from "../db/db";
import { DBOrganization, member } from "../db/schema";

export const listUserOrganizations = async (
  userId: string
): Promise<DBOrganization[]> => {
  const memberships = await db.query.member.findMany({
    where: eq(member.userId, userId),
    with: {
      organization: true,
    },
  });
  const organizations = memberships.map(
    (membership) => membership.organization
  );

  return organizations;
};
