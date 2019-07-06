export const intervalCPositionBroken = [
    {scoreID: "intervalCPositionBroken", scoreIDformatted:"intervalCPositionBroken",noteGroupFormatVariant:["C5=","C5=","C5=","C5=","C5=","C5=","C5="]},//add prefix to ensure the ID is unique in DOM

    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:1000, eventName: "blank screen", ptKeyName:"1", eventID:0},// assign keys on keyboard to ptKeyName for practice / test round. For example, press key "1" for practice 1, press key "2" for practice 2, press "t" for actual test.
    {score:" G G G|", imageSizeFactor:"1.2", staffWidth:"60" , eventDuration:300, eventName: "Practice 1 shows on screen", eventID:0},
    {score:"", imageSizeFactor:"", staffWidth:"" , eventDuration:1000, eventName: "blank screen", eventID:0},
    {score:"G d G|", imageSizeFactor:"1.2", staffWidth:"60",  eventDuration:500, eventName: "Practice 2 shows on screen", eventID:0},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:1000, eventName: "blank screen", eventID:0},
    {score:"|G E G|", imageSizeFactor:"1.2", staffWidth:"60", eventDuration:3000, eventName:"Practice 3 shows on screen", eventID:0 },
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:1000, eventName: "blank screen", eventID:0},
    {eventID:-99},//This marks end of a loop
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:100, eventName: "blank screen", ptKeyName:"2", eventID:1},
    {score:"|C C C|", imageSizeFactor:"1.2", staffWidth:"60", eventDuration:300, eventName:"Test-1", eventID:1},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:100, eventName: "blank screen", eventID:2},
    {score:"|d d d|", imageSizeFactor:"1.2", staffWidth:"60", eventDuration:300, eventName:"Test-2", eventID:2},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:100, eventName: "blank screen", eventID:3},

    {score:-1, eventID:-99},//This marks the end
];

export default {
    intervalCPositionBroken,
}

