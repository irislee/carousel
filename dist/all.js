
var images = [
  'http://cdn4.lacdn.com/wp-content/uploads/2014/03/golden-retriever-puppy-webcam.jpg',
  'http://www.shanalogic.com/wordpress/wp-content/uploads2/2015/10/golden-retriever5.jpg',
  'http://www.drodd.com/images12/golden-retriever-puppies2.jpg',
  'http://cdn-1.dooziedog.com/dog_breeds/images/full/Golden-Retriever-Puppy-6.jpg'
];

console.log("helllooooo");
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
