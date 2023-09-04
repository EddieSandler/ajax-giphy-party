"use strict";
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
let imageURL = '';


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

//select random gif from result array
  const selectedGiph = Math.floor(Math.random() * ((res.data.data.length) - 0 + 1) + 0);

  try {
    imageURL = res.data.data[selectedGiph].images.downsized_medium.url;
  } catch {
    alert('GIF not found- please try again');
  }

  displayImage(imageURL);

}

// renders GIF onscreen
function displayImage(imageURL) {
  const newImage = document.createElement('div');
  newImage.classList.add('display')
  const imageGif = document.createElement('img');
  imageGif.src = imageURL;

  newImage.appendChild(imageGif);
  images.appendChild(newImage);
  let searchTerm = ' ';
  images.appendChild(imageGif);

}


removeButton.addEventListener('click', removeGif);
function removeGif() {
  results.remove();

}


