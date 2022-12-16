
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useTodo, useUserForTodo } from './useServices';

export type SingleTodoPageProps = {
};



export const SingleTodoPage = (props: SingleTodoPageProps) => {
  const {  } = props;

  const {todoId} = useParams();

  if(!todoId){
    throw new Error("No todoId exists");
  }

  const todoQuery = useTodo(parseInt(todoId)); 
  const userQuery = useUserForTodo(parseInt(todoId));
  
  return (
    <div>

        {todoQuery.isError && <span>Todo does not exist</span>}

      {(todoQuery.isLoading || userQuery.isLoading) && <div>Loading...</div>}

      {todoQuery.data?.title}
      {userQuery.data?.username}
    </div>
  );
};
