import React from 'react';
import logo from './logo.svg';
import './App.css';

import { TodoListExample } from './examples/TodoList';
import { WidgetAdderExample } from './examples/WidgetAdder';
import { SpecialLikeButtonExample } from './examples/SpecialLikeButton';
import { DependantQueryExample } from './examples/DependantQueries';

const SHOW_TODO_LIST_EXAMPLE = false;
const SHOW_WIDGET_ADDER_EXAMPLE = false;
const SHOW_SPECIAL_LIKE_BUTTON_EXAMPLE = false;
const SHOW_DEPENDANT_QUERIES_EXAMPLE =true; 

function App() {
  return (
    <div className="App">





      {SHOW_TODO_LIST_EXAMPLE && <TodoListExample />}
      {SHOW_WIDGET_ADDER_EXAMPLE && <WidgetAdderExample />}
      {SHOW_SPECIAL_LIKE_BUTTON_EXAMPLE && <SpecialLikeButtonExample />}

      {SHOW_DEPENDANT_QUERIES_EXAMPLE && <DependantQueryExample/>}






    </div>
  );
}

export default App;
