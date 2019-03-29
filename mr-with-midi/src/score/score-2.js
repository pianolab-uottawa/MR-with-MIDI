import abcjs from "abcjs/midi"


export default function createScore2(){
    let abcParam = [];
    abcParam[0]=
        "|:d2|EB{c}BA B2 EB|";
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
    for (let i = 0; i < 9; i++){
        setTimeout((function(m){
            console.log("clear");
            abcjs.renderAbc("score-action-bundle-section","", {
                scale: 1.2,
                staffwidth: 340,
            })

        }).bind(null, i), (blankTime+stayTime)*(i)+stayTime);
    }

    for (let j = 0; j<9;j++){
        setTimeout((function(n){
            console.log("show");
            abcjs.renderAbc("score-action-bundle-section",abcParam[n], {
                scale: 1.2,
                staffwidth: 340,
            });
        }).bind(null, j), ((blankTime+stayTime)*(j)));
    }

    }), initialBlankTime);


}

/*http://veeweeherman.github.io/2016/01/26/set-timeout-console-log-scope-hoisting/*/