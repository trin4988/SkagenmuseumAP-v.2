// javascript søger for at Domcontentloader
window.addEventListener("DOMContentLoaded", () => {
  // objekt af malere  
  const malere = {
      kroyer: {
        værker1: "./assets/img/sommeraften_ved_skagen.webp",
        værker2: "./assets/img/sommeraften_paa_skagen_sonderstrand.webp",
        værker3: "./assets/img/roser.webp",
        værker4: "./assets/img/holger-drachmann-kroyer.webp",
        værker5: "./assets/img/frokosten.webp",
        værker6: "./assets/img/frokosten.webp"
      }
    };
  // henter data fra maleren kroyer fra objektet af kroyer
    const m = malere.kroyer;
  // gennemgår billederne med id af værker1 til værker6
    for (let i = 1; i <= 6; i++) {
      const img = document.getElementById(`værker${i}`);
      if (img) img.src = m[`værker${i}`]; // hvis billedet element finder i DOM, så opdater src attributen 
    }
  });


// Slider for værkerne – kun aktiver hvis containeren findes
const container = document.querySelector(".værker-container");
const leftArrow = document.querySelector(".pil-left");
const rightArrow = document.querySelector(".pil-right");

if (container && leftArrow && rightArrow) {
  let scrollPosition = 0;
  const scrollAmount = 320; // Tilpasser billeder og gap

  const totalItems = container.children.length; // antal elementer i slideren
  const containerWidth = container.parentElement.offsetWidth; // Bredde for slideren, som er synligt af gangen
  const itemWidth = scrollAmount; // det viser bredden på et slide
  const maxScroll = -(itemWidth * totalItems - containerWidth); // bredden for at scroll til venstre, så den ikke scroller for langt.

  function updateButtons() {
    leftArrow.style.opacity = scrollPosition >= 0 ? 0.3 : 1; // hvis scroll position er 0 eller lig med 0, så betyder det vi er helt over ved 0
    leftArrow.style.pointerEvents = scrollPosition >= 0 ? 'none' : 'auto'; // gør venstre pil halv gennemsigtig, og deaktiverer klik

    rightArrow.style.opacity = scrollPosition <= maxScroll ? 0.3 : 1;
    rightArrow.style.pointerEvents = scrollPosition <= maxScroll ? 'none' : 'auto';
  }
// Når højre pil bliver klikket, så når vi rammer den maksimal scroll, så stopper den der og man justere containeren med css transform
  rightArrow.addEventListener("click", () => {
    scrollPosition -= scrollAmount;
    if (scrollPosition < maxScroll) scrollPosition = maxScroll;
    container.style.transform = `translateX(${scrollPosition}px)`;
    updateButtons();
  });

  leftArrow.addEventListener("click", () => {
    scrollPosition += scrollAmount;
    if (scrollPosition > 0) scrollPosition = 0;
    container.style.transform = `translateX(${scrollPosition}px)`;
    updateButtons();
  });

  updateButtons();
}








