import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { SingleTodoPage } from './SingleTodoPage';
import { TodosPage } from './TodosPage';
import { UsersPage } from './UsersPage';
export type AppProps = {
};

const router = createBrowserRouter([
    {
      path: "/todos",
      element: <TodosPage/>,
    },
    {
        path: "/users", 
        element: <UsersPage/>
    }, 
    
    {
        path: "/todos/:todoId", 
        element: <SingleTodoPage/>
    }
  ]);

export const App = (props: AppProps) => {
  const {  } = props;


  return (
    <div>
          <RouterProvider router={router} />
    </div>
  );
};
