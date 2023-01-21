function run () {

    // Create a div for the svg file
    var div = document.createElement("div");
    div.id = "svg_div";
    document.body.appendChild(div);

    // Create a svg file
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.setAttribute("id", "svg");
    document.getElementById("svg_div").appendChild(svg);




    // Fetch the .svg file from the Python app at local host 5000

    fetch('http://localhost:5000/graph.svg', {
        method: 'POST',
        headers: {
            'Content-Type': 'image/svg+xml'
        },
        body: svg
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        // Add the svg file to the div
        var svg = document.getElementById("svg");
        svg.innerHTML = data;
    }
    )
    .catch((error) => {
        console.error('Error:', error);
    }
    );




}

window.onload = run;