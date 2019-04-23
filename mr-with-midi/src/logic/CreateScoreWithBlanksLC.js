//Logic Component
//read score arrays and pass them onto child for display cycle.
import React from "react";
import DisplayLC from "./DisplayLC";

class CreateScoreWithBlanksLC extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            score: "",
            imageSizeFactor:"1",
            staffWidth: "1",
            eventDuration: 1,
            scoreIDformatted:"",
        };
    }


    clearAsyncFunctions= () =>{
        let setTimeoutID = window.setTimeout(() => {}, 0);
        while (setTimeoutID) {
            window.clearTimeout(setTimeoutID);
            setTimeoutID--;
        }
        this.setState({
            score: "",
            scoreIDformatted:"",
        });

    };


    loopScoreSets = (scoreSet, ptKeyName, loopLocation) => {


        for (let i=loopLocation,accum=0;i<scoreSet.length+1;i++) {

            setTimeout(()=>{//this changes score parameters (states). Child display component "DisplayLC" receives it as props
                this.setState({
                    score:scoreSet[i]["score"],
                    imageSizeFactor:scoreSet[i]["imageSizeFactor"],
                    staffWidth:scoreSet[i]["staffWidth"]
                });

            },accum+0.1);

            setTimeout(()=>{//this removes the score after each eventDuration. we pass empty parameters to remove score.
                this.setState({
                    score:"",
                    imageSizeFactor:"",
                    staffWidth:""
                });
            },accum+=scoreSet[i]["eventDuration"])
        }
    };


    render() {
        this.loopScoreSets(this.props.scoreSet,this.props.ptKeyName, this.props.loopLocation);
        return (
            <div>
                <DisplayLC score={this.state.score} imageSizeFactor={this.state.imageSizeFactor} staffWidth= {this.state.staffWidth}/>
            </div>
        );
    }
}

export default CreateScoreWithBlanksLC;