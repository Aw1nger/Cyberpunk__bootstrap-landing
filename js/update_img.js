function updateImages() {
  const images = document.querySelectorAll('img[data-src-sm][data-src-md][data-src-lg]');

  images.forEach(image => {
    const defaultImage = image.getAttribute('data-src-sm');
    const mediumImage = image.getAttribute('data-src-md');
    const largeImage = image.getAttribute('data-src-lg');

    // Генерируем случайный параметр для URL изображения
    const randomParam = Date.now();

    if (window.innerWidth < 768) {
      image.src = defaultImage + `?v=${randomParam}`;
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
      image.src = mediumImage + `?v=${randomParam}`;
    } else if (window.innerWidth > 1024) {
      image.src = largeImage + `?v=${randomParam}`;
    }
  });
}

// Вызываем функцию для установки правильных изображений при загрузке страницы
updateImages();

// Слушаем событие изменения размера окна
window.addEventListener('resize', updateImages);
