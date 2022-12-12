import React from 'react';
import { findByText, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { TodoList } from './TodoList';
import { rest } from "msw";
import { setupServer } from 'msw/node'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PreferredTodosContext } from './hooks';



const queryClient = new QueryClient();
const TestWrapper = (props: React.PropsWithChildren<{}>) => {
    return <QueryClientProvider client={queryClient}>
        {props.children}
    </QueryClientProvider>
}


describe(TodoList, () => {
    it("works fine ", async () => {
        render(
            <TestWrapper>

                <PreferredTodosContext.Provider
                    value ={{
                        isLoading: false, 
                        todos: [
                            {
                                id: "a", 
                                label: "aaa", 
                                content: "hello"                               
                            }
                        ]
                    }}
                    >
                    <TodoList />
                </PreferredTodosContext.Provider>
            </TestWrapper>)


        // Doesn't exist at first
        expect(screen.getByText("hello")).toBeInTheDocument();

    });
});
