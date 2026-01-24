// Skills Chart - ES6+

function createSkillsChart() {
  const canvas = document.getElementById('skillsChart');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: [
        'Test Automation & QA',
        'Data Analytics',
        'Cloud & DevOps',
        'Web Development',
        'Data Engineering',
        'Programming',
      ],
      datasets: [
        {
          data: [25, 22, 20, 15, 10, 8],
          backgroundColor: [
            'rgba(59, 130, 246, 0.8)',
            'rgba(16, 185, 129, 0.8)',
            'rgba(139, 92, 246, 0.8)',
            'rgba(249, 115, 22, 0.8)',
            'rgba(236, 72, 153, 0.8)',
            'rgba(6, 182, 212, 0.8)',
          ],
          borderWidth: 2,
          borderColor: '#fff',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding: 15,
            font: { size: 12 },
          },
        },
      },
      animation: {
        animateRotate: true,
        duration: 1500,
      },
    },
  });
}

document.addEventListener('DOMContentLoaded', createSkillsChart);

export { createSkillsChart };
