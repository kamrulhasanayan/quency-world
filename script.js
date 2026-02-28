document.addEventListener("DOMContentLoaded", () => {
const overlay = document.getElementById("overlay");
const panelBody = document.getElementById("panel-body");

// DIRECT listeners instead of delegation
document.querySelectorAll(".star").forEach(btn => {
  btn.addEventListener("click", function(e) {
    document.querySelectorAll(".star").forEach(btn => {

  btn.addEventListener("click", function(e) {

    e.preventDefault();

    const panel = this.dataset.panel;
    const link = this.dataset.link;

    if (link) {
      window.open(link, "_blank");
      return;
    }

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";

    if (panel === "music") {
      panelBody.innerHTML = renderMusicSections();

      document.querySelectorAll(".music-item").forEach(item => {
        item.addEventListener("click", function () {
          const link = this.dataset.link;
          if (link && link !== "#") {
            window.open(link, "_blank");
          }
        });
      });
    }

  });

});
    e.stopPropagation();

    const panel = this.dataset.panel;
    const link = this.dataset.link;

    if (link) {
      window.open(link, "_blank");
      return;
    }

    overlay.classList.add("active");





    
    if (panel === "about") {
      panelBody.innerHTML = `<h2>About Quincy</h2><p>Content coming soon.</p>`;
    }

    if (panel === "contact") {
  panelBody.innerHTML = `
    <h2>Contact</h2>

    <div class="contact-wrapper">
      <span class="contact-email" id="emailText">
        Qontact@frequincy.com
      </span>

      <button class="copy-btn" id="copyEmail">
        Copy
      </button>
    </div>
  `;

  // Copy functionality
  document.getElementById("copyEmail").addEventListener("click", function () {
    const email = document.getElementById("emailText").innerText;

    navigator.clipboard.writeText(email).then(() => {
      this.innerText = "Copied!";
      this.classList.add("copied");

      setTimeout(() => {
        this.innerText = "Copy";
        this.classList.remove("copied");
      }, 1500);
    });
  });
}


const musicLibrary = {
  albums: [
    { title: "ELEVATED COMEDOWN", link: "#" },
    { title: "RAISING KANAN", link: "#" },
    { title: "LOWKEY BUT LIT", link: "#" },
    { title: "PERFECT IN MY EYES", link: "#" }
  ],

  singles: [
    { title: "ON YOUR TIME", link: "https://Frequincy.lnk.to/OnYourTime", latest: true },
    { title: "SEND ME THE ADDY", link: "https://Frequincy.lnk.to/SendMeTheAddy" },
    { title: "STUPID", link: "https://Frequincy.lnk.to/Stupid" },

    { title: "DAY & NIGHT", link: "#" },
    { title: "STAY AWHILE", link: "#" },
    { title: "JETTY", link: "#" },
    { title: "SCARY MOVIES", link: "#" },
    { title: "ON YO AZZ!", link: "#" },
    { title: "ESC.", link: "#" },
    { title: "AYE YO REMIX", link: "#" },
    { title: "AYE YO", link: "#" },
    { title: "NO STRESS", link: "#" },
    { title: "HENNESSY", link: "#" },
    { title: "OPTIONS (FEAT. KING COMBS)", link: "#" },
    { title: "SPECIAL", link: "#" },
    { title: "COMING OFF STRONG (VIBEZ IS PRIVATE)", link: "#" },
    { title: "COMING OFF STRONG", link: "#" },
    { title: "DEVOUR", link: "#" },
    { title: "SORRY", link: "#" },
    { title: "SNUGGLE UP", link: "#" },
    { title: "YOU’RE CRAZY I’M FINE", link: "#" },
    { title: "DON’T KNOW NOTHING", link: "#" },
    { title: "BLACK LINGERIE", link: "#" },
    { title: "WHAT YOU RAPPIN’ FOR?", link: "#" },
    { title: "SEVENTEEN", link: "#" },
    { title: "LATE NIGHT FLEX", link: "#" },
    { title: "BLUE DOT", link: "#" },
    { title: "RECORD STRAIGHT", link: "#" },
    { title: "EXOTIC (FEAT. G-EAZY)", link: "#" },
    { title: "FRIENDS FIRST (FEAT. FRENCH MONTANA)", link: "#" }
  ],

  specialReleases: [
    { title: "SMQKE", link: "#" },
    { title: "THIS HOLIDAY", link: "#" },
    { title: "HAPPY BIRTHDAY TO ME", link: "#" },
    { title: "CHRISTMAS TIME", link: "#" }
  ],

  featuredOn: [
    { title: "GOFUNDME (MAURICE MOORE FT. QUINCY)", link: "#" },
    { title: "FOR A LONG TIME (STAR PITCHEE FT. QUINCY)", link: "#" }
  ]
};

function renderMusicSections() {
  let html = `<h2>Music</h2>`;

  Object.keys(musicLibrary).forEach(section => {

    const sectionTitle = section
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());

    html += `
      <div class="music-section">
        <h3 class="music-section-title">${sectionTitle}</h3>
        <div class="music-grid">
    `;

    musicLibrary[section].forEach(item => {
      html += `
        <div class="music-item ${item.latest ? "latest" : ""}"
             data-link="${item.link}">
          ${item.latest ? '<span class="latest-badge">LATEST</span>' : ""}
          <span>${item.title}</span>
        </div>
      `;
    });

    html += `</div></div>`;
  });

  return html;
}



    if (panel === "music") {
  panelBody.innerHTML = `<h2>Music</h2>
    <div class="social-grid">
      <a class="social-btn" href="https://frequincy.lnk.to/QuincyAppleMusic" target="_blank">Apple Music</a>
      <a class="social-btn" href="https://frequincy.lnk.to/QYTMUSIC" target="_blank">YouTube Music</a>
      <a class="social-btn" href="https://frequincy.lnk.to/QuincySpotify" target="_blank">Spotify</a>
      <a class="social-btn" href="https://Frequincy.lnk.to/QuincyTidal" target="_blank">Tidal</a>
    </div>
  `;
}


   if (panel === "socials") {
  panelBody.innerHTML = `
    <h2>Socials</h2>

    <div class="social-grid">

      <a class="social-btn" href="https://frequincy.lnk.to/YouTube" target="_blank">
        <svg viewBox="0 0 24 24"><path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.9 2.5 12 2.5 12 2.5h-.1s-4.9 0-8.2.4c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S0 8.1 0 10v2c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1 1.9.2 8.3.4 8.3.4s4.9 0 8.2-.4c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-2c0-1.9-.2-3.8-.2-3.8zM9.5 14.5v-5l5 2.5-5 2.5z"/></svg>
        <span>YouTube</span>
      </a>

      <a class="social-btn" href="https://www.snapchat.com/add/quincy/" target="_blank">
        <svg viewBox="0 0 24 24"><path d="M12 2c2.2 0 4 1.8 4 4v1.4c0 .4.3.7.7.8 1 .2 2.3.8 2.3 1.8 0 .7-.6 1.3-1.3 1.5-.3.1-.5.4-.4.7.3 1 .8 2.2 1.7 2.7.4.2.6.7.4 1.1-.3.7-1.2.8-2.1.7-.4 0-.8.2-1 .6-.4.7-1.1 1.4-2.3 1.4s-1.9-.7-2.3-1.4c-.2-.4-.6-.6-1-.6-.9.1-1.8 0-2.1-.7-.2-.4 0-.9.4-1.1.9-.5 1.4-1.7 1.7-2.7.1-.3-.1-.6-.4-.7-.7-.2-1.3-.8-1.3-1.5 0-1 1.3-1.6 2.3-1.8.4-.1.7-.4.7-.8V6c0-2.2 1.8-4 4-4z"/></svg>
        <span>Snapchat</span>
      </a>

      <a class="social-btn" href="https://tiktok.com/@quincy" target="_blank">
        <svg viewBox="0 0 24 24"><path d="M21 8v4a8 8 0 1 1-8-8h2v3a3 3 0 1 0 3 3V8h3z"/></svg>
        <span>TikTok</span>
      </a>

      <a class="social-btn" href="https://instagram.com/quincy" target="_blank">
        <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/></svg>
        <span>Instagram</span>
      </a>

      <a class="social-btn" href="https://twitter.com/quincy" target="_blank">
        <svg viewBox="0 0 24 24"><path d="M22 5.9c-.8.3-1.6.5-2.4.6.9-.5 1.6-1.3 1.9-2.2-.8.5-1.8.9-2.8 1.1A4.2 4.2 0 0 0 11 8.3c0 .3 0 .6.1.9-3.5-.2-6.7-1.8-8.8-4.3-.4.6-.6 1.3-.6 2 0 1.4.7 2.6 1.8 3.3-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.2 4.1-.3.1-.7.2-1.1.2-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8A8.5 8.5 0 0 1 2 18.5 12 12 0 0 0 8.5 20c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2-2.1z"/></svg>
        <span>Twitter</span>
      </a>

      <a class="social-btn" href="https://www.twitch.tv/thisisnotquincy" target="_blank">
        <svg viewBox="0 0 24 24"><path d="M4 2h16v12l-4 4h-4l-2 2h-2v-2H4z"/></svg>
        <span>Twitch</span>
      </a>

    </div>
  `;
}

  });
});

// Close overlay
document.getElementById("close").addEventListener("click", () => {
  overlay.classList.remove("active");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") overlay.classList.remove("active");
});



const musicData = [
  {
    title: "Quincy - on your time",
    artwork: "https://mocksurl.com/assets/uploads/mocks/1-artwork_440x440__2_.jpg?629",
    link: "http://Frequincy.lnk.to/OnYourTime"
  },
  {
    title: "Quincy - Send Me The Addy",
    artwork: "https://mocksurl.com/assets/uploads/mocks/51-artwork_440x440__1_.jpg?957",
    link: "https://Frequincy.lnk.to/SendMeTheAddy"
  },
  {
    title: "Quincy - Stupid",
    artwork: "https://mocksurl.com/assets/uploads/mocks/7-artwork_440x440.jpg?930",
    link: "http://Frequincy.lnk.to/Stupid"
  },
  {
    title: "ELEVATED COMEDOWN",
    artwork: "https://mocksurl.com/assets/uploads/mocks/7-artwork_440x440.jpg?930",
    link: "http://Frequincy.lnk.to/Stupid"
  },
  {
    title: "RAISING KANAN",
    artwork: "https://mocksurl.com/assets/uploads/mocks/7-artwork_440x440.jpg?930",
    link: "http://Frequincy.lnk.to/Stupid"
  },
  {
    title: "STUPID",
    artwork: "https://mocksurl.com/assets/uploads/mocks/7-artwork_440x440.jpg?930",
    link: "http://Frequincy.lnk.to/Stupid"
  },
  {
    title: "LOWKEY BUT LIT",
    artwork: "https://mocksurl.com/assets/uploads/mocks/7-artwork_440x440.jpg?930",
    link: "http://Frequincy.lnk.to/Stupid"
  },
  {
    title: "PERFECT IN MY EYES",
    artwork: "https://mocksurl.com/assets/uploads/mocks/7-artwork_440x440.jpg?930",
    link: "http://Frequincy.lnk.to/Stupid"
  }
];

const musicModal = document.getElementById("musicModal");
const carousel = document.querySelector(".music-carousel");

musicData.forEach(item => {
  const card = document.createElement("div");
  card.className = "music-card";
  card.innerHTML = `
    <img src="${item.artwork}">
    <span>${item.title}</span>
  `;
  card.onclick = () => window.open(item.link, "_blank");
  carousel.appendChild(card);
});

/* Open modal from your MUSIC button */
document.querySelector('[data-panel="music"]').addEventListener("click", () => {
  musicModal.classList.add("active");
  document.body.style.overflow = "hidden";
});





/* Close logic */
document.querySelector(".music-close").onclick = closeMusic;
document.querySelector(".music-modal-backdrop").onclick = closeMusic;

function closeMusic() {
  musicModal.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeMusic();
});

