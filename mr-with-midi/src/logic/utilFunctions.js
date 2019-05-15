const saveCSV =(csvData, participantID, scoreID) => {

    let csvContent = "data:text/csv;charset=utf-8,";

    csvData.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });
    let encodedUri = encodeURI(csvContent);
    //window.open(encodedUri);

    let dl=document.createElement('a');
    dl.download=participantID +'-'+ scoreID;
    dl.href=encodedUri;
    dl.click();

};


const calculate =(eventID,playTimes,playedNotesArray,noteGroupFormatVariant,participantID,scoreID)=> {

    let compTime = '';
    let iniTime = '';
    let caseNumber = 'please check manually';
    let case2additional = '';
    let idealNoteCounts = noteGroupFormatVariant[eventID].length/3;

    console.log(idealNoteCounts);

    if (playedNotesArray[eventID].indexOf(noteGroupFormatVariant[eventID]) === 0 )
    {
        caseNumber = '1';
        compTime = playTimes[eventID][idealNoteCounts] - playTimes[eventID][0];
        //[eventID][0]is image time.  [eventID][ideaNoteCount] is the last correct note in a x notes trial, for case 1. Where: x is the count of designed notes in a single round
        iniTime = playTimes[eventID][1] - playTimes[eventID][0];
        //[eventID][0]is image time.  [eventID][1] is the first correct note in a 2 notes trial, for case 1
    }
    else if ( playedNotesArray[eventID].indexOf(noteGroupFormatVariant[eventID]) > 0 )
    {
        caseNumber = '2';
        case2additional = (playedNotesArray[eventID].indexOf(noteGroupFormatVariant[eventID]))/3;
        compTime = playTimes[eventID][case2additional+idealNoteCounts] - playTimes[eventID][0];
        iniTime = playTimes[eventID][case2additional+1] - playTimes[eventID][0];





    }
    else
    {caseNumber = 'please check manually'}

    return [eventID-1 + 'Calculation','Calculate the result of previous trial','','','','','',scoreID,noteGroupFormatVariant[eventID],playedNotesArray[eventID],caseNumber,case2additional,compTime,iniTime];

};


export {saveCSV,calculate}
