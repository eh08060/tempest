const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
let slideIndex = 0;

// 이미지 파일 이름의 규칙과 이미지 파일 수
const imageFilePattern = "book";
const totalImages = 18;

// 이미지 슬라이더 초기화
for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement("img");
  img.src = `asset/${imageFilePattern}${i}.jpg`;
  slider.appendChild(img);
}

// 이벤트 리스너 추가
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

function nextSlide() {
  if (slideIndex < totalImages - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  updateSlider();
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = totalImages - 1;
  }
  updateSlider();
}

function updateSlider() {
  const translateX = -slideIndex * 100;
  slider.style.transform = `translateX(${translateX}%)`;
}
