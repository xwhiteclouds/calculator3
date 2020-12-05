import React, { Component } from 'react';
import './App.css';
import Result from './components/result';
import KeyPadComponent from "./components/keyboard";

class App extends Component {
  state = {
    result : ""
  }
  clicked = buttonName => {
    if(buttonName === "="){
      this.calculate();
    } 
    else if(buttonName === "CE"){
      this.CE();
    }
    else if(buttonName === "C"){
      this.C();
    }
    else{
    this.setState({
      result : this.state.result + buttonName
    })}
  }

  calculate = () => {
    this.setState({
      result: eval(this.state.result)
    });
  }
  CE = () =>{
    this.setState({
      result: ""
    }); 
  }
  C = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }


  render() {
    const style = {
      height: "570px",
      background: "#2d2d2d",
      maxWidth: "370px",
      position: "ralative",
      margin: "auto",
      marginTop: "30px",
      borderRadius: "20px",
      boxShadow: "5px 5px 8px 5px #888888"
    }
      return (
        <div style = {style}> 
        <Result result={this.state.result}></Result>
        <KeyPadComponent clicked={this.clicked}/>
        </div>
      );
  }
}

export default App;