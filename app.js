// Title effect and message not found

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
let textTitle = document.getElementById("title");
let Gallery = document.getElementsByClassName("gallery_item");
const reto = document.getElementById("reto");

const title = "25 challenges in 25 days";
const msgNotFound = "¡¡¡ Challenge not found !!!";
let idx = 1;

// select search bar
const searchBar = document.getElementById("input");

// Search : ChallengeList

const challengeList = document.getElementById("grid");
const challenges = [
  {
    img: "./img/challenge1.png",
    name: "Expanding Cards",
    url: "https://reto1-qtq0ru6kt.vercel.app/",
  },
  {
    img: "./img/challenge2.png",
    name: "Progress Steps",
    url: "https://reto2-4l085lsj1.vercel.app/",
  },
  {
    img: "./img/challenge3.png",
    name: "Rotating Navigation",
    url: "https://reto3-tau.vercel.app/",
  },
  {
    img: "./img/challenge4.png",
    name: "Hidden Search",
    url: "https://reto4.vercel.app/",
  },
  {
    img: "./img/challenge5.png",
    name: "Blurry Loading",
    url: "https://reto5.vercel.app/",
  },
  {
    img: "./img/challenge6.png",
    name: "Drag N Drop",
    url: "https://reto6.vercel.app/",
  },
  {
    img: "./img/challenge7.png",
    name: "AutoText",
    url: "https://reto7.vercel.app/",
  },
  {
    img: "./img/challenge8.png",
    name: "HoverBoard",
    url: "https://reto8.vercel.app/",
  },
  {
    img: "./img/challenge9.png",
    name: "Scroll Animation",
    url: "https://reto9.vercel.app/",
  },
  {
    img: "./img/challenge10.png",
    name: "Form input wave",
    url: "https://reto10.vercel.app/",
  },
  {
    img: "./img/challenge11.png",
    name: "Dad Jokes",
    url: "https://reto11.vercel.app/",
  },
  {
    img: "./img/challenge12.png",
    name: "Sound Board",
    url: "https://reto12.vercel.app/",
  },
  {
    img: "./img/challenge13.png",
    name: "Live User Filter",
    url: "https://reto13.vercel.app/",
  },
  {
    img: "./img/challenge14.png",
    name: "Button Ripple Effect",
    url: "https://reto14-839jik3r9.vercel.app/",
  },
  {
    img: "./img/challenge15.png",
    name: "Background Slider",
    url: "https://reto15-cpco43a9q.vercel.app/",
  },
  {
    img: "./img/challenge16.png",
    name: "Kinetic Loader",
    url: "https://reto16-ll90bzdzu.vercel.app/",
  },
  {
    img: "./img/challenge17.png",
    name: "Netflix Navigation",
    url: "https://reto17-qvplwlj82.vercel.app/",
  },
  {
    img: "./img/challenge18.png",
    name: "Testimonial Box Switcher",
    url: "https://reto18.vercel.app/",
  },
  {
    img: "./img/challenge19.png",
    name: "Pokedex",
    url: "https://reto19.vercel.app/",
  },
  {
    img: "./img/challenge20.png",
    name: "Doble Click Heart",
    url: "https://reto20.vercel.app/",
  },
  {
    img: "./img/challenge21.png",
    name: "Event Keycodes",
    url: "https://reto21-puce.vercel.app/",
  },
  {
    img: "./img/challenge22.png",
    name: "Mobile Nav Navigation",
    url: "https://reto22.vercel.app/",
  },
  {
    img: "./img/challenge23.png",
    name: "Drink Water",
    url: "https://reto23.vercel.app/",
  },
  {
    img: "./img/challenge24.png",
    name: "Feedback UI Design",
    url: "https://reto24.vercel.app/",
  },
  {
    img: "./img/challenge25.png",
    name: "Github Profile",
    url: "https://reto25.vercel.app/",
  },
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
