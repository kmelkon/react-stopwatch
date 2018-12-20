import React, { Component } from "react";
import ms from "pretty-ms";

class Timer extends Component {
  state = {
    hasStarted: false,
    time: 0,
    start: 0,
    hh: "",
    mm: "",
    ss: ""
  };

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleStartClick = () => {
    const { hasStarted } = this.state;
    this.setState({
      hasStarted: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
  };
  handleStopClick = () => {
    this.setState({ hasStarted: false });
    clearInterval(this.timer);
  };
  handleResetClick = () => {
    this.setState({
      time: 0
    });
  };
  render() {
    const { hasStarted, hh, mm, ss, time, start } = this.state;

    return (
      <div>
        {/* <input
          type="number"
          placeholder="hh"
          name="hh"
          value={hh}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="mm"
          name="mm"
          value={mm}
          onChange={this.handleChange}
        />
        <input
          type="number"
          placeholder="ss"
          name="ss"
          value={ss}
          onChange={this.handleChange}
        /> */}
        {ms(time)}
        {time == 0 && <button onClick={this.handleStartClick}>Start</button>}
        {hasStarted && <button onClick={this.handleStopClick}>Stop</button>}
        {time !== 0 && !hasStarted ? (
          <button onClick={this.handleResetClick}>Reset</button>
        ) : null}
        {time !== 0 && !hasStarted ? (
          <button onClick={this.handleStartClick}>resume</button>
        ) : null}
      </div>
    );
  }
}

export default Timer;
