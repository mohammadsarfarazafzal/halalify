//alert("BISMILLAH");
var loader = document.getElementById("loader");
var main = document.getElementById("mainid");
var pauses = document.getElementById("pause");
var plays = document.getElementById("play");
var forwards = document.getElementById("forward");
var backwards = document.getElementById("backward");
pause.style.display = "none";
main.style.display = "none";
window.addEventListener("load", () => {
  loader.style.display = "none";
  main.style.display = "flex";
});

let nasheed = new Audio("assets/kun_anta.mp3");
let masterPlay = document.getElementById("masterPlay");
let nasheedIndex = 0;
let bar = document.getElementById("customRange2");
let nasheedItems = Array.from(document.getElementsByClassName("player"));

let nasheeds = [
  {
    nasheedName: "Kun Anta",
    filePath: "assets/kun_anta.mp3",
    coverPath: "assets/kun_anta_poster.jpg",
    originalLink: "https://youtu.be/KyikqCrhS4A",
  },
  {
    nasheedName: "The Way Of Tears",
    filePath: "assets/wayoftears.mp3",
    coverPath: "assets/wayoftearscover.jpg",
    originalLink: "https://youtu.be/YiSQ_db-Dcw",
  },
  {
    nasheedName: "Forgive Me ALLAH",
    filePath: "assets/astagfirullah.mp3",
    coverPath: "assets/astagfirullah.jpg",
    originalLink: "https://youtu.be/caeTvZrlVTo",
  },
  {
    nasheedName: "Ya Adheeman",
    filePath: "assets/adheeman.mp3",
    coverPath: "assets/adheeman.jpg",
    originalLink: "https://youtu.be/71hi9H6fZuc",
  },
  {
    nasheedName: "Al Hamdulillah",
    filePath: "assets/alhamdulillah.mp3",
    coverPath: "assets/alhamdulillah.jpg",
    originalLink: "https://youtu.be/mD81D8o8cMs",
  },
];

console.log(nasheeds.length);

nasheedItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByClassName("nasheedCover")[0].src = nasheeds[i].coverPath;
  element.getElementsByClassName("nasheedName")[0].innerText =
    nasheeds[i].nasheedName;
  element.getElementsByTagName("a")[0].href = nasheeds[i].originalLink;
});

nasheedItems.forEach((element, i) => {
  forwards.addEventListener("click", () => {
    i++;
    if (i == nasheeds.length) {
      i = 0;
    }
    console.log(i);
    element.getElementsByClassName("nasheedCover")[0].src =
      nasheeds[i].coverPath;
    element.getElementsByClassName("nasheedName")[0].innerText =
      nasheeds[i].nasheedName;
    element.getElementsByClassName("originalLink")[0].href =
      nasheeds[i].originalLink;
    nasheed.src = nasheeds[i].filePath;
    nasheed.currentTime = 0;
    nasheed.play();
    pauses.style.display = "unset";
    plays.style.display = "none";
  });
  backwards.addEventListener("click", () => {
    i--;
    if (i < 0) {
      i = nasheeds.length - 1;
    }
    console.log(i);
    element.getElementsByClassName("nasheedCover")[0].src =
      nasheeds[i].coverPath;
    element.getElementsByClassName("nasheedName")[0].innerText =
      nasheeds[i].nasheedName;
    element.getElementsByClassName("originalLink")[0].href =
      nasheeds[i].originalLink;
    nasheed.src = nasheeds[i].filePath;
    nasheed.currentTime = 0;
    nasheed.play();
    pauses.style.display = "unset";
    plays.style.display = "none";
  });
});

masterPlay.addEventListener("click", () => {
  if (nasheed.paused) {
    nasheed.play();
    plays.style.display = "none";
    pauses.style.display = "unset";
  } else {
    nasheed.pause();
    plays.style.display = "unset";
    pauses.style.display = "none";
  }
});

nasheed.addEventListener("timeupdate", () => {
  // progress = parseInt((nasheed.currentTime/nasheed.duration)*100);
  progress = parseFloat((nasheed.currentTime / nasheed.duration) * 100.0);
  bar.value = progress;
  if (bar.value == 100.0) {
    plays.style.display = "unset";
    pauses.style.display = "none";
  }
});

bar.addEventListener("change", () => {
  nasheed.currentTime = (bar.value * nasheed.duration) / 100;
});
