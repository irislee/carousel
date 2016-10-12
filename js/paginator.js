var current = 0;

function showPrevImage(){
  i--;
  if (i < 0){
    i = images.length - 1;
  }
  $('#carousel').attr('src', images[i]);
}

$('#prev').click(showPrevImage);

function showNextImage(){
  i++;
  if (i >= images.length){
    i = 0;
  }
  $('#carousel').attr('src', images[i]);
}
$('#next').click(showNextImage);
