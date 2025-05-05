"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { authClient } from "@/lib/auth/auth-client";
import { useRouter } from "next/navigation";
import { slugifyString } from "@/lib/utils";

export default function CreateOrganization() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(() => setSlug(slugifyString(name)), [name]);

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <Card className="z-50 border-none shadow-none max-w-md w-full">
      <Image
        src="/logo.svg"
        alt="logo"
        width={48}
        height={48}
        className="self-center"
      />
      <CardHeader className="text-center flex flex-col items-center">
        <CardTitle className="text-lg md:text-xl font-bold">
          Let&apos;s get started
        </CardTitle>
        <CardDescription className="text-xs md:text-sm">
          Tell us about your organization
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-6">
          {/* Email */}

          <div className="flex flex-col gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Organization name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="slug">Slug</Label>
              <Input
                id="slug"
                type="text"
                name="slug"
                value={slug}
                onChange={(e) => setSlug(slugifyString(e.target.value))}
                placeholder="Organization name"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={loading}
              onClick={async () => {
                await authClient.organization.create({
                  name: name,
                  slug: slug,
                  fetchOptions: {
                    onResponse: () => {
                      setLoading(false);
                    },
                    onRequest: () => {
                      setLoading(true);
                    },
                    onError: (ctx) => {
                      toast.error(ctx.error.message);
                    },
                    onSuccess: async (ctx) => {
                      if (ctx.data.organization) {
                        router.push(`/${ctx.data.slug}/dashboard/`);
                      } else {
                        toast.error("Something went wrong");
                      }
                    },
                  },
                });
              }}
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                "Continue"
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
