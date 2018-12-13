import React from 'react';
// import Todo from './todos/Todos';
import ReactDOM from 'React-dom';
import './index.css';

class Badge extends React.Component {
  render() {
    return (
      <>
        <img
          src={this.props.img}
          alt="Avatar"
          style={{ width: 100, height: 100 }}
        />
        <h2>Name: {this.props.name}</h2>
        <h3>Username: {this.props.username}</h3>
      </>
    )
  }
}

ReactDOM.render(
  <Badge
    name="Eric Bishard"
    username="httpJunkie"
    img="https://github.com/httpJunkie.png"
  />,
  document.getElementById("app")
)