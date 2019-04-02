import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from '../button/button.js';
import {Button} from "reactstrap";

import createScore1 from "../score/score-1.js";
import createScore2 from "../score/score-2.js";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.buttonColorPrm = "primary";
        this.buttonColorSnd = "secondary";
        this.buttonScore1 = "Score 1";
        this.buttonScore2 = "Score 2";
        this.handleKeyPress = (event) => {
            if(event.key == '1'){
                createScore2();
            }
        }
        this.state = { x: 0, y: 0 };

    }
    render() {
        return (
            <div onKeyPress={this.handleKeyPress}>
            <Button  color={this.buttonColorPrm} >{this.buttonScore1}</Button>{' '}
             <Button  color={this.buttonColorSnd}>{this.buttonScore2}</Button>{' '}<MyButton buttonColor="primary"/>
            </div>
        )
    }


}