import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WidgetAdder } from './WidgetAdder';
import { WidgetDisplay } from './WidgetDisplay';

function App() {
  return (
    <div className="App">
        <WidgetAdder id ="1"/>
        <WidgetAdder id ="2"/>

        <WidgetDisplay/>
    </div>
  );
}

export default App;
