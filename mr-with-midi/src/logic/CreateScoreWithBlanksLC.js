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
            staffWidth: "100",
            stayTime: 1000,
            scoreIDformatted:"",
        };
    }

    loopScoreSets = () => {
        for (let i=1,accum=0;i<this.abcParam.length+1;i++) {
            setTimeout(()=>{//this changes score parameters (states). Child display component "DisplayLC" receives it as props
                this.setState({
                    score:this.abcParam[i]["score"],
                    imageSizeFactor:this.abcParam[i]["imageSizeFactor"],
                    staffWidth: this.abcParam[i]["staffWidth"]
                });

            },accum+0.01);

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
                <DisplayLC score={this.state.score} imageSizeFactor={this.state.imageSizeFactor} staffWidth= {this.state.staffWidth}/>
            </div>
        );
    }
}

export default CreateScoreWithBlanksLC;