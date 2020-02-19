var xhr = new XMLHttpRequest(); //create XMLHttpRequest object 1
xhr.onload = function() { //when readystate changes
    responseObject = JSON.parse(xhr.responseText);
    // build up string with new content 
    var newContent = ''; //5
    for (var i = 0; i < responseObject.events.length; i++) { //loop through obj 6
        newContent += '<div class="event">';
        newContent += '<img src="' + responseObject.events[i].map + '"';
        newContent += 'alt="' + responseObject.events[i].location + '"/>';
        newContent += '<p><b>' + responseObject.events[i].location + '</b><br>';
        newContent += responseObject.events[i].date + '</p>';
        newContent += '</div>';
    }
    document.getElementById('content').innerHTML = newContent; //7

};
xhr.open('GET', 'data.json', true); //prepare the request
xhr.send(null); //send the request 3