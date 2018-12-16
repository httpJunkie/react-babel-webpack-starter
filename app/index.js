import React from 'react';
import ReactDOM from 'React-dom';
import './index.css';

// import Todo from './todos/Todos';
// import Badge from './components/Badge';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById("app")
)

{/* <Badge
    name="Eric Bishard"
    username="httpJunkie"
    img={{ profileImage: "https://github.com/httpJunkie.png" }}
    clearance={[1, 2, 3, 5, 8, 13, 21, 1]}
    drivingInfo={{
      license: true,
      licenseNumber: 904671856929234137,
      state: 'CA',
      valid: false
    }}
  /> */}