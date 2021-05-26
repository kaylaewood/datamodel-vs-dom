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

var savedCovers = [];
var currentCover;

// PART 1: DISPLAYING ONE RANDOM COVER

window.addEventListener("load", changeCover);

randomCoverButton.addEventListener("click", changeCover);

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
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// 1. What represents the data model in this section of the code?
// 2. Currently, are we updating the data model when a random poster is created?
// 3. Currently, are we updating the DOM using the data model?
// 4. What changes should we make?










// PART 2: CREATING NEW COVER

createNewBookButton.addEventListener("click", createNewBook);

function createNewBook() {
  event.preventDefault();

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

  displayHomePage();
}

// 1. What represents the data model in this section of the code?
// 2. Currently, are we updating the data model when a poster is created?
// 3. Currently, are we updating the DOM using the data model?
// 4. What changes should we make? (HINT: Is there an existing function we can reuse here?)










// PART 3: SAVING COVERS

saveCoverButton.addEventListener("click", saveCurrentCover);

function saveCurrentCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);

    savedCoversSection.innerHTML +=
    `
    <section class="mini-cover" id="${savedCovers.length}">
      <img class="cover-image" src=${currentCover.cover}>
      <h2 class="cover-title">${currentCover.title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${currentCover.tagline1}</span> and <span class="tagline-2">${currentCover.tagline2}</span></h3>
    </section>
    `
  }
}

// 1. What represents the data model in this section of the code?
// 2. Currently, are we updating the data model when a poster is saved?
// 3. Currently, are we updating the DOM using the data model?
// 4. What changes should we make?









// PART 4: DELETING COVERS

savedCoversSection.addEventListener("dblclick", function(e) {
  deleteSavedCover(e);
});

function deleteSavedCover(e) {
  e.target.closest('section').remove();
}

// 1. What represents the data model in this section of the code?
// 2. Currently, are we updating the data model when a poster is deleted?
// 3. Currently, are we updating the DOM using the data model?
// 4. What changes should we make? (HINT: Is there an existing function we can reuse here?)










// CHANGING VIEWS (not concerned about this in this lesson!)

viewSavedButton.addEventListener("click", displaySavedCovers);

makeCoverButton.addEventListener("click", displayForm);

homeButton.addEventListener("click", displayHomePage);

function displaySavedCovers() {
  homeButton.classList.remove("hidden");
  saveCoverPage.classList.remove("hidden");
  randomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homeView.classList.add("hidden");
  form.classList.add("hidden");
}

function displayForm(){
 homeButton.classList.remove("hidden");
 form.classList.remove("hidden");
 saveCoverButton.classList.add("hidden");
 randomCoverButton.classList.add("hidden");
 homeView.classList.add("hidden");
 saveCoverPage.classList.add("hidden");
}

function displayHomePage() {
  saveCoverButton.classList.remove("hidden");
  randomCoverButton.classList.remove("hidden");
  homeView.classList.remove("hidden");
  homeButton.classList.add("hidden");
  saveCoverPage.classList.add("hidden");
  form.classList.add("hidden");
}
