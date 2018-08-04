function draw() {
  var img = document.getElementById("photo");
  img.onload = function() {
    context.drawImage(img, 10, 10);
  };
  img.src = "Pixel-Art-Mario.jpg";
  };