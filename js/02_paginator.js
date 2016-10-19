var current = 0;
var imagesLength = images.length;

function showPrevImage(){
  $('#' + current).removeClass("highlight");
  current--;
  if (current < 0){
    current = imagesLength - 1;
  }
  $('#carousel').attr('src', images[current]);
  $('#counter').text(current + 1 + '/' + imagesLength);
  $('#' + current).addClass("highlight");
}

$('#prev').click(showPrevImage);

function showNextImage(){
  $('#' + current).removeClass("highlight");
  current++;
  if (current >= imagesLength){
    current = 0;
  }
  $('#carousel').attr('src', images[current]);
  $('#counter').text(current + 1 + '/' + imagesLength);
  $('#' + current).addClass("highlight");
}
$('#next').click(showNextImage);

