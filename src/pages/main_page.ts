import type { Page } from "../sig_template";

export const mainPage: Page = {
  title: "Home",
  content: [
    {
      name: "titel",
      get: () => "Home",
      render: () => "Home",
      children: [],
    },
    {
      name: "titel",
      get: () => "Home!",
      render: () => "true",
      children: [],
    },
    {
      name: "body",
      get: () => page,
      render: () => page,
      children: [],
    },
    {
      name: "visaBanner",
      get: () => true,
      render: () => "true",
      children: [],
    },
    {
      name: "visaFormulär",
      get: () => true,
      render: () => "",
      children: [],
    },
    {
      name: "bild",
      get: () => "./img/small/sig-2021-1000px-7-av-16-700-min.jpg",
      render: () => "Home",
      children: [],
    },
  ],
};

const page = `
   <section class="features animate zoom-in padding-bottom-60">
      <div class="feature padding-bottom-20">
        <h1>UTVECKLA DIN GOLF</h1>
      </div>
      <div class="feature columns">
        <div>
          <i class="icon_check large_icon"></i>
          <h3>Boka hos MATCHi</h3>
          <p>
            Vi använder MATCHi för alla våra bokningar. Klicka på knappen nedan
            för att komma direkt till bokningssidan.
          </p>
          <a href="#" class="button">BOKA TID</a>
        </div>
        <div>
          <i class="icon_clock large_icon"></i>
          <h3>Öppettider</h3>
          <p>
            Vi har öppet 05-24 varje dag. Vi är bemannade 14-20 måndag-onsdag. När
            du har bokat din tid får du en kod du använder för att komma in i våra
            lokaler. Din bana finns när det är din tur att lira.
          </p>
          <a href="#" class="button">MERA INFO</a>
        </div>
        <div>
          <i class="icon_shield_alt large_icon"></i>
          <h3>Tävlingar</h3>
          <p>Vi arrangerar en mängd olika tävlingar under inomhus-säsongen.</p>
          <a href="#" class="button">TÄVLA</a>
        </div>
      </div>
    </section>
    <section class="features columns yellow_section animate fade-left">
      <div class="feature">
        <h1>TRÄNA SJÄLV ELLER <br />UTMANA DINA KOMPISAR</h1>
        <p>
          Du bokar enkelt din bana via MATCHi hemsidan. Skapa ett konto och boka
          din första tid direkt.
        </p>
        <a href="#" class="button">BOKA NU</a>
        <div class="counter-container row-or-column-grid">
          <div class="feature counter">
            <h1 class="animate-number" data-end="8" data-duration="600">8</h1>
            STATIONER
          </div>
          <div class="feature counter">
            <h1 class="animate-number" data-end="1200+" data-duration="800">
              100
            </h1>
            BANOR
          </div>
          <div class="feature counter">
            <h1 class="animate-number" data-end="05-24" data-duration="500">
              00
            </h1>
            ÖPPET
          </div>
        </div>
      </div>
    </section>
    <section class="features yellow_section animate fade-up">
      <div class="feature">
        <h1>SVÅRSLAGEN MILJÖ FÖR GOLFSPEL</h1>
        <div class="row-or-column-grid">
          <img src="./img/small/sig-2021-1000px-4-av-16-700-min.jpg" loading="lazy" alt="Golf Simulator in perspective" />
          <img src="./img/small/sig-2021-1000px-7-av-16-700-min.jpg" loading="lazy" alt="Golf Simulator" />
          <img src="./img/small/sig-2021-1000px-15-av-16-700-min.jpg" loading="lazy" alt="Padel court" />
          <img src="./img/small/sig-2021-1000px-10-av-16-700-min.jpg" loading="lazy" alt="Golf Simulator mat"  />
        </div>
        <br /><br />
        <a href="#" class="button">BOKA NU</a>
      </div>
    </section>
`;
