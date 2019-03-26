import React from 'react';
import abcjs from "abcjs/midi";


export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.abcParam = "T: Cooley's\n" +
            "M: 4/4\n" +
            "L: 1/8\n" +
            "R: reel\n" +
            "K: Emin\n" +
            "|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|\n" +
            "EBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:|\n" +
            "|:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg|\n" +
            "eB B2 eBgB|eB B2 defg|afe^c dBAF|DEFD E2:|";
        this.scoreRenderingID="paper";
        this.r = function(){
            abcjs.renderAbc("paper",this.abcParam);
        }

    }
    render() {
        return (
            <div id={this.scoreRenderingID} onClick={this.r} >3</div>
        )
    }


}