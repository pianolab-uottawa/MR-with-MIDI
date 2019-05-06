import React from 'react';

export default class EventRecorder extends React.Component {
    constructor(props) {
        super(props);
        this.eventRecords = [];
        this.timeoutID = [];
        this.participantID = "";


    }

    clearAsyncFunctions= () =>{
        let index = this.timeoutID.length;
        while (index--) {
            window.clearTimeout(this.timeoutID[index]);
        }
    };

    clearEventRecordData=()=>{
        this.eventRecords=[];
    };

    appendScoreSetData = (participantID, scoreSet, ptKeyName, loopLocation) => {

        for ( let i=loopLocation, accum=0, id=0 ; i<scoreSet.length ; i++) {

            this.timeoutID[id++]=setTimeout(()=>{
                this.eventRecords.push([scoreSet[i]["eventName"],scoreSet[i]["score"],this.participantID,performance.now().toString(),participantID]);
                console.log(this.eventRecords);
            },accum+=scoreSet[i]["eventDuration"]);
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps ) { //we have to add condition here, to prevent infinity loop
            if (this.props.reset === true) { //reset
                console.log("catch2");
                this.clearEventRecordData();
                this.clearAsyncFunctions();
            } else { //record
                this.appendScoreSetData(this.props.participantID, this.props.scoreSet, this.props.ptKeyName, this.props.loopLocation)
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