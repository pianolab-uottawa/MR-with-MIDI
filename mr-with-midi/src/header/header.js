import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "reactstrap";
import {intervalCPositionSolid, intervalCPositionBroken} from "../score/index";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.buttonColorPrm = "primary";
        this.buttonColorSnd = "secondary";
        this.intCBr = intervalCPositionBroken[0]["scoreID"];
        this.intCSo = intervalCPositionSolid[0]["scoreID"];
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.state = { x: 0, y: 0 };
    }

    render() {
        return (
            <div>
                <Button color={this.buttonColorPrm} id={this.intCBr}>{this.intCBr}</Button>
                &nbsp;
                <Button color={this.buttonColorPrm} id={this.intCSo}>{this.intCSo}</Button>
            </div>
        )
    }


}