function run () {

    // Create a div for the svg file
    var div = document.createElement("div");
    div.id = "svg_div";
    // Append div to body
    document.body.appendChild(div);

    document.body.appendChild(div);

    const data = {searchQuery: "dogs"};

    fetch('http://localhost:5000/graph.svg', {
        method: 'POST',
        headers: {
            'Content-Type': 'image/svg+xml',
        }
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        document.getElementById("svg_div").innerHTML = data;
    }
    )
    .catch((error) => {
        console.error('Error:', error);
    }
    );

}

window.onload = run;