import React from "react";

class DigitalClock extends React.Component {
  render() {
    const colonElement = (
      <span 
        className="colon" 
        style={
          this.props.date.getMilliseconds() < 500 
          ? { visibility: 'hidden' } 
          : { visibility: 'visible' }
        }
      >:</span>
    );

    return (
      <div id="digital-clock">
        <div id="clock-panel">
          <div className="clock-button"></div>
          <div className="clock-button"></div>
          <div className="clock-button"></div>
        </div>
        <div id="clock-display">
          <span className="time-container">
            { 
              this.props.date.getHours() < 10 
              ? `0${this.props.date.getHours()}`
              : this.props.date.getHours() 
            }
          </span>
          { colonElement }
          <span className="time-container">
            { 
              this.props.date.getMinutes() < 10 
              ? `0${this.props.date.getMinutes()}` 
              : this.props.date.getMinutes() 
            }
          </span>
          { colonElement }
          <span className="time-container">
            { 
              this.props.date.getSeconds() < 10 
              ? `0${this.props.date.getSeconds()}` 
              : this.props.date.getSeconds()
            }
          </span>
        </div>
      </div>
    )
  }

  componentDidMount() {
    let tenMilliseconds = 10;
    this.intervalId = setInterval(() => {
      this.props.updateTime();
    }, tenMilliseconds);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
}

export default DigitalClock;
