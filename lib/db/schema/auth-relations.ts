import { relations } from "drizzle-orm";
import { member, organization } from "./auth";

export const memberRelations = relations(member, ({ one }) => ({
  organization: one(organization, {
    fields: [member.organizationId],
    references: [organization.id],
  }),
}));

export type DBOrganization = typeof organization.$inferSelect;
export type DBMember = typeof member.$inferSelect;
