
import React, { useState } from 'react';
import { LabelsList } from './LabelsList';
import { TodoList, WrappedTodoList } from './TodoList';
import { UserPreferences } from './UserPreferences';

export type AppProps = {
};



export const App = (props: AppProps) => {
  const {  } = props;


  const [showTodos, setShowTodos] = useState(false); 

  return (
    <div>
      <LabelsList/>

      <UserPreferences/>

      <button onClick={() => setShowTodos(!showTodos)}>Toggle Todos</button>
      {showTodos && <WrappedTodoList/>}
    </div>
  );
};
