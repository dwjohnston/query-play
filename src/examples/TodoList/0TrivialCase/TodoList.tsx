import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchTodos } from '../_services/services';

export type TodoListProps = {
};



export const TodoList = () => {
  const query = useQuery({queryKey: ['todos'], queryFn: fetchTodos});
  return (
    <div>
      {query.isLoading && <>loading...</>}
      {query.data?.map((v) => {
        return <div key={v.id}>
          <span>{v.content} </span><span className = "label">{v.label}</span>

        </div>
      })}
    </div>
  );
};
