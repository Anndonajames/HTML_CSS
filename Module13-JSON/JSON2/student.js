var xhr = new XMLHttpRequest(); //create XMLHttpRequest object 1
xhr.onload = function() { //when readystate changes
    responseObject = JSON.parse(xhr.responseText); //response text in one method of request
    // build up string with new content 
    var newContent = ''; //5
    for (var i = 0; i < responseObject.details.length; i++) { //loop through obj 6
        newContent += '<div class="event">';
        newContent += '<img src="' + responseObject.details[i].map + '"';
        newContent += 'alt="' + responseObject.details[i].Name + '"/>';
        newContent += '<p><b>' + responseObject.details[i].Name + '</b><br>';
        newContent += responseObject.details[i].CollegeName + '</b><br>';
        newContent += responseObject.details[i].Department + '</b><br></p>';

        newContent += '</div>';
    }
    document.getElementById('content').innerHTML = newContent; //7

};
xhr.open('GET', 'student.json', true); //prepare the request
xhr.send(null); //send the request 3