const backToTopButton = document.getElementById("backToTop");

// בלחיצה - גלילה חלקה לראש הדף
backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// הצגת הכפתור רק אחרי גלילה מסוימת
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

const images = [
  "imgs/רויאל סדנאות קיץ.jpg",
  "imgs/twelve.JPG",
  "imgs/clowns2.JPG",
  "imgs/baby-boy.JPG",
  "imgs/heart2.JPG",
  "imgs/baby-congrat.JPG",
  "imgs/prepare.jpg",
  "imgs/baby-strollers.JPG",
  "imgs/birthday.JPG",
  "imgs/prepare4.JPG",
  "imgs/clowns.JPG",
  "imgs/fox.jpg",
  "imgs/heart.jpg",
  "imgs/prepare2.JPG",
  "imgs/baby-congrat2.JPG",
  "imgs/prepare3.JPG",
  "imgs/snow.jpg",
  "imgs/heart3.JPG",
  "imgs/baby-girl.JPG",
];

const gallery = document.getElementById("gallery");
const scrollAmount = 270; // התאמה לרוחב תמונה

function loadGallery() {
  // הכנס תמונות פעמיים כדי ליצור תחושה מעגלית
  for (let i = 0; i < 2; i++) {
    images.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      gallery.appendChild(img);
    });
  }
}

function scrollGallery(direction) {
  gallery.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });

  // בדיקה האם עברנו את הסוף - ונחזור להתחלה
  setTimeout(() => {
    if (
      gallery.scrollLeft + gallery.clientWidth >=
      gallery.scrollWidth - scrollAmount
    ) {
      gallery.scrollLeft = 0;
    } else if (gallery.scrollLeft <= 0 && direction < 0) {
      gallery.scrollLeft = gallery.scrollWidth / 2;
    }
  }, 500);
}

// גלילה אוטומטית
let autoScroll = setInterval(() => {
  scrollGallery(1);
}, 3000);

// עצירת הגלילה האוטומטית אם המשתמש לוחץ
document.querySelectorAll(".arrow").forEach((arrow) => {
  arrow.addEventListener("click", () => {
    clearInterval(autoScroll);
  });
});

// טען את התמונות
loadGallery();

// תצוגת תמונה מוגדלת
// פותח את התמונה
function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

// סוגר את התמונה
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

// מאזין לכל התמונות בגלריה
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("#gallery img").forEach((img) => {
    img.addEventListener("click", () => {
      openLightbox(img.src);
    });
  });
});
