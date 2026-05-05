const dotsContainer = document.getElementById('iceDots');
for (let i = 0; i < 30; i++) {
  const dot = document.createElement('div');
  dot.className = 'ice-dot';
  dot.style.left = Math.random() * 100 + '%';
  dot.style.top = Math.random() * 100 + '%';
  dot.style.animationDelay = (Math.random() * 3) + 's';
  dot.style.animationDuration = (2 + Math.random() * 3) + 's';
  dotsContainer.appendChild(dot);
}

const dotsContainer2 = document.getElementById('countdownDots');
for (let i = 0; i < 30; i++) {
  const dot = document.createElement('div');
  dot.className = 'ice-dot';
  dot.style.left = Math.random() * 100 + '%';
  dot.style.top = Math.random() * 100 + '%';
  dot.style.animationDelay = (Math.random() * 3) + 's';
  dot.style.animationDuration = (2 + Math.random() * 3) + 's';
  dot.style.background = '#102b1f'
  dotsContainer2.appendChild(dot);
}

