import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "reactstrap";
import {intervalCPositionSolid, intervalCPositionBroken} from "../score/index";
import CreateScoreWithBlanksLC from "../body/body";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.buttonColorPrm = "primary";
        this.buttonColorSnd = "secondary";
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.state = {
            scoreIDstripped:"",
        };
    }

    handleMouseDown (event){
        this.setState({
            scoreIDstripped: event.target.id,
        })
    }


    render() {
        return (
            <div>
                <div>
                    <Button color={this.buttonColorPrm} id={intervalCPositionBroken[0]["scoreIDstripped"]} onClick={this.handleMouseDown}>{intervalCPositionBroken[0]["scoreID"]}</Button>
                    &nbsp;
                    <Button color={this.buttonColorPrm} id={intervalCPositionSolid[0]["scoreIDstripped"]} onClick={this.handleMouseDown}>{intervalCPositionSolid[0]["scoreID"]}</Button>
                </div>

                <div>
                    <CreateScoreWithBlanksLC scoreIDstripped={this.state.scoreIDstripped}/>
                </div>
            </div>
        )
    }
}