function run () {

    const searchQuery = "finance";

    fetch('http://localhost:5000/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            searchQuery: searchQuery
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // "Hello, World!"
        });

}

window.onload = run;