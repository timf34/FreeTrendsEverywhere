const google_search_config = {
    inputQuery: ["input[name='q']"],
    sidebarContainerQuery: ['#rhs'],  // Right hand side container in Google search page (sidebar exists)
    appendContainerQuery: ['#rcnt'],  // Main container in Google search page (no sidebar)
};

function mount() {
    // Create our container and style it.
    var container = document.createElement('div');
    container.className = "graph-container";
    container.id = "graph-container";
    // Add some text to the container
    container.innerHTML = "Hello World";
    // Append container to body
    // document.body.appendChild(container);


    // Check if the document contains the sidebar container
    if (document.querySelector(google_search_config.sidebarContainerQuery)) {
        // Append container to sidebar container
        document.querySelector(google_search_config.sidebarContainerQuery).prepend(container);
    } else{
        container.classList.add('sidebar-free');
        // Append container to append container
        document.querySelector(google_search_config.appendContainerQuery).appendChild(container);
    }


    // Query Python app with google search term.
    const searchInput = document.querySelector(google_search_config.inputQuery);

    if (searchInput && searchInput.value) {

        fetch('http://localhost:5000/graph.svg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                searchQuery: searchInput.value
            }),
        })
            .then(response => response.text())
            .then(data => {
                    // console.log(data);
                    document.getElementById("graph-container").innerHTML = data;
                }
            )
            .catch((error) => {
                    console.error('Error:', error);
                }
            );

    }
}


window.onload = mount;