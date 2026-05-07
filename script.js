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
  dot.style.background = '#4b0011'
  dotsContainer2.appendChild(dot);
}

// ── FAQ ──
const faqs = [
  {
    q: "Is it an open bar?",
    a: "We're not going to dignify that with a response. ...Yes. Obviously yes. This is Tife and Toki's wedding, not a book club."
  },
  {
    q: "Are children welcome?",
    a: "The little ones are very welcome at the ceremony. For the reception, we've made it an adult affair — so you can eat, drink, and embarrass yourself on the dancefloor without anyone watching. You're welcome."
  },
  {
    q: "Can I bring a gift?",
    a: "Your presence is genuinely the gift. But if you absolutely insist — and some of you will insist — a contribution to the honeymoon fund or home fund would be cherished. Just no ice skates. We've retired that chapter."
  },
  {
    q: "What if I can't skate either?",
    a: "There will be no ice skating at this wedding. Tife has caused enough chaos on ice for one lifetime. The dance floor, however, is fair game."
  },
  {
    q: "What's the parking situation?",
    a: "The Balmoral has a car park nearby. But honestly, it's Edinburgh — get a cab, take the night bus, or stay at the hotel. November roads at midnight with three glasses of champagne in you is nobody's finest hour."
  },
  {
    q: "Will there be a photographer? Can I take pictures?",
    a: "We have a wonderful photographer who has been briefed to capture everything. During the ceremony, we ask that you be present and fully in the moment — phones down, hearts open. The cocktail hour and reception are fully camera-friendly. Tag us."
  },
  {
    q: "How long will the ceremony be?",
    a: "Short, sweet, and deeply meaningful. About 40 minutes. Toki planned it. It will start exactly on time. Tife agreed to this, which is its own kind of miracle."
  },
  {
    q: "I'm not on the guest list. Can I come?",
    a: "This is a very small wedding of 70 people. Every seat was chosen with love and deliberate intention. So... probably text Tife. She'd invite the whole world if she could."
  }
];
 
const faqList = document.getElementById('faqList');
faqs.forEach((f, i) => {
  const item = document.createElement('div');
  item.className = 'faq-item';
  item.innerHTML = `
    <div class="faq-q" onclick="toggleFAQ(${i})">
      <span>${f.q}</span>
      <span class="arrow">▾</span>
    </div>
    <div class="faq-a" id="faq-a-${i}">${f.a}</div>
  `;
  faqList.appendChild(item);
});
 
function toggleFAQ(i) {
  const q = faqList.querySelectorAll('.faq-q')[i];
  const a = document.getElementById('faq-a-' + i);
  q.classList.toggle('open');
  a.classList.toggle('open');
}


