import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "reactstrap";
import {intervalCPositionSolid, intervalCPositionBroken} from "../score/index";
import CreateScoreWithBlanksLC from "../logic/CreateScoreWithBlanksLC";
import EventRecorder from "../logic/EventRecorder";


export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.participantID = "";
        this.scoreSetTemp = [];
        this.reset=false;
        this.keyLock = false;

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

            case "startNew":
                this.participantID = prompt("Please enter participant ID", "");
                break;

            case "resetCurrent":

                this.setState({
                    ptKeyName:"",
                    scoreSet:[]
                });
                this.reset=true;
                break;

            default:
                break;
        }

    };


    handleMouseDown = (event) => {
        this.reset=false;
        this.scoreSetSwitcher(event.target.id);
    };

    handleKeyDown = (event) => {

        for (let i=0;i<this.scoreSetTemp.length;i++)
        {
            if ((this.scoreSetTemp[i]["ptKeyName"] === event.key) && (!this.keyLock)){
                console.log("lock");

                //lock up the keyboard for x secs, to prevent multiple press down
                this.keyLock = true;
                setTimeout(()=>{
                    this.keyLock = false;
                },3500);
                //end of lock up
                this.setState({
                    ptKeyName: event.key,
                    scoreSet:this.scoreSetTemp,
                    loopLocation:i
                });
            }
            else {
                //console.log(this.keyLock)
            }


        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);//global
    }
    componentWillUnmount() {
    }

    render() {
        return (
            <div>
                <div>
                    <Button color="success" id="startNew" onClick={this.handleMouseDown}>Start New</Button>
                    &nbsp;
                    <Button color="primary" id={intervalCPositionBroken[0]["scoreIDformatted"]} onClick={this.handleMouseDown}>{intervalCPositionBroken[0]["scoreID"]}</Button>
                    &nbsp;
                    <Button color="primary" id={intervalCPositionSolid[0]["scoreIDformatted"]} onClick={this.handleMouseDown}>{intervalCPositionSolid[0]["scoreID"]}</Button>
                    &nbsp;
                    <Button color="secondary" id="resetCurrent" onClick={this.handleMouseDown}>Reset Current</Button>
                </div>

                <div>
                    <CreateScoreWithBlanksLC scoreSet={this.state.scoreSet} ptKeyName={this.state.ptKeyName} loopLocation={this.state.loopLocation} reset={this.reset}/>
                    {console.log("pass")}
                    <EventRecorder  participantID={this.participantID} scoreSet={this.state.scoreSet} ptKeyName={this.state.ptKeyName} loopLocation={this.state.loopLocation} reset={this.reset}/>
                </div>
            </div>
        )
    }
}