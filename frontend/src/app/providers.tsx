"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { queryClientConfig } from '@/lib/get-query-client';

export default function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient(queryClientConfig));

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}