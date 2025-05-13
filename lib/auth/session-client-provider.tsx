"use client";

import { createContext, useContext } from "react";
import { SessionWithActiveOrg } from "./get-session-with-active-org";

type Props = {
  children: React.ReactNode;
  session: SessionWithActiveOrg;
};
const SessionContext = createContext<SessionWithActiveOrg | undefined>(
  undefined
);

const SessionClientProvider = (props: Props) => {
  const { children, session } = props;

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionClientProvider;

export const useSession = () => {
  const session = useContext(SessionContext);
  if (!session) {
    throw new Error("Session not found");
  }
  return session;
};
