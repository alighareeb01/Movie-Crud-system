let nameMain = document.querySelector("#movieName");
let directorMain = document.querySelector("#DirectorName");
let categoryMain = document.querySelector("#Category");
let yearMain = document.querySelector("#Year");
let imageInputMain = document.querySelector(".imageInput");
let addButtonMain = document.querySelector(".addMovieButton");
let updateButtonMain = document.querySelector(".updateMovieButton");

//global flags to validate inputs
// const inputFlag = 1;
// const searchFlagName = 2;

//get rowTwo for Display
let rowTwo = document.querySelector(".rowTwo");

let MovieList = [];

//cheack for local storage
const saved = localStorage.getItem("list");
if (saved) {
  MovieList = JSON.parse(saved);
  Display();
}

//Enter button submit
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addButtonMain.click();
  }
});

addButtonMain.addEventListener("click", (e) => {
  //validate input
  if (!valid()) {
    return;
  }

  //save image data to local storage
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    let userInput = {
      name: nameMain.value,
      director: directorMain.value,
      category: categoryMain.value,
      year: yearMain.value,
      // image: imageInputMain.value,
      image: reader.result,
    };

    MovieList.push(userInput);
    localStorage.setItem("list", JSON.stringify(MovieList));
    ClearInputs();
    nameMain.focus();
    Display();
  });

  reader.readAsDataURL(imageInputMain.files[0]);

  // console.log(list);
  imageInputMain.classList.remove("is-valid");
  yearMain.classList.remove("is-valid");
  categoryMain.classList.remove("is-valid");
  directorMain.classList.remove("is-valid");
  nameMain.classList.remove("is-valid");
  // console.log(MovieList);
});

function ClearInputs() {
  nameMain.value = "";
  directorMain.value = "";
  categoryMain.value = "";
  yearMain.value = "";
  imageInputMain.value = "";
}

// let obj = localStorage.getItem("list");
// let im = JSON.parse(obj);
// // console.log(im[0]["image"]);

// console.log(im[0]);

function Display() {
  rowTwo.innerHTML = "";
  for (let i = 0; i < MovieList.length; i++) {
    //get obj to display
    let obj = localStorage.getItem("list");
    let im = JSON.parse(obj);

    //imageURL

    // console.log(im[0]["image"]);

    // console.log(`${im[0].name}`);

    let item = document.createElement("div");
    item.classList.add(`item-${i}`, "col-3", "p-1", "g-4", "mb-2");
    rowTwo.append(item);

    let card = document.createElement("div");
    card.classList.add("h-100");
    item.appendChild(card);

    let itemImage = document.createElement("img");

    itemImage.setAttribute("src", `${im[i].image}`);
    itemImage.classList.add("card-img-top", "rounded");
    card.appendChild(itemImage);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "bg-secondary", "text-white");

    let cardH5 = document.createElement("h5");
    cardH5.classList.add("card-title");
    cardH5.textContent = `${im[i].name}`;
    cardBody.appendChild(cardH5);

    let pOne = document.createElement("p");
    pOne.classList.add("card-text");
    pOne.textContent = `Year : ${im[i].year}`;
    cardBody.appendChild(pOne);

    let pTwo = document.createElement("p");
    pTwo.textContent = `Director : ${im[i].director}`;
    cardBody.appendChild(pTwo);

    let pThtree = document.createElement("p");
    pThtree.textContent = `Category : ${im[i].category}`;
    cardBody.appendChild(pThtree);

    let MovieButtons = document.createElement("div");
    MovieButtons.classList.add(
      "mt-2",
      "movie-buttons",
      "d-flex",
      "flex-wrap",
      "g-1",
      "justify-content-center",
    );
    let MovieButtonOne = document.createElement("div");
    MovieButtonOne.classList.add("movie-button-one");
    let MovieButtonTwo = document.createElement("div");
    MovieButtonTwo.classList.add("movie-button-two");

    let cardUpdate = document.createElement("button");

    cardUpdate.setAttribute("type", "button");
    cardUpdate.classList.add(
      `btn-${i}`,
      "udpate-button",
      "btn",
      "btn-primary",
      "btn-sm",
      "m-1",
    );
    //to get thtat index later in del and upaadete
    cardUpdate.setAttribute("item-index", `${i}`);
    cardUpdate.textContent = "Update";
    cardBody.appendChild(cardUpdate);

    let cardRemove = document.createElement("button");

    cardRemove.setAttribute("type", "button");
    cardRemove.classList.add(
      `btn-${i}`,
      "remove-button",
      "btn",
      "btn-primary",
      "btn-sm",
      "m-1",
    );
    //to get thtat index later in del and upaadete
    cardRemove.setAttribute("item-index", `${i}`);
    cardRemove.textContent = "Remove";

    MovieButtons.appendChild(MovieButtonOne);
    MovieButtons.appendChild(MovieButtonTwo);
    MovieButtonOne.appendChild(cardUpdate);
    MovieButtonTwo.appendChild(cardRemove);
    cardBody.appendChild(MovieButtons);

    card.appendChild(cardBody);

    //append to row 2
  }
}

