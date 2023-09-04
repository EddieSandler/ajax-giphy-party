"use strict"
//define global constants
const BASE_URL = "http://api.giphy.com/v1/gifs/search?";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";


//query all html elements for future use
// let searchTerm = '';
const searchForm = document.querySelector('#searchForm');
const searchBox = document.querySelector("input[name='searchBox']");
const searchButton = document.querySelector("#btn_search");
const images = document.querySelector('#images');
const removeButton = document.querySelector('#btn_remove');

//event handler to get search term from user input
searchButton.addEventListener("click", function (e) {
  e.preventDefault();
 let searchTerm = searchBox.value;
  searchBox.value = '';
  getImageURL(searchTerm);
});

//make API call to retrieve image url
async function getImageURL(searchTerm) {
  let url = `${BASE_URL}q=${searchTerm}&api_key=${API_KEY}`;
  let res = await axios.get(`${url}`);
  let imageURL = res.data.data[0].images.fixed_width_small.url;

  //get random number

   displayImage(imageURL);

}

// renders GIF onscreen
function displayImage(imageURL) {
  const imageGif = document.createElement('img');
  imageGif.src = imageURL;
  images.appendChild(imageGif);
  let searchTerm = ' ';
  images.appendChild(imageGif);

}


removeButton.addEventListener('click', removeGif);
function removeGif() {
  results.remove();

}




