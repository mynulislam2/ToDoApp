import React from 'react';
import Todo from './component/BazarList/Todo';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const options = {
  timeout: 5000,
  position: positions.TOP_RIGHT
};

function App() {

  return (
    <Provider template={AlertTemplate} {...options}>
    <Todo></Todo>

    </Provider>
  );
}
export default App;
