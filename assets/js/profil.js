// 1. Hent ID fra URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// 2. Gem data 
const malere = {
  maler1: {
    navn: "P.S. Krøyer",
    born: "Født",
    bornDato: "23. juli 1851",
    country1: "Stavanger, Norge",
    dead: "Død",
    deadDato: "21. november 1909",
    country2: "Skagen, Danmark",
    beskrivelse: `Peder Severin Krøyer blev født i Stavanger i Norge, men voksede op i København hos sin moster og hendes danske mand. Allerede som barn udviste han et usædvanligt talent for at tegne, og han begyndte på Kunstakademiet som 14-årig. Fra 1877 til 1881 var han på studierejse i Frankrig, Spanien og Italien. I Paris blev han optaget som elev på en af de førende private maleskoler og den undervisning han modtog, fik afgørende betydning for hans kunst. Tilbage i København blev han hurtigt en af tidens mest efterspurgte portrætmalere, og han modtog mange bestillinger på malerier. <br><br> Krøyer kom til Skagen første gang i sommeren 1882. Hans begejstring for naturen, miljøet og ikke mindst samværet med de andre kunstnere betød, at han vendte tilbage næsten hver sommer fra 1891 sammen med hustruen Marie. De første år lejede ægteparret sig ind i Madam Bendsens hus og i 1894 fik de tilladelse til at leje og ombygge den gamle byfogedbolig i Skagen plantage – i dag kendt som Krøyers hus. Året efter fødte Marie deres datter Vibeke, hun blev boende hos sin far i Skagen, da Marie og Krøyer blev skilt i 1905. <br><br> Allerede da Krøyer kom til Skagen første gang, var han en berømt kunstner, og hans tilstedeværelse skabte opmærksomhed omkring kunstnerkolonien i Skagen. Om sommeren samledes mange kunstnere for at arbejde og feste, det sidste ofte på Krøyers initiativ – han elskede selskabelighed og festivitas.Det er billederne fra Skagen, som Krøyer især er kendt og elsket for. Her skildrer han kunstnernes sorgløse liv, deres festlige måltider, spadsereture på stranden og stemningsfulde aftener i måneskin.I begyndelsen af 1900-tallet var Krøyer indlagt flere gange på Middelfart Sindssygehospital sandsynligvis med en manio-depressiv psykose. Sygdommen svækkede hans helbred og i november 1909 døde han 58 år gammel og han blev begravet på Skagen kirkegård.`,
    billede: "./assets/img/kroyer.webp",
    vaerker: "VÆRKER AF P.S. KRØYER",
    værker1: "./assets/img/sommeraften_ved_skagen.webp",
    værker2: "./assets/img/sommeraften_paa_skagen_sonderstrand.webp",
    værker3: "./assets/img/roser.webp",
    værker4: "./assets/img/holger-drachmann-kroyer.webp",
    værker5: "./assets/img/frokosten.webp",
    kunstnerePB: "./assets/img/marie.webp",
    kunstnereNavn: "Marie Krøyer",
    kunstnereYear: "Født 1867 - død 1940",
    kunstnerePB1: "./assets/img/holger.webp",
    kunstnereNavn1: "Holger Drachmann",
    kunstnereYear1: "Født 1846 - død 1908",
    kunstnerePB2: "./assets/img/michael.webp",
    kunstnereNavn2: "Michael Ancher",
    kunstnereYear2: "Født 1849 - død 1927",
    kunstnerePB3: "./assets/img/anna.webp",
    kunstnereNavn3: "Anna Ancher",
    kunstnereYear3: "Født 1859 - død 1935",
  },
  maler2: {
    navn: "Anna Ancher",
    born: "Født",
    bornDato: "18. August 1859",
    country1: "Skagen, Danmark",
    dead: "Død",
    deadDato: "15. April 1935",
    country2: "Skagen, Danmark",
    beskrivelse: "Anna Ancher var den eneste af skagensmalerne, der var født og opvokset i Skagen. Hun var datter af Ane Hedvig og Erik Brøndum, der drev byens gæstgiveri og købmandsbod. Hun var en helt ung pige, da malerne begyndte at rejse til Skagen. Hun fulgte deres færden og arbejde med stor interesse, og begyndte selv at tegne og male. <br><br> En af malerne, der kom til Skagen, var Michael Ancher. Anna og Michael fattede hurtigt interesse for hinanden, blev forlovede i 1878 og gift i 1880. De fik datteren Helga i 1883 og levede sammen i Skagen resten af deres liv. Fra 1884 boede de i huset på Markvej, der nu er indrettet til museet Anchers Hus. <br><br> Anna Anchers kunstneriske karriere var enestående alene taget i betragtning, at hun var kvinde på en tid, hvor det ikke var almindeligt, at kvinder fik en kunstnerisk uddannelse – de havde heller ikke adgang til Kunstakademiet. Hun kom imidlertid på Vilhelm Kyhns malerskole for kvinder i København, hvor hun fulgte undervisningen tre vintre i 1875 til 1878. Vilhelm Kyhn mente i øvrigt, at Anna Ancher burde søsætte sin malerkasse, da hun blev mor i 1883 – d.v.s. opgive maleriet og hellige sig de huslige pligter. Det gjorde Anna Ancher heldigvis ikke. Hun udstillede første gang på Charlottenborg i København i 1880 og fik hurtigt succes som maler. <br><br> Hun skildrede især de nære omgivelser – hjemmet, kvinders og børns verden. Det var farverne og lyset, mere end det fortællende indhold i billederne, der betød noget for Anna Ancher. På den måde var hun en af de mest moderne af skagensmalerne, og derfor peger hendes malerier frem mod den mere abstrakte kunst, der kom frem i begyndelsen af 1900-tallet.",
    billede: "./assets/img/anna.webp",
    vaerker: "VÆRKER AF ANNA ANCHER",
    værker1: "./assets/img/atelier.webp",
    værker2: "./assets/img/klematis.webp",
    værker3: "./assets/img/michael-ancher-atelier.webp",
    værker4: "./assets/img/skærerpinde.webp",
    værker5: "./assets/img/sorg.webp",
    værker6: "./assets/img/vaccination.webp",
    kunstnerePB: "./assets/img/marie.webp",
    kunstnereNavn: "Marie Krøyer",
    kunstnereYear: "Født 1867 - død 1940",
    kunstnerePB1: "./assets/img/holger.webp",
    kunstnereNavn1: "Holger Drachmann",
    kunstnereYear1: "Født 1846 - død 1908",
    kunstnerePB2: "./assets/img/michael.webp",
    kunstnereNavn2: "Michael Ancher",
    kunstnereYear2: "Født 1849 - død 1927",
    kunstnerePB3: "./assets/img/kroyer.webp",
    kunstnereNavn3: "P.S. Krøyer",
    kunstnereYear3: "Født 1851 - død 1909",
  },
 
};

