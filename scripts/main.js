const search = document.getElementById("search");
const apiLink = `https://api.unsplash.com/search/photos/`;
const id = `yXosKodc6mXgrNe8stN7vlRpIcg3KSARQ9V3UispyoU`;

search.addEventListener("click", () => {
  const searchTerm = document.querySelector(".search-term").value;
  getImages(searchTerm);
});

function getImages(term) {
  let url = `${apiLink}?client_id=${id}&query=${term}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => console.log(data.results));
}
