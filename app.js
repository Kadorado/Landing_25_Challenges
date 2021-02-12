// Title effect and message not found

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
let textTitle = document.getElementById("title");
let Gallery = document.getElementsByClassName("gallery_item");
const reto = document.getElementById("reto");

const title = "25 challenges in 25 days";
const msgNotFound = "¡¡¡ Challenge no found !!!";
let idx = 1;

// select search bar
const searchBar = document.getElementById("input");

// Search : ChallengeList

const challengeList = document.getElementById("grid");
const challenges = [
  {
    img: "./img/challenge1.png",
    name: "Expanding Cards",
    url: "https://reto1-eight.vercel.app/",
  },
  {
    img: "./img/challenge2.png",
    name: "Progress Steps",
    url: "https://reto2-ten.vercel.app/",
  },
  {
    img: "./img/challenge3.png",
    name: "Rotating Navigation",
    url: "https://reto3-ten.vercel.app/",
  },
  { img: "./img/challenge4.png", name: "Hidden Search", url: "" },
  { img: "./img/challenge5.png", name: "Blurry Loading", url: "" },
  { img: "./img/challenge6.png", name: "Drag N Drop", url: "" },
  { img: "./img/challenge7.png", name: "AutoText", url: "" },
  { img: "./img/challenge8.png", name: "HoverBoard", url: "" },
  { img: "./img/challenge9.png", name: "Scroll Animation", url: "" },
  { img: "./img/challenge10.png", name: "Form input wave", url: "" },
  { img: "./img/challenge11.png", name: "Dad Jokes", url: "" },
  { img: "./img/challenge12.png", name: "Sound Board", url: "" },
  { img: "./img/challenge13.png", name: "Live User Filter", url: "" },
  { img: "./img/challenge14.png", name: "Button Ripple Effect", url: "" },
  { img: "./img/challenge15.png", name: "Background Slider", url: "" },
  { img: "./img/challenge16.png", name: "Kinetic Loader", url: "" },
  { img: "./img/challenge17.png", name: "Netflix Navigation", url: "" },
  { img: "./img/challenge18.png", name: "Testimonial Box Switcher", url: "" },
  { img: "./img/challenge19.png", name: "Pokedex", url: "" },
  { img: "./img/challenge20.png", name: "Doble Click Heart", url: "" },
  { img: "./img/challenge21.png", name: "Event Keycodes", url: "" },
  { img: "./img/challenge22.png", name: "Mobile Nav Navigation", url: "" },
  { img: "./img/challenge23.png", name: "Drink Water", url: "" },
  { img: "./img/challenge24.png", name: "Feedback UI Design", url: "" },
  { img: "./img/challenge25.png", name: "Github Profile", url: "" },
];

function writeTitle() {
  if (idx > title.length) {
    idx = 1;
  }

  textTitle.innerHTML = title.slice(0, idx);
  idx++;
}

setInterval(writeTitle, 150);

// Search input

searchBar.addEventListener("keyup", (e) => {
  const searchstring = e.target.value;
  const filteredChallenges = challenges.filter((challenge) => {
    return challenge.name
      .toLocaleLowerCase()
      .includes(searchstring.toLocaleLowerCase());
  });

  filteredChallenges.length == 0
    ? displayNotfound()
    : displayChallenges(filteredChallenges);
});

const displayChallenges = (challenges) => {
  const htmlString = challenges
    .map((challenge) => {
      return `<div class="gallery_item">
      <a href="${challenge.url}" target="_blank" ><img src="${challenge.img}" alt="challenge" /></a>
                <h2 class="gallery_title">${challenge.name}</h2>
              </div>
            `;
    })
    .join("");
  challengeList.innerHTML = htmlString;
};

const displayNotfound = () => {
  const htmlString = `<div class="Notfound" ><h2 >${msgNotFound}</h2>
  <img src="./img/notFound.svg" height="200px" alt=""/img> </div>`;
  challengeList.innerHTML = htmlString;
};

displayChallenges(challenges);
