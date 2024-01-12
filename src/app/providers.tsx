"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { TaskProvider } from "@/context/task-context";
import { ChallengeProvider } from "@/context/challenge-context";

export function Providers({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ChallengeProvider>
        <TaskProvider>{children}</TaskProvider>
      </ChallengeProvider>
    </NextThemesProvider>
  );
}
