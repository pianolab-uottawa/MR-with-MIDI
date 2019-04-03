import abcjs from "abcjs/midi"


export default function createScore(){

    const defaultWidth = "300";
    const defaultImageSizeFactor = "1.2";
    const defaultEmptyStaffImage = "xx|";
    const defaultBlankTime = 1000;
    const defaultStayTime = 1000;

    let abcParam = [];

    abcParam[0]={score:"|:d2|EB{c}BA B2 EB|", blankTime:1000, stayTime:1000, imageSizeFactor:"3.2", staffWidth:"240"};
    abcParam[1]={score:"|D2 a|", blankTime:500, stayTime:500, imageSizeFactor:"1.2", staffWidth:"440"};
    abcParam[2]={score:"|:b2 C|", blankTime:3000, stayTime:3000, imageSizeFactor:"3.2", staffWidth:"340"};


    //see https://configurator.abcjs.net/visual for configuration


    let initialBlankTime = 1;
    let totalRounds = 3;
    let accumulatedTimeFactor = 0;

    function createScoreSequenceWithBlanks () {
        setTimeout((function () {
            for (let i = 0; i < totalRounds;(accumulatedTimeFactor+=abcParam[i]["blankTime"] + abcParam[i]["stayTime"]) && i++ ) {

                setTimeout((function(n){
                display(abcParam[i]["score"], abcParam[i]["imageSizeFactor"], abcParam[i]["staffWidth"]);
                }).bind(null, i, accumulatedTimeFactor,abcParam[i]["blankTime"]), (accumulatedTimeFactor+abcParam[i]["blankTime"]));

                setTimeout((function(m){
                remove();
                }).bind(null, i, accumulatedTimeFactor, abcParam[i]["stayTime"],abcParam[i]["blankTime"]), (accumulatedTimeFactor+abcParam[i]["stayTime"]+abcParam[i]["blankTime"]));

            }
        }), initialBlankTime);
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


    createScoreSequenceWithBlanks();
}