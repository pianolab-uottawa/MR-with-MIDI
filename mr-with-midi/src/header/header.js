import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from '../button/button.js';
import {Button} from "reactstrap";

import createScore from "../logic/score-display-functions.js";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.buttonColorPrm = "primary";
        this.buttonColorSnd = "secondary";
        this.buttonText1 = "Score 1";
        this.buttonText2 = "Score 2";
        this.handleKeyPress = (event) => {
            if(event.key == '1'){
                createScore()
            }
        }
        this.state = { x: 0, y: 0 };

    }
    render() {
        return (
            <div onKeyPress={this.handleKeyPress}>
            <Button  color={this.buttonColorPrm} >{this.buttonText1}</Button>{' '}
             <Button  color={this.buttonColorSnd}>{this.buttonText2}</Button>{' '}<MyButton buttonColor="primary"/>
            </div>
        )
    }


}