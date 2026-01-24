// Certification Progress Animation - ES6+

function animateCompetencyBars() {
  const observerOptions = {
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.competency-fill');
        fills.forEach((fill, index) => {
          setTimeout(() => {
            const targetWidth = fill.getAttribute('data-width') || fill.style.width;
            fill.style.width = '0%';
            setTimeout(() => {
              fill.style.transition = 'width 1.5s ease-out';
              fill.style.width = targetWidth;
              fill.style.opacity = '1';
            }, 50);
          }, index * 100);
        });
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const competencyGrid = document.querySelector('.competency-grid');
  if (competencyGrid) {
    observer.observe(competencyGrid);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  animateCompetencyBars();
  console.log('Certifications page initialized!');
});

export { animateCompetencyBars };
