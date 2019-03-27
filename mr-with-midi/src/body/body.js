import React from 'react';
import abcjs from "abcjs/midi";

export default class Body extends React.Component {

    static createScore1(){
        let abcParam = "T: Cooley's\n" +
            "M: 4/4\n" +
            "L: 1/8\n" +
            "R: reel\n" +
            "K: Emin\n" +
            "|:D2|EB{c}BA B2 EB|~B2 AB dBAG|FDAD BDAD|FDAD dAFD|\n" +
            "EBBA B2 EB|B2 AB defg|afe^c dBAF|DEFD E2:|\n" +
            "|:gf|eB B2 efge|eB B2 gedB|A2 FA DAFA|A2 FA defg|\n" +
            "eB B2 eBgB|eB B2 defg|afe^c dBAF|DEFD E2:|";
        abcjs.renderAbc("score-section",abcParam);
    }

    constructor(props){
        super(props);

    }
   render(){
        return (
            <div id="score-section">-</div>
        );
    }

}



