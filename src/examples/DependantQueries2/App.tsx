import { QueryClient } from '@tanstack/react-query';
import React from 'react';

import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Root } from './Root';
import { SingleTodoPage } from './SingleTodoPage';
import { TodosPage } from './TodosPage';
import { UsersPage } from './UsersPage';
import { loadTodoAndUser, loadTodos, loadUsers } from './useServices';
export type AppProps = {
};


const router = createBrowserRouter([
  

  {
    path:"/", 
    element: <Root/>, 
    children:[

      {
        path: "/todos",
        element: <TodosPage/>,
        loader: loadTodos
  
      },
      {
          path: "/users", 
          element: <UsersPage/>, 
          loader: loadUsers
      }, 
      
      {
          path: "/todos/:todoId", 
          element: <SingleTodoPage/>, 
          loader: (args) => {
            return loadTodoAndUser(args.params["todoId"] as string)
          }
      }
    ]
  }, 

  ]);

export const App = (props: AppProps) => {
  const {  } = props;


  return (
    <div>
          <RouterProvider router={router} />
    </div>
  );
};
