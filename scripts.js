

const words = [
  "ethical guidance",
  "academic mentorship",
  "research-driven pathways"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 60;
const eraseSpeed = 30;
const delayBetweenWords = 1200;

function typeEffect() {
  const element = document.getElementById("typewriter-dynamic");
  if (!element) return;

  const currentWord = words[wordIndex];

  if (!isDeleting) {
    element.innerHTML = currentWord.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
      return;
    }
  } else {
    element.innerHTML = currentWord.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? eraseSpeed : typingSpeed);
}

// ✅ START the animation
window.addEventListener("load", () => {
  setTimeout(typeEffect, 500);
});
const elements = document.querySelectorAll(
  ".listar-feature-item-wrapper, .listar-feature-item, .listar-feature-icon-wrapper, .listar-feature-content-wrapper"
);

// add initial hidden state
elements.forEach((el) => el.classList.add("animate-init"));

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-show");
    }
  });
}, { threshold: 0.2 });

// observe all elements
elements.forEach((el) => observer.observe(el));
const reveals = document.querySelectorAll(".reveal");
const title = document.querySelector(".fade-title");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((el, index) => {
    const boxTop = el.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      setTimeout(() => {
        el.classList.add("active");
      }, index * 200); // stagger effect
    }
  });

  // Title animation
  if (title.getBoundingClientRect().top < triggerBottom) {
    title.classList.add("active");
  }
  }


window.addEventListener("scroll", revealOnScroll);
const left = document.querySelectorAll(".reveal-left");
const right = document.querySelectorAll(".reveal-right");

function revealFounder() {
  const trigger = window.innerHeight * 0.85;

  left.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    }
  });

  right.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    }
  });
}

window.addEventListener("scroll", revealFounder);
const cta = document.querySelector(".cta-content");

function revealCTA() {
  const trigger = window.innerHeight * 0.85;
  if (cta.getBoundingClientRect().top < trigger) {
    cta.style.opacity = "1";
    cta.style.transform = "translateY(0)";
  }
}

window.addEventListener("scroll", revealCTA);

function toggleFounder() {
  const section = document.getElementById("founderSection");
  section.classList.toggle("active");

  // optional: scroll into view when opened
  if (section.classList.contains("active")) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
function toggleFounder() {
  const section = document.getElementById("founderSection");

  if (section.classList.contains("active")) {
    section.style.maxHeight = "0px";
    section.classList.remove("active");
  } else {
    section.classList.add("active");
    section.style.maxHeight = section.scrollHeight + "px";
  }
}
document.addEventListener("DOMContentLoaded", () => {

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const display = el.dataset.display; // K, M, or undefined
    const duration = 2000;
    const start = performance.now();

    function format(val) {
      if (display === 'K') {
        return (val >= 1000 ? (val / 1000).toFixed(0) + 'K' : val) + suffix;
      }

      if (display === 'M') {
        return '$' + (val >= 1000000 ? (val / 1000000).toFixed(0) + 'M+' : val);
      }

      return val + suffix;
    }

    function step(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);

      const val = Math.round(ease * target);
      el.textContent = format(val);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = format(target);
      }
    }

    requestAnimationFrame(step);
  }

  const statsSection = document.querySelector('.stats-section');
  const statBlocks = document.querySelectorAll('.stat-block');
  const statNums = document.querySelectorAll('.stat-num[data-target]');

  let statsTriggered = false;

  if (!statsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsTriggered) {
        statsTriggered = true;

        statBlocks.forEach(block => block.classList.add('animated'));
        setTimeout(() => statNums.forEach(animateCounter), 200);

        observer.disconnect();
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsSection);

});
function openNewsletterModal(){
document.getElementById("newsletterModal").style.display="flex";
}

function closeNewsletterModal(){
document.getElementById("newsletterModal").style.display="none";
}

document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("newsletterForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

fetch(form.action,{
method:"POST",
body:new FormData(form)
})
.then(() => {

document.getElementById("formBox").style.display="none";
document.getElementById("thankYouBox").style.display="block";

})
.catch(()=>{

alert("Something went wrong.");

});

});

}

});

