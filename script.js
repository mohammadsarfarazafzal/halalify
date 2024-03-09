// alert("BISMILLAH");
var loader = document.getElementById("loader");
var main = document.getElementById("mainid");
let decisiondiv = document.getElementById("decide");
var pauses = document.getElementById("pause");
var plays = document.getElementById("play");
let yes = document.getElementById("yes");
let no = document.getElementById("no");

pause.style.display = "none";
main.style.display = "none";
decisiondiv.style.display = "none";

window.addEventListener("load", () => {
  loader.style.display = "none";
  decisiondiv.style.display = "flex";
  document.body.style.backgroundColor = "#0B210E";
  // window.location.replace("http://halalify.onrender.com/#no");
});
let decision = -1;
yes.addEventListener("click", () => {
  decision = 1;
  main.style.display = "flex";
  decisiondiv.style.display = "none";
  // if (
  //   navigator.maxTouchPoints > 0 &&
  //   /Android|iPhone/i.test(navigator.userAgent)
  // ) {
  //   main.requestFullscreen();
  // }
});
no.addEventListener("click", () => {
  decision = 0;
  main.style.display = "flex";
  decisiondiv.style.display = "none";
  // if (
  //   navigator.maxTouchPoints > 0 &&
  //   /Android|iPhone/i.test(navigator.userAgent)
  // ) {
  //   main.requestFullscreen();
  // }
});

