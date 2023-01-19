function run () {

    console.log("hello world");
    fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // "Hello, World!"
        });

}

window.onload = run;