import React, { Component } from 'react';
import './unary-clock.css';

const Grid = ({ squareCount, activeClassName }) => {
  let arr = [];
  for (var index = 0; index < 9; index++) {
    (index + 1) <= squareCount 
    ? arr.push(<div key={index} className={"main-grid-square " + activeClassName}></div>) 
    : arr.push(<div key={index} className="main-grid-square"></div>)
  }
  return (
    <div className="main-grid-container">
      {arr}
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curTime: new Date().toLocaleString()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        curTime: new Date().toLocaleString()
      })
    }, 1000)
  }

  render() {
    const { curTime } = this.state;

    const parts = curTime.split(" ");
    const timeParts = parts[1].split(":");

    const hours = timeParts[0];
    const minutes = timeParts[1];
    const seconds = timeParts[2];


    return (
      <div className="unary-clock-container">
        {/* HOURS */}
        <Grid activeClassName={"hoursActive"} squareCount={hours[0]} />
        <Grid activeClassName={"hoursActive"} squareCount={hours[1]} />
        {/* MIUTES */}
        <Grid activeClassName={"minutesActive"} squareCount={[minutes[0]]} />
        <Grid activeClassName={"minutesActive"} squareCount={[minutes[1]]} />
        {/* SECONDS */}
        <Grid activeClassName={"secondsActive"} squareCount={[seconds[0]]} />
        <Grid activeClassName={"secondsActive"} squareCount={[seconds[1]]} />
      </div>
    );
  }
}

export default App;