let nasheeds = [
  {
    nasheedName: "Asma-ul-Husna",
    filePath: "assets/asmaulhasna.mp3",
    fileType: "nasheed",
    coverPath: "assets/asmaulhasnacover.jpg",
    originalLink: "https://youtu.be/e-KygsbNVGk?si=XKPRQTUK5jdW6Qa0",
    nasheedDuration: "03:36",
  },
  {
    nasheedName: "Ya Ilahi",
    filePath: "assets/ilahi.mp3",
    fileType: "nasheed",
    coverPath: "assets/ilahicover.jpg",
    originalLink: "https://youtu.be/17PmZ_41SG8?si=IPuGAjyvcBCFOlti",
    nasheedDuration: "04:40",
  },
  {
    nasheedName: "PALESTINE",
    filePath: "assets/palestine.mp3",
    fileType: "nasheed",
    coverPath: "assets/palestine.jpg",
    originalLink: "https://youtu.be/FD1ZISZJJzk?si=TLgUxDKGI9WObpLL",
    nasheedDuration: "03:43",
  },
  {
    nasheedName: "The Way Of Tears",
    filePath: "assets/wayoftears.mp3",
    fileType: "nasheed",
    coverPath: "assets/wayoftearscover.jpg",
    originalLink: "https://youtu.be/YiSQ_db-Dcw",
    nasheedDuration: "05:33",
  },
  {
    nasheedName: "Forgive Me ALLAH",
    filePath: "assets/astagfirullah.mp3",
    fileType: "nasheed",
    coverPath: "assets/astagfirullah.jpg",
    originalLink: "https://youtu.be/caeTvZrlVTo",
    nasheedDuration: "03:38",
  },
  {
    nasheedName: "Without You",
    filePath: "assets/without.mp3",
    fileType: "nasheed",
    coverPath: "assets/withoutcover.jpg",
    originalLink: "https://youtu.be/WRW8ao2AtDU?si=2oGzZF2YiUY8GgGc",
    nasheedDuration: "03:02",
  },
  {
    nasheedName: "Ya Adheeman",
    filePath: "assets/adheeman.mp3",
    fileType: "nasheed",
    coverPath: "assets/adheeman.jpg",
    originalLink: "https://youtu.be/71hi9H6fZuc",
    nasheedDuration: "05:05",
  },
  {
    nasheedName: "Al Hamdulillah",
    filePath: "assets/alhamdulillah.mp3",
    fileType: "nasheed",
    coverPath: "assets/alhamdulillah.jpg",
    originalLink: "https://youtu.be/mD81D8o8cMs",
    nasheedDuration: "02:53",
  },
  {
    nasheedName: "Liyakun Yawmuka",
    filePath: "assets/liyakun.mp3",
    fileType: "nasheed",
    coverPath: "assets/liyakun.jpg",
    originalLink: "https://youtu.be/7hewSKpkgSM",
    nasheedDuration: "02:47",
  },
  {
    nasheedName: "Soldiers of ALLAH",
    filePath: "assets/jundullah.mp3",
    fileType: "nasheed",
    coverPath: "assets/jundullahcover.jpg",
    originalLink: "https://youtu.be/Dy4YSBA6P5Q?si=0DZDZSP59ef6n0ZT",
    nasheedDuration: "04:22",
  },
  {
    nasheedName: "Qalu Innaha Waad",
    filePath: "assets/promise.mp3",
    fileType: "nasheed",
    coverPath: "assets/promisecover.jpg",
    originalLink: "https://youtu.be/Gqxyvee566M?si=_Xc23IZNj6y-Ng9y",
    nasheedDuration: "02:44",
  },
  {
    nasheedName: "Beauty of Existence",
    filePath: "assets/beauty.mp3",
    fileType: "nasheed",
    coverPath: "assets/beauty.jpg",
    originalLink: "https://youtu.be/NrsCej6SVxM",
    nasheedDuration: "04:21",
  },
  {
    nasheedName: "My Hope (ALLAH)",
    filePath: "assets/hope.mp3",
    fileType: "nasheed",
    coverPath: "assets/hope.jpg",
    originalLink: "https://youtu.be/slkyMimmb1M",
    nasheedDuration: "04:52",
  },
  {
    nasheedName: "I Rise",
    filePath: "assets/rise.mp3",
    fileType: "nasheed",
    coverPath: "assets/rise.jpg",
    originalLink: "https://youtu.be/JqGv0EdJdJI",
    nasheedDuration: "04:26",
  },
  {
    nasheedName: "Love & Life",
    filePath: "assets/lovelife.mp3",
    fileType: "nasheed",
    coverPath: "assets/lovelife.jpg",
    originalLink: "https://youtu.be/sI5waj84X8Q",
    nasheedDuration: "02:35",
  },
  {
    nasheedName: "Believer",
    filePath: "assets/believer.mp3",
    fileType: "nasheed",
    coverPath: "assets/believer.jpg",
    originalLink: "https://youtu.be/UA-IfwyOBcg",
    nasheedDuration: "03:44",
  },
  {
    nasheedName: "Taweel Al Shawq",
    filePath: "assets/taweel.mp3",
    fileType: "nasheed",
    coverPath: "assets/taweel.jpg",
    originalLink: "https://youtu.be/o2W8_mvLuxU?si=kXR2gRMcIxvE6VfY",
    nasheedDuration: "05:38",
  },
  {
    nasheedName: "Aroosah",
    filePath: "assets/aroosah.mp3",
    fileType: "nasheed",
    coverPath: "assets/aroosah.jpg",
    originalLink: "https://youtu.be/QG2lY-wFrv4?si=eqJnsrBPxQ1OAjyJ",
    nasheedDuration: "02:59",
  },
  {
    nasheedName: "Ya Quluban",
    filePath: "assets/quluban.mp3",
    fileType: "nasheed",
    coverPath: "assets/quluban.jpg",
    originalLink: "https://youtu.be/WsRwfLLbHvc?si=tiRPKYXQ1gUbJtuH",
    nasheedDuration: "03:10",
  },
  {
    nasheedName: "Kahani Suno",
    filePath: "assets/kahani.mp3",
    fileType: "song",
    coverPath: "assets/kahani.jpg",
    originalLink: "https://youtu.be/_XBVWlI8TsQ?si=Gc3mnMIrdX4bFJRd",
    nasheedDuration: "02:18",
  },
  {
    nasheedName: "Mansoob",
    filePath: "assets/mansoob.mp3",
    fileType: "song",
    coverPath: "assets/mansoob.jpg",
    originalLink: "https://youtu.be/KA4APfVz5I8?si=fqgYXYYd5hY5olZh",
    nasheedDuration: "02:32",
  },
  {
    nasheedName: "Jurmana",
    filePath: "assets/jurmana.mp3",
    fileType: "song",
    coverPath: "assets/jurmana.jpg",
    originalLink: "https://youtu.be/-fVtSHPg040?si=WDmnP5zoLzNfAh5T",
    nasheedDuration: "02:14",
  },
  {
    nasheedName: "Kana Yaari",
    filePath: "assets/kana.mp3",
    fileType: "song",
    coverPath: "assets/kana.jpg",
    originalLink: "https://youtu.be/zQDAi8tI-cU?si=4qh8aAUGDMegMi8A",
    nasheedDuration: "02:39",
  },
  {
    nasheedName: "Downers At Dusk",
    filePath: "assets/downers.mp3",
    fileType: "song",
    coverPath: "assets/downers.jpg",
    originalLink: "https://youtu.be/iWomYr2dlsM?si=kVfM7RASNuz9IRRu",
    nasheedDuration: "03:30",
  },
  {
    nasheedName: "Gumaan",
    filePath: "assets/guman.mp3",
    fileType: "song",
    coverPath: "assets/guman.jpg",
    originalLink: "https://youtu.be/jIQ0Dx-4peE?si=rbh8zay-iC-WiSt4",
    nasheedDuration: "04:06",
  },
  {
    nasheedName: "Afsanay",
    filePath: "assets/afsanay.mp3",
    fileType: "song",
    coverPath: "assets/afsanay.jpg",
    originalLink: "https://youtu.be/ijE2MMtzkHg?si=EdFoQRI6dX2RtR-0",
    nasheedDuration: "05:25",
  },
  {
    nasheedName: "Tu Jaane Na",
    filePath: "assets/jane.mp3",
    fileType: "song",
    coverPath: "assets/jane.jpg",
    originalLink: "https://youtu.be/P8PWN1OmZOA?si=bBza3q_OYNn_2OOF",
    nasheedDuration: "02:32",
  },
  {
    nasheedName: "Pal X Duniyaa",
    filePath: "assets/pal.mp3",
    fileType: "song",
    coverPath: "assets/pal.jpg",
    originalLink: "https://youtu.be/bkkS6NOL9-A?si=mE6Up7cultSfhS25",
    nasheedDuration: "03:13",
  },
  {
    nasheedName: "Arcade X Mann Mera",
    filePath: "assets/mann.mp3",
    fileType: "song",
    coverPath: "assets/mann.jpg",
    originalLink: "https://youtu.be/-aQMjByEeo8?si=UPfw_sK0H2rjp6GM",
    nasheedDuration: "02:51",
  },
  {
    nasheedName: "Let Me Down X Main Dhoondne",
    filePath: "assets/down.mp3",
    fileType: "song",
    coverPath: "assets/down.jpg",
    originalLink: "https://youtu.be/s-bZD3O3P80?si=y07w8JK5sIv9oTIL",
    nasheedDuration: "02:57",
  },
  {
    nasheedName: "Standing By You",
    filePath: "assets/standing.mp3",
    fileType: "song",
    coverPath: "assets/standing.jpg",
    originalLink: "https://youtu.be/8qX0VIVxivU?si=7BABZzBG2iEGw52p",
    nasheedDuration: "02:16",
  },
  {
    nasheedName: "Raabta",
    filePath: "assets/rabta.mp3",
    fileType: "song",
    coverPath: "assets/rabta.jpg",
    originalLink: "https://youtu.be/zlt38OOqwDc?si=YNMESIh4CL45IPpM",
    nasheedDuration: "03:16",
  },
  {
    nasheedName: "Ishq Murshid",
    filePath: "assets/ishq.mp3",
    fileType: "song",
    coverPath: "assets/ishq.jpg",
    originalLink: "https://youtu.be/wyC_IVVy_yE?si=SOfgJ_cQVRdN2pfh",
    nasheedDuration: "02:32",
  },
  {
    nasheedName: "Tu Hai Kahan",
    filePath: "assets/kaha.mp3",
    fileType: "song",
    coverPath: "assets/kaha.jpg",
    originalLink: "https://youtu.be/AX6OrbgS8lI?si=Lb1PNQt4-HRjXboa",
    nasheedDuration: "04:24",
  },
  {
    nasheedName: "Shikayat",
    filePath: "assets/shikayat.mp3",
    fileType: "song",
    coverPath: "assets/shikayat.jpg",
    originalLink: "https://youtu.be/QxddU3sjVRY?si=UWSBt4VSUVLDZk8m",
    nasheedDuration: "03:55",
  },
  {
    nasheedName: "Bekhayali",
    filePath: "assets/bekhayali.mp3",
    fileType: "song",
    coverPath: "assets/bekhayali.jpg",
    originalLink: "https://youtu.be/VOLKJJvfAbg?si=XxLSDLVtnbDx4-lZ",
    nasheedDuration: "04:41",
  },
  {
    nasheedName: "Aaram Aata Hai",
    filePath: "assets/aaram.mp3",
    fileType: "song",
    coverPath: "assets/aaram.jpg",
    originalLink: "https://youtu.be/J7ck984Qhso?si=axWQ-4JgsPn0ry7S",
    nasheedDuration: "04:04",
  },
  {
    nasheedName: "Pasoori",
    filePath: "assets/pasoori.mp3",
    fileType: "song",
    coverPath: "assets/pasoori.jpg",
    originalLink: "https://youtu.be/5Eqb_-j3FDA?si=NyuRHL9WEff_XRA-",
    nasheedDuration: "03:30",
  },
];

