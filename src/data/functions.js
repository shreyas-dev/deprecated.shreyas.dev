function generateTime() {
    const timeNow = new Date();
    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();
    let timeString = '' + hours;
    timeString += (minutes < 10 ? ':0' : ':') + minutes;
    timeString += (seconds < 10 ? ':0' : ':') + seconds;
    return timeString
}

function generateEmoji(unicode){
    return `<span class='terminal-icon'> ${unicode}</span>`;
}

function generateTable(tableHeaders,rows) {
    console.log(tableHeaders);
    console.log(rows);
    let htmlHeaders='<tr>';
    for (let header of tableHeaders){
        htmlHeaders+='<th>' + header +'</th>'
    }
    htmlHeaders+='</tr>';
    let htmlTableRows='';
    rows.forEach((row)=>{
        htmlTableRows+='<tr>';
        console.log(row);
        for (let header of tableHeaders){
            htmlTableRows+="<td>"+row[header]+"</td>";
        }
        htmlTableRows+='</tr>';
    });

    return `<table class="terminal-table">${htmlHeaders} ${htmlTableRows}</table>`;
}

export {
    generateTime,
    generateEmoji,
    generateTable
}
