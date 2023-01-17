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
        document.querySelector(google_search_config.sidebarContainerQuery).appendChild(container);
    }
    else {
        container.classList.add('sidebar-free');
        // Append container to append container
        document.querySelector(google_search_config.appendContainerQuery).appendChild(container);
    }

}

// Print "its working" to console
console.log("its working");


// Call mount function
window.onload = mount;