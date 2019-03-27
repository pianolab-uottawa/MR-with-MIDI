import abcjs from "abcjs/midi"


export default function createScore2(){
    let abcParam =
        "|:d2|EB{c}BA B2 EB|";
    abcjs.renderAbc("score-action-bundle-section",abcParam);
    setInterval(function(){
        abcjs.renderAbc("score-action-bundle-section","");
        }, 3000);
}