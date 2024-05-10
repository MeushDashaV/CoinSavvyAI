window.onload = function () {
  const videoBlocks = document.querySelectorAll('.video_block');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  let currentIndex = 0;
  let timer;

  // Функція для оновлення видимості блоків
  function updateVisibleBlocks() {
    videoBlocks.forEach((block, index) => {
      if (index >= currentIndex && index < currentIndex + 3) {
        block.style.display = 'flex';
      } else {
        block.style.display = 'none';
      }
    });
  }

  function moveRight() {
    if (currentIndex < videoBlocks.length - 3) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateVisibleBlocks();
  }

  function moveLeft() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = videoBlocks.length - 3;
    }
    updateVisibleBlocks();
  }

  // Функція для автоматичної прокрутки каруселі
  function autoPlayCarousel() {
    timer = setInterval(moveRight, 5000);
  }

  // Обробники подій для стрілок
  prevButton.addEventListener('click', moveLeft);
  nextButton.addEventListener('click', moveRight);

  // Викликаємо функцію для початкової настройки видимості блоків
  updateVisibleBlocks();

  // Включаємо автоматичну прокрутку каруселі
  autoPlayCarousel();

  // Зупиняємо автоматичну прокрутку каруселі при наведенні миші
  document
    .querySelector('.video-carousel')
    .addEventListener('mouseenter', function () {
      clearInterval(timer);
    });

  // Поновлюємо автоматичну прокрутку каруселі при відведенні миші
  document
    .querySelector('.video-carousel')
    .addEventListener('mouseleave', function () {
      autoPlayCarousel();
    });
};
