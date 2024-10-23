import type { Page } from "../sig_template";

export const faqPage: Page = {
  title: "Home",
  content: [
    {
      name: "titel",
      get: () => "FAQ",
      render: () => "FAQ",
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
        <h1>FAQ</h1>
        <h1>(FREQUENTLY ASKED QUESTIONS)</h1>
      </div>
      <div class="feature">
        <div class="panel" data-title="Bokningsregler">
            <p>Avbokning med återbetalning är generellt möjligt fram till sex timmar innan bokad tid. Vid avbokning av tid som betalats med bank-, betal- eller kreditkort tas en avbokningsavgift på 12,50 SEK ut. Sena bokningar (inom 6 timmar före starttid) är ej återbetalningsbara.</p>

          <p>Sena bokningar (inom 6 timmar före starttid) är ej återbetalningsbara.</p>
        </div>
        <div class="panel" data-title="Cookies">
<p>De flesta webbplatser använder så kallade cookies. Det är små textfiler som lagras i webbläsaren eller på hårddisken på din dator. Enligt lagen om elektronisk kommunikation (2003:389) ska du som besöker en webbplats få information om webbplatsen använder cookies och samtycka till att de används.</p>

<p>Cookies kan ge dig som besökare tillgång till olika funktioner och förbättrar upplevelsen av webbplatsen. Till exempel gör de så att du:</p>
<ul>
<li>kan använda samma inställningar som du hade senast på webbplatsen</li>
<li>automatiskt loggas in (om "Kom ihåg mig" har valts)</li>
<li>behåller din inloggning när du surfar runt på webbplatsen</li>
<li>kan få information som passar just dig</li>
</ul>

<p>I en cookie finns det information om ett ID som gör att det går att få fram exempelvis hur du som besökare surfar på webbplatsen. Vi använder informationen från cookies för att du ska få en så bra upplevelse som möjligt av webbplatsen, för statistisk utvärdering och i marknadsföringssyfte för att anpassa webbplatsen för dina intressen.</p>

<h4>Informationen som samlas in är anonym</h4>
<p>Informationen som kan samlas in är anonym och innehåller vare sig IP-adress, namn, e-postadress eller några andra uppgifter som kan kopplas till dig som person. Cookies används inte för att skada eller förstöra din dator.</p>

<h4>Hur vill du göra med cookies?</h4>
<p>Cookies används automatiskt då du besöker vår webbplats. Vi föreslår att du behåller det så för att du ska kunna ta del av alla fördelarna.</p>

<p>Vill du däremot inte att cookies ska användas kan du stänga av dem. Tänk på att om du avaktiverar cookies, kan detta påverka din upplevelse och navigering på webbplatsen. Du kanske inte kan utnyttja vissa funktioner eller tjänster.</p>
        </div>


      </div>
    </section>
    <section class="section-spacer"></section>

`;
