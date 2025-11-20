import React from "react";
import { Cover } from "@/components/ui/cover";

export function CoverDemo() {
  return (
    <div>
      <h1 className="text-4xl md:text-7xl 
       font-semibold
        max-w-7xl
        mx-auto
        text-center
        relative
         z-20
         bg-clip-text
          text-transparent bg-gradient-to-b from-neutral-1000 via-neutral-1000 to-neutral-1000 dark:from-neutral-300 dark:via-white dark:to-white
          leading-tight tracking-tight">
        Elevate your brand with <br />  <Cover>NetrX Digital</Cover>
      </h1>
    </div>
  );
}
