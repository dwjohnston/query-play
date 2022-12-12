import { useQuery } from '@tanstack/react-query';
import React, { useMemo } from 'react';
import { preProcessFile } from 'typescript';
import { fetchLabels, fetchTodos, fetchUserPreferences, Label, Todo, UserPreferences } from '../_services/services';

export type TodoListProps = {
};

function getUserPreferredTodos(todos?: Array<Todo>, labels?: Array<Label>, userPreferences?: UserPreferences) {
  if(!todos || !labels || !userPreferences) {
    return []; 
  }

  const preferredLabels = labels.filter((v) => v.priority >= userPreferences.preferredPriority || userPreferences.preferredLabels.some((w) => v.id === w)); 
  return todos.filter((v) => preferredLabels.some((w) => w.id === v.label))
}



export const TodoList = () => {

  const todosQuery = useQuery({queryKey: ['todos2b'], queryFn: fetchTodos});
  const userPrefsQuery = useQuery({queryKey: ['userPreferences2b'], queryFn: fetchUserPreferences});
  const labelsQuery = useQuery({queryKey: ['labels2b'], queryFn: fetchLabels});


  const todosToShow = getUserPreferredTodos(todosQuery.data, labelsQuery.data, userPrefsQuery.data);


  return (
    <div>

      {[todosQuery, userPrefsQuery, labelsQuery].some((v) => v.isLoading) && <>loading...</>}
      {todosToShow.map((v) => {
        return <div key={v.id}>
          <span>{v.content} </span><span className = "label">{v.label}</span>

        </div>
      })}
    </div>
  );
};
