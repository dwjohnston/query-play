import React from 'react';
import { findByText, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { TodoList } from './TodoList';
import { rest } from "msw";
import { setupServer } from 'msw/node'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const server = setupServer(
    rest.get('/todos', async (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    id: "foo",
                    label: "label1",
                    content: "aaaa"
                }, 
                {
                    id: "bar",
                    label: "label2",
                    content: "bbbb"
                }
            ])
        )
    }),
    rest.get('/labels', async (req, res, ctx) => {
        return res(
            ctx.json([
                {
                    id: "label1",
                    name: "label1",
                    priority: 1, 
                }, 
                {
                    id: "label2",
                    name: "label2",
                    priority: 2, 
                }
            ])
        )
    }),
    rest.get('/userPreferences', async (req, res, ctx) => {
        return res(
            ctx.json({
                preferredLabels: ["label1"], 
                preferredPriority: 3, 
            })
        )
    }),
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


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
                <TodoList />
            </TestWrapper>)


        // Doesn't exist at first
        expect(screen.queryByText("aaaa")).not.toBeInTheDocument();
        
        //Exists after some time      
        expect(await screen.findByText("aaaa")).toBeInTheDocument();
        // bbbb never appears as it does not satisfied the 'preferred' critera
        expect(screen.queryByText("bbbb")).not.toBeInTheDocument();
    });
});
