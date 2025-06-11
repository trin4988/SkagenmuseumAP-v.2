// fanger alt med .tab og id "tab-content"
const tabs = document.querySelectorAll(".tab");
const tabContent = document.getElementById("tab-content");
// array af content
const content = {
  skagen: {
    title: "Skagens Kunstmuseum",
    text: "Den 20. oktober 1908 blev Skagens Museum stiftet. Det skete i spisesalen på Brøndums Hotel, hvor Skagensmalere skrev de første linjer i historien om det museum, der i dag rummer verdens største samling af værker af skagensmalerne.",
    address: "Brøndumsvej 4, 9990 Skagen",
    img: "./assets/img/museer-skagenmuseum.webp",
    link: "selve-huset.html",
  },
  ancher: {
    title: "Anchers Hus",
    text: "Her boede Anna og Michael Ancher det meste af deres liv og skabte et ægte kunstnerhjem.",
    address: "Markvej 2, 4, 9990 Skagen",
    img: "./assets/img/ancherhus.webp",
    link: "selve-huset.html",
  },
  drachmann: {
    title: "Drachmanns Hus",
    text: "Holger Drachmann kunne smykke sig med mange titler, og hans farverige personlighed skinner igennem i det, der skulle vise sig at blive hans sidste hjem.",
    address: "Hans Baghs Vej 21, 9990 Skagen",
    img: "./assets/img/drachmannhus.webp",
    link: "selve-huset.html",
  }
};
// denne function render mit content
// bruger data.text eller noget andet til at vise det dynmaisk, så via array som har en key (id)
function renderContent(key) {
  const data = content[key];
  tabContent.innerHTML = `
    <div class="museer-text">
      <h3>${data.title}</h3> 
      <p>${data.text}</p>
      <div class="lokation-info">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="21" viewBox="0 0 15 21" fill="none">
          <path d="M7.5 0C3.35786 0 0 3.35786 0 7.5C0 12.375 7.5 21 7.5 21C7.5 21 15 12.375 15 7.5C15 3.35786 11.6421 0 7.5 0ZM7.5 10.5C6.11929 10.5 5 9.38071 5 8C5 6.61929 6.11929 5.5 7.5 5.5C8.88071 5.5 10 6.61929 10 8C10 9.38071 8.88071 10.5 7.5 10.5Z" fill="#ECA619"/>
        </svg>
        <p>${data.address}</p>
      </div>
      <a href="${data.link}" class="museer-button">
        <button>Bliv klogere på museet</button>
      </a>
    </div>
    <img src="${data.img}" alt="${data.title}">
  `;
}

// kigger alle tabs igennem og giver en eventlistener 
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active")); // fjerner activ class for alle tabs
    tab.classList.add("active"); // tilføjer activ tabs til den klikkede aktiveret tab
    renderContent(tab.dataset.tab); // data-tab er set på nogle elementer, som så bliver kaldt
  });
});

// Start med første visning
renderContent("skagen");