import React from 'react';

export default class EventRecorder extends React.Component {
    constructor(props) {
        super(props);
        this.eventRecords = [];
        this.score=[];
        this.timeoutID = [];
        this.participantID = "";

    }

    loopScoreSets = (scoreSet, ptKeyName, loopLocation) => {

        for ( let i=loopLocation, accum=0, id=0 ; i<scoreSet.length ; i++) {

            this.timeoutID[id++]=setTimeout(()=>{//this changes score parameters (states). Child display component "DisplayLC" receives it as props
                this.eventRecords.push(scoreSet[i]["eventName"],scoreSet[i]["score"],scoreSet[i]["eventDuration"],this.participantID,performance.now());
            },accum+=scoreSet[i]["eventDuration"]);
        }
    };

    render () {
        return (//note we need to set onkeydown as global event listener, because we need to change view anytime when user press key "1".
            <div id="eventRecorder" >
                {console.Log(this.eventRecords)}
            </div>
        )
    }


}