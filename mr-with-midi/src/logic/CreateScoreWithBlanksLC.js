//Logic Component
//read score arrays and pass them onto child for display cycle.
import React from "react";
import DisplayLC from "./DisplayLC";
import {intervalCPositionSolid, intervalCPositionBroken} from "../score/index";//important, note {} vs no{}, they are different

class CreateScoreWithBlanksLC extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.abcParam = intervalCPositionSolid;
        this.state={
          score: "",
          imageSizeFactor:"1",
          staffWidth: "100",
          stayTime: 1000,
        };
    }

    handleKeyDown(event){
        if (event.key === '1') {
            //for loop, setState, async///
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
        }
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
    }

    render() {
        return (
                <DisplayLC score={this.state.score} imageSizeFactor={this.state.imageSizeFactor} staffWidth= {this.state.staffWidth}/>
        );
    }
}

export default CreateScoreWithBlanksLC;