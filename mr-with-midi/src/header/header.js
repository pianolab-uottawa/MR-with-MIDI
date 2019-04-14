import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyButton from '../button/button.js';
import {Button} from "reactstrap";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.buttonColorPrm = "primary";
        this.buttonColorSnd = "secondary";
        this.buttonText1 = "Score 1";
        this.buttonText2 = "Score 2";
        this.state = { x: 0, y: 0 };

    }
    render() {
        return (

            <div>
            <Button  color={this.buttonColorPrm} >{this.buttonText1}</Button>{' '}
             <Button  color={this.buttonColorSnd}>{this.buttonText2}</Button>{' '}<MyButton buttonColor="primary"/>
            </div>
        )
    }


}