
import React, { useState } from 'react';
import { RQLabelsProvider, RQTodosProvider, RQUserPreferencesProvider } from './hooks';
import { LabelsList } from './LabelsList';
import { TodoList } from './TodoList';
import { UserPreferences } from './UserPreferences';

export type AppProps = {
};



export const App = (props: AppProps) => {
  const { } = props;


  const [showTodos, setShowTodos] = useState(false);

  return (
    <div>

      <RQLabelsProvider>
        <RQTodosProvider>
          <RQUserPreferencesProvider>
          <LabelsList />

          <UserPreferences />

          <button onClick={() => setShowTodos(!showTodos)}>Toggle Todos</button>
          {showTodos && <TodoList />}
      </RQUserPreferencesProvider>
      </RQTodosProvider>
      </RQLabelsProvider>
    </div >
  );
};
