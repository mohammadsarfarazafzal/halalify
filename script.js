// alert("BISMILLAH");
var loader = document.getElementById("loader");
var main = document.getElementById("mainid");
var pauses = document.getElementById("pause");
var plays = document.getElementById("play");
let nasheedIndex = 0;

pause.style.display = "none";
main.style.display = "none";

window.addEventListener("load", () => {
  loader.style.display = "none";
  main.style.display = "flex";
  document.body.style.background = "url(assets/aesthetic.gif)";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
});

let nasheeds = [
  {
    nasheedName: "Asma-ul-Husna",
    filePath: "assets/asmaulhasna.mp3",
    coverPath: "assets/asmaulhasnacover.jpg",
    originalLink: "https://youtu.be/e-KygsbNVGk?si=XKPRQTUK5jdW6Qa0",
    nasheedDuration: "03:36",
  },
  {
    nasheedName: "Ya Ilahi",
    filePath: "assets/ilahi.mp3",
    coverPath: "assets/ilahicover.jpg",
    originalLink: "https://youtu.be/17PmZ_41SG8?si=IPuGAjyvcBCFOlti",
    nasheedDuration: "04:40",
  },
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
    nasheedName: "Without You",
    filePath: "assets/without.mp3",
    coverPath: "assets/withoutcover.jpg",
    originalLink: "https://youtu.be/WRW8ao2AtDU?si=2oGzZF2YiUY8GgGc",
    nasheedDuration: "03:02",
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
    nasheedName: "Soldiers of ALLAH",
    filePath: "assets/jundullah.mp3",
    coverPath: "assets/jundullahcover.jpg",
    originalLink: "https://youtu.be/Dy4YSBA6P5Q?si=0DZDZSP59ef6n0ZT",
    nasheedDuration: "04:22",
  },
  {
    nasheedName: "Qalu Innaha Waad",
    filePath: "assets/promise.mp3",
    coverPath: "assets/promisecover.jpg",
    originalLink: "https://youtu.be/Gqxyvee566M?si=_Xc23IZNj6y-Ng9y",
    nasheedDuration: "02:44",
  },
  {
    nasheedName: "Beauty of Existence",
    filePath: "assets/beauty.mp3",
    coverPath: "assets/beauty.jpg",
    originalLink: "https://youtu.be/NrsCej6SVxM",
    nasheedDuration: "04:21",
  },
  {
    nasheedName: "My Hope (ALLAH)",
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

let numberofnasheeds = nasheeds.length;

const itemlist = document.querySelector(".item");
const mobitemlist = document.querySelector(".list");

let nasheedInItems = Array.from(document.getElementsByClassName("initem"));
let nasheedMobInItems = Array.from(
  document.getElementsByClassName("mobinitem")
);

// Dynamically creating HTML elements, here Nasheed list items. Giving them photo, title, link, and duration.

for (let i = 0; i < numberofnasheeds; i++) {
  const items = document.createElement("div");
  items.classList.add("searching");
  const insideitem = document.createElement("div");
  insideitem.classList.add("initem");
  insideitem.classList.add("playalbum");
  const insideitemimg = document.createElement("div");
  const insideitemimage = document.createElement("img");
  insideitemimage.classList.add("album");
  insideitemimage.classList.add("nasheedCover");
  insideitemimage.src = nasheeds[i].coverPath;
  const flexin = document.createElement("div");
  flexin.classList.add("inflex");
  const title = document.createElement("div");
  const titlename = document.createElement("h5");
  titlename.classList.add("title");
  titlename.classList.add("nasheedName");
  titlename.innerText = nasheeds[i].nasheedName;
  const link = document.createElement("div");
  link.classList.add("link");
  const anchor = document.createElement("a");
  anchor.classList.add("originalLink");
  anchor.target = "_blank";
  anchor.href = nasheeds[i].originalLink;
  anchor.innerText = "Original";
  const durationcontainer = document.createElement("div");
  const pduration = document.createElement("p");
  pduration.classList.add("duration");
  pduration.innerText = nasheeds[i].nasheedDuration;
  itemlist.appendChild(items);
  items.appendChild(insideitem);
  insideitem.append(insideitemimg, insideitemimage, flexin);
  flexin.append(
    title,
    titlename,
    link,
    anchor,
    durationcontainer,
    pduration
  );
}

for (let i = 0; i < numberofnasheeds; i++) {
  const items = document.createElement("div");
  items.classList.add("mobsearching");
  const mobitems = document.createElement("div");
  mobitems.classList.add("mobinitem");
  mobitems.classList.add("mobplayalbum");
  const insideitemimg = document.createElement("div");
  insideitemimg.classList.add("mobcover");
  const insideitemimage = document.createElement("img");
  insideitemimage.classList.add("album");
  insideitemimage.classList.add("nasheedCover");
  insideitemimage.src = nasheeds[i].coverPath;
  const flexin = document.createElement("div");
  flexin.classList.add("inflex");
  const title = document.createElement("div");
  const titlename = document.createElement("h5");
  titlename.classList.add("title");
  titlename.classList.add("nasheedName");
  titlename.innerText = nasheeds[i].nasheedName;
  const link = document.createElement("div");
  link.classList.add("link");
  const anchor = document.createElement("a");
  anchor.classList.add("originalLink");
  anchor.target = "_blank";
  anchor.href = nasheeds[i].originalLink;
  anchor.innerText = "Original";
  const durationcontainer = document.createElement("div");
  const pduration = document.createElement("p");
  pduration.classList.add("duration");
  pduration.innerText = nasheeds[i].nasheedDuration;
  mobitemlist.appendChild(items);
  items.appendChild(mobitems);
  mobitems.append(insideitemimg, insideitemimage, flexin);
  flexin.append(
    title,
    titlename,
    link,
    anchor,
    durationcontainer,
    pduration
  );
}

// Several Initializations

var forwards = document.getElementById("forward");
var backwards = document.getElementById("backward");
var loops = document.getElementById("loop");
let nasheed = new Audio("assets/asmaulhasna.mp3");
let masterPlay = document.getElementById("masterPlay");
let bar = document.getElementById("sliderange");
let fillval = document.querySelector(".filler");
var cbox = document.getElementById("cb");
const hbar = document.querySelector(".ham");
const mnav = document.querySelector(".list");
const inputSearch = document.querySelector("[data-search]");
const inputMobSearch = document.querySelector("[mob-data-search]");
let nasheedList = Array.from(document.getElementsByClassName("searching"));
let mobnasheedList = Array.from(
  document.getElementsByClassName("mobsearching")
);

// HamBar

hbar.addEventListener("click", () => {
  hbar.classList.toggle("active");
  mnav.classList.toggle("active");
  document.querySelector(".backimg").classList.toggle("active");
});

// loop logic

cbox.addEventListener("change", () => {
  if (cbox.checked == true) {
    nasheed.loop = true;
    loops.style.fill = "#1d6df7";
  } else {
    nasheed.loop = false;
    loops.style.fill = "white";
  }
});

// Nasheeds List

let nasheedItems = Array.from(document.getElementsByClassName("player"));
var playAlbum = Array.from(document.getElementsByClassName("playalbum"));
var playMobAlbum = Array.from(document.getElementsByClassName("mobplayalbum"));

// Clicking on any Listed Nasheed starts playing

playAlbum.forEach((element, i) => {
  element.addEventListener("click", () => {
    nasheed.src = nasheeds[i].filePath;
    document.getElementsByClassName("backimg")[0].src = nasheeds[i].coverPath;
    document.getElementsByClassName("nasheedtitle")[0].innerText =
      nasheeds[i].nasheedName;
    document.getElementsByClassName("playingLink")[0].href =
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
    nasheedIndex=i;
  });
});

playMobAlbum.forEach((element, i) => {
  element.addEventListener("click", () => {
    nasheed.src = nasheeds[i].filePath;
    document.getElementsByClassName("backimg")[0].src = nasheeds[i].coverPath;
    document.getElementsByClassName("nasheedtitle")[0].innerText =
      nasheeds[i].nasheedName;
    document.getElementsByClassName("playingLink")[0].href =
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
    nasheedIndex=i;
  });
});



// nasheed change logic

nasheedItems.forEach((element) => {
  console.log(element);
  element.getElementsByClassName("nasheedCover")[0].src = nasheeds[nasheedIndex].coverPath;
  element.getElementsByClassName("nasheedName")[0].innerText =
    nasheeds[nasheedIndex].nasheedName;
  element.getElementsByClassName("originalLink")[0].href = nasheeds[nasheedIndex].originalLink;
  element.getElementsByClassName("originalLink")[0].innerHTML = "Original";
  // AutoPlay
  nasheed.addEventListener("timeupdate", () => {
    console.log("auto");
    if (nasheed.currentTime == nasheed.duration) {
      nasheedIndex++;
      if (nasheedIndex == nasheeds.length) {
        nasheedIndex = 0;
      }
      console.log(nasheedIndex);
      element.getElementsByClassName("nasheedCover")[0].src =
        nasheeds[nasheedIndex].coverPath;
      element.getElementsByClassName("nasheedName")[0].innerText =
        nasheeds[nasheedIndex].nasheedName;
      element.getElementsByClassName("originalLink")[0].href =
        nasheeds[nasheedIndex].originalLink;
      nasheed.src = nasheeds[nasheedIndex].filePath;
      nasheed.currentTime = 0;
      nasheed.play();
      pauses.style.display = "unset";
      plays.style.display = "none";
    }
  });

  forwards.addEventListener("click", () => {
    nasheedIndex++;
    if (nasheedIndex == nasheeds.length) {
      i = 0;
    }
    console.log(nasheedIndex);
    element.getElementsByClassName("nasheedCover")[0].src =
      nasheeds[nasheedIndex].coverPath;
    element.getElementsByClassName("nasheedName")[0].innerText =
      nasheeds[nasheedIndex].nasheedName;
    element.getElementsByClassName("originalLink")[0].href =
      nasheeds[nasheedIndex].originalLink;
    nasheed.src = nasheeds[nasheedIndex].filePath;
    nasheed.currentTime = 0;
    nasheed.play();
    pauses.style.display = "unset";
    plays.style.display = "none";
  });

  backwards.addEventListener("click", () => {
    nasheedIndex--;
    if (nasheedIndex < 0) {
      nasheedIndex = nasheeds.length - 1;
    }
    console.log(nasheedIndex);
    element.getElementsByClassName("nasheedCover")[0].src =
      nasheeds[nasheedIndex].coverPath;
    element.getElementsByClassName("nasheedName")[0].innerText =
      nasheeds[nasheedIndex].nasheedName;
    element.getElementsByClassName("originalLink")[0].href =
      nasheeds[nasheedIndex].originalLink;
    nasheed.src = nasheeds[nasheedIndex].filePath;
    nasheed.currentTime = 0;
    nasheed.play();
    pauses.style.display = "unset";
    plays.style.display = "none";
  });

  document.body.addEventListener("keyup", (x) => {
    if (x.key == "ArrowRight") {
      nasheedIndex++;
      if (nasheedIndex == nasheeds.length) {
        nasheedIndex = 0;
      }
      console.log(nasheedIndex);
      element.getElementsByClassName("nasheedCover")[0].src =
        nasheeds[nasheedIndex].coverPath;
      element.getElementsByClassName("nasheedName")[0].innerText =
        nasheeds[nasheedIndex].nasheedName;
      element.getElementsByClassName("originalLink")[0].href =
        nasheeds[nasheedIndex].originalLink;
      nasheed.src = nasheeds[nasheedIndex].filePath;
      nasheed.currentTime = 0;
      nasheed.play();
      pauses.style.display = "unset";
      plays.style.display = "none";
    }
  });

  document.body.addEventListener("keyup", (x) => {
    if (x.key == "ArrowLeft") {
      nasheedIndex--;
      if (nasheedIndex < 0) {
        nasheedIndex = nasheeds.length - 1;
      }
      console.log(nasheedIndex);
      element.getElementsByClassName("nasheedCover")[0].src =
        nasheeds[nasheedIndex].coverPath;
      element.getElementsByClassName("nasheedName")[0].innerText =
        nasheeds[nasheedIndex].nasheedName;
      element.getElementsByClassName("originalLink")[0].href =
        nasheeds[nasheedIndex].originalLink;
      nasheed.src = nasheeds[nasheedIndex].filePath;
      nasheed.currentTime = 0;
      nasheed.play();
      pauses.style.display = "unset";
      plays.style.display = "none";
    }
  });
});

// nasheed is getting played and paused

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

// bar is updating with respect to nasheed time

let fillvalpercent;

nasheed.addEventListener("timeupdate", () => {
  //intprogress = parseInt((nasheed.currentTime/nasheed.duration)*100);
  progress = parseFloat((nasheed.currentTime / nasheed.duration) * 100.0);
  bar.value = progress;
  function fillvalue() {
    fillvalpercent = (progress + 0.2).toString();
    return fillvalpercent + "%";
  }
  fillval.style.width = fillvalue();
  if (bar.value == 100.0) {
    plays.style.display = "unset";
    pauses.style.display = "none";
  }
});

// Changing bar will change nasheed current time

bar.addEventListener("change", () => {
  nasheed.currentTime = (bar.value * nasheed.duration) / 100;
});

// Landscape alert

// if (
//   navigator.maxTouchPoints > 0 &&
//   /Android|iPhone/i.test(navigator.userAgent)
// ) {
//   window
//     .matchMedia("(orientation:portrait)")
//     .addEventListener("change", (e) => {
//       const portrait = e.matches;
//       if (!portrait) {
//         alert("Enable desktop mode for better experience in landscape.");
//       }
//     });
// }

// Searching

inputSearch.addEventListener("input", (e) => {
  const searchNasheed = e.target.value.toLowerCase();
  nasheedList.forEach((element) => {
    const isVisible = element
      .getElementsByClassName("nasheedName")[0]
      .innerText.toLowerCase()
      .includes(searchNasheed);
    element.classList.toggle("hide", !isVisible);
  });
});

inputMobSearch.addEventListener("input", (e) => {
  const searchNasheed = e.target.value.toLowerCase();
  mobnasheedList.forEach((element) => {
    const isVisible = element
      .getElementsByClassName("nasheedName")[0]
      .innerText.toLowerCase()
      .includes(searchNasheed);
    element.classList.toggle("hide", !isVisible);
  });
});
