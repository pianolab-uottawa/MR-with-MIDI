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
        this.midi = 0;
        this.initMIDIAccess();

        this.state = {
            ptKeyName:"",
            loopLocation:1,
            loopLength:1,
            scoreSet:[],
            midiEvent:0,
        };
    }



    initMIDIAccess = () => {
        navigator.requestMIDIAccess().then(this.onSuccess, this.onFailure); //get midi access
    };

    onSuccess = (access) => {
        this.midi = access;
        let inputs = this.midi.inputs;

        //connect to first device found
        if (inputs.size > 0) {
            let iterator = inputs.values(); // returns an iterator that loops over all inputs
            let input = iterator.next().value; // get the first input
            input.onmidimessage = this.handleMIDIMessage;
        }
    };

    onFailure = (err) => {

    };

    setParticipantID = () => {
        let tempID = prompt("Please enter participant ID", "");
        if (tempID === null || tempID === "") {
            this.participantID = "Administor did not enter participant ID.";
        } else {
            this.participantID = tempID;
        }

    };

    scoreSetSwitcher = (elementID) => {

        switch(elementID) {

            case intervalCPositionSolid[0]["scoreIDformatted"]:

                this.scoreSetTemp = intervalCPositionSolid;
                break;

            case intervalCPositionBroken[0]["scoreIDformatted"]:

                this.scoreSetTemp = intervalCPositionBroken;
                break;

            case "startNew":

                this.setParticipantID();
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

    handleMIDIMessage = (event) => {
        this.setState({
            midiEvent:event,
        })
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

                let loopLength = (() => {
                    for (let j=i+1;j<this.scoreSetTemp.length;j++){
                        if (this.scoreSetTemp[j]["ptKeyName"] || this.scoreSetTemp[i]["score"]===undefined ) {return j-i}
                    }
                })();

                //lock up the keyboard for x secs, to prevent multiple press down
                this.keyLock = true;
                setTimeout(()=>{
                    this.keyLock = false;
                },3500);
                //end of lock up
                this.setState({
                    ptKeyName: event.key,
                    scoreSet:this.scoreSetTemp,
                    loopLocation:i,
                    loopLength:loopLength,
                    midiEvent:0
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
                    <CreateScoreWithBlanksLC scoreSet={this.state.scoreSet} ptKeyName={this.state.ptKeyName} loopLocation={this.state.loopLocation} loopLength={this.state.loopLength} reset={this.reset}  midiEvent={this.state.midiEvent}/>
                    <EventRecorder  participantID={this.participantID} scoreSet={this.state.scoreSet} ptKeyName={this.state.ptKeyName} loopLocation={this.state.loopLocation} loopLength={this.state.loopLength} reset={this.reset} midiEvent={this.state.midiEvent}/>
                    {console.log("pass")}
                </div>
            </div>
        )
    }
}