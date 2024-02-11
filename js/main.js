const imgs = Array.from(document.querySelectorAll(".our-work .row >div"));
const lis = document.querySelectorAll(".our-work ul li");
let active = document.querySelector(".our-work ul .btn-primary");
let but = document.querySelector(".our-work button");

//Hide images
const numOfImg = imgs.length;
const numOfShow = 4;
for (let i = 0; i < numOfImg; i++) {
  if (i > numOfShow - 1) {
    // console.log(i);
    imgs[i].style.display = "none";
  }
}

//Display Show Button
if (numOfImg > numOfShow) {
  but.style.display = "block";
} else {
  but.style.display = "none";
}
lis.forEach((li) => {
  li.addEventListener("click", remove);
  li.addEventListener("click", mangeImg);
});

function remove() {
  lis.forEach((li) => {
    li.classList.remove("btn-primary");
    this.classList.add("btn-primary");
  });
}

function mangeImg() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  let select = document.querySelectorAll(this.dataset.cat);
  var numLiImgs = select.length;
  for (let j = 0; j < numLiImgs; j++) {
    if (j == numOfShow) {
      break;
    }
    select[j].style.display = "block";
  }
  if (numLiImgs > numOfShow) {
    but.style.display = "block";
  } else {
    but.style.display = "none";
  }
}

but.addEventListener("click", () => {
  lis.forEach((li) => {
    //select active list
    if (li.classList.contains("btn-primary")) {
      //select active images
      let activeImg = document.querySelectorAll(li.dataset.cat);
      //show all hidden images and hide button
      for (let img of activeImg) {
        img.style.display = "inline-block";
        but.style.display = "none";
      }
    }
  });
});
