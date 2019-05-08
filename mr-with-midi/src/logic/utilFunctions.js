saveCSV =(csvData, participantID, scoreID) => {

    let csvContent = "data:text/csv;charset=utf-8,";

    csvData.forEach(function(rowArray) {
        let row = rowArray.join(",");
        csvContent += row + "\r\n";
    });
    let encodedUri = encodeURI(csvContent);
    //window.open(encodedUri);

    let dl=document.createElement('a');
    dl.download=participantID + scoreID;
    dl.href=encodedUri;
    dl.click();

};


calculation =(eventID,playTimes,playedNotesArray,noteGroupFormatVariant)=> {

    let compTime = '';
    let iniTime = '';
    let caseNumber = 'please check manually';
    let case2additional = '';

    if (playedNotesArray[eventID].indexOf(noteGroupFormatVariant[eventID]) === 0 )
    {
        caseNumber = '1';
        compTime = playTimes[eventID][1] - playTimes[eventID][0];
        //[eventID][0]is image time.  [eventID][3] is the last correct note in a 2 notes trial, for case 1
        iniTime = playTimes[eventID][1] - playTimes[eventID][0];
        //[eventID][0]is image time.  [eventID][1] is the first correct note in a 2 notes trial, for case 1
    }
    else if ( playedNotesArray[eventID].indexOf(noteGroupFormatVariant[eventID]) > 0 )
    {
        caseNumber = '2';
        case2additional = (playedNotesArray[eventID].indexOf(noteGroupFormatVariant[eventID]))/3;
        let last = playTimes[eventID];
        compTime = playTimes[eventID][case2additional+1] - playTimes[eventID][0];
        iniTime = playTimes[eventID][case2additional+1] - playTimes[eventID][0];

    }
    else
    {caseNumber = 'please check manually'}

    return [eventID + 'Calculation','Calculate the result of previous trial','','','','',txt,'Note playing test treble C',patternNotesInGBroken[eventID],playedNotesArray[eventID],caseNumber,case2additional,compTime,iniTime];

};



