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

/***************Append Elements to row**************/
row.appendChild(header);
row.appendChild(movieName);
row.appendChild(directorName);
row.appendChild(category);
row.appendChild(year);
row.appendChild(imageUpload);
row.appendChild(addMovieButton);

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

//button    (addMovieButton)
let button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary", "btn-lg", "w-50", "p-2");
button.textContent = "Add Movie";

addMovieButton.appendChild(button);

body.appendChild(container);

//HTML Display Inputs

/****************container2 and row2****************/
let container2 = document.createElement("div");
let row2 = document.createElement("div");

container2.classList.add("container", "mt-5");
container2.style.backgroundColor = "rgb(30, 30, 30)";
container2.appendChild(row2);
row2.classList.add("row", "g-4", "rowTwo");

body.appendChild(container2);
