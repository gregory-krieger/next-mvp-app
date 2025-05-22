import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";

const PageNewAction = () => {
  return (
    <Card className="py-4 gap-2 rounded-3xl">
      <CardHeader className="font-semibold px-4">
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
  );
};

export default PageNewAction;
