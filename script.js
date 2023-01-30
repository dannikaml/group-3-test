var searchBtnEl = document.querySelector('#searchBtn');
var searchBoxEl = document.querySelector("#searchbox");
//var searchValue = searchbox.innerText.trim()
//var bookSearchApi = `https://openlibrary.org/search.json?q=${searchValue}`;
var bookshelfSave = [];
var booksContainer = document.querySelector("#books");



var searchResult = document.querySelector('#bookResults');
var bookList = document.querySelector('#bookList');
console.log(searchBoxEl)



function generateSearch() {
    var searchValue = searchBoxEl.value.trim()
    var bookSearchURL = `https://openlibrary.org/search.json?q=${searchValue}`;
    console.log(searchValue)
    var ulElement = document.createElement("ul")

    fetch(bookSearchURL)
    .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(searchValue);
    console.log(data);
    
    for (let index = 0; index < 5; index++) {
        const element = data[index];
        console.log(element)
        var liElement = document.createElement("li")
        var bookElement = document.createElement("p")
        liElement.textContent = `search ${element.search}, url: ${element.url}`
        ulElement.append(liElement)
      }
      booksContainer.append(ulElement)
    });
}
searchBtnEl.addEventListener('click', generateSearch);




var reviewAuthUrl = `https://api.nytimes.com/svc/books/v3/reviews.json?author=${searchValue}&api-key=17ZICVyJ3VHMaorPzVeZgh3dxQ3c30aK`
var reviewTitleUrl = `https://api.nytimes.com/svc/books/v3/reviews.json?title=${searchValue}&api-key=17ZICVyJ3VHMaorPzVeZgh3dxQ3c30aK`