import React from 'react';

export default class EventRecorder extends React.Component {
    constructor(props) {
        super(props);
        this.eventRecords = [[],[],[],[],[],[],[],[],[],];
        this.timeoutID = [];
        this.participantID = "";
        this.state={
            clear:true,
        }

    }

    clearAsyncFunctions= () =>{
        let index = this.timeoutID.length;
        while (index--) {
            window.clearTimeout(this.timeoutID[index]);
        }

        this.setState({
            clear:true
        });

    };

    clearEventRecordData=()=>{
        this.eventRecords=[];
    };

    appendScoreSetData = (scoreSet, ptKeyName, loopLocation) => {

        for ( let i=loopLocation, accum=0, id=0 ; i<scoreSet.length ; i++) {

            this.timeoutID[id++]=setTimeout(()=>{
                this.eventRecords.push(scoreSet[i]["eventName"],scoreSet[i]["score"],scoreSet[i]["eventDuration"],this.participantID,performance.now());
                console.log(this.eventRecords);
            },accum+=scoreSet[i]["eventDuration"]);
        }
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props !== prevProps ) { //we have to add condition here, to prevent infinity loop
            if (this.props.reset === true) { //we have to add condition here, to prevent infinity loop
                this.clearEventRecordData();
                this.clearAsyncFunctions();
            } else {
                this.appendScoreSetData(this.props.scoreSet, this.props.ptKeyName, this.props.loopLocation)
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