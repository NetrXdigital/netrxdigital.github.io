"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

/** Root */
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "single" | "multiple";
  collapsible?: boolean;
}
export const Accordion = ({
  type = "single",
  collapsible = false,
  className,
  children,
  ...props
}: AccordionProps) => {
  const [open, setOpen] = React.useState<string[]>([]);
  const toggle = (id: string) => {
    setOpen((prev) => {
      const isOpen = prev.includes(id);
      if (type === "multiple") return isOpen ? prev.filter((x) => x !== id) : [...prev, id];
      if (isOpen) return collapsible ? [] : prev;
      return [id];
    });
  };

  return (
    <div className={cn("divide-y rounded-2xl border", className)} {...props}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as any, { open, toggle })
          : child
      )}
    </div>
  );
};

/** Item */
export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  open?: string[];
  toggle?: (v: string) => void;
}
export const AccordionItem = ({
  value,
  open,
  toggle,
  children,
  className,
  ...props
}: AccordionItemProps) => {
  const isOpen = open?.includes(value);
  return (
    <div className={cn(className)} {...props}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as any, {
              isOpen,
              onToggle: () => toggle?.(value),
            })
          : child
      )}
    </div>
  );
};

/** Trigger */
export interface AccordionTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen?: boolean;
  onToggle?: () => void;
}
export const AccordionTrigger = ({
  children,
  isOpen,
  onToggle,
  className,
  ...props
}: AccordionTriggerProps) => (
  <button
    type="button"
    onClick={onToggle}
    className={cn(
      "w-full text-left px-6 py-4 font-medium flex items-center justify-between hover:bg-accent transition",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
      className
    )}
    {...props}
  >
    <span>{children}</span>
    <span className={cn("transition-transform", isOpen ? "rotate-180" : "")}>⌄</span>
  </button>
);

/** Content */
export interface AccordionContentProps
  extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}
export const AccordionContent = ({
  children,
  isOpen,
  className,
  ...props
}: AccordionContentProps) => (
  <div
    className={cn(
      "px-6 pb-4 text-sm text-muted-foreground",
      isOpen ? "block" : "hidden",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
