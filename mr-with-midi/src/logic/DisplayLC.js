//Logic Component
import React from "react";
import abcjs from "abcjs/midi";

class DisplayLC extends React.component{



    display = (score,imageSizeFactor,staffWidth) => {
        console.log("show");
        abcjs.renderAbc("score-action-bundle-section",score, {
            scale: imageSizeFactor,
            staffwidth: staffWidth,
        });
    };


    render () {
        return (//note we need to set onkeydown as global event listener, because we need to change view anytime when user press key "1".
            <div onKeyDown={this.handleKeyDown(this.props.blankTime,this.props.stayTime,this.props.score)}>

            </div>
        )
    }

}