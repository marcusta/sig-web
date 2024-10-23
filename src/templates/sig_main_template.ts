import type { ContentItem, Page, SigTemplate } from "../sig_template";

export class SigMainTemplate implements SigTemplate {
  renderPage(page: Page) {
    const itemMap = page.content.reduce((acc, item) => {
      acc[item.name] = item;
      return acc;
    }, {} as { [key: string]: ContentItem });
    const showForm = itemMap["visaFormulär"].get() as boolean;
    const showBanner = itemMap["visaBanner"].get() as boolean;
    const imgSrc = itemMap["bild"].get() as string;
    const title = itemMap["titel"].get() as string;
    const body = itemMap["body"].render();
    return renderPage(body, title, showForm, showBanner, imgSrc);
  }
}

function renderPage(
  body: string,
  title: string,
  showForm: boolean = true,
  showBanner: boolean = true,
  imgSrc: string = "./img/small/sig-2021-1000px-7-av-16-700-min.jpg"
) {
  return `
<!DOCTYPE html>
<html lang="sv">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Upptäck vår toppmoderna inomhusgolf och simulator-anläggning med Foresight GCQuad och GSPro. Över 1000 golfbanor, flexibla och låga priser och bokningar. Öppettider och mjukvaruhjälp tillgängligt. Upplev golf året runt och på kända eller exotiska banor!">
    <title>Sweden Indoor Golf: ${title}</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; 
        script-src 'self' 'unsafe-inline' 'unsafe-eval'; 
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
        font-src 'self' https://fonts.gstatic.com; 
        img-src 'self' data:; 
        connect-src 'self'; 
        frame-src 'self'; 
        object-src 'none'; 
        base-uri 'self'; 
        form-action 'self'; 
        upgrade-insecure-requests;">  
    <link rel="stylesheet" href="./css/main.css" />
    <link rel="preload" href="./css/ef-style.css" as="style" id="deferred-css">
    <noscript><link rel="stylesheet" href="./css/ef-style.css"></noscript>
  </head>
  <body>
    ${navigation}
    ${showBanner ? getBanner(imgSrc) : ""}
    ${body}
    ${showForm ? form : ""}
    ${footer} 
    <script src="./js/animate-numbers.js" defer></script>
  </body>
</html>

  `;
}

function getBanner(imgSrc: string) {
  return `
    <main class="main-content">
      <section class="left-section">
        <div class="banner">
          <h5 class="padding-bottom-20">Golf året runt på dina villkor</h5>
          <h1 class="padding-bottom-20">SPELA GOLF!</h1>
          <h2 class="padding-bottom-20">LINKÖPINGS BÄSTA INOMHUSGOLF</h2>
          <h3 class="padding-bottom-20">39 KR/H FRAM TILL 1/10-2024</h3>
          <p>
            Välkommen till Linköpings bästa och mest prisvärda inomhushall för
            golf. Upplev den trivsamma miljön i våra nya lokaler och fascineras
            av våra precisa simulatorer. Spela någon av våra 750 banor eller
            putsa svingen på rangen!
          </p>
          <a href="https://www.matchi.se/facilities/swedenindoorgolf" class="button">BOKA SPELTID 39 KR/H </a>
        </div>
      </section>
      <section class="right-section">
        <img
          src="${imgSrc}"
          alt="Golf Simulator"
          style="height: 500px"
          loading="lazy"
        />
      </section>
    </main>
  `;
}

const navigation = `
    <div class="top-bar">
      <div class="top-bar-content">
        <span>info@swedenindoorgolf.se</span>
      </div>
    </div>
    <div class="nav-container">
      <nav class="nav">
        <img src="img/SIG_logo_xSd109.png" alt="Sweden Indoor Golf Logo" />
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="nav-links">
          <a href="/web/main">Start</a>
          <a href="/web/prislista">Prislista</a>
          <a href="/web/opening_hours">Öppettider</a>
          <a href="https://www.matchi.se/facilities/swedenindoorgolf">Boka bana</a>
          <div class="dropdown" onclick="window.location.href='/web/tavlingar'">
            <a href="/web/tavlingar" class="dropdown-toggle">Tävlingar</a>
            <div class="dropdown-menu">
              <a href="https://simulatorgolftour.com/tour/81" class="dropdown-item">SGT + HT Indoor Veckoliga</a>
              <a href="#" class="dropdown-item">H40+ Scratch Indoor</a>
            </div>
          </div>
          <a href="/web/about_us">Om oss</a>
          <a href="/web/faq">FAQ</a>
          <a href="#">Support</a>
          <a href="#">Golfshop/Lektioner</a>
        </div>
      </nav>
    </div>
  `;
const form = `
    <section class="features yellow_section animate fade-down">
      <div class="feature">
        <h1>KONTAKTA OSS</h1>
        <p>Fyll i dina uppgifter nedan så hör vi av oss så fort som möjligt.</p>
        <form action="" class="contact-form">
          <div class="form-field">
            <input type="text" placeholder="Namn" required />
          </div>
          <div class="form-field">
            <input type="tel" placeholder="Telefon" required />
          </div>
          <div class="form-field">
            <input type="email" placeholder="Email" required />
          </div>
          <div class="form-field">
            <input type="text" placeholder="Företag" required />
          </div>
          <div class="form-field">
            <textarea placeholder="Meddelande" required></textarea>
          </div>
          <button type="submit" class="button">SKICKA</button>
        </form>
      </div>
    </section>
`;

const footer = `
    <footer class="site-footer animate fade-up">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Sweden Indoor Golf</h3>
          <p>Välkommen till Linköpings hetaste inomhushall för golf.</p>
          <p>
            Upplev den trivsamma miljön i våra lokaler och fascineras av våra
            precisa simulatorer. Du kommer garanterat känna igen din bollflykt!
          </p>
          <img
            src="SIG_logo_xSd109.png"
            alt="Sweden Indoor Golf Logo"
            class="footer-logo"
          />
        </div>
        <div class="footer-section">
          <h3>INFORMATION</h3>
          <ul>
            <li><a href="#">Om oss</a></li>
            <li><a href="#">Integritetspolicy</a></li>
            <li><a href="#">Kontakta oss</a></li>
          </ul>
          <h3>FÖLJ OSS...</h3>
          <div class="social-icons">
            <a href="https://www.facebook.com/swedenindoorgolf.se" class="social-icon facebook-icon" aria-label="Facebook"></a>
            <a href="https://instagram.com/swedenindoorgolf" class="social-icon instagram-icon" aria-label="Instagram"></a>
          </div>
        </div>
        <div class="footer-section">
          <h3>ADRESS</h3>
          <p>Industrigatan 5<br />582 77 Linköping</p>
          <h3>TELEFON</h3>
          <p>SMS +46 70 - 691 32 03</p>
          <h3>EPOST</h3>
          <p>info@swedenindoorgolf.se</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 - Sweden Indoor Golf - All rights reserved</p>
      </div>
    </footer>
`;
