document.addEventListener("DOMContentLoaded", () => {
  const banners = document.querySelectorAll('.banner-card');

  banners.forEach(banner => {
    const images = JSON.parse(banner.dataset.images);
    let index = 0;
    let interval;

    // Show first image
    banner.style.backgroundImage = `url(${images[index]})`;

    // Hover → start slideshow
    banner.addEventListener("mouseenter", () => {
      interval = setInterval(() => {
        index = (index + 1) % images.length;
        banner.style.backgroundImage = `url(${images[index]})`;
      }, 2000);
    });

    // Exit → stop slideshow
    banner.addEventListener("mouseleave", () => {
      clearInterval(interval);
    });

    // Click → manually go next
    banner.addEventListener("click", () => {
      index = (index + 1) % images.length;
      banner.style.backgroundImage = `url(${images[index]})`;
    });
  });
});
