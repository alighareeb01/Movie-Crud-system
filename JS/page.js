let body = document.querySelector(".body");

//HTML Input user

/****************container and row****************/
let container = document.createElement("div");
let row = document.createElement("div");

container.classList.add("container", "form-color");
container.appendChild(row);
row.classList.add("row", "g-1");

/*************row elements************/
let header = document.createElement("div");
let movieName = document.createElement("div");
let directorName = document.createElement("div");
let category = document.createElement("div");
let year = document.createElement("div");
let imageUpload = document.createElement("div");
let addMovieButton = document.createElement("div");
let updateMovieButton = document.createElement("div");
/***************Append Elements to row**************/
row.appendChild(header);
row.appendChild(movieName);
row.appendChild(directorName);
row.appendChild(category);
row.appendChild(year);
row.appendChild(imageUpload);
row.appendChild(addMovieButton);
row.appendChild(updateMovieButton);

/***************Add classes to elements**********/
movieName.classList.add("movieName", "col-12", "col-md-3");
directorName.classList.add("DirectorName", "col-12", "col-md-3");
category.classList.add("Category", "col-12", "col-md-3");
year.classList.add("Year", "col-12", "col-md-3");
imageUpload.classList.add("imageUpload", "mt-4");
addMovieButton.classList.add(
  "addMovieButton",
  "mt-5",
  "col-12",
  "d-flex",
  "justify-content-center",
  "addButton",
);
updateMovieButton.classList.add(
  "updateMovieButton",
  "mt-5",
  "col-12",
  "d-flex",
  "justify-content-center",
  "upadteButton",
  "d-none",
);

/*************************Wrong Input Messages*******************************************/
//movie name
let erroeMovieName = document.createElement("p");
erroeMovieName.textContent =
  "allowed letters, numbers, space, and common punctuation with max length of 100 chs";
erroeMovieName.classList.add("text-danger", "error-name", "d-none");
//director name
let erroeDirectorName = document.createElement("p");
erroeDirectorName.textContent =
  "allowed letters, spaces, hyphens, apostrophes with at least 2 characters, max 60";
erroeDirectorName.classList.add("text-danger", "error-director", "d-none");
//category name
let erroeCategory = document.createElement("p");
erroeCategory.textContent =
  "allowed Letters only, spaces with at least 2 characters, max 30";
erroeCategory.classList.add("text-danger", "error-category", "d-none");
//yaar 
let erroeYear = document.createElement("p");
erroeYear.textContent ="must be within 1900 to 2099 with at least 4 digits";
erroeYear.classList.add("text-danger", "error-year", "d-none");
//image
let erroeImage = document.createElement("p");
erroeImage.textContent= "You must upload a photo";
erroeImage.classList.add("text-danger", "error-image", "d-none");
//search
let erroeSearch = document.createElement("p");
erroeSearch.textContent = "Wrong search inputs";
erroeSearch.classList.add("text-danger", "error-search", "d-none");
/************************************************************************************/


/***************Add Content to each element***********/
//header     (header)
let headerH1 = document.createElement("h1");
headerH1.classList.add("text-primary", "text-center");
headerH1.textContent = "Movie Crud System";
header.appendChild(headerH1);

//movie name  (movieName)
let movieNameLabel = document.createElement("label");
let movieNameInput = document.createElement("input");

movieNameLabel.setAttribute("for", "movieName");
movieNameInput.setAttribute("type", "text");
movieNameInput.setAttribute("id", "movieName");
movieNameInput.setAttribute("placeholder", "Movie Name");
movieNameInput.classList.add("border", "border-0", "form-control");

movieName.appendChild(movieNameLabel);
movieName.appendChild(movieNameInput);
movieName.appendChild(erroeMovieName);

//Director name    (directorName)
let DirectorNameLabel = document.createElement("label");
let DirectorNameInput = document.createElement("input");

DirectorNameLabel.setAttribute("for", "DirectorName");
DirectorNameInput.setAttribute("type", "text");
DirectorNameInput.setAttribute("id", "DirectorName");
DirectorNameInput.setAttribute("placeholder", "Director Name");
DirectorNameInput.classList.add("border", "border-0", "form-control");

directorName.appendChild(DirectorNameLabel);
directorName.appendChild(DirectorNameInput);
directorName.appendChild(erroeDirectorName);


//Category   (category)
let CategoryNameLabel = document.createElement("label");
let CategoryNameInput = document.createElement("input");

CategoryNameLabel.setAttribute("for", "Category");
CategoryNameInput.setAttribute("type", "text");
CategoryNameInput.setAttribute("id", "Category");
CategoryNameInput.setAttribute("placeholder", "Category");
CategoryNameInput.classList.add("border", "border-0", "form-control");

category.appendChild(CategoryNameLabel);
category.appendChild(CategoryNameInput);
category.appendChild(erroeCategory);

//year  (year)
let yearLabel = document.createElement("label");
let yearInput = document.createElement("input");

yearLabel.setAttribute("for", "Year");
yearInput.setAttribute("type", "text");
yearInput.setAttribute("id", "Year");
yearInput.setAttribute("placeholder", "Year");
yearInput.classList.add("border", "border-0", "form-control");

year.appendChild(yearLabel);
year.appendChild(yearInput);
year.appendChild(erroeYear);

//image   (imageUpload)
let imageUploadDiv = document.createElement("div");
let imageLabel = document.createElement("label");
let imageInput = document.createElement("input");
imageUploadDiv.classList.add("mb-3");
imageLabel.setAttribute("for", "formFile");
imageLabel.classList.add("form-label", "text-white");
imageLabel.textContent = "upload your image";
imageInput.classList.add("form-control", "imageInput");
imageInput.setAttribute("type", "file");
imageInput.setAttribute("id", "formFile");

