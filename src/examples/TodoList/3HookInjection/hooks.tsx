import { useQuery, UseQueryResult } from "@tanstack/react-query";
import React, { useContext } from "react";
import { fetchLabels, fetchTodos, fetchUserPreferences, Label, Todo, UserPreferences } from "../_services/services";



  const TodosHookContext = React.createContext({
    query: {
        isLoading: true, 
       
    } as UseQueryResult<Todo[], unknown>
  })

  const LabelsHookContext = React.createContext({
    query: {
        isLoading: true, 
       
    } as UseQueryResult<Label[], unknown>
  })

  const UserPreferencesHookContext = React.createContext({
    query: {
        isLoading: true, 
       
    } as UseQueryResult<UserPreferences, unknown>
  }); 


  export const PreferredTodosContext = React.createContext({
        isLoading: true, 
        todos: [] as Array<Todo>
       
  }); 



export function RQTodosProvider(props: React.PropsWithChildren<{}>) {

    const query= useQuery({queryKey: ['todos3'], queryFn: fetchTodos}); 

    return <TodosHookContext.Provider value ={{
        query
    }}>

    </TodosHookContext.Provider>
}  

export function RQLabelsProvider(props: React.PropsWithChildren<{}>) {

    const query = useQuery({queryKey: ['labels3'], queryFn: fetchLabels}); 

    return <LabelsHookContext.Provider value ={{
        query
    }}>

    </LabelsHookContext.Provider>
}  

export function RQUserPreferencesProvider(props: React.PropsWithChildren<{}>) {

    const query=  useQuery({queryKey: ['userPreferences'], queryFn: fetchUserPreferences})

    return <UserPreferencesHookContext.Provider value ={{
        query
    }}>

    </UserPreferencesHookContext.Provider>
}  


function determineUserPreferredTodos(todos?: Array<Todo>, labels?: Array<Label>, userPreferences?: UserPreferences) {

    if(!todos || !labels || !userPreferences) {
      return []; 
    }
  
    const preferredLabels = labels.filter((v) => v.priority >= userPreferences.preferredPriority || userPreferences.preferredLabels.some((w) => v.id === w)); 
    return todos.filter((v) => preferredLabels.some((w) => w.id === v.label))
  }
  

export function RQPreferredTodosProvider(props: React.PropsWithChildren<{}>) {

    const todosQuery = useQuery({queryKey: ['todos2b'], queryFn: fetchTodos});
    const userPrefsQuery = useQuery({queryKey: ['userPreferences2b'], queryFn: fetchUserPreferences});
    const labelsQuery = useQuery({queryKey: ['labels2b'], queryFn: fetchLabels});
  
  
    const todosToShow = determineUserPreferredTodos(todosQuery.data, labelsQuery.data, userPrefsQuery.data);

    return <PreferredTodosContext.Provider value ={{
        isLoading: [todosQuery, userPrefsQuery, labelsQuery].some((v) => v.isLoading), 
        todos: todosToShow
    }}>

    </PreferredTodosContext.Provider>
}  


  export function useTodos() {

    const query =  useContext(TodosHookContext).query; 

    return query; 

    

  }

  export function useLabels() {
    const query =  useContext(LabelsHookContext).query; 

    return query; 
  }

  export function useUserPreferences() {
    const query =  useContext(UserPreferencesHookContext).query; 

    return query; 
  }






  // We don't need to declare context for this hook, as it just relies on other contexts to exist
  export function usePreferredTodos() {


    return useContext(PreferredTodosContext);


  }