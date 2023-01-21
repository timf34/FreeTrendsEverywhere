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
            'Content-Type': 'application/json'
        },
        // Send a json {"searchQuery": "dogs"} to the Python app
        body: JSON.stringify(data)
    });

    // fetch('http://localhost:5000/endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     key1: 'value1',
    //     key2: 'value2'
    //   })
    // });
}

window.onload = run;