

document.querySelector('.inputBtn').addEventListener('click', searchImage) ;

function searchImage(){
  let searchQuery = document.querySelector('.inputBar').value;
  let imgUrl = searchQuery.split(' ').join('+')
  // pull data from server
  let url = `https://api.giphy.com/v1/gifs/search?q=${imgUrl}&api_key=DFSLaCUrkA98m6erVgtTRsgtsX5b5hfr`;
  console.log(url);
  //AJAX request 
  let newUrl = url ;
  let giphyData = new XMLHttpRequest ;
  giphyData.open('GET', newUrl);
  giphyData.send();
  document.querySelector('.resultContainer').innerHTML = ' '
  loadGif(giphyData);
} 

function loadGif(giphyData){
  giphyData.addEventListener('load', (e) => {
  let targetData= e.target.response ;
  response = JSON.parse(targetData);
  fetchImageUrl(response);
}) 
}


function fetchImageUrl(gifData){
  let imageData = gifData ;
  let imageUrl = imageData.data ;

  imageUrl.forEach(image => {
    let imageSource = image.images.fixed_height.url ;
    document.querySelector('.resultContainer').innerHTML += `<img src="${imageSource}" </img> ` ;
  })
}