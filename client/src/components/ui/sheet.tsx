import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

export function Sheet(props: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root {...props} />;
}

export function SheetTrigger(
  props: React.ComponentProps<typeof SheetPrimitive.Trigger>
) {
  return <SheetPrimitive.Trigger {...props} />;
}

export function SheetClose(
  props: React.ComponentProps<typeof SheetPrimitive.Close>
) {
  return <SheetPrimitive.Close {...props} />;
}

export function SheetPortal(
  props: React.ComponentProps<typeof SheetPrimitive.Portal>
) {
  return <SheetPrimitive.Portal {...props} />;
}

export function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-black/50 transition-opacity duration-400",
        className
      )}
      {...props}
    />
  );
}

type SheetContentProps = React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: "top" | "right" | "bottom" | "left";
  hideCloseIcon?: boolean;
  open?: boolean;
};

export function SheetContent({
  className,
  children,
  side = "right",
  hideCloseIcon = false,
  open,
  ...props
}: SheetContentProps) {
  const ANIMATION_DURATION = 400;
  const [mounted, setMounted] = React.useState(!!open);
  const [show, setShow] = React.useState(!!open);

  React.useEffect(() => {
    if (open) {
      setMounted(true);
      const enterTimeout = window.setTimeout(() => setShow(true), 10);
      return () => window.clearTimeout(enterTimeout);
    } else if (mounted) {
      setShow(false);
      const exitTimeout = window.setTimeout(
        () => setMounted(false),
        ANIMATION_DURATION
      );
      return () => window.clearTimeout(exitTimeout);
    }
  }, [open, mounted]);

  if (!mounted) return null;

  const base =
    "bg-background fixed z-50 flex flex-col gap-4 shadow-lg transition-all duration-400 ease-in-out";
  const right = show
    ? "translate-x-0 opacity-100 inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm"
    : "translate-x-full opacity-0 inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm";
  const left = show
    ? "translate-x-0 opacity-100 inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm"
    : "-translate-x-full opacity-0 inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm";
  const top = show
    ? "translate-y-0 opacity-100 inset-x-0 top-0 h-auto border-b"
    : "-translate-y-full opacity-0 inset-x-0 top-0 h-auto border-b";
  const bottom = show
    ? "translate-y-0 opacity-100 inset-x-0 bottom-0 h-auto border-t"
    : "translate-y-full opacity-0 inset-x-0 bottom-0 h-auto border-t";
  const transitionClass =
    side === "right"
      ? right
      : side === "left"
      ? left
      : side === "top"
      ? top
      : side === "bottom"
      ? bottom
      : "";

  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        className={cn(base, transitionClass, className)}
        {...props}
      >
        {children}
        {!hideCloseIcon && (
          <SheetPrimitive.Close className="ring-offset-background focus:ring-ring absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:pointer-events-none">
            <X className="size-4" />
            <span className="sr-only">Close</span>
          </SheetPrimitive.Close>
        )}
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}

export function SheetHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-1.5 p-4", className)} {...props} />
  );
}

export function SheetFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
}

export function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
}

export function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}
