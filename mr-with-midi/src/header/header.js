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
    }

    scoreSetSwitcher = (elementID) => {/*should actually move all handlers to header.js. right now we are loading scores twice in 2 different places */
        switch(elementID) {

            case intervalCPositionSolid[0]["scoreIDformatted"]:
                this.abcParam = intervalCPositionSolid;
                break;

            case intervalCPositionBroken[0]["scoreIDformatted"]:
                this.abcParam = intervalCPositionBroken;
                break;

            case "button-reset":
                let setTimeoutID = window.setTimeout(() => {}, 0);
                while (setTimeoutID) {
                    window.clearTimeout(setTimeoutID);
                    setTimeoutID--;
                }
                this.abcParam = [];
                this.setState({
                    score: "",
                    scoreIDformatted:"",
                });
                break;

            default:
                this.abcParam = [];
        }

    };

    handleMouseDown = (event) => {
        scoreSetSwitcher(event.target.id);
    };

    handleKeyDown = (event) => {
        if (event.key === '1') {

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
                    <CreateScoreWithBlanksLC scoreIDformatted={this.state.scoreIDformatted}/>
                </div>
            </div>
        )
    }
}