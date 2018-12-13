import React from 'react';
import Todo from './todos/Todos';
import ReactDOM from 'React-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Todo/>
      </>
    )
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
)