//Logic Component - the most basic display unit

import React from "react";
import abcjs from "abcjs";

class DisplayLC extends React.Component{

    constructor(props){
        super(props);
        this.display = this.display.bind(this);
    }

    display = (score,imageSizeFactor,staffWidth) =>{
            abcjs.renderAbc("scoreLoopBundle",score, {
                scale: imageSizeFactor,
                staffwidth: staffWidth,


            });
    };

    render () {
        return (//note we need to set onkeydown as global event listener, because we need to change view anytime when user press key "1".

            <div id="display" style={{textAlign : 'center' ,marginTop:'15%'}}>
                {this.display(this.props.score,this.props.imageSizeFactor,this.props.staffWidth)}
                <div id="scoreLoopBundle"></div>
            </div>
        )
    }
}
export default DisplayLC;