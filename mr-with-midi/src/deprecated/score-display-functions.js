//This is pure javascript way to write/export logic functions. But I will keep it here for reference/record.
//https://stackoverflow.com/questions/37949981/call-child-method-from-parent
//https://stackoverflow.com/questions/26176519/reactjs-call-parent-method

//import abcjs from "abcjs/midi"

const defaultWidth = "300";
const defaultImageSizeFactor = "1.2";
const defaultEmptyStaffImage = "xx|";
const defaultBlankTime = 1000;
const defaultStayTime = 1000;
let abcParam = [];
abcParam[0]={score:"|:d2|EB{c}BA B2 EB|", blankTime:1000, eventDuration:3000, imageSizeFactor:"3.2", staffWidth:"240"};
abcParam[1]={score:"|D2 a|", blankTime:1500, eventDuration:500, imageSizeFactor:"1.2", staffWidth:"440"};
abcParam[2]={score:"|:b2 C|", blankTime:3000, eventDuration:3000, imageSizeFactor:"3.2", staffWidth:"340"};
//see https://configurator.abcjs.net/visual for configuration
let initialBlankTime = 500;
let totalRounds = 3;


function createScoreSequenceWithBlanks (score,imageSizeFactor,staffWidth,blankTime,stayTime) {

            setTimeout((function(n){
                display(score, imageSizeFactor, staffWidth);
            }).bind(null, i, accumulatedTimeFactor,blankTime), (accumulatedTimeFactor+blankTime));

            setTimeout((function(m){
                remove();
            }).bind(null, i, accumulatedTimeFactor, stayTime,blankTime), (accumulatedTimeFactor+stayTime+blankTime));

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
