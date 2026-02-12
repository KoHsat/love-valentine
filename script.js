const correctPassword = "mee mee";

const totalPhotos = 60;

let heartInterval;
let photoInterval;

function unlock() {
  const input = document.getElementById("password").value.toLowerCase();
  const error = document.getElementById("error");

  if (input === correctPassword) {
    page1.classList.add("hidden");
    page2.classList.remove("hidden");
  } else {
    error.style.display = "block";
  }
}

function goToGallery() {
  page2.classList.add("hidden");
  page3.classList.remove("hidden");

  // Stop floating hearts
  clearInterval(heartInterval);

  // Start music
  document.getElementById("bgMusic").play();

  // Start floating background photos
  startFloatingPhotos();
}

/* ❤️ Floating Hearts (Page 1 & 2) */
function startFloatingHearts() {
  heartInterval = setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerText = "I love you the most❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);

  }, 500);
}

/* 📸 Floating Photos (Page 3) */
function startFloatingPhotos() {
  photoInterval = setInterval(() => {
    const img = document.createElement("img");
    img.classList.add("floating-img");

    const randomNum = Math.floor(Math.random() * totalPhotos) + 1;
    img.src = `${randomNum}.jpg`;

    img.style.left = Math.random() * 100 + "vw";
    img.style.animationDuration = (8 + Math.random() * 5) + "s";

    document.getElementById("floatingPhotos").appendChild(img);

    setTimeout(() => {
      img.remove();
    }, 13000);

  }, 800);
}

/* Start hearts immediately on load */
startFloatingHearts();