// 3. Det er fra html, hvor vi hiver de forskellige ID'er og bruger dem til at finde en bestemt ID
if (id && malere[id]) {
  const m = malere[id];
document.getElementById("navn").textContent = m.navn;
document.getElementById("born").textContent = m.born;
document.getElementById("born-dato").textContent = m.bornDato;
document.getElementById("dead").textContent = m.dead;
document.getElementById("dead-dato").textContent = m.deadDato;
document.getElementById("country1").textContent = m.country1;
document.getElementById("country2").textContent = m.country2;
document.getElementById("beskrivelse").innerHTML = m.beskrivelse;
document.getElementById("billede").src = m.billede;
document.getElementById("billede").alt = m.navn;

document.getElementById("vaerker").textContent = m.vaerker;
// relaterede værker
document.getElementById("værker1").src = m.værker1;
document.getElementById("værker2").src = m.værker2;
document.getElementById("værker3").src = m.værker3;
document.getElementById("værker4").src = m.værker4;
document.getElementById("værker5").src = m.værker5;
document.getElementById("værker6").src = m.værker6;

//relaterede kunstnere
document.getElementById("kunstnerePB").src = m.kunstnerePB;
document.getElementById("kunstnere-navn").textContent = m.kunstnereNavn;
document.getElementById("kunstnere-year").textContent = m.kunstnereYear;

document.getElementById("kunstnerePB1").src = m.kunstnerePB1;
document.getElementById("kunstnere-navn1").textContent = m.kunstnereNavn1;
document.getElementById("kunstnere-year1").textContent = m.kunstnereYear1;

document.getElementById("kunstnerePB2").src = m.kunstnerePB2;
document.getElementById("kunstnere-navn2").textContent = m.kunstnereNavn2;
document.getElementById("kunstnere-year2").textContent = m.kunstnereYear2;

document.getElementById("kunstnerePB3").src = m.kunstnerePB3;
document.getElementById("kunstnere-navn3").textContent = m.kunstnereNavn3;
document.getElementById("kunstnere-year3").textContent = m.kunstnereYear3;

} else {
  document.getElementById("navn").textContent = "Maler ikke fundet";
}


// slider for værkerne



const container = document.querySelector(".værker-container");
const leftArrow = document.querySelector(".pil-left");
const rightArrow = document.querySelector(".pil-right");

let scrollPosition = 0;
const scrollAmount = 320; // Tilpas til billeder + gap

// Bredde på billeder inkl. gap, og hvor meget vi kan scrolle maks, så den ikke scroller forevigt
const totalItems = container.children.length; // antal elementer i slideren
const containerWidth = container.parentElement.offsetWidth; // Bredde for slideren, som er synligt af gangen
const itemWidth = scrollAmount; // det viser bredden på et slide
const maxScroll = -(itemWidth * totalItems - containerWidth); // bredden for at scroll til venstre, så den ikke scroller for langt. 

function updateButtons() {
  // Disable venstre pil hvis vi er helt til venstre og gør den transparent
  leftArrow.style.opacity = scrollPosition >= 0 ? 0.3 : 1;
  leftArrow.style.pointerEvents = scrollPosition >= 0 ? 'none' : 'auto';

  // Disable højre pil hvis vi er helt til højre og gør den transparent
  rightArrow.style.opacity = scrollPosition <= maxScroll ? 0.3 : 1;
  rightArrow.style.pointerEvents = scrollPosition <= maxScroll ? 'none' : 'auto';
}
// Når højre pil bliver klikket, så når vi rammer den maksimal scroll, så stopper den der og man justere containeren med css transform
rightArrow.addEventListener("click", () => {
  scrollPosition -= scrollAmount;
  if (scrollPosition < maxScroll) {
    scrollPosition = maxScroll;
  }
  container.style.transform = `translateX(${scrollPosition}px)`;
  updateButtons(); // juster knappens tilstand, fra enable/disable
});

leftArrow.addEventListener("click", () => {
  scrollPosition += scrollAmount;
  if (scrollPosition > 0) {
    scrollPosition = 0;
  }
  container.style.transform = `translateX(${scrollPosition}px)`;
  updateButtons();
});

// Initér knappernes status
updateButtons();






