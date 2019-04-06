//This is pure javascript way to write/export logic functions. But I will keep it here for reference/record.

//https://stackoverflow.com/questions/37949981/call-child-method-from-parent
//https://stackoverflow.com/questions/26176519/reactjs-call-parent-method

import abcjs from "abcjs/midi"

const defaultWidth = "300";
const defaultImageSizeFactor = "1.2";
const defaultEmptyStaffImage = "xx|";
const defaultBlankTime = 1000;
const defaultStayTime = 1000;
let abcParam = [];
abcParam[0]={score:"|:d2|EB{c}BA B2 EB|", blankTime:1000, stayTime:3000, imageSizeFactor:"3.2", staffWidth:"240"};
abcParam[1]={score:"|D2 a|", blankTime:1500, stayTime:500, imageSizeFactor:"1.2", staffWidth:"440"};
abcParam[2]={score:"|:b2 C|", blankTime:3000, stayTime:3000, imageSizeFactor:"3.2", staffWidth:"340"};
//see https://configurator.abcjs.net/visual for configuration
let initialBlankTime = 1;
let totalRounds = 3;


function createScoreSequenceWithBlanks () {

    setTimeout((function () { // this setTimeout here only created for "initial blank time" purpose.

        for (let i = 0, accumulatedTimeFactor = 0; i < totalRounds; accumulatedTimeFactor+=abcParam[i]["blankTime"] + abcParam[i]["stayTime"], i++ ) {
            //this is the main loop. The delay accumulates after each iteration, and when executing the loop the delay is unique to each iteration.
            //note that this is using asynchronous to "simulate" synchronous.

            /*(function(m,n){ //using IIFE within the for loop, just another way to do it.
                setTimeout(function(){
                    display(abcParam[m]["score"], abcParam[m]["imageSizeFactor"], abcParam[m]["staffWidth"]);
                }, ( n+abcParam[m]["blankTime"]))
            })(i,accumulatedTimeFactor,abcParam[i]["blankTime"]);*/

            setTimeout((function(n){
                display(abcParam[i]["score"], abcParam[i]["imageSizeFactor"], abcParam[i]["staffWidth"]);
            }).bind(null, i, accumulatedTimeFactor,abcParam[i]["blankTime"]), (accumulatedTimeFactor+abcParam[i]["blankTime"]));

            setTimeout((function(m){
                remove();
            }).bind(null, i, accumulatedTimeFactor, abcParam[i]["stayTime"],abcParam[i]["blankTime"]), (accumulatedTimeFactor+abcParam[i]["stayTime"]+abcParam[i]["blankTime"]));

        }
    }), initialBlankTime);

}

function reset() {
    console.log("reset");
    remove();
    let setTimeoutID = window.setTimeout(() => {}, 0);
    while (setTimeoutID) {
        window.clearTimeout(setTimeoutID);
        setTimeoutID--;
    }
}

function display (score,imageSizeFactor,staffWidth) {
    console.log("show");
    abcjs.renderAbc("score-action-bundle-section",score, {
        scale: imageSizeFactor,
        staffwidth: staffWidth,
    });
}

function remove() {
    console.log("clear");
    abcjs.renderAbc("score-action-bundle-section","");
}


const funcs = {
    creater() { createScoreSequenceWithBlanks(); },
    resetter() { reset(); }
}

export default funcs
