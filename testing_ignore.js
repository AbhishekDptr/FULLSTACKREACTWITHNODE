//write a funtion to retrive a blob of json from
///https://rallycoding.herokuapp.com/api/music_albums

//Traditional promise based approach to calling ajax calls in browser
function fetchAlbums() {
  fetch("https://rallycoding.herokuapp.com/api/music_albums")
    .then(res => res.json())
    .then(json => console.log(json));
}

fetchAlbums();

//Same code using new async await feature .
//Async await is syntactic sugar for easier coding it still works the same ways as above code

async function fetchAlbumsAsync() {
  const res = await fetch("https://rallycoding.herokuapp.com/api/music_albums");
  const jsonResult = await res.json();
  console.log(jsonResult);
}
fetchAlbumsAsync();