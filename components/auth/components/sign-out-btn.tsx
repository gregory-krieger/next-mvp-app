"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";

const SignOutBtn = () => {
  const router = useRouter();
  return (
    <Button
      onClick={async () =>
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/login"); // redirect to login page
            },
          },
        })
      }
    >
      Sign out
    </Button>
  );
};

export default SignOutBtn;
