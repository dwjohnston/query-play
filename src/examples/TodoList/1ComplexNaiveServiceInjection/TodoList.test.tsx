import React from 'react';
import { findByText, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { ServiceContext, TodoList } from './TodoList';
import { rest } from "msw";
import { setupServer } from 'msw/node'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';



const queryClient = new QueryClient();
const TestWrapper = (props: React.PropsWithChildren<{}>) => {
    return <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
}


describe(TodoList, () => {
    it("works fine", async () => {
        render(
            <TestWrapper>

                <ServiceContext.Provider value={{
                    getUserPreferredTodos: async () => {
                        return [{
                            id: "foo", 
                            content: "content", 
                            label: "label1"
                        }]
                    }
                }}>
                <TodoList />
                </ServiceContext.Provider>
            </TestWrapper>)


        expect(screen.queryByText("content")).not.toBeInTheDocument();
        expect(await screen.findByText("content")).toBeInTheDocument();
    });
});
