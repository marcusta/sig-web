import type { Page } from "../sig_template";

export const aboutUsPage: Page = {
  title: "Home",
  content: [
    {
      name: "titel",
      get: () => "Om oss",
      render: () => "About us",
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
        <h1>HITTA TILL OSS</h1>
      </div>
      <p>Vi delar lokaler med PDL Alfa. Adressen är Industrigatan 5. När du parkerat anmäler du din registreringsskylt på en pekplatta precis innanför dörren och har då 3 timmar gratis parkering. Använd länken för att visa platsen på google maps. Klicka här.</p>
      <img src="./img/small/sig-karta.webp" alt="Karta till customfitting.pro" width="90%"/>
    </section>
    <section class="features animate fade-right">
      <div class="feature columns">
        <div>
          <h1>OM OSS</h1>
          <div class="columns">
            <div>
              <i class="icon_pencil large_icon"></i>
              <h3>Adress</h3>
              <p>Industrigatan 5</p>
              <p>582 77 Linköping</p>
              <p>Sweden</p>
            </div>
            <div>
              <i class="icon_phone large_icon"></i>
              <h3>Telefon</h3>
              Matchi Bokning +46 10 - 405 88 00
            </div>
            <div>
              <i class="icon_mail large_icon"></i>
              <h3>E-post</h3>
              <p>info@swedenindoorgolf.se</p>
            </div>
          </div>
          <a href="#" class="button">BOKA TID</a>
        </div>
      </div>
    </section>
    <section class="features animate fade-up">
      <div class="feature">
        <h1>KONTAKTPERSONER</h1>
      </div>
      <div class="columns">
        <div>
          <h3>Christian Bremer</h3>
          <p>christian.bremer@swedenindoorgolf.se</p>
        </div>
        <div>
          <h3>Johan Jigerström</h3>
          <p>johan.jigerstrom@swedenindoorgolf.se</p>
        </div>
      </div>
    </section>
`;
