//Logic Component
import React from "react";
import DisplayLC from "./DisplayLC";
import RemoveLC from "./RemoveLC";
import ResetLC from "./ResetLC";


class CreateScoreWithBlanksLC extends React.Component {


    constructor(props) {
        super(props);
        this.abcParam = [];
        abcParam[0]={score:"|:d2|EB{c}BA B2 EB|", blankTime:1000, stayTime:3000, imageSizeFactor:"3.2", staffWidth:"240"};
        abcParam[1]={score:"|D2 a|", blankTime:1500, stayTime:500, imageSizeFactor:"1.2", staffWidth:"440"};
        abcParam[2]={score:"|:b2 C|", blankTime:3000, stayTime:3000, imageSizeFactor:"3.2", staffWidth:"340"};
        this.initialBlankTime = 1000;
        this.totalRounds = abcParam.length;
        this.createScoreSequenceWithBlanks = (score,imageSizeFactor,staffWidth,blankTime,stayTime) => {

            setTimeout((function(n){
                display(score, imageSizeFactor, staffWidth);
            }).bind(null, i, accumulatedTimeFactor,blankTime), (accumulatedTimeFactor+blankTime));

            setTimeout((function(m){
                remove();
            }).bind(null, i, accumulatedTimeFactor, stayTime,blankTime), (accumulatedTimeFactor+stayTime+blankTime));

        };




        this.handleKeyDown = (event) =>{
            if (event.key === '1') {
                this.createScoreSequenceWithBlanks();
            }
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }


    render() {
        return (
            <div>
                <DisplayLC
                    handleKeyDown={this.handleKeyDown}
                    initialBlankTime={this.initialBlankTime}
                    score={this.abcParam}
                    blankTime={this.abcParam}
                    stayTime={}
                    imageSizeFactor={}
                    staffWidth={}
                />
                <ResetLC
                    onKeydown={this.resetter}
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