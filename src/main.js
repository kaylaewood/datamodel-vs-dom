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

window.addEventListener("load", changeRandomCover);

randomCoverButton.addEventListener("click", changeRandomCover);

function changeRandomCover() {
  makeRandomCover();
  displayCover();
}

function makeRandomCover() {
  var newCover = covers[getRandomIndex(covers)];
  var newTitle = titles[getRandomIndex(titles)];
  var newDescriptor1 = descriptors[getRandomIndex(descriptors)];
  var newDescriptor2 = descriptors[getRandomIndex(descriptors)];
  if (newDescriptor1 === newDescriptor2) {
    newDescriptor2 = descriptors[getRandomIndex(descriptors)];
  }

  currentCover = new Cover(newCover, newTitle, newDescriptor1, newDescriptor2);
}

function displayCover() {
  bookCover.src = currentCover.cover;
  bookTitle.innerText = currentCover.title;
  bookTagline1.innerText = currentCover.tagline1;
  bookTagline2.innerText = currentCover.tagline2;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// 1. What represents the data model in this section of the code?
    // the data arrays: covers, titles, descriptors (accessing)
    // currentCover (updating)
// 2. Currently, are we updating the data model when a random poster is created?
    // YES - line 41
// 3. Currently, are we updating the DOM using the data model?
    // YES - using currentCover's properties to render DOM elements
// 4. What changes should we make?










// PART 2: CREATING NEW COVER

createNewBookButton.addEventListener("click", createNewBook);

function createNewBook() {
  event.preventDefault();

  //updating data model:
  var inputCover = userCover.value;
  var inputTitle = userTitle.value;
  var inputDesc1 = userDescriptor1.value;
  var inputDesc2 = userDescriptor2.value;

  covers.push(inputCover);
  titles.push(inputTitle);
  descriptors.push(inputDesc1, inputDesc2);

  currentCover = new Cover(inputCover, inputTitle, inputDesc1, inputDesc2);

  // updating DOM:
  displayCover();
  displayHomePage();
}

// 1. What represents the data model in this section of the code?
  // covers, titles, descriptors
  // currentCover
// 2. Currently, are we updating the data model when a poster is created?
// 3. Currently, are we updating the DOM using the data model?
// 4. What changes should we make? (HINT: Is there an existing function we can reuse here?)










// PART 3: SAVING COVERS

saveCoverButton.addEventListener("click", saveCurrentCover);

function saveCurrentCover() {
  if (!savedCovers.includes(currentCover)) {
    //updating data model:
    savedCovers.push(currentCover);
  }

  displaySavedCovers();
}

function displaySavedCovers() {
  //updating the DOM:
  savedCoversSection.innerHTML = '';

  for (var i = 0; i < savedCovers.length; i++) {
    savedCoversSection.innerHTML +=
    `
    <section class="mini-cover" id="${savedCovers[i].id}">
      <img class="cover-image" src=${savedCovers[i].cover}>
      <h2 class="cover-title">${savedCovers[i].title}</h2>
      <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
    </section>
    `
  }
}

// 1. What represents the data model in this section of the code?
    // savedCovers (updating)
    // currentCover (accessing)
// 2. Currently, are we updating the data model when a poster is saved?
  // YES - line 121
// 3. Currently, are we updating the DOM using the data model?
// 4. What changes should we make?









// PART 4: DELETING COVERS

savedCoversSection.addEventListener("dblclick", function(event) {
  deleteSavedCover(event);
});

function deleteSavedCover(e) {
  // update data model:
  console.log('lansmlfmas');
  for (var i = 0; i < savedCovers.length; i++) {
    if (parseInt(e.target.closest('section').id) === savedCovers[i].id) {
      savedCovers.splice(i, 1);
    }
  }

  // update DOM:
  displaySavedCovers();
}

// 1. What represents the data model in this section of the code?
// 2. Currently, are we updating the data model when a poster is deleted?
// 3. Currently, are we updating the DOM using the data model?
// 4. What changes should we make? (HINT: Is there an existing function we can reuse here?)










// CHANGING VIEWS (not concerned about this in this lesson!)

viewSavedButton.addEventListener("click", displaySavedView);

makeCoverButton.addEventListener("click", displayForm);

homeButton.addEventListener("click", displayHomePage);

function displaySavedView() {
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
