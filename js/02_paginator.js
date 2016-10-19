var current = 0;
var imagesLength = images.length;

function showPrevImage(){
  removeThumbnailBorder(current);
  current--;
  if (current < 0){
    current = imagesLength - 1;
  }
  $('#carousel').attr('src', images[current]);
  $('#counter').text(current + 1 + '/' + imagesLength);
  addThumbnailBorder(current);
}

function showNextImage(){
  removeThumbnailBorder(current);
  current++;
  if (current >= imagesLength){
    current = 0;
  }
  $('#carousel').attr('src', images[current]);
  $('#counter').text(current + 1 + '/' + imagesLength);
  addThumbnailBorder(current);
}

$('#prev').click(showPrevImage);
$('#next').click(showNextImage);

