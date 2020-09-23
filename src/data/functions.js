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

function generateAnchorTags(href,text,className = 'terminal-a') {
    return `<a class=${className} target="_blank" href="${href}"> ${text}</a>`;
}

function generateTable(tableHeaders,rows,className='terminal-table') {
    let htmlHeaders='<tr>';
    for (let header of tableHeaders){
        header = ucWordsAndRemoveUnderscores(header);
        htmlHeaders+='<th>' + header +'</th>'
    }
    htmlHeaders+='</tr>';
    let htmlTableRows='';
    rows.forEach((row)=>{
        htmlTableRows+='<tr>';
        for (let header of tableHeaders){
            htmlTableRows+="<td>"+row[header]+"</td>";
        }
        htmlTableRows+='</tr>';
    });

    return `<table class="${className}">${htmlHeaders} ${htmlTableRows}</table>`;
}

function ucWordsAndRemoveUnderscores(sentence) {
    return sentence.split("_").join(" ").toLowerCase()
        .replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
        function(s){
            return s.toUpperCase();
        });
}

export {
    generateTime,
    generateEmoji,
    generateTable,
    generateAnchorTags
}
