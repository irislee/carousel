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