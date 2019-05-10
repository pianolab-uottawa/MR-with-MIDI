export const singleNoteGPosition = [
    {scoreID: "singleNoteGPosition", scoreIDformatted:"singleNoteGPosition",noteGroupFormatVariant:["practice-G4=A4=G4=","F4=","D4=","G4=","E4=","C4=","G4=","D4=","F4="]},//add prefix to ensure the ID is unique in DOM

    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:2000, eventName: "blank screen", ptKeyName:"1", eventID:0},// assign keys on keyboard to ptKeyName for practice / test round. For example, press key "1" for practice 1, press key "2" for practice 2, press "t" for actual test.
    {score:"y1/2G2", imageSizeFactor:"1.6", staffWidth:"110" , eventDuration:1000, eventName: "Practice 1 shows on screen", eventID:0},
    {score:"", imageSizeFactor:"", staffWidth:"" , eventDuration:2000, eventName: "blank screen", eventID:0},
    {score:"y1/2A2", imageSizeFactor:"1.6", staffWidth:"110",  eventDuration:1000, eventName: "Practice 2 shows on screen", eventID:0},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:2000, eventName: "blank screen", eventID:0},
    {score:"y1/2G2", imageSizeFactor:"1.6", staffWidth:"110", eventDuration:1000, eventName:"Practice 3 shows on screen", eventID:0 },
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:2000, eventName: "blank screen", eventID:0},
    {eventID:-99},//This marks end of a loop
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:2000, eventName: "blank screen", ptKeyName:"2", eventID:1},
    {score:"y1/2B2", imageSizeFactor:"1.6", staffWidth:"110", eventDuration:1000, eventName:"Test-1", eventID:1},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:2000, eventName: "blank screen", eventID:2},
    {score:"y1/2G2", imageSizeFactor:"1.6", staffWidth:"110", eventDuration:1000, eventName:"Test-2", eventID:2},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:2000, eventName: "blank screen", eventID:3},
    {score:"y1/2c2", imageSizeFactor:"1.6", staffWidth:"110", eventDuration:1000, eventName:"Test-3", eventID:3},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:2000, eventName: "blank screen", eventID:4},
    {score:"y1/2A2", imageSizeFactor:"1.6", staffWidth:"110", eventDuration:1000, eventName:"Test-4", eventID:4},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:2000, eventName: "blank screen", eventID:5},
    {score:"y1/2c2", imageSizeFactor:"1.6", staffWidth:"110", eventDuration:1000, eventName:"Test-5", eventID:5},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:2000, eventName: "blank screen", eventID:6},
    {score:"y1/2G2", imageSizeFactor:"1.6", staffWidth:"110", eventDuration:1000, eventName:"Test-6", eventID:6},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:2000, eventName: "blank screen", eventID:7},
    {score:"y1/2d2", imageSizeFactor:"1.6", staffWidth:"110", eventDuration:1000, eventName:"Test-7", eventID:7},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:2000, eventName: "blank screen", eventID:8},
    {score:"y1/2B2", imageSizeFactor:"1.6", staffWidth:"110", eventDuration:1000, eventName:"Test-8", eventID:8},
    {score:"", imageSizeFactor:"", staffWidth:"", eventDuration:2000, eventName: "blank screen", eventID:8},
    {score:-1, eventID:-99},//This marks the end
];

export default {
    singleNoteGPosition,
}