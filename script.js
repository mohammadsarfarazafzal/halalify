//alert("BISMILLAH");
var loader = document.getElementById("loader");
var main = document.getElementById("mainid");
var pauses = document.getElementById("pause");
var plays = document.getElementById("play");
var forwards = document.getElementById("forward");
var backwards = document.getElementById("backward");
var loops = document.getElementById("loop");
let nasheed = new Audio("assets/kun_anta.mp3");
let masterPlay = document.getElementById("masterPlay");
let nasheedIndex = 0;
let bar = document.getElementById("customRange2");
let nasheedItems = Array.from(document.getElementsByClassName("player"));
var cbox = document.getElementById("cb");

pause.style.display = "none";
main.style.display = "none";

window.addEventListener("load", () => {
  loader.style.display = "none";
  main.style.display = "flex";
});

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
  {
    nasheedName: "Rahmatun Lil’Alameen",
    filePath: "assets/rehmat.mp3",
    coverPath: "assets/rehmat.jpg",
    originalLink: "https://youtu.be/tBbdSzwxqyY",
  },
];

console.log(nasheeds.length);

//loop logic

cbox.addEventListener("change", () => {
  if (cbox.checked == true) {
    nasheed.loop = true;
    loops.style.fill = "#1d6df7";
  } else {
    nasheed.loop = false;
    loops.style.fill = "white";
  }
});

//nasheed change logic

nasheedItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByClassName("nasheedCover")[0].src = nasheeds[i].coverPath;
  element.getElementsByClassName("nasheedName")[0].innerText =
    nasheeds[i].nasheedName;
  element.getElementsByTagName("a")[0].href = nasheeds[i].originalLink;
  nasheed.addEventListener("timeupdate", () => {
    console.log("auto");
    if (nasheed.currentTime == nasheed.duration) {
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
    }
  });
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

//nasheed is getting played and paused

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

//bar is updating with respect to nasheed time

nasheed.addEventListener("timeupdate", () => {
  // progress = parseInt((nasheed.currentTime/nasheed.duration)*100);
  progress = parseFloat((nasheed.currentTime / nasheed.duration) * 100.0);
  bar.value = progress;
  if (bar.value == 100.0) {
    plays.style.display = "unset";
    pauses.style.display = "none";
  }
});

//Changing bar will change nasheed current time

bar.addEventListener("change", () => {
  nasheed.currentTime = (bar.value * nasheed.duration) / 100;
});