window.onclick=function(e){
let modal=document.getElementById("newsletterModal");
if(e.target==modal){
closeNewsletterModal();
}
}
document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("newsletterForm");

if(form){

form.addEventListener("submit", async function(e){

e.preventDefault();

try {

await fetch(form.action,{
method:"POST",
body:new FormData(form),
mode:"no-cors"
});

/* Show thank you */
document.getElementById("formBox").style.display="none";
document.getElementById("thankYouBox").style.display="block";

}
catch(error){
alert("Submission failed.");
}

});

}

});
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const destDropdown = document.querySelector('.dropdown');
  const destToggle = document.querySelector('.dropdown > a');

  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  destToggle.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      e.preventDefault();
      destDropdown.classList.toggle('open');
    }
  });
});
(function () {
  const track    = document.getElementById('tsTrack');
  const cards    = Array.from(track.querySelectorAll('.ts-card'));
  const prevBtn  = document.getElementById('tsPrev');
  const nextBtn  = document.getElementById('tsNext');
  const dotBtns  = Array.from(document.querySelectorAll('.ts-dot-btn'));
  const currentEl= document.getElementById('tsCurrent');
  const totalEl  = document.getElementById('tsTotal');
 
  const TOTAL = cards.length;
  let current = 0;
  let cardH   = 0;
 
  totalEl.textContent = TOTAL;
 
  /* ── Measure card height ─────────────────────────────────── */
  function measure () {
    // viewport height minus arrows/padding — we give cards a generous fixed height
    // then let the inner body scroll if content overflows
    const vw = window.innerWidth;
    let h;
    if (vw < 480)       h = 520;
    else if (vw < 768)  h = 480;
    else                h = 500;
 
    cardH = h;
    cards.forEach(c => { c.style.height = h + 'px'; });
    // Set viewport height so only one card visible
    document.querySelector('.ts-viewport').style.height = h + 'px';
    applySlide(false);
  }
 
  /* ── Apply vertical translate ────────────────────────────── */
  function applySlide (animate = true) {
    if (!animate) track.style.transition = 'none';
    track.style.transform = `translateY(-${current * cardH}px)`;
    if (!animate) {
      // Force reflow then restore transition
      void track.offsetHeight;
      track.style.transition = '';
    }
 
    // Sync dots
    dotBtns.forEach((d, i) => {
      d.classList.toggle('ts-dot-btn--active', i === current);
      d.setAttribute('aria-selected', i === current ? 'true' : 'false');
    });
 
    // Counter
    currentEl.textContent = current + 1;
 
    // Arrow states
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === TOTAL - 1;
 
    // Scroll card body back to top
    const cb = cards[current].querySelector('.ts-card-body');
    if (cb) cb.scrollTop = 0;
  }
 
  /* ── Navigation ──────────────────────────────────────────── */
  function goTo (i) {
    current = Math.max(0, Math.min(TOTAL - 1, i));
    applySlide();
  }
 
  prevBtn.addEventListener('click', () => goTo(current - 1));
  nextBtn.addEventListener('click', () => goTo(current + 1));
  dotBtns.forEach((d, i) => d.addEventListener('click', () => goTo(i)));
 
  /* ── Touch / swipe support ───────────────────────────────── */
  let touchY0 = null;
  document.querySelector('.ts-viewport').addEventListener('touchstart', e => {
    touchY0 = e.touches[0].clientY;
  }, { passive: true });
  document.querySelector('.ts-viewport').addEventListener('touchend', e => {
    if (touchY0 === null) return;
    const dy = touchY0 - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 40) goTo(current + (dy > 0 ? 1 : -1));
    touchY0 = null;
  }, { passive: true });
 
  /* ── Keyboard ────────────────────────────────────────────── */
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowUp')   goTo(current - 1);
    if (e.key === 'ArrowDown') goTo(current + 1);
  });
 
  /* ── Init ────────────────────────────────────────────────── */
  measure();
  window.addEventListener('resize', measure);
})();