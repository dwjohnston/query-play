import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { preProcessFile } from 'typescript';
import { fetchLabels, fetchTodos, fetchUserPreferences } from '../_services/services';


async function getUserPreferredTodosFn() {

  console.log("ok");

  const [ todos,userPreferences, labels] = await Promise.all([fetchTodos(), fetchUserPreferences(), fetchLabels()]); 



  console.log(todos, userPreferences, labels);
  const preferredLabels = labels.filter((v) => v.priority >= userPreferences.preferredPriority || userPreferences.preferredLabels.some((w) => v.id === w)); 



  console.log(preferredLabels);

  return todos.filter((v) => preferredLabels.some((w) => w.id === v.label))

}

export const ServiceContext = React.createContext({
  getUserPreferredTodos: getUserPreferredTodosFn
}); 



export const TodoList = () => {
  
  const getUserPreferredTodos = React.useContext(ServiceContext).getUserPreferredTodos; 
  const query = useQuery({queryKey: ['preferredTodos'], queryFn: getUserPreferredTodos});

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
