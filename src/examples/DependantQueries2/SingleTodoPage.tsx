
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Todo, User, useTodo, useUserForTodo } from './useServices';

export type SingleTodoPageProps = {
};



export const SingleTodoPage = (props: SingleTodoPageProps) => {
  const {  } = props;

  const {todoId} = useParams();

  if(!todoId){
    throw new Error("No todoId exists");
  }

  // const todoQuery = useTodo(parseInt(todoId)); 
  // const userQuery = useUserForTodo(parseInt(todoId));

  const data = useLoaderData() as {
    todo: Todo; 
    user: User; 
  }
  
  return (
    <div>
     {JSON.stringify(data)}
   
    </div>
  );
};
