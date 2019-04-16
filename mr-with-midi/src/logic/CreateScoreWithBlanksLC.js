//Logic Component
//read score arrays and pass them onto child for display cycle.
import React from "react";
import DisplayLC from "./DisplayLC";


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


        this.abcParam = [];
        this.abcParam[0]={score:"", stayTime:1000, imageSizeFactor:"", staffWidth:""};
        this.abcParam[1]={score:"|:d2|EB{c}BA B2 EB|", stayTime:3000, imageSizeFactor:"3.2", staffWidth:"240"};
        this.abcParam[2]={score:"", stayTime:1000, imageSizeFactor:"", staffWidth:""};
        this.abcParam[3]={score:"|D2 a|",  stayTime:500, imageSizeFactor:"1.2", staffWidth:"440"};
        this.abcParam[4]={score:"", stayTime:1000, imageSizeFactor:"", staffWidth:""};
        this.abcParam[5]={score:"|:b2 C|", stayTime:3000, imageSizeFactor:"3.2", staffWidth:"340"};

    }
    handleKeyDown(event){
        if (event.key === '1') {
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

/*
* <Button1><Button2><Button3>
*
*
*
*
*
*
*
*
* */