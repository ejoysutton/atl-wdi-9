var = imageUrl;

$(".get-gif").on("click", function() {
$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
  .done(function(data){
  	// var imageUrl = data.url;
    console.log(data.data.image_url);
    var imageUrl = data.data.image_url;
    $('.image-jumbotron').attr("src", imageUrl);
  });
});

$(".save-gif").on("click", function() {
$.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
  .done(function(data){
  	// var imageUrl = data.url;
    console.log(data.data.image_url);
    var imageUrl = data.data.image_url;
    $('.image-jumbotron').attr("src", imageUrl);
  });
});
