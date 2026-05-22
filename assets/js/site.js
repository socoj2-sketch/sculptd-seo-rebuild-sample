const cards = document.querySelectorAll('[data-tilt]');
for (const card of cards) {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
}
