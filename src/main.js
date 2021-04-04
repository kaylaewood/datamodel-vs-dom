// Create variables targetting the relevant DOM elements here 👇

var bookCover = document.querySelector(".cover-image");
var bookTitle = document.querySelector(".cover-title");
var bookTagline1 = document.querySelector(".tagline-1");
var bookTagline2 = document.querySelector(".tagline-2");
var randomCoverButton = document.querySelector(".random-cover-button");
var makeCoverButton = document.querySelector(".make-new-button");
var form = document.querySelector(".form-view");
var homeView = document.querySelector(".home-view");
var homeButton = document.querySelector(".home-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var saveCoverPage = document.querySelector(".saved-view");
var userCover = document.querySelector(".user-cover");
var userTitle = document.querySelector(".user-title");
var userDescriptor1 = document.querySelector(".user-desc1");
var userDescriptor2 = document.querySelector(".user-desc2");
var createNewBookButton = document.querySelector(".create-new-book-button");
var savedCoversSection = document.querySelector(".saved-covers-section");

// We've provided a few variables below

var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇

changeCover();

randomCoverButton.addEventListener("click", changeCover);
makeCoverButton.addEventListener("click", makeCoverView);
viewSavedButton.addEventListener("click", savedCoverView);
homeButton.addEventListener("click", homePageView);
createNewBookButton.addEventListener("click", function() {
  createNewBook();
  event.preventDefault();
});
saveCoverButton.addEventListener("click", addCurrentCover);
savedCoversSection.addEventListener("dblclick", function(e) {
  deleteSavedCover(e)
});

// Create your event handlers and other functions here 👇

function changeCover() {
  var newCover = covers[getRandomIndex(covers)];
  var newTitle = titles[getRandomIndex(titles)];
  var newDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var newDescriptor2 = descriptors[getRandomIndex(descriptors)];
  if (newDescriptor1 === newDescriptor2) {
    newDescriptor2 = descriptors[getRandomIndex(descriptors)];
  }
  bookCover.src = newCover;
  bookTitle.innerText = newTitle;
  bookTagline1.innerText = newDescriptor1;
  bookTagline2.innerText = newDescriptor2;
  currentCover = new Cover(newCover, newTitle, newDescriptor1, newDescriptor2);
  return currentCover;
}

function makeCoverView(){
 homeButton.classList.remove("hidden");
 form.classList.remove("hidden");
 saveCoverButton.classList.add("hidden");
 randomCoverButton.classList.add("hidden");
 homeView.classList.add("hidden");
 saveCoverPage.classList.add("hidden");
}

function savedCoverView() {
  homeButton.classList.remove("hidden");
  saveCoverPage.classList.remove("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeView.classList.add("hidden");
  form.classList.add("hidden");
  createMiniCover();
}

function homePageView() {
  saveCoverButton.classList.remove("hidden");
  randomCoverButton.classList.remove("hidden");
  homeView.classList.remove("hidden");
  homeButton.classList.add("hidden");
  saveCoverPage.classList.add("hidden");
  form.classList.add("hidden");
}

function createNewBook() {
  var inputCover = userCover.value;
  var inputTitle = userTitle.value;
  var inputDesc1 = userDescriptor1.value;
  var inputDesc2 = userDescriptor2.value;
  covers.push(inputCover);
  titles.push(inputTitle);
  descriptors.push(inputDesc1, inputDesc2);
  currentCover = new Cover(inputCover, inputTitle, inputDesc1, inputDesc2);
  bookCover.src = inputCover;
  bookTitle.innerText = inputTitle;
  bookTagline1.innerText = inputDesc1;
  bookTagline2.innerText = inputDesc2;
  homePageView();
  return currentCover;
}

function addCurrentCover() {
  if (savedCovers.includes(currentCover)) {
    return;
  } else {
    savedCovers.push(currentCover);
  }
}

function createMiniCover() {
  savedCoversSection.innerHTML = ``;
  for (var i = 0; i < savedCovers.length; i++) {
    var miniCovers =`<section class="mini-cover" id="${i}">
      <img id="${i}" class="cover-image" src=${savedCovers[i].cover}>
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>`
    savedCoversSection.insertAdjacentHTML("afterbegin", miniCovers);
  }
}

function deleteSavedCover(e) {
  savedCovers.splice(e.target.id, 1);
  createMiniCover();
}

// We've provided one function to get you started

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
