var sample_message = document.createElement("div");
sample_message.innerHTML = "Yolo";
// Show the message on the screen in the middle right of the page
sample_message.style.position = "fixed";
sample_message.style.top = "50%";
sample_message.style.right = "0";
sample_message.style.transform = "translateY(-50%)";
document.body.appendChild(sample_message);
console.log("yolo bitches");


var img = document.createElement("img");
img.src = "https://img.icons8.com/ios/512/happy.png";

// Set image width and height
img.width = 300;
img.height = 300;

img.style.cssText = "position:fixed;top:10px;right:10px;";
document.body.appendChild(img);


function mount () {
    var container = document.createElement('div');
    container.className = 'graph-container';

    // Create an image within the div
    var sample_image = document.createElement('img');
    sample_image.src = "C:\\Users\\timf3\\WebstormProjects\\timf34.github.io\\art\\paintings\\1657005546_large-image_max-kurzweil-female-nude-in-front-of-mirror-1907-large.jpg";
    sample_image.width = 300;
    sample_image.height = 300;
    container.appendChild(sample_image);
}

mount();

var container = document.createElement('div');
container.className = 'graph-container';
