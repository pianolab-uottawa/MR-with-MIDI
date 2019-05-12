import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "reactstrap";
import {singleNoteCPosition, singleNoteGPosition, intervalCPositionSolid, intervalCPositionBroken} from "../score/index";
import CreateScoreWithBlanksLC from "../logic/CreateScoreWithBlanksLC";
import EventRecorder from "../logic/EventRecorder";
//https://stackoverflow.com/questions/36683770/how-to-get-the-value-of-an-input-field-using-reactjs

export default class Header extends React.Component {


    constructor(props) {
        super(props);
        this.scoreSetTemp = [];
        this.reset=false;
        this.keyLock = false;
        this.midi = 0;
        this.initMIDIAccess();

        this.state = {
            ptKeyName:"",
            loopLocation:0,
            loopLength:0,
            scoreSet:[],
            midiEvent:0,
            participantID:'',
            inputValue: '',
            showing:true,
            hoverShow: false,
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


    scoreSetSwitcher = (elementID) => {
        this.setState({
            ptKeyName:"",
            scoreSet:[]
        });
        this.reset=true;

        switch(elementID) {

            case singleNoteCPosition[0]["scoreIDformatted"]:

                this.scoreSetTemp = singleNoteCPosition;
                break;

            case singleNoteGPosition[0]["scoreIDformatted"]:

                this.scoreSetTemp = singleNoteGPosition;
                break;

            case intervalCPositionBroken[0]["scoreIDformatted"]:

                this.scoreSetTemp = intervalCPositionBroken;
                break;

            case "startNew":
                window.location.reload();


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

        this.scoreSetSwitcher(event.target.id);
    };

    handleKeyDown = (event) => {
        this.reset=false;
        for (let i=0;i<this.scoreSetTemp.length;i++)
        {
            if ((this.scoreSetTemp[i]["ptKeyName"] === event.key) && (!this.keyLock)){

                console.log("lock");

                let loopLength = (() => {
                    for (let j=i+1;j<this.scoreSetTemp.length+1;j++){
                        if (this.scoreSetTemp[j]["eventID"]=== -99 ) {return j-i}
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
                    loopLocation:i.toFixed(),
                    loopLength:loopLength.toFixed(),
                    midiEvent:0
                });
            }
            else {
                //console.log(this.keyLock)
            }


        }
    };

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value,
            participantID:evt.target.value
        });
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);//global
    }
    componentWillUnmount() {
    }

    render() {
        return (
            <div >
                <div style={{ opacity: (this.state.hoverShow ? '1' : '0') }} onMouseEnter={() => this.setState({ hoverShow: true }) } onMouseLeave={() => this.setState({ hoverShow: false }) }>
                    <Button color="success" id="startNew" onClick={this.handleMouseDown}>New Participant</Button>
                    &nbsp;
                    <Button color="primary" id={intervalCPositionBroken[0]["scoreIDformatted"]} onClick={this.handleMouseDown}>{intervalCPositionBroken[0]["scoreID"]}</Button>
                    &nbsp;
                    <Button color="primary" id={singleNoteCPosition[0]["scoreIDformatted"]} onClick={this.handleMouseDown}>{singleNoteCPosition[0]["scoreID"]}</Button>
                    &nbsp;
                    <Button color="primary" id={singleNoteGPosition[0]["scoreIDformatted"]} onClick={this.handleMouseDown}>{singleNoteGPosition[0]["scoreID"]}</Button>
                    &nbsp;
                    <Button color="secondary" id="resetCurrent" onClick={this.handleMouseDown}>Reset Current</Button>
                    <br />
                    <div>Current Participant: {this.state.inputValue}</div>
                </div>

                <form style={{ display: (this.state.showing ? 'block' : 'none') }}>
                    <label>

                        <input type="text" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
                    </label>

                </form>
                <button style={{ display: (this.state.showing ? 'block' : 'none') }} onClick={() => this.setState({ showing: false })}>Submit</button>



                <div>
                    <CreateScoreWithBlanksLC hoverShow={this.state.hoverShow} participantID={this.state.participantID} scoreSet={this.state.scoreSet} ptKeyName={this.state.ptKeyName} loopLocation={this.state.loopLocation} loopLength={this.state.loopLength} reset={this.reset}  midiEvent={this.state.midiEvent}/>
                    <EventRecorder hoverShow={this.state.hoverShow} participantID={this.state.participantID} scoreSet={this.state.scoreSet} ptKeyName={this.state.ptKeyName} loopLocation={this.state.loopLocation} loopLength={this.state.loopLength} reset={this.reset} midiEvent={this.state.midiEvent}/>
                    {console.log("pass")}
                </div>
            </div>
        )
    }
}