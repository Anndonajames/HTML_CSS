function display() {
    var xhr = new XMLHttpRequest();



    xhr.onload = function() {

        responseObject = JSON.parse(xhr.responseText); //response text in one method of request
        // build up string with new content 
        var n = ''; //5

        number = document.getElementById('input').value;
        number = parseInt(number);


        for (var i = 0; i < responseObject.details.length; i++) { //loop through obj 6


            if (number == i) {
                console.log(number);
                n += '<div class="event">';
                n += '<img src="' + responseObject.details[i].map + '"';
                n += 'alt="' + responseObject.details[i].Name + '"/>';
                n += '<p><b>' + responseObject.details[i].Name + '</b><br>';
                n += responseObject.details[i].CollegeName + '</b><br>';
                n += responseObject.details[i].Department + '</b><br></p>';
                n += '</div>';
            }
            console.log(number);

        }
        document.getElementById('hai').innerHTML = n;

    };
    xhr.open('GET', 'student.json', true); //prepare the request
    xhr.send(null); //send the request 3
}

function reset() {

    document.getElementById('hai').innerHTML = " ";


}