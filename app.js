const BASE_URL = "http://api.giphy.com/v1/gifs/search?";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

let searchTerm = '';
const searchForm = document.querySelector('#searchForm');
const searchBox = document.querySelector("input[name='searchBox']");
const searchButton = document.querySelector("#btn_search");
const results = document.querySelector('#results');
const images = document.querySelector('#images');
const removeButton = document.querySelector('#btn_remove');

//get search term from user input
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
  searchTerm = searchBox.value;
  getImageURL(searchTerm);


});
//make API call to retrieve image url
async function getImageURL(searchTerm) {
  let url = `${BASE_URL}q=${searchTerm}&api_key=${API_KEY}`;
  let res = await axios.get(`${url}`);
  let imageURL = res.data.data[0].images.original.url;
  displayImage(imageURL);

}

// renders GIF onscreen
function displayImage(imageURL) {
  const imageGif = document.createElement('img');
  imageGif.src = imageURL;
  images.appendChild(imageGif);
  searchTerm = ' ';
  images.appendChild(imageGif);

}


removeButton.addEventListener('click', removeGif);
function removeGif() {
  results.remove();

}




