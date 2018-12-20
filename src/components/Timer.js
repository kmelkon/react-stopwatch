import React, { Component } from "react";
import ms from "pretty-ms";
import styled, { css } from "styled-components";

// STYLES
//Containers
const Container = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const TimeContainer = styled.div`
  font-size: 8rem;
  font-weight: 700;
`;
const ButtonsContainer = styled.div``;
// Button
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  /* margin: 0 1em; */
  padding: 0.25em 1em;
  font-size: 1.5rem;
  :hover {
    /* background: #f4f4f4; */
  }

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;

// FUNCTIONALITY
class Timer extends Component {
  state = {
    hasStarted: false,
    time: 0,
    start: 0
  };

  // handleChange = e => {
  //   const target = e.target;
  //   const value = target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // };

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
    const { hasStarted, time, start } = this.state;

    return (
      <Container>
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
        <TimeContainer>{ms(time)}</TimeContainer>
        <ButtonsContainer>
          {time == 0 && (
            <Button primary onClick={this.handleStartClick}>
              Start
            </Button>
          )}
          {hasStarted && <Button onClick={this.handleStopClick}>Stop</Button>}
          {time !== 0 && !hasStarted ? (
            <Button onClick={this.handleResetClick}>Reset</Button>
          ) : null}
          {time !== 0 && !hasStarted ? (
            <Button onClick={this.handleStartClick}>resume</Button>
          ) : null}
        </ButtonsContainer>
      </Container>
    );
  }
}

export default Timer;
