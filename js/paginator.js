var current = 0;

function showPrevImage(){
  current--;
  if (current < 0){
    current = images.length - 1;
  }
  $('#carousel').attr('src', images[current]);
}

$('#prev').click(showPrevImage);

function showNextImage(){
  current++;
  if (current >= images.length){
    current = 0;
  }
  $('#carousel').attr('src', images[current]);
}
$('#next').click(showNextImage);