let numberofnasheeds = nasheeds.length;
let numberofsongs = numberofnasheeds / 2;
//console.log(numberofsongs);
const itemlist = document.querySelector(".item");
const mobitemlist = document.querySelector(".list");

// Dynamically creating HTML elements, here Nasheed list items. Giving them photo, title, link, and duration.

decisiondiv.addEventListener("click", () => {
  for (let i = 0; i < numberofnasheeds; i++) {
    if (decision == 0) {
      if (nasheeds[i].fileType == "nasheed") {
        continue;
      }
    }
    if (decision == 1) {
      if (nasheeds[i].fileType == "song") {
        continue;
      }
    }
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
    if (decision == 0) {
      if (nasheeds[i].fileType == "nasheed") {
        continue;
      }
    }
    if (decision == 1) {
      if (nasheeds[i].fileType == "song") {
        continue;
      }
    }
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

});

// Several Initialization

let nasheedInItems;
let nasheedMobInItems;
var forwards = document.getElementById("forward");
var backwards = document.getElementById("backward");
var loops = document.getElementById("loop");
let nasheedLength = document.getElementById("length");
let currentDuration = document.getElementById("currentTime");
let nasheed = new Audio("assets/asmaulhasna.mp3");
let masterPlay = document.getElementById("masterPlay");
let bar = document.getElementById("sliderange");
let fillval = document.querySelector(".filler");
var cbox = document.getElementById("cb");
const hbar = document.querySelector(".ham");
const mnav = document.querySelector(".list");
let inputSearch = document.querySelector("[data-search]");
let inputMobSearch = document.querySelector("[mob-data-search]");
let nasheedList = Array.from(document.getElementsByClassName("searching"));
let mobnasheedList = Array.from(
  document.getElementsByClassName("mobsearching")
);

// HamBar

hbar.addEventListener("click", () => {
  hbar.classList.toggle("active");
  mnav.classList.toggle("active");
  document.querySelector(".backimg").classList.toggle("active");
  document.querySelector(".mobBackCover").classList.toggle("active");
});

// Volume

let vol = document.getElementById("vol");
let volbtn = document.getElementsByClassName("volumebtn");
volbtn[0].style.display = "none";
volbtn[2].style.display = "none";
vol.oninput = function () {
  nasheed.volume = vol.value / 100;
  // console.log(nasheed.volume);
  if (nasheed.volume == 0) {
    volbtn[1].style.display = "none";
    volbtn[2].style.display = "none";
    volbtn[0].style.display = "unset";
  }
  else if (nasheed.volume < 0.5) {
    volbtn[1].style.display = "none";
    volbtn[2].style.display = "unset";
    volbtn[0].style.display = "none";
  }
  else {
    volbtn[1].style.display = "unset";
    volbtn[0].style.display = "none";
    volbtn[2].style.display = "none";
  }
}

let tempVol;

volbtn[1].addEventListener("click", () => {
  nasheed.volume = vol.value / 100;
  if (nasheed.volume <= 1) {
    tempVol = nasheed.volume;
    nasheed.volume = 0;
    vol.value = 0;
    volbtn[1].style.display = "none";
    volbtn[2].style.display = "none";
    volbtn[0].style.display = "unset";
  }
});

volbtn[2].addEventListener("click", () => {
  nasheed.volume = vol.value / 100;
  if (nasheed.volume <= 1) {
    tempVol = nasheed.volume;
    nasheed.volume = 0;
    vol.value = 0;
    volbtn[1].style.display = "none";
    volbtn[2].style.display = "none";
    volbtn[0].style.display = "unset";
  }
});

volbtn[0].addEventListener("click", () => {
  nasheed.volume = vol.value / 100;
  if (nasheed.volume == 0) {
    nasheed.volume = tempVol;
    vol.value = tempVol * 100;
    if (tempVol > 0.5) {
      volbtn[1].style.display = "unset";
      volbtn[0].style.display = "none";
      volbtn[2].style.display = "none";
    }
    else {
      volbtn[1].style.display = "none";
      volbtn[0].style.display = "none";
      volbtn[2].style.display = "unset";
    }
  }
});

decisiondiv.addEventListener("click",()=>{
  document.body.addEventListener("keydown", (x) => {
    nasheed.volume = vol.value / 100;
    if (x.key == "+") {
      if (nasheed.volume < 1) {
        nasheed.volume = nasheed.volume + 0.1;
        vol.value = nasheed.volume * 100;
        // console.log(nasheed.volume);
        if (nasheed.volume == 0) {
          volbtn[1].style.display = "none";
          volbtn[2].style.display = "none";
          volbtn[0].style.display = "unset";
        }
        else if (nasheed.volume < 0.5) {
          volbtn[1].style.display = "none";
          volbtn[2].style.display = "unset";
          volbtn[0].style.display = "none";
        }
        else {
          volbtn[1].style.display = "unset";
          volbtn[0].style.display = "none";
          volbtn[2].style.display = "none";
        }
      }
    }
    if (x.key == "-") {
      if(nasheed.volume > 0) {
        nasheed.volume = nasheed.volume - 0.1;
        // console.log(nasheed.volume);
        vol.value = nasheed.volume * 100;
        if (nasheed.volume == 0) {
          volbtn[1].style.display = "none";
          volbtn[2].style.display = "none";
          volbtn[0].style.display = "unset";
        }
        else if (nasheed.volume < 0.5) {
          volbtn[1].style.display = "none";
          volbtn[2].style.display = "unset";
          volbtn[0].style.display = "none";
        }
        else {
          volbtn[1].style.display = "unset";
          volbtn[0].style.display = "none";
          volbtn[2].style.display = "none";
        }
      }
    }
  });
  
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

let nasheedItems = Array.from(document.getElementsByClassName("player"));

decisiondiv.addEventListener("click", () => {
  if (decision == 0) {
    nasheed = new Audio("assets/kahani.mp3");
  }
  nasheedInItems = Array.from(document.getElementsByClassName("initem"));
  nasheedMobInItems = Array.from(
    document.getElementsByClassName("mobinitem")
  );
  inputSearch = document.querySelector("[data-search]");
  inputMobSearch = document.querySelector("[mob-data-search]");
  nasheedList = Array.from(document.getElementsByClassName("searching"));
  mobnasheedList = Array.from(
    document.getElementsByClassName("mobsearching")
  );
  playAlbum = Array.from(document.getElementsByClassName("playalbum"));
  playMobAlbum = Array.from(document.getElementsByClassName("mobplayalbum"));
});

let nasheedIndex = 0;
let songIndex = numberofsongs;

// Clicking on any Listed Nasheed starts playing

decisiondiv.addEventListener("click", () => {
  playAlbum.forEach((element, i) => {
    if (decision == 0) {
      //console.log(songIndex + i);
      element.addEventListener("click", () => {
        nasheed.src = nasheeds[songIndex + i].filePath;
        document.getElementsByClassName("backimg")[0].src = nasheeds[songIndex + i].coverPath;
        document.getElementsByClassName("nasheedtitle")[0].innerText =
          nasheeds[songIndex + i].nasheedName;
        document.getElementsByClassName("playingLink")[0].href =
          nasheeds[songIndex + i].originalLink;
        document.getElementsByClassName("mobBackCover")[0].src = nasheeds[songIndex + i].coverPath;
        document.getElementById("length").innerText =
          nasheeds[songIndex + i].nasheedDuration;
        if (nasheed.paused) {
          nasheed.play();
          plays.style.display = "none";
          pauses.style.display = "unset";
        } else {
          nasheed.pause();
          plays.style.display = "unset";
          pauses.style.display = "none";
        }
        nasheedIndex = songIndex + i;
      });
    }
    if (decision == 1) {
      //console.log(i);
      element.addEventListener("click", () => {
        nasheed.src = nasheeds[i].filePath;
        document.getElementsByClassName("backimg")[0].src = nasheeds[i].coverPath;
        document.getElementsByClassName("nasheedtitle")[0].innerText =
          nasheeds[i].nasheedName;
        document.getElementsByClassName("playingLink")[0].href =
          nasheeds[i].originalLink;
        document.getElementsByClassName("mobBackCover")[0].src = nasheeds[i].coverPath;
        document.getElementById("length").innerText =
          nasheeds[i].nasheedDuration;
        if (nasheed.paused) {
          nasheed.play();
          plays.style.display = "none";
          pauses.style.display = "unset";
        } else {
          nasheed.pause();
          plays.style.display = "unset";
          pauses.style.display = "none";
        }
        nasheedIndex = i;
      });
    }

  });

  playMobAlbum.forEach((element, i) => {
    if (decision == 0) {
      //console.log(songIndex + i);
      element.addEventListener("click", () => {
        nasheed.src = nasheeds[songIndex + i].filePath;
        document.getElementsByClassName("backimg")[0].src = nasheeds[songIndex + i].coverPath;
        document.getElementsByClassName("mobBackCover")[0].src = nasheeds[songIndex + i].coverPath;
        document.getElementsByClassName("nasheedtitle")[0].innerText =
          nasheeds[songIndex + i].nasheedName;
        document.getElementsByClassName("playingLink")[0].href =
          nasheeds[songIndex + i].originalLink;
        document.getElementById("length").innerText =
          nasheeds[songIndex + i].nasheedDuration;
        if (nasheed.paused) {
          nasheed.play();
          plays.style.display = "none";
          pauses.style.display = "unset";
        } else {
          nasheed.pause();
          plays.style.display = "unset";
          pauses.style.display = "none";
        }
        nasheedIndex = songIndex + i;
      });
    }
    if (decision == 1) {
      //console.log(i);
      element.addEventListener("click", () => {
        nasheed.src = nasheeds[i].filePath;
        document.getElementsByClassName("backimg")[0].src = nasheeds[i].coverPath;
        document.getElementsByClassName("mobBackCover")[0].src = nasheeds[i].coverPath;
        document.getElementsByClassName("nasheedtitle")[0].innerText =
          nasheeds[i].nasheedName;
        document.getElementsByClassName("playingLink")[0].href =
          nasheeds[i].originalLink;
        document.getElementById("length").innerText =
          nasheeds[i].nasheedDuration;
        if (nasheed.paused) {
          nasheed.play();
          plays.style.display = "none";
          pauses.style.display = "unset";
        } else {
          nasheed.pause();
          plays.style.display = "unset";
          pauses.style.display = "none";
        }
        nasheedIndex = i;
      });
    }
  });

});


// nasheed change logic

decisiondiv.addEventListener("click", () => {
  nasheedItems.forEach((element) => {
    // console.log(element);
    if (decision == 0) {
      nasheedIndex = songIndex;
    }
    element.getElementsByClassName("nasheedCover")[0].src = nasheeds[nasheedIndex].coverPath;
    element.getElementsByClassName("mobBackCover")[0].src =
      nasheeds[nasheedIndex].coverPath;
    element.getElementsByClassName("nasheedName")[0].innerText =
      nasheeds[nasheedIndex].nasheedName;
    element.getElementsByClassName("originalLink")[0].href = nasheeds[nasheedIndex].originalLink;
    element.getElementsByClassName("originalLink")[0].innerHTML = "Original";
    document.getElementById("length").innerText =
      nasheeds[nasheedIndex].nasheedDuration;
    // AutoPlay
    nasheed.addEventListener("timeupdate", () => {
      //console.log("auto");
      if (nasheed.currentTime == nasheed.duration) {
        nasheedIndex++;
        if (nasheedIndex == numberofsongs && decision == 1) {
          nasheedIndex = 0;
        }
        if (nasheedIndex == numberofnasheeds && decision == 0) {
          nasheedIndex = numberofsongs;
        }
        //console.log(nasheedIndex);
        element.getElementsByClassName("nasheedCover")[0].src =
          nasheeds[nasheedIndex].coverPath;
        element.getElementsByClassName("mobBackCover")[0].src =
          nasheeds[nasheedIndex].coverPath;
        element.getElementsByClassName("nasheedName")[0].innerText =
          nasheeds[nasheedIndex].nasheedName;
        element.getElementsByClassName("originalLink")[0].href =
          nasheeds[nasheedIndex].originalLink;
        document.getElementById("length").innerText =
          nasheeds[nasheedIndex].nasheedDuration;
        nasheed.src = nasheeds[nasheedIndex].filePath;
        nasheed.currentTime = 0;
        nasheed.play();
        pauses.style.display = "unset";
        plays.style.display = "none";
      }
    });

    forwards.addEventListener("click", () => {
      nasheedIndex++;
      if (nasheedIndex == numberofsongs && decision == 1) {
        nasheedIndex = 0;
      }
      if (nasheedIndex == numberofnasheeds && decision == 0) {
        nasheedIndex = numberofsongs;
      }
      //console.log(nasheedIndex);
      element.getElementsByClassName("nasheedCover")[0].src =
        nasheeds[nasheedIndex].coverPath;
      element.getElementsByClassName("mobBackCover")[0].src =
        nasheeds[nasheedIndex].coverPath;
      element.getElementsByClassName("nasheedName")[0].innerText =
        nasheeds[nasheedIndex].nasheedName;
      element.getElementsByClassName("originalLink")[0].href =
        nasheeds[nasheedIndex].originalLink;
      document.getElementById("length").innerText =
        nasheeds[nasheedIndex].nasheedDuration;
      nasheed.src = nasheeds[nasheedIndex].filePath;
      nasheed.currentTime = 0;
      nasheed.play();
      pauses.style.display = "unset";
      plays.style.display = "none";
    });

    backwards.addEventListener("click", () => {
      nasheedIndex--;
      if (nasheedIndex < 0 && decision == 1) {
        nasheedIndex = numberofsongs - 1;
      }
      if (nasheedIndex < numberofsongs && decision == 0) {
        nasheedIndex = numberofnasheeds - 1;
      }
      //console.log(nasheedIndex);
      element.getElementsByClassName("nasheedCover")[0].src =
        nasheeds[nasheedIndex].coverPath;
      element.getElementsByClassName("mobBackCover")[0].src =
        nasheeds[nasheedIndex].coverPath;
      element.getElementsByClassName("nasheedName")[0].innerText =
        nasheeds[nasheedIndex].nasheedName;
      element.getElementsByClassName("originalLink")[0].href =
        nasheeds[nasheedIndex].originalLink;
      document.getElementById("length").innerText =
        nasheeds[nasheedIndex].nasheedDuration;
      nasheed.src = nasheeds[nasheedIndex].filePath;
      nasheed.currentTime = 0;
      nasheed.play();
      pauses.style.display = "unset";
      plays.style.display = "none";
    });

    document.body.addEventListener("keyup", (x) => {
      if (x.key == "ArrowRight") {
        nasheedIndex++;
        if (nasheedIndex == numberofsongs && decision == 1) {
          nasheedIndex = 0;
        }
        if (nasheedIndex == numberofnasheeds && decision == 0) {
          nasheedIndex = numberofsongs;
        }
        //console.log(nasheedIndex);
        element.getElementsByClassName("nasheedCover")[0].src =
          nasheeds[nasheedIndex].coverPath;
        element.getElementsByClassName("mobBackCover")[0].src =
          nasheeds[nasheedIndex].coverPath;
        element.getElementsByClassName("nasheedName")[0].innerText =
          nasheeds[nasheedIndex].nasheedName;
        element.getElementsByClassName("originalLink")[0].href =
          nasheeds[nasheedIndex].originalLink;
        document.getElementById("length").innerText =
          nasheeds[nasheedIndex].nasheedDuration;
        nasheed.src = nasheeds[nasheedIndex].filePath;
        nasheed.currentTime = 0;
        nasheed.play();
        pauses.style.display = "unset";
        plays.style.display = "none";
      }
      if (x.key == "ArrowLeft") {
        nasheedIndex--;
        if (nasheedIndex < 0 && decision == 1) {
          nasheedIndex = numberofsongs - 1;
        }
        if (nasheedIndex < numberofsongs && decision == 0) {
          nasheedIndex = numberofnasheeds - 1;
        }
        //console.log(nasheedIndex);
        element.getElementsByClassName("nasheedCover")[0].src =
          nasheeds[nasheedIndex].coverPath;
        element.getElementsByClassName("mobBackCover")[0].src =
          nasheeds[nasheedIndex].coverPath;
        element.getElementsByClassName("nasheedName")[0].innerText =
          nasheeds[nasheedIndex].nasheedName;
        element.getElementsByClassName("originalLink")[0].href =
          nasheeds[nasheedIndex].originalLink;
        document.getElementById("length").innerText =
          nasheeds[nasheedIndex].nasheedDuration;
        nasheed.src = nasheeds[nasheedIndex].filePath;
        nasheed.currentTime = 0;
        nasheed.play();
        pauses.style.display = "unset";
        plays.style.display = "none";
      }
    });
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

decisiondiv.addEventListener("click",()=>{
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
  
});

// bar is updating with respect to nasheed time

let fillvalpercent;
let hasRun = 0;
let hasRun1 = 0;
decisiondiv.addEventListener("click", () => {
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
    // Timeline
    function timeNow() {
      let second = Math.floor(nasheed.currentTime);
      let minute = second / 60;
      if (second >= 60) {
        second = second - (60 * Math.floor(minute));
        if (minute < 10 && second < 10) {
          return "0" + Math.floor(minute).toString() + ":" + "0" + second.toString();
        }
        if (second < 10 && minute >= 10) {
          return Math.floor(minute).toString() + ":" + "0" + second.toString();
        }
        if (minute < 10 && second >= 10) {
          return "0" + Math.floor(minute).toString() + ":" + second.toString();
        }
      }
      if (minute < 10 && second < 10) {
        return "0" + Math.floor(minute).toString() + ":" + "0" + second.toString();
      }
      if (second < 10 && minute >= 10) {
        return Math.floor(minute).toString() + ":" + "0" + second.toString();
      }
      if (minute < 10 && second >= 10) {
        return "0" + Math.floor(minute).toString() + ":" + second.toString();
      }
    }
    currentTime.innerText = timeNow();
  });
});

// Changing bar will change nasheed current time

decisiondiv.addEventListener("click", () => {
  bar.addEventListener("change", () => {
    nasheed.currentTime = (bar.value * nasheed.duration) / 100;
    function timeNow() {
      let second = Math.round(nasheed.currentTime);
      let minute = second / 60;
      if (second > 60) {
        second = second - (60 * Math.floor(minute));
        if (minute < 10 && second < 10) {
          return "0" + Math.round(minute).toString() + ":" + "0" + second.toString();
        }
        if (second < 10 && minute > 10) {
          return Math.round(minute).toString() + ":" + "0" + second.toString();
        }
        if (minute < 10 && second > 10) {
          return "0" + Math.round(minute).toString() + ":" + second.toString();
        }
      }
      if (minute < 10 && second < 10) {
        return "0" + Math.round(minute).toString() + ":" + "0" + second.toString();
      }
      if (second < 10 && minute > 10) {
        return Math.round(minute).toString() + ":" + "0" + second.toString();
      }
      if (minute < 10 && second > 10) {
        return "0" + Math.round(minute).toString() + ":" + second.toString();
      }
    }
    currentTime.innerText = timeNow();
  });
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

decisiondiv.addEventListener("click", () => {
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

});

window.onbeforeunload = () => {
  window.location.reload();
}