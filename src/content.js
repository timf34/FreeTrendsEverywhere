const google_search_config = {
    inputQuery: ["input[name='q']"],
    sidebarContainerQuery: ['#rhs'],  // Right hand side container in Google search page (sidebar exists)
    appendContainerQuery: ['#rcnt'],  // Main container in Google search page (no sidebar)
}

const development = true; // For development on .html page

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
    } else if (document.querySelector(google_search_config.appendContainerQuery)) {
        container.classList.add('sidebar-free');
        // Append container to append container
        document.querySelector(google_search_config.appendContainerQuery).appendChild(container);
    }
    else {
        // For using the .html page for development
        document.body.appendChild(container);
    }

    let searchInput = {};  // Need to be defined outside the if statement; scope is limited to block its defined in

    // If Google search is available, set that as the search input
    if (document.querySelector(google_search_config.inputQuery)) {
        searchInput.value = document.querySelector(google_search_config.inputQuery).value;
    }
    else {
        // Define searchInput as "finance" so that searchInput.value = "finance" when we call it later
        searchInput.value = "finance";
    }



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