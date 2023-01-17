function mount () {
    // Create a container
    var container = document.createElement('div');
    container.className = "graph-container";

    // Add some text to the container
    container.innerHTML = "Hello World";

    // Create a canvas
    var canvas = document.createElement('canvas');
    canvas.className = "graph-canvas";
    canvas.width = 500;
    canvas.height = 500;

    // Give the canvas a background color
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Give the canvas a border colour
    ctx.strokeStyle = "black";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);


    // Append canvas to container
    container.appendChild(canvas);

    // Append container to body
    document.body.appendChild(container);
}

// Call mount function
window.onload = mount;