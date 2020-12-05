import React, {Component} from 'react';
import KeyPadComponent from "./keyboard";

class Result extends Component {

    render() {
        const ResultStyle = {
            height: "110px",
            color: "white",
            fontSize: "50px",
            textAlign: "left",
            padding: "0 20px"
          }
        let {result} = this.props;
        return (
            <div className="result" style={ResultStyle}>
                <p>{result}</p>
            </div>
    )
        ;
    }
}


export default Result; 