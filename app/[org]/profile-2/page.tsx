import {
  SidebarContent,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { SidebarInset } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { Collapsible } from "@/components/ui/collapsible";
import {
  Calendar,
  Clock,
  GripVertical,
  Mail,
  Map,
  Phone,
  Plus,
  User,
} from "lucide-react";
import PageTabs from "./_components/page-tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import Image from "next/image";

const Page = () => {
  return (
    <SidebarInset className="bg-transparent flex flex-row gap-2">
      <div className="h-full min-w-[250px] max-w-[300px] w-full bg-background rounded-lg flex flex-col shadow-sm pt-4 gap-4">
        <div className="flex flex-col items-center gap-4 relative">
          <SidebarTrigger className="-ml-1 absolute -top-1 left-3" />
          <Avatar className="size-15">
            <AvatarImage src="/gradient-avatars/gradient-avatar-red.svg" />
            <AvatarFallback>O</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1 text-center items-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Ophélie Delaunay
            </h2>
            <p className="text-muted-foreground flex row gap-1">
              <span>Female</span>
              <span>•</span>
              <span>25 y.o</span>
            </p>
            <p className="text-muted-foreground flex row gap-1">
              <span>Female</span>
              <span>•</span>
              <span>25 y.o (24.09.1994)</span>
            </p>
          </div>
        </div>
        <SidebarContent>
          <SidebarGroup className="border-b">
            <Collapsible defaultOpen>
              <CollapsibleTrigger>
                <SidebarGroupLabel>Contact points</SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Phone />
                      +41 78 123 45 67
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton>
                      <Mail />
                      ophdelaunay@gmail.com
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
          <SidebarGroup className="border-b">
            <Collapsible defaultOpen>
              <CollapsibleTrigger>
                <SidebarGroupLabel>Addresses</SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton size={"lg"}>
                      <Map />
                      <p className="flex flex-col">
                        <span>Rue de la Gare 12</span>
                        <span>1200 Genève</span>
                      </p>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
          <SidebarGroup className="border-b">
            <Collapsible defaultOpen>
              <CollapsibleTrigger>
                <SidebarGroupLabel>Payment methods</SidebarGroupLabel>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton size={"lg"}>
                      <Avatar className="rounded-sm">
                        <AvatarImage src="/allianz.png" />
                        <AvatarFallback>M</AvatarFallback>
                      </Avatar>
                      <p className="flex flex-col">
                        <span className="font-medium">Allianz Suisse</span>
                        <span className="text-muted-foreground">LAA</span>
                      </p>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton size={"lg"}>
                      <Avatar>
                        <AvatarImage src="/mastercard.png" />
                        <AvatarFallback>M</AvatarFallback>
                      </Avatar>
                      <p className="flex flex-col">
                        <span className="font-medium">Mastercard ••42</span>
                        <span className="text-muted-foreground">
                          Exp. 01/2025
                        </span>
                      </p>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
          <SidebarGroup className="border-b group">
            <Collapsible defaultOpen>
              <CollapsibleTrigger className="w-full flex flex-row justify-between items-center hover:bg-foreground/5 pr-2 rounded-md">
                <SidebarGroupLabel>Relations</SidebarGroupLabel>
                <SidebarGroupAction>
                  <Plus /> <span className="sr-only">Add Project</span>
                </SidebarGroupAction>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton size={"lg"}>
                      <Avatar className="rounded-sm">
                        <AvatarImage src="/gradient-avatars/gradient-avatar-aqua.svg" />
                        <AvatarFallback>M</AvatarFallback>
                      </Avatar>
                      <p className="flex flex-col">
                        <span className="font-medium">Dr. Matthieu Rocher</span>
                        <span className="text-muted-foreground">
                          Family doctor
                        </span>
                      </p>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </CollapsibleContent>
            </Collapsible>
          </SidebarGroup>
        </SidebarContent>
      </div>
      {/* Main content */}
      <div className="w-full flex flex-col gap-2 h-full">
        <PageTabs />
        <div className="flex flex-row gap-2 h-full">
          <div className="w-full h-full flex flex-col gap-2">
            {/* Actions */}
            <Card className="py-4 gap-2">
              <CardHeader className="font-medium px-4">
                What would you like to do ?
              </CardHeader>
              <CardContent className="px-4">
                <div className="flex flex-row flex-wrap gap-2">
                  <Button
                    variant="outline"
                    className="rounded-full pl-2 pr-3"
                    size={"sm"}
                  >
                    <Image
                      src={"/app-icons/rounded-full/encounter.svg"}
                      alt="Consultation"
                      width={20}
                      height={20}
                    />
                    Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full pl-2 pr-3"
                    size={"sm"}
                  >
                    <Image
                      src={"/app-icons/rounded-full/prescription.svg"}
                      alt="Prescription"
                      width={20}
                      height={20}
                    />
                    Prescription
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full pl-2 pr-3"
                    size={"sm"}
                  >
                    <Image
                      src={"/app-icons/rounded-full/documents.svg"}
                      alt="Document"
                      width={20}
                      height={20}
                    />
                    Doc
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full pl-2 pr-3"
                    size={"sm"}
                  >
                    <Image
                      src={"/app-icons/rounded-full/invoicing.svg"}
                      alt="Invoicing"
                      width={20}
                      height={20}
                    />
                    Lab
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-full pl-2 pr-3"
                    size={"sm"}
                  >
                    <Image
                      src={"/app-icons/rounded-full/tasks.svg"}
                      alt="Task"
                      width={20}
                      height={20}
                    />
                    Task
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-full pl-2 pr-3"
                    size={"sm"}
                  >
                    <Image
                      src={"/app-icons/rounded-full/invoicing.svg"}
                      alt="Invoicing"
                      width={20}
                      height={20}
                    />
                    Appointment
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full pl-2 pr-3"
                    size={"sm"}
                  >
                    <Image
                      src={"/app-icons/rounded-full/email.svg"}
                      alt="Email"
                      width={20}
                      height={20}
                    />
                    Email
                  </Button>
                  <Button
                    variant="outline"
                    className="rounded-full pl-2 pr-3"
                    size={"sm"}
                  >
                    <Image
                      src={"/app-icons/rounded-full/sms.svg"}
                      alt="SMS"
                      width={20}
                      height={20}
                    />
                    SMS
                  </Button>

                  <Button
                    variant="outline"
                    className="rounded-full pl-2 pr-3"
                    size={"sm"}
                  >
                    <Image
                      src={"/app-icons/rounded-full/invoicing.svg"}
                      alt="Invoicing"
                      width={20}
                      height={20}
                    />
                    Invoice
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="h-full">
              <CardHeader>History</CardHeader>
              <CardContent className="flex flex-col gap-2">
                <div className="flex flex-row gap-4 items-start ">
                  <div className="flex flex-col items-center gap-1 pt-0.5">
                    <Image
                      src={"/app-icons/rounded-full/encounter.svg"}
                      alt="Consultation"
                      width={20}
                      height={20}
                    />
                    <div className="w-[2px] min-h-[20px] bg-foreground/10 rounded-full" />
                  </div>
                  <div className="flex flex-col w-full gap-0.5">
                    <div className="flex flex-row justify-between w-full">
                      <p className="text-sm font-medium">Consultation</p>
                      <p className="text-sm text-muted-foreground flex flex-row gap-1 items-center">
                        <Calendar size={12} />
                        12.05.2025
                        <Clock size={12} />
                        10:00
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Routine check-up. Blood pressure slightly elevated,
                      recommended lifestyle changes.
                    </p>
                    <div className="flex flex-row gap-1 items-center text-muted-foreground">
                      <User size={12} />
                      <p className="text-sm ">Dr. Matthieu Rocher</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start ">
                  <div className="flex flex-col items-center gap-1 pt-0.5">
                    <Image
                      src={"/app-icons/rounded-full/encounter.svg"}
                      alt="Consultation"
                      width={20}
                      height={20}
                    />
                    <div className="w-[2px] min-h-[20px] bg-foreground/10 rounded-full" />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex flex-row justify-between w-full">
                      <p className="text-sm font-medium">Consultation</p>
                      <p className="text-sm text-muted-foreground flex flex-row gap-1 items-center">
                        <Calendar size={12} />
                        12.05.2025
                        <Clock size={12} />
                        10:00
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Routine check-up. Blood pressure slightly elevated,
                      recommended lifestyle changes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="h-full min-w-[250px] max-w-[300px] w-full flex flex-col gap-2">
            <Card>
              <CardHeader>Problems</CardHeader>
            </Card>
            <Card className="pt-3 pb-2 gap-2">
              <CardHeader className="px-3 flex flex-row items-center justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <div className="size-5 bg-foreground/50 rounded-sm"></div>
                  <p className="text-sm font-semibold">Problems</p>
                </div>
              </CardHeader>
              <CardContent className="px-3 text-sm font-medium ">
                <div className="flex flex-row gap-2 items-center py-1">
                  <GripVertical className="size-4 text-muted-foreground" />
                  <p>Douleur du coude gauche</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </SidebarInset>
  );
};

export default Page;
