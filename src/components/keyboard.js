import React, {Component} from 'react';

class KeyPadComponent extends Component {
    clicked = (e) => {
        this.props.clicked(e.target.name);
    }
render() {

    const style = {
        fontSize: "20px",
        width: "70px",
        height: "70px",
        margin: "11px",
        borderRadius: "50%",
        border: "none",
        background: "#b6b6b6"
    };
    return (
        <div className="button">
            <button name="(" style = {style} onClick={this.clicked} >(</button>
            <button name="CE" style = {style}  onClick={this.clicked}>CE</button>
            <button name=")" style = {style}  onClick={this.clicked}>)</button>
            <button name="C" style = {style}  onClick={this.clicked}>C</button><br/>


            <button name="1" style = {style}  onClick={this.clicked}>1</button>
            <button name="2" style = {style}  onClick={this.clicked}>2</button>
            <button name="3" style = {style}  onClick={this.clicked}>3</button>
            <button name="+" style = {style}  onClick={this.clicked}>+</button><br/>
            

            <button name="4" style = {style}  onClick={this.clicked}>4</button>
            <button name="5" style = {style}  onClick={this.clicked}>5</button>
            <button name="6" style = {style}  onClick={this.clicked}>6</button>
            <button name="-" style = {style}  onClick={this.clicked}>-</button><br/>

            <button name="7" style = {style}  onClick={this.clicked}>7</button>
            <button name="8" style = {style}  onClick={this.clicked}>8</button>
            <button name="9" style = {style}  onClick={this.clicked}>9</button>
            <button name="*" style = {style}  onClick={this.clicked}>x</button><br/>


            <button name="." style = {style}  onClick={this.clicked}>.</button>
            <button name="0" style = {style}  onClick={this.clicked}>0</button>
            <button name="=" style = {style}  onClick={this.clicked}>=</button>
            <button name="/" style = {style}  onClick={this.clicked}>÷</button><br/>
        </div>
    );
}
}


export default KeyPadComponent;