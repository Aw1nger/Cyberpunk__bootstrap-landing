function updateImageSrc() {
  const image = document.getElementById('buy__img-side'); // Получаем элемент изображения
  const defaultImg = image.getAttribute('data-src');
  const mediumImg = image.getAttribute('data-src-md');

  // Получаем текущую ширину окна браузера
  const windowWidth = window.innerWidth;

  // Определяем, какое изображение использовать на основе ширины окна
  if (windowWidth >= 1024 && windowWidth < 1400) {
    image.src = mediumImg;
  } else {
    image.src = defaultImg;
  }
}

// Вызываем функцию для установки правильного изображения при загрузке страницы
updateImageSrc();

// Слушаем событие изменения размера окна
window.addEventListener('resize', updateImageSrc);
