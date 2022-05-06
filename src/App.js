import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultNum: 0,
    };
  }
  addNumber = () => {
    if (this.state.defaultNum < 50) {
      this.setState({
        add: ++this.state.defaultNum,
      });
    }
  };
  minusNumber = () => {
    if (this.state.defaultNum > -50) {
      this.setState({
        minus: --this.state.defaultNum,
      });
    }
  };
  restartBtn = () => {
    this.setState({
      defaultNum: this.state.defaultNum * 0,
    });
  };
  handleClick = () => {
    const min = -50;
    const max = 50;
    const rand = min + (Math.random() * (max - min)).toFixed(0);
    this.setState({
      defaultNum: this.state.defaultNum + rand,
    });
  };
  render() {
    return (
      <div className="app">
        <div className="counter">{this.state.defaultNum}</div>
        <div className="controls">
          <button onClick={this.addNumber}>INC</button>
          <button onClick={this.minusNumber}>DEC</button>
          <button onClick={this.handleClick}>RND</button>
          <button onClick={this.restartBtn}>RESET</button>
        </div>
      </div>
    );
  }
}

export default App;
