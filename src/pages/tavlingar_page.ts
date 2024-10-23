import type { Page } from "../sig_template";

export const tavlingarPage: Page = {
  title: "Home",
  content: [
    {
      name: "titel",
      get: () => "Tävlingar",
      render: () => "Tävlingar",
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
        <h1>TÄVLA I INOMHUSGOLF</h1>
        <div class="left-align">
        <p>
          Det är jättenkelt att komma igång med veckotävlingar! För att delta behöver du registera en användre på länken nedan och 
          maila ditt USERNAME till tour@swedenindoorgolf.se Du blir då inlagd och kommer kunna spela genom att klicka på 
          tournaments på startskärmen i simulatorn.
        </p>
      </div>
      <div class="feature columns">
        <div>
        <a href="https://simulatorgolftour.com/register" class="button">REGISTRERA DIG</a>
        </div>
        <div>
        <a href="https://simulatorgolftour.com/tour/81" class="button">GOLFLIGAN</a>
        </div>
      </div>
      <p class="left-align">
        I år satsar vi stort på en återkommande veckoturnering för alla våra medlemmar som vi tror kommer utveckla er golf ytterliggare till våren 2024.
        Tävlingen är nettoklass så alla kan vara med och tävla, man startar på sitt utomhushcp och sen sänker/höjer man sig från det.
        Varje vecka läggs nya tävlingar ut som ni kan spela närsomhelst då datorn är markör. Gratis speltimmar till vinnarna varje vecka.
        Att delta i onlinetävlingarna är gratis så anmäl er nu på 
      </p>  
      <a href="https://simulatorgolftour.com/register" class="button">REGISTRERA DIG</a>
    </section>
    <section class="section-spacer"></section>

`;
