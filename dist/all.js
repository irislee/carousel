
var images = [
  'https://unsplash.it/600/400?image=1053',
  'https://unsplash.it/600/400?image=1069',
  'https://unsplash.it/600/400?image=1061',
  'https://unsplash.it/600/400?image=1030',
  'https://unsplash.it/600/400?image=903'
];

// var imgs = [];

// for (var i = 0; i < images.length; i++) {
//   imgs[i] = new Image();
//   imgs[i].src = images[i];
// };
var current = 0;

function showPrevImage(){
  current--;
  if (current < 0){
    current = images.length - 1;
  }
  // $('#carousel').append('src', imgs[current]);
  $('#carousel').attr('src', images[current]);
}

$('#prev').click(showPrevImage);

function showNextImage(){
  current++;
  if (current >= images.length){
    current = 0;
  }
  // $('#carousel').append(imgs[current]);
  $('#carousel').attr('src', images[current]);
}
$('#next').click(showNextImage);
