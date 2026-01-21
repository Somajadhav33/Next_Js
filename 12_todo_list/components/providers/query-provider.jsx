"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { useState } from "react";

export function QueryProvider({ children }) {
  const [queryclient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryclient}>
      {children}
      <Toaster />
    </QueryClientProvider>
  );
}
