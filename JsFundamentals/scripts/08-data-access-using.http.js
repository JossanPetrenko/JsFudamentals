
//hTTPRequestUsingXHR();
function hTTPRequestUsingXHR() {
    //XML HTTP Request

    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    };

    xhttp.open("GET", "http://5d83fa06baffda001476ac60.mockapi.io/users", true);
    xhttp.send();

    console.log("HTTP Request Using XHR");
}

//hTTPRequestUsingJQuery();
function hTTPRequestUsingJQuery() {

    // yarn add jquery
    // import $ from 'jquery';

    // $.get("http://5d83fa06baffda001476ac60.mockapi.io/users",
    //     data => console.log('data :', data)
    // ); //returns a promise

    let promise = $.get("http://5d83fa06baffda001476ac60.mockapi.io/users");
    promise.then(
        data => console.log('data :', data),
        error => console.log('error :', error)
    );

    console.log("HTTP Request Using JQuery");
}

//hTTPPostUsingJQuery();
function hTTPPostUsingJQuery() {

    // yarn add jquery
    // import $ from 'jquery';

    let user = {
        name: 'Citizen J',
        avater: 'cj.jpg'
    };
    let promise = $.post("http://5d83fa06baffda001476ac60.mockapi.io/users", user);

    promise.then(
        data => console.log('data :', data),
        error => console.log('error :', error)
    );


    console.log("HTTP Post Using JQuery");
}