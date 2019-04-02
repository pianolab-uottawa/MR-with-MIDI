import abcjs from "abcjs/midi"


export default function createScore(scoreSessionObject){

    const defaultWidth = 300;
    const defaultImageSizeFactor = 1.2;
    const defaultEmptyStaffImage = "xx|";
    const defaultBlankTime = 1000;
    const stayTime = 1000;

    let abcParam = [];
    abcParam[0]["score"]=
        "|:d2|EB{c}BA B2 EB|";
    abcParam[0]["blankTime"]=
        "3000";
    abcParam[0]["stayTime"]=
        "2000";
    abcParam[0]["imageSizeFactor"]=
        "2.2";
    abcParam[0]["staffWidth"]=
        "240";


    abcParam[1] =
        "|:D2 EB{c}B2 A|";
    abcParam[2] =
        "|:a|";
    abcParam[3] =
        "|:c|";
    abcParam[4] =
        "|:B|";

    //see https://configurator.abcjs.net/visual for configuration

    var blankTime=1000;
    var stayTime=1000;
    var initialBlankTime = 1000;

    setTimeout((function(){
        for (let i=0; i<totalRounds; i++) {

            displayWithDelayBeforeScore(i,abcParam[i]["score"],abcParam[i]["blankTime"],abcparam[i]["stayTime"],abcParam[i]["imageSizeFactor"]);
            removeScoreWithDelay();

        }


    }), initialBlankTime);

    function displayWithDelayBeforeScore (index,score,blankTime,stayTime,imageSizeFactor,staffWidth) {


            setTimeout((function(n){
                console.log("show");
                abcjs.renderAbc("score-action-bundle-section",score, {
                    scale: imageSizeFactor,
                    staffwidth: staffWidth,
                });
            }).bind(null, index), ((blankTime+stayTime)*(index)));

    }

    function removeScoreWithDelay (index,blankTime,stayTime) {

            setTimeout((function(m){
                console.log("clear");
                abcjs.renderAbc("score-action-bundle-section","");

            }).bind(null, index), (blankTime+stayTime)*(index)+stayTime);

    }


}