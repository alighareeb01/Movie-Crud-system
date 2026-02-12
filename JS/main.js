let nameMain = document.querySelector("#movieName");
let directorMain = document.querySelector("#DirectorName");
let categoryMain = document.querySelector("#Category");
let yearMain = document.querySelector("#Year");
let imageInputMain = document.querySelector(".imageInput");
let addButtonMain = document.querySelector(".addMovieButton");

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
    MovieList.push(userInput);
    localStorage.setItem("list", JSON.stringify(MovieList));
    ClearInputs();
    nameMain.focus();
    Display();
  });

  reader.readAsDataURL(imageInputMain.files[0]);

  // console.log(list);

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
    item.classList.add(`item-${i + 1}`, "col-3", "p-1", "g-4", "mb-2");
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
    pOne.textContent = `${im[i].year}`;
    cardBody.appendChild(pOne);

    let pTwo = document.createElement("p");
    pTwo.textContent = `${im[i].director}`;
    cardBody.appendChild(pTwo);

    let cardLink = document.createElement("a");
    cardLink.setAttribute("href", "#");
    cardLink.classList.add("btn", "btn-primary", "btn-sm");
    cardLink.textContent = "Movie inforamtion";
    cardBody.appendChild(cardLink);

    card.appendChild(cardBody);

    //append to row 2
  }
}

// const imagepath = localStorage.getItem("list");
// let im = JSON.parse(imagepath);
// console.log(im[0].image);