/* Arrow scrolling */
document.querySelector(".carousel-arrow.left").onclick = () =>
  carousel.scrollBy({ left: -300, behavior: "smooth" });
if (panel === "music") {
  panelBody.innerHTML = renderMusicSections();

  document.querySelectorAll(".music-item").forEach(item => {
    item.addEventListener("click", function () {
      const link = this.dataset.link;
      if (link && link !== "#") {
        window.open(link, "_blank");
      }
    });
  });
}
document.querySelector(".carousel-arrow.right").onclick = () =>
  carousel.scrollBy({ left: 300, behavior: "smooth" });

});


if(panel==="videos"){
  panelBody.innerHTML = `
    <h2>Videos</h2>
    <div class="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/NAd7qR-qDaE?list=PLiOMlFv8aRoLc3Nv_3fBYYLj6vSdIkEvc"
        allowfullscreen>
      </iframe>
    </div>
  `;
}

const signupModal = document.getElementById("signupModal");

document.querySelector('[data-link="https://yourmailinglist.com"]').addEventListener("click", function(e){
  e.preventDefault();
  signupModal.classList.add("active");
  document.body.style.overflow = "hidden";
});

document.querySelector(".modal-close").onclick = closeSignup;
document.querySelector(".modal-backdrop").onclick = closeSignup;

function closeSignup(){
  signupModal.classList.remove("active");
  document.body.style.overflow = "";
}

document.addEventListener("keydown", e=>{
  if(e.key==="Escape") closeSignup();
});


