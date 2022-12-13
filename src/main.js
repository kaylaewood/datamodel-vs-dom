var bookCover = document.querySelector(".cover-image");
var bookTitle = document.querySelector(".cover-title");
var bookTagline1 = document.querySelector(".tagline-1");
var bookTagline2 = document.querySelector(".tagline-2");
var homePage = document.querySelector(".home-view");
var viewHomePageButton = document.querySelector(".home-button");
var makeRandomCoverButton = document.querySelector(".random-cover-button");
var saveCoverButton = document.querySelector(".save-cover-button");
var savedCoversPage = document.querySelector(".saved-view");
var savedCoversContainer = document.querySelector(".saved-covers-section");
var viewSavedCoversButton = document.querySelector(".view-saved-button");


// PART 1: RENDERING COVERS ON MAIN PAGE

// Take a minute to look at the code below. Pay attention to:
  // - What is representing the Data Model?
  // - When/where are we updating the Data Model?
  // - When/where are we updating the DOM?
  // - Is the DOM update dependent on the Data Model?

var currentCover; // Data Model 

window.addEventListener("load", function() {
  makeRandomCover(); // Upating the Data Model
  renderCurrentCover(); // Updating the DOM
});

makeRandomCoverButton.addEventListener("click", function() {
  makeRandomCover(); // Upating the Data Model
  renderCurrentCover(); // Updating the DOM
});

function makeRandomCover() { // Updating the Data Model (currentCover)
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
}

function renderCurrentCover() { // Using the Data Model (currentCover) to update the DOM
  bookCover.src = currentCover.cover;
  bookTitle.innerText = currentCover.title;
  bookTagline1.innerText = currentCover.tagline1;
  bookTagline2.innerText = currentCover.tagline2;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// PART 1 STOPS HERE!








// PART 2: SAVING COVERS

// Add code below so that:
  // When the user clicks "Save Cover," the cover is saved in the Data Model AND the saved poster is added to the DOM (in the saved covers view)

// Notes:
  // The page view change is already functional (bottom of this file) - You do not need to do anything for that
  // Don't worry about duplicates - It's okay if you can save duplicate covers

var savedCovers = []; // Data Model

saveCoverButton.addEventListener("click", function() {
  saveCurrentCover(); // Update the Data Model
  renderSavedCovers(); // Update the DOM
});

function saveCurrentCover() {
  // add code here
}

function renderSavedCovers() {
  // add code here (some starter code provided below)
  
  // savedCoversContainer.innerHTML += 
  //   `<section class="mini-cover" id="${Date.now()}">
      // <img class="cover-image" src=${/* cover */}>
      // <h2 class="cover-title">${/* title */}</h2>
      // <h3 class="tagline">A tale of <span class="tagline-1">${/* tagline1 */}</span> and <span class="tagline-2">${/* tagline2 */}</span></h3>
  //   </section>`
}

// PART 2 STOPS HERE!








// PART 3: DELETING COVERS

// Add code below so that:
  // When the user double clicks the saved poster, the poster is deleted from the Data Model AND the deleted poster no longer appears on the page

savedCoversContainer.addEventListener("dblclick", function(event) {
  deleteSavedCover(event.target.id);
  // what else should we invoke here to update the DOM?
});

function deleteSavedCover(id) {
  // add code here to update the Data Model
}

// PART 3 STOPS HERE!










// CHANGING VIEWS (We are not concerned about this in this lesson!)

viewSavedCoversButton.addEventListener("click", displaySavedCovers);
viewHomePageButton.addEventListener("click", displayHomePage);

function displaySavedCovers() {
  viewHomePageButton.classList.remove("hidden");
  savedCoversPage.classList.remove("hidden");
  makeRandomCoverButton.classList.add("hidden");
  saveCoverButton.classList.add("hidden");
  homePage.classList.add("hidden");
  viewSavedCoversButton.classList.add("hidden");
}

function displayHomePage() {
  saveCoverButton.classList.remove("hidden");
  makeRandomCoverButton.classList.remove("hidden");
  homePage.classList.remove("hidden");
  viewHomePageButton.classList.add("hidden");
  savedCoversPage.classList.add("hidden");
  viewSavedCoversButton.classList.remove("hidden");
}
