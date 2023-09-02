const BASE_URL = "http://api.giphy.com/v1/gifs/search?";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
// let term ="q=hilarious&"
let searchTerm =''
const searchForm = document.querySelector('#searchForm');
const searchBox = document.querySelector("input[name='searchBox']");
const searchButton = document.querySelector("#btn_search");
const imgDisplay=document.querySelector('#gif')
const results=document.querySelector('#results')

searchForm.addEventListener("submit", function (e) {
  e.preventDefault();
   searchTerm = searchBox.value;
    getGiphy(searchTerm);


 });

async function getGiphy(searchTerm){
  let url=`${BASE_URL}q=${searchTerm}&api_key=${API_KEY}`;
  console.log(url)
  let res = await axios.get(`${url}`)
  // console.log(res)
  let imageURL=res.data.data[0].images.original.url
  // console.log('image',imageURL)
  imgDisplay.src=imageURL
  results.append(imgDisplay)
  searchTerm=''
  return res
}



// // let  searchTerm=''

// // searchForm.addEventListener("submit", function (e) {
// //   e.preventDefault();
// //   searchTerm = searchBox.value;
// //   console.log(searchTerm);

// //   getGiphy(searchTerm);

// // });


// async function getGiphy(str) {

//   // let url = `"${BASE_URL}q=${str}&${API_KEY}"`;
//   // console.log('url', url);
//   // const res = await axios.get(url);
//   // console.log('results', res);

//     const res=await axios.get(`${BASE_URL}${str}${API_KEY}`)
//    const image =res.data.data[0].images.url
//    console.log(res)
//
//    imgDisplay.src=image
//    const results=document.querySelector('#results')
//    results.appendChild(imgDisplay)


// }






