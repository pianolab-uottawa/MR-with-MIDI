//Logic Component
//read score arrays and pass them onto child for display cycle.
import React from "react";
import DisplayLC from "./DisplayLC";
import RemoveLC from "./RemoveLC";
import ResetLC from "./ResetLC";


class CreateScoreWithBlanksLC extends React.Component {


    constructor(props) {
        super(props);
        this.singleRound = {score:"|", imageSizeFactor:"", staffWidth:""};

        this.abcParam = [];
        this.abcParam[0]={score:"|:d2|EB{c}BA B2 EB|", stayTime:3000, imageSizeFactor:"3.2", staffWidth:"240"};
        this.abcParam[1]={score:"|D2 a|",  stayTime:500, imageSizeFactor:"1.2", staffWidth:"440"};
        this.abcParam[2]={score:"|:b2 C|", stayTime:3000, imageSizeFactor:"3.2", staffWidth:"340"};
        this.totalRounds = abcParam.length;

        this.handleKeyDown = () =>{
            if (event.key === '1') {
                this.singleRound["score"] = this.abcParam[0]["score"];
                this.singleRound["imageSizeFactor"] = this.abcParam[0][imageSizeFactor];
                this.singleRound["staffWidth"]=this.abcParam[0][staffWidth];
            }
        }
        this.loop = () => {setTimeout(this.remove(),this.props.stayTime);}//after the display time, just remove it.
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }




    render() {
        return (
            <div id="bundle" onKeyDown={this.handleKeyDown()}>
                <DisplayLC
                    score={this.singleRound["score"]}
                    imageSizeFactor={this.singleRound["imageSizeFactor"]}
                    staffWidth={this.singleRound["staffWidth"]}
                />
            </div>
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