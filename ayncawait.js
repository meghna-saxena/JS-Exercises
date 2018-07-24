function fetchAlbums() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.json())
    .then(json => console.log(json));
}

fetchAlbums();

//made async. req that returns a promise.
//To know that promise has resolved, we chain on .then
//.then() called if req is successful with the value returned from the async req

//fetch returns a promise
// - .then(res => res.json()) fetch resolves its promise with an object that represents the underlying request. You can get the real json response by calling '.json()' on it. This returns another promise
// - .then(json => console.log(json)) after getting the json, console log it