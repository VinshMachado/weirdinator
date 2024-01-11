let at = document.querySelector("#a");
let bt = document.querySelector("#b");
let ct = document.querySelector("#c");
let dt = document.querySelector("#d");
let et = document.querySelector("#e");

let btnn = document.querySelector("#btn");
//a things///
let a;
btnn.addEventListener("click", function () {
  //random numbers//
  a = Math.floor(Math.random() * 10 + 1);
  at.style.animation = "none";
  at.clientHeight;
  at.style.animation = null;
  at.style.animationName = "slidein";
  at.style.animationDuration = "1s";

  if (a == 1) {
    at.innerText = "He";
  } else if (a == 2) {
    at.innerText = "That guy";
  } else if (a == 3) {
    at.innerText = "She";
  } else if (a == 4) {
    at.innerText = "Dogy";
  } else if (a == 5) {
    at.innerText = "Monkey";
  } else if (a == 6) {
    at.innerText = "Cat";
  } else if (a == 7) {
    at.innerText = "Hitlar";
  } else if (a == 8) {
    at.innerText = "Roger";
  } else if (a == 9) {
    at.innerText = "Roldan";
  } else if (a == 10) {
    at.innerText = "Sion";
  } else {
    at.innerText = "";
  }
});
let b;
btnn.addEventListener("click", function () {
  //random numbers//
  b = Math.floor(Math.random() * 10 + 1);
  bt.style.animation = "none";
  bt.clientHeight;
  bt.style.animation = null;
  bt.style.animationName = "slidein";
  bt.style.animationDuration = "1s";

  if (b == 1) {
    bt.innerText = "Likes";
  } else if (b == 2) {
    bt.innerText = "Hates";
  } else if (b == 3) {
    bt.innerText = "Kicked";
  } else if (b == 4) {
    bt.innerText = "Punched";
  } else if (b == 5) {
    bt.innerText = "Ate";
  } else if (b == 6) {
    bt.innerText = "Hit";
  } else if (b == 7) {
    bt.innerText = "Cooked";
  } else if (b == 8) {
    bt.innerText = "Danced on";
  } else if (b == 9) {
    bt.innerText = "Steped on";
  } else if (b == 10) {
    bt.innerText = "Picked";
  } else {
    bt.innerText = "";
  }
});
let c;
btnn.addEventListener("click", function () {
  //random numbers//
  c = Math.floor(Math.random() * 10 + 1);
  ct.style.animation = "none";
  ct.clientHeight;
  ct.style.animation = null;
  ct.style.animationName = "slidein";
  ct.style.animationDuration = "1s";

  if (c == 1) {
    ct.innerText = "Roger's";
  } else if (c == 2) {
    ct.innerText = "Hitlar's";
  } else if (c == 3) {
    ct.innerText = "Osama bin Ladin's";
  } else if (c == 4) {
    ct.innerText = "Obama's";
  } else if (c == 5) {
    ct.innerText = "Austin's";
  } else if (c == 6) {
    ct.innerText = "Speeds";
  } else if (c == 7) {
    ct.innerText = "Ronaldo's";
  } else if (c == 8) {
    ct.innerText = "Messi's";
  } else if (c == 9) {
    ct.innerText = "Monkey's";
  } else if (c == 10) {
    ct.innerText = "Dogy's";
  } else {
    ct.innerText = " ";
  }
});
let d;
btnn.addEventListener("click", function () {
  //random numbers//
  d = Math.floor(Math.random() * 10 + 1);
  console.log(a);
  dt.style.animation = "none";
  dt.clientHeight;
  dt.style.animation = null;
  dt.style.animationName = "slidein";
  dt.style.animationDuration = "1s";

  if (d == 1) {
    dt.innerText = "Dog";
  } else if (d == 2) {
    dt.innerText = "Cat";
  } else if (d == 3) {
    dt.innerText = "Chair";
  } else if (d == 4) {
    dt.innerText = "Car";
  } else if (d == 5) {
    dt.innerText = "Hair";
  } else if (d == 6) {
    dt.innerText = "Pig";
  } else if (d == 7) {
    dt.innerText = "Son";
  } else if (d == 8) {
    dt.innerText = "Dad";
  } else if (d == 9) {
    dt.innerText = "Mom ";
  } else if (d == 10) {
    dt.innerText = "Wife";
  } else {
    dt.innerText = "";
  }
});
let e;
btnn.addEventListener("click", function () {
  //random numbers//
  e = Math.floor(Math.random() * 10 + 1);
  et.style.animation = "none";
  et.clientHeight;
  et.style.animation = null;
  et.style.animationName = "slidein";
  et.style.animationDuration = "1s";

  if (e == 1) {
    et.style.backgroundImage = "url('m_6bf4c78b.webp')";
  } else if (e == 2) {
    et.style.backgroundImage =
      "url('confused-guy-meme-content-2018-652x367.jpg')";
  } else if (e == 3) {
    et.style.backgroundImage = "url('hq720.jpg')";
  } else if (e == 4) {
    et.style.backgroundImage =
      "url('_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg')";
  } else if (e == 5) {
    et.style.backgroundImage = "url('images.png')";
  } else if (e == 6) {
    et.style.backgroundImage = "url('maxresdefault.jpg')";
  } else if (e == 7) {
    et.style.backgroundImage = "url('landscape_comp.jpeg')";
  } else if (e == 8) {
    et.style.backgroundImage = "url('Cute-Cat.jpg')";
  } else if (e == 9) {
    et.style.backgroundImage = "url('c192170f01b245a1a180eb77aa6bb40f.png')";
  } else if (e == 10) {
    et.style.backgroundImage = "url('crying.jpg')";
  } else {
    et.style.backgroundImage =
      "url('64e805a5af20826aeb6a4915-why-are-you-gay-sticker-graphic-car.jpg')";
  }
});
