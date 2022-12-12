import { useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react';
import { preProcessFile } from 'typescript';
import { fetchLabels, fetchTodos, fetchUserPreferences, Label, Todo, UserPreferences } from '../_services/services';
import { usePreferredTodos } from './hooks';

export type TodoListProps = {
};




export const TodoList = (props: TodoListProps) => {
  const { } = props;
  const {todos, isLoading} = usePreferredTodos(); 

  return (
    <div>

      {isLoading && <>loading...</>}
      {todos.map((v) => {
        return <div key={v.id}>
          <span>{v.content} </span><span className = "label">{v.label}</span>

        </div>
      })}
    </div>
  );
};
