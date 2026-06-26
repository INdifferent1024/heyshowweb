document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const heroSection = document.getElementById('hero');

  // === NAVBAR VISIBILITY ===
  const heroObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        navbar.classList.remove('visible');
      } else {
        navbar.classList.add('visible');
      }
    },
    { threshold: 0.3 }
  );
  heroObserver.observe(heroSection);

  // === NAVBAR DARK MODE (download section) ===
  const downloadSection = document.getElementById('download');
  const darkObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        navbar.classList.add('dark');
      } else {
        navbar.classList.remove('dark');
      }
    },
    { threshold: 0.5 }
  );
  darkObserver.observe(downloadSection);

  // === SCROLL ANIMATIONS ===
  const animatedElements = document.querySelectorAll(
    '.anim-fade-up, .anim-fade-scale, .anim-slide-right, .anim-slide-left, .anim-slide-up, .anim-scale-in'
  );

  const animObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );

  animatedElements.forEach((el) => animObserver.observe(el));

  // === PIN ANIMATION ===
  const pinSection = document.querySelector('.pin-section');
  if (pinSection) {
    const pinObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animatePin();
        }
      },
      { threshold: 0.5 }
    );
    pinObserver.observe(pinSection);
  }

  function animatePin() {
    const pin1 = document.querySelector('.pin-1');
    const pin2 = document.querySelector('.pin-2');
    const pin3 = document.querySelector('.pin-3');

    if (!pin1 || !pin2 || !pin3) return;

    // Reset
    pin1.style.transform = 'translateY(120px) scale(0.9)';
    pin1.style.opacity = '0';
    pin2.style.transform = 'translateY(80px) scale(0.85)';
    pin2.style.opacity = '0';
    pin3.style.transform = 'translateY(40px) scale(0.8)';
    pin3.style.opacity = '0';

    setTimeout(() => {
      pin3.style.transform = 'translateY(150px) scale(0.9)';
      pin3.style.opacity = '0.4';
    }, 200);

    setTimeout(() => {
      pin2.style.transform = 'translateY(80px) scale(0.95)';
      pin2.style.opacity = '0.7';
    }, 400);

    setTimeout(() => {
      pin1.style.transform = 'translateY(0) scale(1)';
      pin1.style.opacity = '1';
    }, 600);
  }

  // === REORDER ANIMATION ===
  const reorderSection = document.querySelector('.reorder-section');
  if (reorderSection) {
    const reorderObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateReorder();
        }
      },
      { threshold: 0.5 }
    );
    reorderObserver.observe(reorderSection);
  }

  function animateReorder() {
    const items = document.querySelectorAll('.reorder-item');
    items.forEach((item, i) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      setTimeout(() => {
        item.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 100 + i * 120);
    });
  }

  // === BLUR ANIMATION ===
  const blurSection = document.querySelector('.blur-section');
  if (blurSection) {
    const blurOverlay = document.querySelector('.blur-overlay');
    if (blurOverlay) {
      const blurObserver = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            blurOverlay.style.transition = 'backdrop-filter 1.5s ease, background 1.5s ease';
            blurOverlay.style.backdropFilter = 'blur(0px)';
            blurOverlay.style.background = 'rgba(255, 255, 255, 0)';
          } else {
            blurOverlay.style.backdropFilter = 'blur(16px)';
            blurOverlay.style.background = 'rgba(255, 255, 255, 0.15)';
          }
        },
        { threshold: 0.5 }
      );
      blurObserver.observe(blurSection);
    }
  }
});
