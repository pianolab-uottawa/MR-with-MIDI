const path = require('path');
const scriptName = path.basename(__filename, '.js');
//strip filename

export const intervalCPositionBroken = [
    {scoreID: "intervalCPositionBroken", scoreIDformatted:"intervalCPositionBroken"},//add prefix to ensure the ID is unique in DOM
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:1000, eventName: "blank screen", ptKeyName:"1"},// assign keys on keyboard to ptKeyName for practice / test round. For example, press key "1" for practice 1, press key "2" for practice 2, press "t" for actual test.
    {score:" G G G|", imageSizeFactor:"1.2", staffWidth:"60" , eventDuration:3000, eventName: "Practice 1 shows on screen"},
    {score:"", imageSizeFactor:"", staffWidth:"" , eventDuration:1000, eventName: "blank screen"},
    {score:"G d G|", imageSizeFactor:"1.2", staffWidth:"60",  eventDuration:500, eventName: "Practice 2 shows on screen"},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:1000, eventName: "blank screen"},
    {score:"|G E G|", imageSizeFactor:"1.2", staffWidth:"60", eventDuration:3000, eventName:"Practice 3 shows on screen"},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:1000, eventName: "blank screen", ptKeyName:"2"},
    {score:"|C C C|", imageSizeFactor:"1.2", staffWidth:"60", eventDuration:3000, eventName:"Test-1"},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:1000, eventName: "blank screen"},
    {score:"|d d d|", imageSizeFactor:"1.2", staffWidth:"60", eventDuration:3000, eventName:"Test-2"}
];

export default {
    intervalCPositionBroken,
}