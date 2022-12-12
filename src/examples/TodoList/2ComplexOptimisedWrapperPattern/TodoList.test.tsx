import React from 'react';
import { findByText, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import { TodoList } from './TodoList';
import { rest } from "msw";
import { setupServer } from 'msw/node'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


describe(TodoList, () => {
    it("works fine", () => {
        render(
                <TodoList isLoading={false} todos={[
                    {
                        id: "foo",
                        label: "label1",
                        content: "foofoo"
                    }
                ]}/>); 

        expect(screen.getByText("foofoo")).toBeInTheDocument();

    });
});
