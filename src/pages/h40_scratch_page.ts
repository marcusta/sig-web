import type { Page } from "../sig_template";

export const h40Page: Page = {
  title: "Home",
  content: [
    {
      name: "titel",
      get: () => "H40 Scratch",
      render: () => "H40 Scratch",
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
    <section class="features animate fade-up">
      <div class="feature">
        <h1>ÖPPETTIDER</h1>
      </div>
    </section>
    <section class="features animate fade-right">
      <div class="feature columns">
        <div>
          <i class="icon_clock large_icon"></i>
          <h3>Öppettider</h3>
          <p>
          Vi har <b>öppet 05:00 - 24:00</b> alla dagar. Vi har bemanning när golfshopen customfitting.pro är bemannad, fråga i receptionen i entrén för hjälp. När du har bokat din tid får du en kod du använder för att  komma in i våra lokaler. Din bana tänds när det är din tur att lira.
          </p>
          <a href="#" class="button">BOKA TID</a>
        </div>
        <div>
          <i class="social_myspace large_icon"></i>
          <h3>Bemannade tider</h3>
          <p>
            Vi har instruktörer på plats måndag till onsdag 14:00 - 20:00 för att hjälpa dig igång första gången.. Gäller under högsäsong 1/11 till den 31/3.
          </p>
          <a href="#" class="button">BOKA TID</a>
        </div>
        <div> 
          <i class="icon_desktop large_icon"></i>
          <h3>FSX LIVE</h3>
          <div class="left-align">
            <p>
              Skapa ett konto hos Foresight Sport innan du kommer till oss första gången så är du redo när det är dags att slå ut. 
            </p>
          </div>
          <a href="#" class="button">SKAPA KONTO</a>
        </div>
      </div>
    </section>

`;
