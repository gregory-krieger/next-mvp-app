"use client";

import { Button } from "@/components/ui/button";
import { actionGetActiveOrg } from "./action-get-active-org";
import { useSession } from "@/lib/auth/session-client-provider";

const Page = () => {
  // const [activeOrg, setActiveOrg] = useState<string | null>(null);
  const { activeOrg } = useSession();

  return (
    <div>
      <Button onClick={() => actionGetActiveOrg({ orgSlug: activeOrg.slug })}>
        Get Active Org
      </Button>
    </div>
  );
};

export default Page;
