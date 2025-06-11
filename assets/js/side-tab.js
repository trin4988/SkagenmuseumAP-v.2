// array af information angående lokation
const locations = [
    {
      title: "Skagens Kunstmuseum",
      status: "Åbent",
      details: "Et vigtigt museum med samlinger af Skagensmalerne.",
    },
    {
      title: "Anchers Hus",
      status: "Åbent",
      details: "Her boede og arbejdede Anna og Michael Ancher.",
    },
    {
      title: "Drachmanns Hus",
      status: "Åbent",
      details: "Et kunstnerhjem fyldt med historie og poesi.",
    },
  ];
  
  const container = document.querySelector(".tab-items"); 
  const mapTabs = document.getElementById("mapTabs");
  const closeBtn = document.getElementById("closeBtn");
  const openBtn = document.getElementById("openBtn");
  
  // Her bliver det indlæst dynamisk tabs, via location array, som så laver en div og giver den en class navn "map-tab"
  locations.forEach((loc) => {
    const tab = document.createElement("div");
    tab.className = "map-tab";
  
    tab.className = "map-tab";

   // Definer SVG’erne som strings
  const svgSkagen = `
  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
    <path d="M30.1849 0.265625H25.5182C25.3848 0.265625 25.2515 0.298936 25.1516 0.365669L12.6516 8.93234H1.51823C1.15159 8.93234 0.851562 9.23236 0.851562 9.599V28.9323C0.851562 29.299 1.15159 29.599 1.51823 29.599H24.1849C24.5515 29.599 24.8516 29.299 24.8516 28.9323V15.599H26.8516V28.9323C26.8516 29.299 27.1516 29.599 27.5182 29.599C27.8849 29.599 28.1849 29.299 28.1849 28.9323V15.599H30.1849C30.5515 15.599 30.8516 15.299 30.8516 14.9323V0.932336C30.8516 0.565697 30.5515 0.265625 30.1849 0.265625ZM2.18487 15.599H4.18487V28.2656H2.18487V15.599ZM20.1849 15.599V17.599H5.5182V15.599H20.1849ZM5.5182 18.9323H12.1849V28.2656H5.5182V18.9323ZM13.5182 18.9323H20.1849V28.2656H13.5182V18.9323ZM23.5182 28.2656H21.5182V15.599H23.5182V28.2656ZM24.1849 14.2656H2.18487V10.2656H12.8515C12.9849 10.2656 13.1182 10.2323 13.2182 10.1656L25.7182 1.59891H29.5182V6.26558C29.5182 6.26558 29.5182 6.47343 29.5182 6.84007C29.5182 7.20671 29.5182 7.59891 29.5182 7.59891V8.93225V9.59489V10.2656V11.5989V12.2808V12.9322V14.2656L24.1849 14.2656Z" fill="black"/>
  </svg>
`;

const svgAncher = `
  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="26" viewBox="0 0 31 26" fill="none">
    <path d="M30.8516 9.59896V24.8714C30.8516 25.238 30.5515 25.5381 30.1849 25.5381H1.51823C1.15159 25.5381 0.851562 25.238 0.851562 24.8714V9.59896V9.56565V9.53234C0.851562 9.49903 0.851562 9.4323 0.884874 9.39899V9.36568C0.918185 9.29905 0.918185 9.26563 0.951496 9.23232L5.18483 3.39899V0.932292C5.18483 0.565653 5.48486 0.265625 5.8515 0.265625C6.21813 0.265625 6.51816 0.565653 6.51816 0.932292V2.93229H8.51816V0.932292C8.51816 0.565653 8.81819 0.265625 9.18483 0.265625C9.55147 0.265625 9.8515 0.565653 9.8515 0.932292V2.93229H21.8515V0.932292C21.8515 0.565653 22.1515 0.265625 22.5182 0.265625C22.8848 0.265625 23.1848 0.565653 23.1848 0.932292V2.93229H25.1848V0.932292C25.1848 0.565653 25.4849 0.265625 25.8515 0.265625C26.2181 0.265625 26.5182 0.565653 26.5182 0.932292V3.39899L30.7182 9.23232C30.7515 9.26563 30.7848 9.33237 30.7848 9.36568V9.39899C30.7848 9.4323 30.8181 9.46561 30.8181 9.53234C30.8515 9.53234 30.8516 9.56565 30.8516 9.59896ZM5.51823 12.2048V14.2048H7.51823V12.2048H5.51823ZM8.85156 12.2048V14.2048H10.8516V12.2048H8.85156ZM12.1849 12.2048V14.2048H14.1849V12.2048H12.1849ZM10.8516 15.5381H8.85156V17.5381H10.8516V15.5381ZM7.51823 15.5381H5.51823V17.5381H7.51823V15.5381ZM12.1849 17.5381H14.1849V15.5381H12.1849V17.5381ZM5.51823 24.2048H14.1849V18.8715H5.51823V24.2048ZM15.5182 24.2048H17.5182V12.2048H15.5182V24.2048ZM18.8516 24.2048H26.1849V12.2048H18.8516V24.2048ZM29.5182 10.8715V10.2656H2.1849V10.8715H29.5182ZM2.81823 8.9323H28.8849L25.5182 4.26563H6.1849L2.81823 8.9323ZM2.18487 24.2048H4.18487V12.2048H2.18487V24.2048ZM29.5182 12.2048H27.5182V24.2048H29.5182V12.2048Z" fill="black"/>
  </svg>
`;

const svgDrachmann = `
  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="33" viewBox="0 0 29 33" fill="none">
    <path d="M28.0516 13.3545V31.4879H0.851562V13.3545L14.4516 1.26562L28.0516 13.3545Z" stroke="black" stroke-width="1.5" stroke-linejoin="round"/>
    <path d="M0.851562 16.3759H28.0516M6.14045 8.82031V31.487M22.7627 8.82031V31.487" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.4316 22.4199H17.4761V31.4866H11.4316V22.4199Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
`;

// Vælg SVG baseret på titel så det bliver dynmaisk
let iconSVG = "";
if (loc.title === "Skagens Kunstmuseum") {
  iconSVG = svgSkagen;
} else if (loc.title === "Anchers Hus") {
  iconSVG = svgAncher;
} else if (loc.title === "Drachmanns Hus") {
  iconSVG = svgDrachmann;
}

// Indsæt SVG sammen med titlen
const titleWithIcon = `<span class="icon">${iconSVG}</span> <span>${loc.title}</span>`;
    tab.innerHTML = `
      <div class="map-tab-header">
        <div>
          <p class="map-tab-title">${titleWithIcon}</p>
          <div class="map-tab-status">
            <div class="status-dot"></div>
            <p>${loc.status}</p>
          </div>
        </div>
        <div class="arrow">▼</div>
      </div>
      <div class="map-tab-details">
        <p>${loc.details}</p>
      </div>
    `;
    // Tilføj klik-event: toggler klassen "open" ved klik
    tab.addEventListener("click", () => {
      tab.classList.toggle("open"); 
    });
  
    container.appendChild(tab); // Tilføj tab'en til containeren i DOM'en
  });
  
  // eventlistener som adder en class.list til at vise og gemme closeBtn og openBtn
  closeBtn.addEventListener("click", () => {
    mapTabs.classList.add("hidden");
    openBtn.classList.add("visible");
  });
  
  openBtn.addEventListener("click", () => {
    mapTabs.classList.remove("hidden");
    openBtn.classList.remove("visible");
  });
  

  // FAQ
  const questions = document.querySelectorAll('.faq-question');
// Gennem går alle spørgsmålene, og når man klikker på det via eventlistener og når man trykker på spørgsmålet, så kommer søskende elementet, som er svaret. 
  questions.forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
  
      // Hvis svaret er lukket, åbnes det med dynamisk højde
      if (answer.style.height && answer.style.height !== '0px') {
        answer.style.height = '0';
        question.classList.remove('active');
      } else {
        // Først sæt højde til scrollHeight, som er indholdet reele højde
        answer.style.height = answer.scrollHeight + 'px';
        question.classList.add('active');
      }
    });
  });
  
