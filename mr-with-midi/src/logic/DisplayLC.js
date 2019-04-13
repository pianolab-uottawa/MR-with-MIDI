//Logic Component

import React from "react";
import abcjs from "abcjs/midi";

export default class DisplayLC extends React.component{

    constructor(props){
        super(props);

        this.display = (score,imageSizeFactor,staffWidth) => {
            console.log("show");
            abcjs.renderAbc("score-action-bundle-section",score, {
                scale: imageSizeFactor,
                staffwidth: staffWidth,
            });
        };
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

    componentDidUpdate(prevProps) {
        if(!equal(this.props.score, prevProps.score))
        {
            this.display(this.props.score,this.props.imageSizeFactor,this.props.staffwidth);//set what to display. you can display empty score as blanks.

        }
    }



    render () {
        return (//note we need to set onkeydown as global event listener, because we need to change view anytime when user press key "1".
            <div id="DisplayLC" >
                <div id="score-action-bundle-section" >
                </div>
                <div id="reference">
                    {this.props.score}-{this.stayTime}-{this.props.imageSizeFactor}-{this.props.staffwidth}
                </div>
            </div>
        )
    }

}