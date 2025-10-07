"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemesProvider
      attribute="class"        // puts 'dark' or 'light' on <html>
      defaultTheme="dark"    // or "dark" if you prefer dark on first load
      enableSystem
      storageKey="netrx-theme" // persist user choice
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
