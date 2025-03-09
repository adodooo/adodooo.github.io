// Search and save the reference to the <img> element in a variable called myImage
const myImage = document.querySelector("img");

// Add a click event listener to myImage
myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});

// Search and save the reference to the <button> and <h1> elements in variables called myButton and myHeading
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// Define a function that sets a personalized welcome message
function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla is cool, " + myName;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.addEventListener("click", () => {
  setUserName();
});