imageUploadDiv.appendChild(imageLabel);
imageUploadDiv.appendChild(imageInput);
imageUpload.appendChild(imageUploadDiv);
imageUpload.appendChild(erroeImage);

//button    (addMovieButton)
let button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary", "btn-lg", "w-50", "p-2");
button.textContent = "Add Movie";

addMovieButton.appendChild(button);
//button2    (addMovieButton)
let button2 = document.createElement("button");
button2.setAttribute("type", "button");
button2.classList.add("btn", "btn-primary", "btn-lg", "w-50", "p-2");
button2.textContent = "Update Movie";

updateMovieButton.appendChild(button2);

body.appendChild(container);

/****************Search Inputs***************/
/****************container3 and row3****************/

let container3 = document.createElement("div");
let row3 = document.createElement("div");

container3.classList.add("container", "form-color");

row3.classList.add("row", "g-1", "rowThree");

/******************row elements*********/
let searchInput = document.createElement("div");
let searchNameButton = document.createElement("div");
let searchDirectorButton = document.createElement("div");
let searchCategoryButton = document.createElement("div");
let searchYearButton = document.createElement("div");

let saerchDiv = document.createElement("div");

/********************Append elements to row********/

//
row3.appendChild(searchNameButton);
row3.appendChild(searchDirectorButton);
row3.appendChild(searchCategoryButton);
row3.appendChild(searchYearButton);

/***************Add classes to elements**********/
// row3.classList.add(" justify-content-center");
// row3FirstRow.classList.add("d-flex", "justify-content-center");
// row3SecondRow.classList.add("d-flex", "justify-content-center");

searchInput.classList.add("searchInput", "mb-5");
searchNameButton.classList.add(
  "col-6",
  "col-md-3",
  "d-flex",
  "justify-content-center",
);
searchDirectorButton.classList.add(
  "col-6",
  "col-md-3",
  "d-flex",
  "justify-content-center",
);
searchCategoryButton.classList.add(
  "col-6",
  "col-md-3",
  "d-flex",
  "justify-content-center",
);
searchYearButton.classList.add(
  "col-6",
  "col-md-3",
  "d-flex",
  "justify-content-center",
);

/***************Add Content to each element***********/

//movie name  (movieName)
let searchInputLabel = document.createElement("label");
let searchInputInput = document.createElement("input");

searchInputLabel.setAttribute("for", "searchInput");
searchInputInput.setAttribute("type", "text");
searchInputInput.setAttribute("id", "searchInput");
searchInputInput.setAttribute("placeholder", "Saerch ...");
searchInputInput.classList.add("border", "border-0", "form-control");

searchInput.appendChild(searchInputLabel);
searchInput.appendChild(searchInputInput);
searchInput.appendChild(erroeSearch);

//button    (searchNameButton)
let button3 = document.createElement("button");
button3.setAttribute("type", "button");
button3.classList.add(
  "search-movie",
  "btn",
  "btn-primary",
  "btn-lg",
  "w-50",
  "p-2",
);
button3.textContent = "Search by movie";

searchNameButton.appendChild(button3);
//button    (searchDirectorButton)
let button4 = document.createElement("button");
button4.setAttribute("type", "button");
button4.classList.add(
  "search-director",
  "btn",
  "btn-primary",
  "btn-lg",
  "w-50",
  "p-2",
);
button4.textContent = "search by Director";

searchDirectorButton.appendChild(button4);
//button    (searchCategoryButton)
let button5 = document.createElement("button");
button5.setAttribute("type", "button");
button5.classList.add(
  "search-category",
  "btn",
  "btn-primary",
  "btn-lg",
  "w-50",
  "p-2",
);
button5.textContent = "search by Category";

searchCategoryButton.appendChild(button5);
//button    (searchYearButton)
let button6 = document.createElement("button");
button6.setAttribute("type", "button");
button6.classList.add(
  "search-year",
  "btn",
  "btn-primary",
  "btn-lg",
  "w-50",
  "p-2",
);
button6.textContent = "Search by year";

searchYearButton.appendChild(button6);

saerchDiv.appendChild(searchInput);
container3.appendChild(saerchDiv);
container3.appendChild(row3);
body.appendChild(container3);

//HTML Display Inputs

/****************container2 and row2****************/
let container2 = document.createElement("div");
let row2 = document.createElement("div");

let headrDiv = document.createElement("div");
headrDiv.classList.add("header-div");
let headerH2 = document.createElement("div");
headerH2.classList.add("text-primary", "text-center", "headrH2");
headerH2.textContent = "Movies List";
headerH2.style.fontSize = "32px";
headrDiv.appendChild(headerH2);
container2.appendChild(headrDiv);

container2.classList.add("container", "mt-5", "containerTwo");
container2.style.backgroundColor = "rgb(30, 30, 30)";

let buttonDiv = document.createElement("div");
// buttonDiv.classList.add("d-flex", "justify-content-end", "mb-3");
let buttonAll = document.createElement("button");
// buttonDiv.classList.add("button-all");
buttonAll.setAttribute("type", "button");
buttonAll.classList.add("show-all", "btn", "btn-primary", "btn-sm");

buttonAll.textContent = "show all";

buttonDiv.appendChild(buttonAll);

container2.appendChild(buttonDiv);

container2.appendChild(row2);
row2.classList.add("row", "g-4", "rowTwo");

body.appendChild(container2);