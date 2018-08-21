
function draw() {
  var img = new Image();
  img.src = "Pixel-Art-Mario.jpg";
  var canvas = document.getElementById("photo");
  var context = canvas.getContext('2d');
  img.onload = function () {
    context.drawImage(img, 0, 0);
  };
  var color = document.getElementById('color');
  function pick(event) {
    var x = event.layerX;
    var y = event.layerY;
    var pixel = context.getImageData(x, y, 1, 1);
    var data = pixel.data;
    var rgba = 'rgba(' + data[0] + ', ' + data[1] + ', ' + data[2] + ', ' + (data[3] / 255) + ')';
    color.textContent = rgba;
    console.log(color.textContent);
  }
  canvas.addEventListener('mousedown', pick);
}

