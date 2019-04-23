import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "reactstrap";
import {intervalCPositionSolid, intervalCPositionBroken} from "../score/index";
import CreateScoreWithBlanksLC from "../logic/CreateScoreWithBlanksLC";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.buttonColorPrm = "primary";
        this.buttonColorSnd = "secondary";
        this.scoreSetTemp = [];
        this.state = {
            ptKeyName:"",
            loopLocation:1,
            scoreSet:[],
        };
    }

    scoreSetSwitcher = (elementID) => {
        switch(elementID) {

            case intervalCPositionSolid[0]["scoreIDformatted"]:
                this.scoreSetTemp = intervalCPositionSolid;
                break;


            case intervalCPositionBroken[0]["scoreIDformatted"]:
                this.scoreSetTemp = intervalCPositionBroken;
                break;

            case "button-reset":
                this.scoreSetTemp = [];
                break;

            default:
                break;
        }

    };

    handleMouseDown = (event) => {
        this.scoreSetSwitcher(event.target.id);
    };

    handleKeyDown = (event) => {
        if (event.key === '1') {
            this.setState({
                ptKeyName: event.key,
                scoreSet:this.scoreSetTemp
            });
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('mousedown', this.handleMouseDown);
    }
    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <div>
                    <Button color={this.buttonColorPrm} id={intervalCPositionBroken[0]["scoreIDformatted"]}>{intervalCPositionBroken[0]["scoreID"]}</Button>
                    &nbsp;
                    <Button color={this.buttonColorPrm} id={intervalCPositionSolid[0]["scoreIDformatted"]}>{intervalCPositionSolid[0]["scoreID"]}</Button>
                </div>

                <div>
                    <CreateScoreWithBlanksLC scoreSet={this.state.scoreSet} ptKeyName={this.state.ptKeyName} loopLocation={this.state.loopLocation}/>
                </div>
            </div>
        )
    }
}