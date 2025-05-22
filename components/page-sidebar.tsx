import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

type props = {
  title?: string;
  children?: React.ReactNode;
  isCollapsible?: boolean;
  defaultOpen?: boolean;
  className?: string;
};

export const PageSidebarGroup = (props: props) => {
  const { title, children, isCollapsible, defaultOpen, className } = props;

  if (!isCollapsible || !title) {
    return (
      <div className={"w-full border-t border-foreground/5 px-2"}>
        {title ? (
          <div className="px-2 text-muted-foreground py-4 text-sm">{title}</div>
        ) : null}
        <div className={cn("text-sm pb-2", !title && "pt-2", className)}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <Accordion
      defaultValue={defaultOpen ? "item-1" : undefined}
      type="single"
      collapsible
      className="w-full border-t border-foreground/5 px-2"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="px-2 text-sm font-semibold text-muted-foreground hover:no-underline hover:text-foreground data-[state=open]:pb-2">
          {title}
        </AccordionTrigger>
        <AccordionContent className={className}>{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
