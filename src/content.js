const google_search_config = {
    sidebarContainerQuery: ['#rhs'],  // Right hand side container in Google search page (sidebar exists)
    appendContainerQuery: ['#rcnt'],  // Main container in Google search page (no sidebar)
};

function mount () {
    // Create our container and style it.
    var container = document.createElement('div');
    container.className = "graph-container";
    // Add some text to the container
    container.innerHTML = "Hello World";
    // Append container to body
    // document.body.appendChild(container);


    // Check if the document contains the sidebar container
    if (document.querySelector(google_search_config.sidebarContainerQuery)) {
        // Append container to sidebar container
        document.querySelector(google_search_config.sidebarContainerQuery).prepend(container);
    }
    else {
        container.classList.add('sidebar-free');
        // Append container to append container
        document.querySelector(google_search_config.appendContainerQuery).appendChild(container);
    }

    // Append an image wihtin this content script
    // var img = document.createElement('img');
    // img.src = chrome.runtime.getURL('images/blockchain.png');
    // container.appendChild(img);

    console.log("Here's the fetched text");
    fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data => {
            console.log(data.message); // "Hello, World!"
        });

}



window.onload = mount;