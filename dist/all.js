var images = [
  'https://unsplash.it/600/400?image=1080',
  'https://unsplash.it/600/400?image=1053',
  'https://unsplash.it/600/400?image=1069',
  'https://unsplash.it/600/400?image=1061',
  'https://unsplash.it/600/400?image=1030',
  'https://unsplash.it/600/400?image=903'
];

$(document).ready(function() {
  $('#counter').text(current + 1 + '/' + imagesLength);
  $('#carousel').attr('src', images[0]);
  $('#' + current).addClass("highlight");
});
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

$('#prev').click(showPrevImage);

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
$('#next').click(showNextImage);


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
