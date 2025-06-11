// fanger class og id
const tabs = document.querySelectorAll(".tab-billet");
const tabContent = document.getElementById("tab-billet-content");
// array af content
const content = {
  skagen: {
    title: "Skagens Kunstmuseum",
    text: "Vores hovedmuseum der rummer de største værker.",
    address: "Brøndumsvej 4, 9990 Skagen",
    img: "./assets/img/skagenskunstmuseum.webp",
    info1: "10:00 - 17:00",
    info2: "Tirsdag til søndag",
    info3:"LUKKET",
    info4: "Mandag",
    info5: " i perioden fra den 1 nov. til 21 dec. er der åbnet tirsdag til søndag fra 10 - 16",
    info6: "i juleferien holder museet lukket fra d. 22 til 26 dec. samt d. 31",
    pris1: "140 kr.",
    pris2: "90 kr.",
    pris3: "GRATIS",
  },
  ancher: {
    title: "Anchers Hus",
    text: "Hjem for vores to vigtige kunstnere, Anna og Michael Ancher.",
    address: "Markvej 2, 9990 Skagen",
    img: "./assets/img/ancherhus.webp",
    info1: "10:00 - 16:00",
    info2: "Tirsdag til søndag",
    info3:"LUKKET",
    info4: "Mandag",
    info5: "Anchers Hus er åbent i perioden 12. april - 19. oktober 2025.",
    info6: "huset holder lukket fra d. 20 oktober til 31 december",
    pris1: "100 kr.",
    pris2: "75 kr.",
    pris3: "GRATIS",
  },
  drachmann: {
    title: "Drachmanns Hus",
    text: "I huset kan du både opleve kunst og hans personlige genstande.",
    address: "Hans Baghs Vej 21, 9990 Skagen",
    img: "./assets/img/drachmannhus.webp",
    info1: "11:00 - 16:00",
    info2: "Alle dage",
    info5: " huset er åbnet i efterårsferien d. 13 oktober også mandag",
    info6: "huset holder lukket fra d. 20 oktober til 31 december",
    pris1: "75 kr.",
    pris2: "45 kr.",
    pris3: "GRATIS",
  }
};
//Denne function render min content, som kommer ovenfra (arrayet) som er defineret, som det hiver det data ud som er specificeret. 
// Det bliver brugt ||"" til at fjerne undefined som gør at vi undgår dette i html og gør at det felt fjernes hvis det ikke bliver indlæst
function renderContent(key) {
    const data = content[key];
  
    tabContent.innerHTML = `
    <div class="huset-indhold-intro">
      <img src="${data.img}" alt="${data.title}">

      <div class="huset-tekst">
        <p class="h3-fake">${data.title.toUpperCase()}</p>
        <p>${data.text}</p>
        <hr>
        <p><strong class="strong-huset">${data.info1}</strong></p>
        <p>${data.info2 || ""}</p>
        ${data.info3 || data.info4 ? `
          <hr>
          <p><strong class="strong-huset">${data.info3 || ""}</strong></p> 
          <p>${data.info4 || ""}</p>
        ` : ""}
        <hr>
        <p class="huset-info1"><strong>Speciale åbningstider:</strong> ${data.info5 || ""}</p>
        <hr>
        <p class="huset-info1"><strong>Helligdage:</strong> ${data.info6 || ""}</p>
        <hr>
      </div>
    </div>
  
  
      <div class="divider-wrapper-huset">
        <h3>ENTRE PRIS</h3>
        <div class="entre__divider"></div>
      </div>
  
      <section class="huset-content">
        <div class="huset-indhold">
          <h4>Billet</h4>
          <p>${data.text}</p>
        </div>
  
        <div class="huset-boks-wrapper">
          <div class="huset-box">
            <div class="pris-linje">
              <p>Pris for voksne</p>
              <p>${data.pris1}</p>
            </div>
            <hr class="huset-streg">
            <div class="pris-linje">
              <p>Pris for ung <span>(under 28 år)</span></p>
              <p>${data.pris2}</p>
            </div>
            <hr class="huset-streg">
            <div class="pris-linje">
              <p>Børn <span>(under 18 år)</span></p>
              <p>${data.pris3}</p>
            </div>
          </div>
          <div class="huset-btn-wrapper">
            <button class="huset-btn">Køb billet til kunsten</button>
          </div>
        </div>
      </section>
  
      <div class="huset-divider"></div>
  
      <section class="huset-content">
        <div class="huset-indhold">
          <h4>Kombibillet</h4>
          <p>Vil du se det hele? Godt valg! Køb en kombibillet, som giver adgang til Skagens Museum, Anchers Hus og Drachmann Hus.</p>
        </div>
        <div class="huset-boks-wrapper">
          <div class="huset-box">
            <div class="pris-linje">
              <p>Kombibillet for voksne</p>
              <p>200 kr.</p>
            </div>
            <hr class="huset-streg">
            <div class="pris-linje">
              <p>Kombibillet for børn <span>(under 28 år)</span></p>
              <p>GRATIS</p>
            </div>
          </div>
          <div class="huset-btn-wrapper">
            <button class="huset-btn">Køb billet til kunsten</button>
          </div>
        </div>
      </section>
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