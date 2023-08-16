//alert("BISMILLAH");
var loader = document.getElementById("loader");
var main = document.getElementById("mainid");
var pauses = document.getElementById("pause");
var plays = document.getElementById("play");
var playAlbum = Array.from(document.getElementsByClassName("playalbum"));
var playMobAlbum = Array.from(document.getElementsByClassName("mobplayalbum"));
var forwards = document.getElementById("forward");
var backwards = document.getElementById("backward");
var loops = document.getElementById("loop");
let nasheed = new Audio("assets/wayoftears.mp3");
let masterPlay = document.getElementById("masterPlay");
let nasheedIndex = 0;
let bar = document.getElementById("customRange2");
let nasheedItems = Array.from(document.getElementsByClassName("player"));
let nasheedInItems = Array.from(document.getElementsByClassName("initem"));
let nasheedMobInItems = Array.from(
  document.getElementsByClassName("mobinitem")
);
var cbox = document.getElementById("cb");
const hbar = document.querySelector(".ham");
const mnav = document.querySelector(".list");

hbar.addEventListener("click", () => {
  hbar.classList.toggle("active");
  mnav.classList.toggle("active");
});

pause.style.display = "none";
main.style.display = "none";

window.addEventListener("load", () => {
  loader.style.display = "none";
  main.style.display = "flex";
});

let nasheeds = [
  {
    nasheedName: "The Way Of Tears",
    filePath: "assets/wayoftears.mp3",
    coverPath: "assets/wayoftearscover.jpg",
    originalLink: "https://youtu.be/YiSQ_db-Dcw",
    nasheedDuration: "05:33",
  },
  {
    nasheedName: "Forgive Me ALLAH",
    filePath: "assets/astagfirullah.mp3",
    coverPath: "assets/astagfirullah.jpg",
    originalLink: "https://youtu.be/caeTvZrlVTo",
    nasheedDuration: "03:38",
  },
  {
    nasheedName: "Ya Adheeman",
    filePath: "assets/adheeman.mp3",
    coverPath: "assets/adheeman.jpg",
    originalLink: "https://youtu.be/71hi9H6fZuc",
    nasheedDuration: "05:05",
  },
  {
    nasheedName: "Al Hamdulillah",
    filePath: "assets/alhamdulillah.mp3",
    coverPath: "assets/alhamdulillah.jpg",
    originalLink: "https://youtu.be/mD81D8o8cMs",
    nasheedDuration: "02:53",
  },
  {
    nasheedName: "Liyakun Yawmuka",
    filePath: "assets/liyakun.mp3",
    coverPath: "assets/liyakun.jpg",
    originalLink: "https://youtu.be/7hewSKpkgSM",
    nasheedDuration: "02:47",
  },
  {
    nasheedName: "The Beauty of Existence",
    filePath: "assets/beauty.mp3",
    coverPath: "assets/beauty.jpg",
    originalLink: "https://youtu.be/NrsCej6SVxM",
    nasheedDuration: "04:21",
  },
  {
    nasheedName: "My Hope (Allah)",
    filePath: "assets/hope.mp3",
    coverPath: "assets/hope.jpg",
    originalLink: "https://youtu.be/slkyMimmb1M",
    nasheedDuration: "04:52",
  },
  {
    nasheedName: "I Rise",
    filePath: "assets/rise.mp3",
    coverPath: "assets/rise.jpg",
    originalLink: "https://youtu.be/JqGv0EdJdJI",
    nasheedDuration: "04:26",
  },
  {
    nasheedName: "Love & Life",
    filePath: "assets/lovelife.mp3",
    coverPath: "assets/lovelife.jpg",
    originalLink: "https://youtu.be/sI5waj84X8Q",
    nasheedDuration: "02:35",
  },
  {
    nasheedName: "Believer",
    filePath: "assets/believer.mp3",
    coverPath: "assets/believer.jpg",
    originalLink: "https://youtu.be/UA-IfwyOBcg",
    nasheedDuration: "03:44",
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

//Nasheeds List

nasheedInItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByClassName("nasheedCover")[0].src = nasheeds[i].coverPath;
  element.getElementsByClassName("nasheedName")[0].innerText =
    nasheeds[i].nasheedName;
  element.getElementsByTagName("a")[0].href = nasheeds[i].originalLink;
  element.getElementsByClassName("duration")[0].innerText =
    nasheeds[i].nasheedDuration;
});

nasheedMobInItems.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByClassName("nasheedCover")[0].src = nasheeds[i].coverPath;
  element.getElementsByClassName("nasheedName")[0].innerText =
    nasheeds[i].nasheedName;
  element.getElementsByTagName("a")[0].href = nasheeds[i].originalLink;
  element.getElementsByClassName("duration")[0].innerText =
    nasheeds[i].nasheedDuration;
});

playAlbum.forEach((element, i) => {
  element.addEventListener("click", () => {
    nasheed.src = nasheeds[i].filePath;
    document.getElementsByClassName("backimg")[0].src = nasheeds[i].coverPath;
    document.getElementsByClassName("maintitle")[0].innerText =
      nasheeds[i].nasheedName;
    document.getElementsByClassName("mainlink")[0].href =
      nasheeds[i].originalLink;
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
});

playMobAlbum.forEach((element, i) => {
  element.addEventListener("click", () => {
    nasheed.src = nasheeds[i].filePath;
    document.getElementsByClassName("backimg")[0].src = nasheeds[i].coverPath;
    document.getElementsByClassName("maintitle")[0].innerText =
      nasheeds[i].nasheedName;
    document.getElementsByClassName("mainlink")[0].href =
      nasheeds[i].originalLink;
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

  document.body.addEventListener("keyup", (x) => {
    if (x.key == "ArrowRight") {
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

  document.body.addEventListener("keyup", (x) => {
    if (x.key == "ArrowLeft") {
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
    }
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

document.body.addEventListener("keyup", (x) => {
  if (x.key == " ") {
    if (nasheed.paused) {
      nasheed.play();
      plays.style.display = "none";
      pauses.style.display = "unset";
    } else {
      nasheed.pause();
      plays.style.display = "unset";
      pauses.style.display = "none";
    }
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
