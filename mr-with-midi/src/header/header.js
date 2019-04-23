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
        this.state = {
            scoreSet:[],
            ptKeyName:"",
            loopLocation:1,
        };
    }

    scoreSetSwitcher = (elementID) => {
        switch(elementID) {

            case intervalCPositionSolid[0]["scoreIDformatted"]:
                this.setState({
                    scoreSet:intervalCPositionSolid
                });
                break;

            case intervalCPositionBroken[0]["scoreIDformatted"]:
                this.setState({
                    scoreSet:intervalCPositionBroken
                });
                break;

            case "button-reset":
                this.setState({
                    scoreSet:[]
                });
                break;

            default:
                break;
        }

    };

    handleMouseDown = (event) => {
        scoreSetSwitcher(event.target.id);
    };

    handleKeyDown = (event) => {
        if (event.key === 'any of the key in scoreSet-ptKeyCode') {
            this.setState({
                ptKeyName: event.key
            });
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('mousedown', this.handleKeyDown);
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