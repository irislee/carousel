for (var i = 0; i < images.length; i++) {
  var img = new Image(30,20);
  img.src = images[i];
  img.id = i;
  $('#thumbnails').append(img);
};

function addThumbnailBorder (current) {
  $('#' + current).addClass("highlight");
}

function removeThumbnailBorder (current) {
  $('#' + current).removeClass("highlight");
}