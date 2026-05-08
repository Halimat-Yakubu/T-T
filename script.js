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

// ── COUNTDOWN ──
function updateCountdown() {
  const wedding = new Date('2026-11-18T15:00:00');
  const now = new Date();
  const diff = wedding - now;
  if (diff <= 0) {
    document.getElementById('cd-days').textContent = '0';
    document.getElementById('cd-hours').textContent = '0';
    document.getElementById('cd-mins').textContent = '0';
    document.getElementById('cd-secs').textContent = '0';
    document.getElementById('countdown-quip').textContent = "It's happening RIGHT NOW. Why are you on your phone?! 🎊";
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-days').textContent = String(days).padStart(2,'0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('cd-mins').textContent = String(mins).padStart(2,'0');
  document.getElementById('cd-secs').textContent = String(secs).padStart(2,'0');
}
updateCountdown();
setInterval(updateCountdown, 1000);
 

// ── SEATING DATA ──
const tables = [
  {
    id: 1, name: "Edinburgh", desc: "Where It All Began",
    quip: "You're at the table named after the city that started everything. There's a story here — it involves ice, zero skating ability, and one very bemused Scotsman.",
    guests: ["Adaeze Nwosu","Bolu Adesanya","Chiamaka Eze","Damilola Fashola","Emeka Okonkwo","Folasade Adeyemi","Gbenga Ajayi","Halima Yakubu","Ife Olatunji","Jide Okonkwo"]
  },
  {
    id: 2, name: "Lagos", desc: "Home is Where the Heart Is",
    quip: "Loud, warm, full of energy, and absolutely wonderful — just like everyone at this table. Tife's people.",
    guests: ["Kemi Badmus","Leke Soyinka","Morayo Adediran","Nkechi Obi","Obinna Nzeka","Patience Amadi","Qudus Lawal","Remi Adeola","Sade Afolabi","Tunde Alabi"]
  },
  {
    id: 3, name: "Abuja", desc: "Steady, Warm, Dependable",
    quip: "Like the capital itself — composed, impressive, and you always know where to find it. Just like the people sitting here.",
    guests: ["Uche Nwofor","Veronica Okeke","Wale Olusanya","Xola Mthembu","Yetunde Ogundimu","Zainab Musa","Abiodun Alabi","Blessing Nwachukwu","Chidi Igwe","Dolapo Akindele"]
  },
  {
    id: 4, name: "Glasgow", desc: "Wild Heart, Warm Soul",
    quip: "Spirited. Unashamedly itself. Always ready for a good time. This table gets the party started.",
    guests: ["Efosa Isibor","Funmilayo Olatunde","Grace Okwu","Hakeem Adewale","Ifeoma Chukwu","Jasper Adeyinka","Kola Adekunle","Laila Suleiman","Muyiwa Olawale","Ngozi Anyanwu"]
  },
  {
    id: 5, name: "Port Harcourt", desc: "Oil & Gold",
    quip: "Rich in spirit, richer in personality. If this table were a playlist, it would slap from the first track.",
    guests: ["Ola Akpan","Pamela Ekpo","Rotimi Oladele","Seun Animashaun","Tola Babatunde","Uchenna Okafor","Victor Nwosu","Wura Adesanya","Yemi Fashola","Zoe Ihejirika"]
  },
  {
    id: 6, name: "Stirling", desc: "Strong & Steady",
    quip: "Castle vibes. Solid, dependable, historically excellent. Just like the friendships represented at this table.",
    guests: ["Aaron Okonkwo","Bisi Ayanwale","Chisom Nnadi","David Okorie","Ella Osei","Folu Idowu","Gogo Amachree","Henrietta Esan","Ikechi Aneke","Joy Nwokolo"]
  },
  {
    id: 7, name: "Inverness", desc: "Far But Never Forgotten",
    quip: "You may have travelled the furthest to be here, but you've always been close to the couple's hearts. Welcome, and thank you.",
    guests: ["Kolade Ogunbiyi","Lola Adebayo","Michael Okafor","Nneka Ekwueme","Obiageli Obi","Peter Adesola","Queen Efeoghene","Ropo Oladunni","Steve Adewumi","Temi Olanrewaju"]
  }
];

// ── RENDER TABLES MAP ──
const grid = document.getElementById('tablesGrid');
tables.forEach(t => {
  const node = document.createElement('div');
  node.className = 'table-node';
  node.id = 'table-' + t.id;
  node.innerHTML = `
    <span class="t-num">Table ${t.id}</span>
    <span class="t-name">${t.name}</span>
    <span class="t-count">${t.guests.length} guests</span>
    <div class="table-tooltip">
      <strong>${t.name} — "${t.desc}"</strong>
      ${t.guests.slice(0,5).join('<br>')}${t.guests.length > 5 ? '<br>+ ' + (t.guests.length-5) + ' more' : ''}
    </div>
  `;
  grid.appendChild(node);
});

// ── FIND SEAT ──
function findSeat() {
  const name = document.getElementById('guestInput').value.trim().toLowerCase();
  const result = document.getElementById('seatResult');
  if (!name) return;
 
  let found = null;
  tables.forEach(t => {
    t.guests.forEach(g => {
      if (g.toLowerCase().includes(name) || name.includes(g.toLowerCase().split(' ')[0])) {
        found = t;
      }
    });
  });
 
  if (!found) {
    // Assign based on hash for unknown names
    let hash = 0;
    for (let c of name) hash += c.charCodeAt(0);
    found = tables[hash % tables.length];
  }
 
  document.getElementById('seatTableName').textContent = `Table ${found.id}: ${found.name}`;
  document.getElementById('seatTableDesc').textContent = `"${found.desc}"`;
  document.getElementById('seatTableQuip').textContent = found.quip;
  result.classList.add('visible');
 
  // Highlight on map
  document.querySelectorAll('.table-node').forEach(n => n.classList.remove('active'));
  const node = document.getElementById('table-' + found.id);
  if (node) {
    node.classList.add('active');
    node.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
 
document.getElementById('guestInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') findSeat();
});

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

// ── RSVP ──
function submitRSVP() {
  const name = document.getElementById('rsvp-name').value.trim();
  const attending = document.querySelector('input[name="attending"]:checked');
  if (!name || !attending) {
    alert("Just your name and attendance status — that's all we need to get started! 💛");
    return;
  }
 
  const isYes = attending.value === 'yes';
  const messages = {
    yes: [
      `${name}! You absolute legend. Your seat is confirmed, your dance moves are expected, and Tife is already planning to drag you to the floor before 9PM.`,
      `That's what we're talking about, ${name}! You're in. Now start mentally rehearsing something to say when they ask for speeches. (They will ask.)`,
      `${name} is coming! Toki has noted this with quiet but genuine excitement. Tife has already shrieked.`
    ],
    no: [
      `${name}, we understand — truly. But we will think of you when the music gets good, and we will save you a piece of cake. Metaphorically.`,
      `This is deeply felt, ${name}. We're sending you love from across the distance. And yes, Tife will definitely call you during the reception.`
    ]
  };
 
  const pool = isYes ? messages.yes : messages.no;
  const msg = pool[Math.floor(Math.random() * pool.length)];
 
  document.getElementById('rsvpForm').style.display = 'none';
  const success = document.getElementById('rsvpSuccess');
  success.classList.add('visible');
  document.getElementById('rsvpSuccessMsg').textContent = msg;
  document.getElementById('rsvpSuccess').querySelector('.big-emoji').textContent = isYes ? '🎉' : '🥺';
  document.getElementById('rsvpSuccess').querySelector('h3').textContent = isYes ? "You're confirmed!" : "We'll miss you.";
}
