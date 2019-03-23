import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from '../button/button.js';
import {Button} from "reactstrap";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.buttonColorPrm = "primary";
        this.buttonColorSnd = "secondary";
        this.buttonTextA = "Button text1";
        this.buttonTextB = "Button text2";
        this.state = { x: 0, y: 0 };

    }
    render() {
        return (
            <div>
            <Button  color={this.buttonColorPrm}>{this.buttonTextA}</Button>{' '}
             <Button  color={this.buttonColorSnd}>{this.buttonTextB}</Button>{' '}<MyButton buttonColor="primary"/>
            </div>
        )
    }


}