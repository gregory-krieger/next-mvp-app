import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DateTime } from "luxon";
import Image from "next/image";

const PageEvent = () => {
  const date = new Date();
  return (
    <Card className="rounded-3xl">
      <CardHeader className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <Image
            src={"/app-icons/rounded-full/encounter.svg"}
            alt="Consultation"
            width={20}
            height={20}
          />
          <div className="flex flex-col">
            <p className="flex flex-row gap-1 items-center">
              <span className="bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 px-2 py-1 rounded-full text-xs">
                Medical consultation
              </span>
              <span className="font-semibold text-sm">
                Routine check-up. Blood pressure slightly elevated, recommended
                lifestyle changes.
              </span>
            </p>
            <p className="text-xs font-medium text-muted-foreground leading-5">
              <span className="text-medium">Dr. Matthieu Rocher</span>
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground flex flex-col text-right">
          {DateTime.fromJSDate(date).toLocaleString({
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          Premier rendez-vous effectué aujourd&apos;hui pour les soins
          prénatals. La patiente a été orientée pour son premier rendez-vous de
          soins prénatals. La patiente est enceinte de 12 semaines, selon ses
          antécédents menstruels et ses symptômes.
        </p>
        <div className="flex flex-row flex-wrap gap-2">
          <div className="min-w-[230px] max-w-[400px] w-fit p-3 bg-blue-50 dark:text-blue-400 dark:bg-blue-950 rounded-2xl">
            <div className="flex flex-row gap-2">
              <Image
                src={"/app-icons/rounded-full/prescription.svg"}
                alt="Consultation"
                width={20}
                height={20}
              />
              <p className="flex flex-col">
                <span className="text-xs font-medium">Prescription</span>
                <span className="text-xs text-muted-foreground line-clamp-1">
                  IRFEN Lactab 500mg, Doliprane Tab
                </span>
              </p>
            </div>
          </div>
          <div className="min-w-[230px] max-w-[400px] w-fit p-3 bg-orange-50 dark:text-orange-400 dark:bg-orange-950 rounded-2xl ">
            <div className="flex flex-row gap-2">
              <Image
                src={"/app-icons/rounded-full/documents.svg"}
                alt="Consultation"
                width={20}
                height={20}
              />
              <p className="flex flex-col">
                <span className="text-xs font-medium">Medical Leave</span>
                <span className="text-xs text-muted-foreground line-clamp-1">
                  100% until the 15th of June
                </span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">0 comments</p>
      </CardFooter>
    </Card>
  );
};

export default PageEvent;
