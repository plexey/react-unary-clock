import React, { Component } from 'react';
import './BinaryClock.css';

function convertBaseTwo(val) {
   let test = parseInt(val, 10).toString(2);
   return test.split("").reverse().join("");
}

const MainGrid = ({ squareCount, activeClassName }) => {
  let arr = [];
  for (var index = 0; index < 4; index++) {
    Number(squareCount[index]) === 1
    ? arr.push(<div key={index} className={"main-grid-square " + activeClassName}></div>) 
    : arr.push(<div key={index} className="main-grid-square"></div>)
  }
  return (
    <div className="main-grid-container">
      {arr.reverse()}
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
        <MainGrid activeClassName={"hoursActive"} squareCount={convertBaseTwo(hours[0])} />
        <MainGrid activeClassName={"hoursActive"} squareCount={convertBaseTwo(hours[1])} />
        {/* MIUTES */}
        <MainGrid activeClassName={"minutesActive"} squareCount={convertBaseTwo(minutes[0])} />
        <MainGrid activeClassName={"minutesActive"} squareCount={convertBaseTwo(minutes[1])} />
        {/* SECONDS */}
        <MainGrid activeClassName={"secondsActive"} squareCount={convertBaseTwo(seconds[0])} />
        <MainGrid activeClassName={"secondsActive"} squareCount={convertBaseTwo(seconds[1])} />
      </div>
    );
  }
}

export default App;
