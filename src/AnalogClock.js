import React from "react";

class AnalogClock extends React.Component {
  // Handle hands on the clock. Rotate the particular hand from point zero (vertical/north).
  setSecondHand() {
    let currentSecond = this.props.date.getSeconds();
    let handRotation = currentSecond * 6;

    return handRotation;
  }

  setMinuteHand() {
    let currentMinute = this.props.date.getMinutes();
    let handRotation = currentMinute * 6;

    return handRotation;
  }

  setHourHand() {
    let currentHour = this.props.date.getHours(); // 24 hour time.
    let currentHourTwelve = currentHour % 12; // 12 hour time.

    // Add extra rotation between hours. 4:30 will show hour hand right between 4 and 5.
    let currentMinute = this.props.date.getMinutes();
    let baseHourHandPosition = currentHourTwelve * 30;
    let extraRotattion = Math.floor(currentMinute / 2); // Based on minutes.
    let handRotation = baseHourHandPosition + extraRotattion;

    return handRotation;
  }

  render() {
    return (
      <div id="analog-clock">
        {/* FACE NUMBERS - HOURS */}
        <div className="clock-face">
          <div className="hours-number three">III</div>
          <div className="hours-number six">VI</div>
          <div className="hours-number nine">IX</div>
          <div className="hours-number twelve">XII</div>
        </div>

        {/* FACE LINES - HOURS */}
        <div className="clock-face">
          <div className="face-line">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="face-line">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="face-line">
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className="face-line">
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>

        {/* CLOCK HANDS */}
        <div className="clock-face">
          <div 
            id="second-hand" 
            className="clock-hand" 
            style={
              { transform: `rotate(${this.setSecondHand()}deg)` }
            }>
          </div>
          <div 
            id="minute-hand" 
            className="clock-hand"
            style={
              { transform: `rotate(${this.setMinuteHand()}deg)` }
            }>  
          </div>
          <div 
            id="hour-hand" 
            className="clock-hand"
            style={
              { transform: `rotate(${this.setHourHand()}deg)` }
            }> 
            </div>
        </div>
            
        {/* FACE MIDDLE POINT */}
        <div className="clock-face">
          <div id="back-middle-point"></div>
        </div>
        <div className="clock-face">
          <div id="front-middle-point"></div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let oneSecond = 1000; // 1000 miliseconds = 1 second.
    this.intervalId = setInterval(() => {
      this.props.updateTime();
    }, oneSecond);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
}

export default AnalogClock;
