"use client"

import { QueryClient, QueryClientProvider } from "react-query";

interface QueryClientWrapperProps {
    children: React.ReactNode
}

const QueryClientWrapper = ({children}: QueryClientWrapperProps) => {
    const queryClient = new QueryClient()

    return <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
}

export default QueryClientWrapper;