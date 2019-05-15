import React from 'react';
import * as utilFunctions from './utilFunctions';

export default class EventRecorder extends React.Component {

    constructor(props) {
        super(props);

        this.timeoutID = [];
        this.eventID=0;
        this.playTimes=[[]];
        this.playedNotesArray=[[]];

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
        this.state={
            csvData:[
                ['Event ID and name: ' ,'Behavior Name: ','Played Note: ','Velocity: ','Time(ms): ','Date: ','Participant ID','Test name','Notes shown on screen','Played notes','Case number','If case 2 - how many additional notes','if case 1 or case 2 - completion time','if case 1 or case 2 - initial response time'],
                []
            ]
        };

    }

    initPlayeTimeAndNotesArray = (length) => {
      for (let i=0;i<length+10;i++) {
          this.playTimes.push([]);
          this.playedNotesArray.push([]);
          console.log(this.playedNotesArray)
      }

    };


    clearAsyncFunctions= () =>{
        let index = this.timeoutID.length;
        while (index--) {
            window.clearTimeout(this.timeoutID[index]);
        }
    };

    clearCSV =() => {

        this.playTimes=[[]];
        this.playedNotesArray=[[]];
        this.setState({
            csvData:[
                ['Event ID and name: ' ,'Behavior Name: ','Played Note: ','Velocity: ','Time(ms): ','Date: ','Participant ID','Test name','Notes shown on screen','Played notes','Case number','If case 2 - how many additional notes','if case 1 or case 2 - completion time','if case 1 or case 2 - initial response time'],
                []
            ]
        });
    };


    appendScoreSetData = (participantID, scoreSet, ptKeyName, loopLocation, loopLength) => {

        let location = parseInt(loopLocation);
        let length = parseInt(loopLength);

        for ( let i=location, accum=0, id=0; i< location+length; i++) {



            this.timeoutID[id++]=setTimeout(()=>{



                if (scoreSet[i]["score"] !== "") { // calculate after each cycle
                    setTimeout(()=>{
                        let tempArr2= this.state.csvData;

                        tempArr2.push(utilFunctions.calculate(this.eventID-1,this.playTimes,this.playedNotesArray,scoreSet[0]["noteGroupFormatVariant"],participantID,scoreSet[0]["scoreID"]));
                        this.setState({
                            csvData:tempArr2,
                        })
                    },scoreSet[i+1]["eventDuration"]);
                }

                this.eventID = scoreSet[i]["eventID"];
                this.playTimes[this.eventID][0] = performance.now()-scoreSet[i]["eventDuration"];
                let tempArr= this.state.csvData;
                tempArr.push([scoreSet[i]["eventName"],scoreSet[i]["score"],"","",performance.now().toString(),Date(),participantID,scoreSet[0]["scoreID"]]);
                this.setState({//update state that depends on previous state
                    csvData:tempArr,
                });

                if (scoreSet[i+1]["score"]===-1){ // if this is the end of score bundle, save csv.
                    setTimeout(()=>{
                        utilFunctions.saveCSV(this.state.csvData,this.props.participantID,scoreSet[0]["scoreID"]);
                        return null;
                    },500);
                }

            },accum+=scoreSet[i]["eventDuration"]);
        }
    };

    appendMIDIData = (event) => {

        if (event.data.length === 3 && (event.data[0] === (145)||event.data[0] === (144)) && (event.data[2] !== 0)) {


            let pNoteIndex = event.data[1];
            let playedNote = this.noteMap[pNoteIndex];
            let row = ["Play", event.data[0], playedNote, event.data[2], performance.now().toString(), Date()];
            let tempArr3 = this.state.csvData;
            tempArr3.push(row);
            this.setState({
                csvData:tempArr3
            });

            this.playedNotesArray[this.eventID] += playedNote;

            let tempArr4 = this.playTimes[this.eventID];
            tempArr4.push(performance.now());
            this.playTimes[this.eventID]=tempArr4


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
        return ((this.props.participantID === nextProps.participantID) && (this.props.hoverShow === nextProps.hoverShow));
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps ) { //we have to add condition here, to prevent infinity loop
            if (this.props.reset === true) { //reset
                console.log("clea true");
                this.clearAsyncFunctions();
                this.clearCSV();
            } else { //record
                this.initPlayeTimeAndNotesArray(this.props.scoreSet.length);
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