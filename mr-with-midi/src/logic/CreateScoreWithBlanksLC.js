//Logic Component
//read score arrays and pass them onto child for display cycle.
import React from "react";
import DisplayLC from "./DisplayLC";

class CreateScoreWithBlanksLC extends React.Component {

    constructor(props) {
        super(props);
        this.abcParam = [];
        this.state={
            score: "",
            imageSizeFactor:"1",
            staffWidth: "1",
            stayTime: 1,
            scoreIDformatted:"",
        };
    }


    clearAsyncFunctions= () =>{
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

    };

    passScoreSet = (scoreSet) => {
        this.clearAsyncFunctions();
        this.abcParam = scoreSet;
    };


    loopScoreSets = (ptKeyName) => {
        for (let i=1,accum=0;i<this.abcParam.length+1 && !this.abcParam[i]["ptKeyName"];i++) {
            setTimeout(()=>{//this changes score parameters (states). Child display component "DisplayLC" receives it as props
                this.setState({
                    score:this.abcParam[i]["score"],
                    imageSizeFactor:this.abcParam[i]["imageSizeFactor"],
                    staffWidth: this.abcParam[i]["staffWidth"]
                });

            },accum+0.001);

            setTimeout(()=>{//this removes the score after each staytime. we pass empty parameters to remove score.
                this.setState({
                    score:"",
                    imageSizeFactor:"",
                    staffWidth:""
                });
            },accum+=this.abcParam[i]["stayTime"])
        }
    };

    render() {
        return (
            <div>
                {this.passScoreSet(this.props.scoreSet)}
                <DisplayLC score={this.state.score} imageSizeFactor={this.state.imageSizeFactor} staffWidth= {this.state.staffWidth}/>
            </div>
        );
    }
}

export default CreateScoreWithBlanksLC;