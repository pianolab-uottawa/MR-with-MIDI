//Logic Component

import React from "react";
import abcjs from "abcjs";

class DisplayLC extends React.Component{

    constructor(props){
        super(props);
        this.display = this.display.bind(this);

/*
        this.createScoreLoops = (score,imageSizeFactor,staffWidth,blankTime,stayTime) => {

            setTimeout((function(n){
                display(score, imageSizeFactor, staffWidth);
            }).bind(null, i, accumulatedTimeFactor,blankTime), (accumulatedTimeFactor+blankTime));

            setTimeout((function(m){
                remove();
            }).bind(null, i, accumulatedTimeFactor, stayTime,blankTime), (accumulatedTimeFactor+stayTime+blankTime));

        };
*/


    }

    display = (score,imageSizeFactor,staffWidth) =>{
        console.log(score+"-1");
        alert(staffWidth);
        setTimeout(function(){
            abcjs.renderAbc("scoreLoopBundle",score, {
                scale: imageSizeFactor,
                staffwidth: staffWidth,
            });
        },1000)

    };

    componentDidUpdate(prevProps) {
        if((this.props.score !== prevProps.score))
        {
            this.display(this.props.score,this.props.imageSizeFactor,this.props.staffWidth);//set what to display. you can display empty score as blanks.

        }
    }



    render () {
        return (//note we need to set onkeydown as global event listener, because we need to change view anytime when user press key "1".

            <div id="display" >
                {this.display(this.props.score,this.props.imageSizeFactor,this.props.staffWidth)}
                <div id="scoreLoopBundle"></div>
            </div>
        )
    }

}
export default DisplayLC;