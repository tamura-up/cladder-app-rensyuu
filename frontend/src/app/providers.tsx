'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';
import { queryClientConfig } from '@/lib/get-query-client';

import { createStore, Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import { SnackbarProvider } from 'notistack';

const customStore = createStore();

export default function Providers({ children }: { children: React.ReactNode }) {
  const [client] = useState(new QueryClient(queryClientConfig));

  return (
    <QueryClientProvider client={client}>
      <SnackbarProvider maxSnack={4}>
      <Provider store={customStore}>
        <DevTools store={customStore} />
          {children}
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
      </SnackbarProvider>
    </QueryClientProvider>
  );
}