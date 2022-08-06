import React from "react";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(),
      clock: 'analog'
    };
    this.updateTime = this.updateTime.bind(this);
    this.showDigitalClock = this.showDigitalClock.bind(this);
    this.showAnalogClock = this.showAnalogClock.bind(this);
  }

  updateTime() {
    this.setState({ date: new Date() });
  }

  showDigitalClock() {
    if (this.state.clock === 'analog') {
      this.setState({ clock: 'digital' });
    }
  }

  showAnalogClock() {
    if (this.state.clock === 'digital') {
      this.setState({ clock: 'analog' });
    }
  }

  render() {
    const analogClock = (
      <AnalogClock 
        date={ this.state.date }
        updateTime={ this.updateTime }
      />
    );
    const digitalClock = (
      <DigitalClock 
        date={ this.state.date }
        updateTime={ this.updateTime }
      />
    );

    return (
      <div id="app-container">
        <h1>Clock</h1>
        <div id="button-container">
          <button onClick={ this.showAnalogClock }>Analog</button>
          <button onClick={ this.showDigitalClock }>Digital</button>
        </div>
        { this.state.clock === 'analog' ? analogClock : digitalClock }
      </div>
    );
  }
}

export default App;
