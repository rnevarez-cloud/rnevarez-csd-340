var movieList = [
    "Challengers",
    "Mickey 17",
    "Poor Things",
    "Wicked",
    "I Saw the TV Glow",
    "Problemista",
    "Beetlejuice Beetlejuice",
    "Nosferatu",
    "The Monkey",
    "Slotherhouse"
]

var movieListStatus = "descending";

function displayList() {
    const listElement = document.getElementById("topMovies");
    listElement.innerHTML = "";
    for (var i = 0; i < movieList.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${movieList[i]}`;
        listElement.appendChild(li);
    }
}

function sortTopToBottom() {
    if(movieListStatus === "descending") {
        return;
    }
    movieList.reverse();
    const listElement = document.getElementById("topMovies");
    movieListStatus = "descending";
    listElement.removeAttribute("reversed");
    displayList();
}

function sortBottomToTop() {
    if(movieListStatus === "ascending") {
        return;
    }

    movieList.reverse();
    const listElement = document.getElementById("topMovies");
    movieListStatus = "ascending";
    listElement.setAttribute("reversed", "");
    displayList();
}