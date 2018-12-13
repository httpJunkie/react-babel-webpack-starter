import React from 'react';
// import Todo from './todos/Todos';
import PropTypes from 'prop-types';
import ReactDOM from 'React-dom';
import './index.css';



class Badge extends React.Component {
  render() {
    return (
      <>
        <img
          src={this.props.img.profileImage}
          alt="Avatar"
          style={{ width: 100, height: 100 }}
        />
        <h2>Name: {this.props.name}</h2>
        <h3>Username: {this.props.username}</h3>
        <h3>Clearance Levels:</h3>
        <p>{this.props.clearance.map(
          (item, idx) => {
            let useKeyAlt = `${item}-${idx}`;
            return <span key={useKeyAlt} alt={useKeyAlt} className="clearance-level">{item}</span>
          }
        )}</p>
      </>
    )
  }
}

Badge.propTypes = {
  img: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  clearance: PropTypes.arrayOf(PropTypes.number),
  drivingInfo: PropTypes.shape({
    license: PropTypes.bool.isRequired,
    licenseNumber: PropTypes.number.isRequired,
    state: PropTypes.string.isRequired,
    valid: PropTypes.bool.isRequired,
  })
}

ReactDOM.render(
  <Badge
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
  />,
  document.getElementById("app")
)