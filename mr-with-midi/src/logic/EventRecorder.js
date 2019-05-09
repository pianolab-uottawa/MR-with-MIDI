import React from 'react';
import * as utilFunctions from './utilFunctions';

export default class EventRecorder extends React.Component {

    constructor(props) {
        super(props);

        this.csvData = utilFunctions.csvConstant;
        this.timeoutID = [];
        this.eventID=0;
        this.playTimes=[];
        this.playedNotesArray=[[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],];

        this.notes= ["C1=", "C1#", "D1=", "D1#", "E1=", "F1=", "F1#", "G1=", "G1#", "A1=", "A1#", "B1=",
            "C2=", "C2#", "D2=", "D2#", "E2=", "F2=", "F2#", "G2=", "G2#", "A2=", "A2#", "B2=",
            "C3=", "C3#", "D3=", "D3#", "E3=", "F3=", "F3#", "G3=", "G3#", "A3=", "A3#", "B3=",
            "C4=", "C4#", "D4=", "D4#", "E4=", "F4=", "F4#", "G4=", "G4#", "A4=", "A4#", "B4=",
            "C5=", "C5#", "D5=", "D5#", "E5=", "F5=", "F5#", "G5=", "G5#", "A5=", "A5#", "B5=",
            "C6=", "C6#", "D6=", "D6#", "E6=", "F6=", "F6#", "G6=", "G6#", "A6=", "A6#", "B6=",
            "C7=", "C7#", "D7=", "D7#", "E7=", "F7=", "F7#", "G7=", "G7#", "A7=", "A7#", "B7="
        ];
        this.noteMap = [];
        this.notes.map((currElement, index) => {
            this.noteMap[index+24] = currElement;
        });

    }

    clearAsyncFunctions= () =>{
        let index = this.timeoutID.length;
        while (index--) {
            window.clearTimeout(this.timeoutID[index]);
        }
    };


    appendScoreSetData = (participantID, scoreSet, ptKeyName, loopLocation, loopLength) => {

        let location = parseInt(loopLocation);
        let length = parseInt(loopLength);

        for ( let i=location, accum=0, id=0; i< location+length; i++) {



            this.timeoutID[id++]=setTimeout(()=>{

                this.eventID = scoreSet[i]["eventID"];
                this.csvData.push([scoreSet[i]["eventName"],scoreSet[i]["score"],"",participantID,performance.now().toString(),Date(),participantID,scoreSet[0]["scoreID"]]);

                if (scoreSet[i]["score"] !== "") { // calculate after each cycle
                    setTimeout(()=>{
                        this.csvData.push(utilFunctions.calculate(this.eventID,this.playTimes,this.playedNotesArray,scoreSet[0]["noteGroupFormatVariant"],participantID,scoreSet[0]["scoreID"]))
                    },scoreSet[i]["eventDuration"]);
                }

                if (scoreSet[i+1]["score"]===-1){ // if this is the end of score bundle, save csv.

                    setTimeout(()=>{
                        utilFunctions.saveCSV(this.csvData,this.props.participantID,scoreSet[0]["scoreID"]);

                        return null;
                    },3500);



                }

            },accum+=scoreSet[i]["eventDuration"]);
        }
    };

    appendMIDIData = (event) => {

        if (event.data.length === 3 && (event.data[0] === (145)||event.data[0] === (144)) && (event.data[2] !== 0)) {


            let pNoteIndex = event.data[1];
            let playedNote = this.noteMap[pNoteIndex];
            let row = ["Play", event.data[0], playedNote, event.data[2], performance.now().toString(), Date()];
            this.csvData.push(row);

            this.playedNotesArray[this.eventID] += playedNote;
            this.playTimes[this.eventID].push(performance.now());

        }

    };

    recordData = (participantID, scoreSet, ptKeyName, loopLocation, loopLength, midiEvent) => {
        if (!midiEvent) {
            this.appendScoreSetData(participantID,scoreSet,ptKeyName,loopLocation,loopLength);
        }
        else {
            this.appendMIDIData (midiEvent);
            console.log(midiEvent)
        }

    };

    shouldComponentUpdate(nextProps) {
        return (this.props.participantID === nextProps.participantID);
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps ) { //we have to add condition here, to prevent infinity loop
            if (this.props.reset === true) { //reset
                console.log("clea true");
                this.clearAsyncFunctions();
            } else { //record
                this.recordData(this.props.participantID, this.props.scoreSet, this.props.ptKeyName, this.props.loopLocation, this.props.loopLength, this.props.midiEvent)
            }
        }
    }

    render () {
        return (
            <div id="eventRecorder" >

            </div>
        )
    }


}