//update button
// let updatebuttons = document.querySelectorAll(".udpate-button");
// updatebuttons.forEach((btn, index) => {
//   // let obj = localStorage.getItem("list");
//   // let im = JSON.parse(obj);
//   rowTwo.addEventListener("click", (e) => {
//     // console.log("a");
//     // console.log(e.target);
//     // if (e.target.classList.contains(`btn-${index}`)) {
//     //   console.log(index);
//     // }
//     if (e.target.classList.contains(`btn-${index}`)) {
//       // console.log(typeof MovieList);obj

//       MovieList.splice(index, 1);

//       localStorage.setItem("list", JSON.stringify(MovieList));
//       // console.log(im);
//     }
//     Display();
//   });
// });

/******Not good */
// rowTwo.addEventListener("click", () => {
//   let updatebuttons = document.querySelectorAll(".udpate-button");

//   updatebuttons.forEach((btn, index) => {
//     btn.addEventListener("click", function () {
//       MovieList.splice(index, 1);
//       localStorage.setItem("list", JSON.stringify(MovieList));
//       Display();
//     });
//   });
// });

/******Better way */
//remove btn
rowTwo.addEventListener("click", (e) => {

  if (e.target.classList.contains("remove-button")) {
      Swal.fire({
   title: "Are you sure?",
   text: "You won't be able to revert this!",
   icon: "warning",
   showCancelButton: true,
   confirmButtonColor: "#3085d6",
   cancelButtonColor: "#d33",
   confirmButtonText: "Yes, delete it!",
      }).then(() => {
   let index = e.target.getAttribute("item-index");
     console.log(`element removed num ${index}`);
     MovieList.splice(index, 1);
     localStorage.setItem("list", JSON.stringify(MovieList));
     Display();
 })
     
   }
});
//update btn
//to use in the update
let currentindx = null;
rowTwo.addEventListener("click", (e) => {
  if (e.target.classList.contains("udpate-button")) {
    // console.log("a");

    let index = e.target.getAttribute("item-index");
    currentindx = index;
    console.log(`element updated num ${index}`);
    //get data
    let N = MovieList[index].name;
    let D = MovieList[index].director;
    let C = MovieList[index].category;
    let Y = MovieList[index].year;
    nameMain.value = N;
    directorMain.value = D;
    categoryMain.value = C;
    yearMain.value = Y;
    addButtonMain.classList.add("d-none");
    updateButtonMain.classList.remove("d-none");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

updateButtonMain.addEventListener("click", (e) => {
  //save image data to local storage
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    let userInput = {
      name: nameMain.value,
      director: directorMain.value,
      category: categoryMain.value,
      year: yearMain.value,
      // image: imageInputMain.value,
      image: reader.result,
    };
    if (
      userInput.name.trim() === "" ||
      userInput.director.trim() === "" ||
      userInput.category.trim() === "" ||
      userInput.year.trim() === "" ||
      userInput.image === ""
    ) {
      return;
    }
    MovieList.splice(currentindx, 1, userInput);
    localStorage.setItem("list", JSON.stringify(MovieList));
    ClearInputs();
    nameMain.focus();
    Display();
  });

  reader.readAsDataURL(imageInputMain.files[0]);
  addButtonMain.classList.remove("d-none");
  updateButtonMain.classList.add("d-none");
  // console.log(list);

  // console.log(MovieList);
});

//Search
let searchInputMain = document.getElementById("searchInput");
let SearchByMovieButton = document.querySelector(".search-movie");
let SearchByDirectorButton = document.querySelector(".search-director");
let SearchByCategoryButton = document.querySelector(".search-category");
let SearchByYearButton = document.querySelector(".search-year");

const errorSearch = document.querySelector(".error-search");

let rowThree = document.querySelector(".rowThree");

rowThree.addEventListener("click", (e) => {
  if (searchInputMain.value === "") {
    errorSearch.classList.remove("d-none");
    return;
  } else {
    errorSearch.classList.add("d-none");
  }
  let searchInput = searchInputMain.value.trim().toLowerCase();
  const saved = JSON.parse(localStorage.getItem("list"));
  let newList = [];

  if (e.target.classList.contains("search-movie")) {
    console.log("movie");
    for (let i = 0; i < saved.length; i++) {
      if (saved[i].name.toLowerCase().includes(searchInput)) {
        newList.push(saved[i]);
      }
    }
  }
  if (e.target.classList.contains("search-director")) {
    console.log("direcotr");
    for (let i = 0; i < saved.length; i++) {
      if (saved[i].director.toLowerCase().includes(searchInput)) {
        newList.push(saved[i]);
      }
    }
  }
  if (e.target.classList.contains("search-category")) {
    console.log("category");
    for (let i = 0; i < saved.length; i++) {
      if (saved[i].category.toLowerCase().includes(searchInput)) {
        newList.push(saved[i]);
      }
    }
  }
  if (e.target.classList.contains("search-year")) {
    console.log("year");
    for (let i = 0; i < saved.length; i++) {
      if (saved[i].year.toLowerCase().includes(searchInput)) {
        newList.push(saved[i]);
      }
    }
  }

  searchInputMain.value = "";
  rowTwo.innerHTML = "";
  for (let i = 0; i < newList.length; i++) {
    let item = document.createElement("div");
    item.classList.add(`item-${i}`, "col-3", "p-1", "g-4", "mb-2");
    rowTwo.append(item);

    let card = document.createElement("div");
    card.classList.add("h-100");
    item.appendChild(card);

    let itemImage = document.createElement("img");
    itemImage.setAttribute("src", newList[i].image);
    itemImage.classList.add("card-img-top", "rounded");
    card.appendChild(itemImage);

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body", "bg-secondary", "text-white");

    let cardH5 = document.createElement("h5");
    cardH5.classList.add("card-title");
    cardH5.textContent = newList[i].name;
    cardBody.appendChild(cardH5);

    let pOne = document.createElement("p");
    pOne.classList.add("card-text");
    pOne.textContent = newList[i].year;
    cardBody.appendChild(pOne);

    let pTwo = document.createElement("p");
    pTwo.textContent = newList[i].director;
    cardBody.appendChild(pTwo);

    card.appendChild(cardBody);
  }
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

//show all elements

let showAll = document.querySelector(".show-all");

showAll.addEventListener("click", () => {
  Display();
  searchInputMain.classList.remove("is-invalid");
  searchInputMain.classList.remove("is-valid");
  errorSearch.classList.add("d-none");
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
});

// const imagepath = localStorage.getItem("list");
// let im = JSON.parse(imagepath);
// console.log(im[0].image);

//validating input

// variables
const errorName = document.querySelector(".error-name");
const errorDiretor = document.querySelector(".error-director");
const errorCAtegory = document.querySelector(".error-category");
const errorYear = document.querySelector(".error-year");
const errorImage = document.querySelector(".error-image");

function valid(vlaue) {
  //regex value

  const movieNameRegex = /^[a-zA-Z0-9\s:,.!'?\-&]{1,100}$/;
  directorRegex = /^[a-zA-Z\s'-]{2,60}$/;
  const categoryRegex = /^[a-zA-Z\s-]{2,30}$/;
  const yearRegex = /^(19|20)\d{2}$/;
  //checking for input

  let flagname = 0;
  let flagdirector = 0;
  let flagyear = 0;
  let flagcategory = 0;
  let flagimage = 0;
  if (movieNameRegex.test(nameMain.value.trim())) {
    nameMain.classList.remove("is-invalid");
    nameMain.classList.add("is-valid");
    errorName.classList.add("d-none");
    flagname = 1;
  } else {
    nameMain.classList.remove("is-valid");
    nameMain.classList.add("is-invalid");
    errorName.classList.remove("d-none");
  }
  if (directorRegex.test(directorMain.value.trim())) {
    directorMain.classList.remove("is-invalid");
    directorMain.classList.add("is-valid");
    errorDiretor.classList.add("d-none");
    flagdirector = 1;
  } else {
    directorMain.classList.remove("is-valid");
    directorMain.classList.add("is-invalid");
    errorDiretor.classList.remove("d-none");
  }
  if (categoryRegex.test(categoryMain.value.trim())) {
    categoryMain.classList.remove("is-invalid");
    categoryMain.classList.add("is-valid");
    errorCAtegory.classList.add("d-none");
    flagcategory = 1;
  } else {
    categoryMain.classList.remove("is-valid");
    categoryMain.classList.add("is-invalid");
    errorCAtegory.classList.remove("d-none");
  }
  if (yearRegex.test(yearMain.value.trim())) {
    yearMain.classList.remove("is-invalid");
    yearMain.classList.add("is-valid");
    errorYear.classList.add("d-none");
    flagyear = 1;
  } else {
    yearMain.classList.remove("is-valid");
    yearMain.classList.add("is-invalid");
    errorYear.classList.remove("d-none");
  }
  if (imageInputMain.files.length > 0) {
    imageInputMain.classList.remove("is-invalid");
    imageInputMain.classList.add("is-valid");
    errorImage.classList.add("d-none");
    flagimage = 1;
  } else {
    imageInputMain.classList.remove("is-valid");
    imageInputMain.classList.add("is-invalid");
    errorImage.classList.remove("d-none");
  }

  return flagname && flagdirector && flagyear && flagimage && flagcategory;

  // let seachFlag = 0;
  // //cheacking for seach

  // if (vlaue === 2) {
  //   if (movieNameRegex.test(searchInputMain.value.trim())) {
  //     // searchInputMain.classList.remove("is-invalid");
  //     // searchInputMain.classList.add("is-valid");
  //     errorSearch.classList.add("d-none");
  //     seachFlag = 1;
  //   } else {
  //     // searchInputMain.classList.remove("is-valid");
  //     // searchInputMain.classList.add("is-invalid");
  //     errorSearch.classList.remove("d-none");
  //   }
  //   if (directorRegex.test(searchInputMain.value.trim())) {
  //     // searchInputMain.classList.remove("is-invalid");
  //     // searchInputMain.classList.add("is-valid");
  //     errorSearch.classList.add("d-none");
  //     seachFlag = 1;
  //   } else {
  //     // searchInputMain.classList.remove("is-valid");
  //     // searchInputMain.classList.add("is-invalid");
  //     errorSearch.classList.remove("d-none");
  //   }
  //   if (categoryRegex.test(searchInputMain.value.trim())) {
  //     // searchInputMain.classList.remove("is-invalid");
  //     // searchInputMain.classList.add("is-valid");
  //     errorSearch.classList.add("d-none");
  //     seachFlag = 1;
  //   } else {
  //     // searchInputMain.classList.remove("is-valid");
  //     // searchInputMain.classList.add("is-invalid");
  //     errorSearch.classList.remove("d-none");
  //   }
  //   if (yearRegex.test(searchInputMain.value.trim())) {
  //     // searchInputMain.classList.remove("is-invalid");
  //     // searchInputMain.classList.add("is-valid");
  //     errorSearch.classList.add("d-none");
  //     seachFlag = 1;
  //   } else {
  //     // searchInputMain.classList.remove("is-valid");
  //     // searchInputMain.classList.add("is-invalid");
  //     errorSearch.classList.remove("d-none");
  //   }
  //   return seachFlag;
  // }
}
