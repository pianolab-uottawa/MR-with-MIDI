//Logic Component
//read score arrays and pass them onto child for display cycle.
import React from "react";
import DisplayLC from "./DisplayLC";
import score1 from "../score/score-1";


class CreateScoreWithBlanksLC extends React.Component {

    constructor(props) {
        super(props);
        this.handleKeyDown = this.handleKeyDown.bind(this);

        this.state={
          score: "",
          imageSizeFactor:"1",
          staffWidth: "100",
          stayTime: 1000,
        };
        this.abcParam=score1;


    }
    handleKeyDown(event){
        if (event.key === '1') {
            console.log(this.abcParam);
            //for loop, setState, async
            for (let i=0,accum=this.abcParam[0]["stayTime"];i<this.abcParam.length;accum+=this.abcParam[++i]["stayTime"]) {

                setTimeout(()=>{//this changes score parameters (states). Child display component "DisplayLC" receives it as props
                    this.setState({
                        score:this.abcParam[i]["score"],
                        imageSizeFactor:this.abcParam[i]["imageSizeFactor"],
                        staffWidth: this.abcParam[i]["staffWidth"]
                    });
                },accum-this.abcParam[i]["stayTime"]+0.1);

                setTimeout(()=>{//this removes the score after each staytime. we pass empty parameters to remove score.
                    this.setState({
                        score:"",
                        imageSizeFactor:"",
                        staffWidth:""
                    });
                },accum)
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
