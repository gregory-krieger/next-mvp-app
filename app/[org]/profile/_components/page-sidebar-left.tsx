import { Badge } from "@/components/ui/badge";
import { PageSidebarGroup } from "@/components/page-sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Check, Globe, Mail, Map, Phone } from "lucide-react";

const PageSidebarLeft = () => {
  return (
    <div className="h-fit min-w-[250px] max-w-[300px] w-full bg-background rounded-2xl flex flex-col shadow-sm pt-4">
      <div className="flex flex-col items-center gap-2 relative pb-5">
        <SidebarTrigger className="-ml-1 absolute -top-1 left-3 text-muted-foreground" />
        <Avatar className="size-14">
          <AvatarImage src="/gradient-avatars/gradient-avatar-red.svg" />
          <AvatarFallback>O</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1 text-center items-center">
          <h2 className="text-xl font-semibold tracking-tight">
            Ophélie Delaunay
          </h2>
          <p className="text-muted-foreground text-sm flex row gap-1">
            <span>F</span>
            <span className="text-muted-foreground/50">•</span>
            <span>12.12.1994 (29 y.o)</span>
            <span className="text-muted-foreground/50">•</span>
            <span>single</span>
          </p>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Badge variant="outline">345678</Badge>
          <Badge variant="outline">Dr. Müller</Badge>
        </div>
      </div>
      <div>
        <PageSidebarGroup>
          <div className="flex flex-row gap-2 items-center px-2 py-2 hover:bg-foreground/5 rounded-md justify-between">
            <div className="flex flex-row gap-2 items-center line-clamp-1">
              <Phone size={16} className="shrink-0 text-muted-foreground" />
              <p className="line-clamp-1">+41 78 123 45 67</p>
            </div>
            <Check size={16} />
          </div>
          <div className="flex flex-row gap-2 items-center px-2 py-2 hover:bg-foreground/5 rounded-md justify-between">
            <div className="flex flex-row gap-2 items-center line-clamp-1">
              <Mail size={16} className="shrink-0 text-muted-foreground" />
              <p className="line-clamp-1">ophdelaunay@gmail.com</p>
            </div>
            <Check size={16} />
          </div>
          <div className="flex flex-row gap-2 items-center px-2 py-2 hover:bg-foreground/5 rounded-md">
            <div className="flex flex-row gap-2 items-center line-clamp-1">
              <Globe size={16} className="shrink-0 text-muted-foreground" />
              <div className="flex flex-items gap-1">
                <Badge variant="outline">French</Badge>
                <Badge variant="outline">English</Badge>
              </div>
            </div>
          </div>
        </PageSidebarGroup>

        <PageSidebarGroup defaultOpen isCollapsible title="Addresses">
          <div className="flex flex-row gap-2 items-center px-2 py-2 hover:bg-foreground/5 rounded-md justify-between">
            <div className="flex flex-row gap-2 items-center line-clamp-1">
              <Map size={16} className="shrink-0 text-muted-foreground" />
              <p className="flex flex-col">
                <span>Rue de la Gare 12</span>
                <span>1200 Genève</span>
              </p>
            </div>
          </div>
        </PageSidebarGroup>
        <PageSidebarGroup defaultOpen isCollapsible title="Payment methods">
          <div className="flex flex-row gap-2 items-center px-2 py-2 hover:bg-foreground/5 rounded-md justify-between">
            <div className="flex flex-row gap-2 items-center line-clamp-1">
              <Avatar>
                <AvatarImage src="/mastercard.png" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <p className="flex flex-col">
                <span className="font-medium">Mastercard ••42</span>
                <span className="text-muted-foreground">Exp. 01/2025</span>
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center px-2 py-2 hover:bg-foreground/5 rounded-md justify-between">
            <div className="flex flex-row gap-2 items-center line-clamp-1">
              <Avatar className="rounded-sm">
                <AvatarImage src="/allianz.png" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <p className="flex flex-col">
                <span className="font-medium">Allianz Suisse</span>
                <span className="text-muted-foreground">LAA</span>
              </p>
            </div>
          </div>
        </PageSidebarGroup>
        <PageSidebarGroup defaultOpen isCollapsible title="Relations">
          <div className="flex flex-row gap-2 items-center px-2 py-2 hover:bg-foreground/5 rounded-md justify-between">
            <div className="flex flex-row gap-2 items-center line-clamp-1">
              <Avatar className="rounded-sm">
                <AvatarImage src="/gradient-avatars/gradient-avatar-aqua.svg" />
                <AvatarFallback>M</AvatarFallback>
              </Avatar>
              <p className="flex flex-col">
                <span className="font-medium">Dr. Matthieu Rocher</span>
                <span className="text-muted-foreground">Family doctor</span>
              </p>
            </div>
          </div>
        </PageSidebarGroup>
      </div>
    </div>
  );
};

export default PageSidebarLeft;
