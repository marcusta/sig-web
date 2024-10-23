import type { Page } from "../sig_template";

export const prislistaPage: Page = {
  title: "Home",
  content: [
    {
      name: "titel",
      get: () => "Prislista",
      render: () => "Prislista",
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
    <section class="features animate fade-left">
      <div class="feature">
        <h2 class="red">JUST NU: SOMMARPRIS 39 KR/H</h2>
        <a href="https://www.matchi.se/facilities/swedenindoorgolf" class="button">BOKA TID</a>
      </div>
    </section>
    <section class="features animate fade-up">
      <div class="feature">
        <h1>PRISLISTA</h1>
      </div>
    </section>
    <section class="features animate fade-right">
      <div class="feature columns">
        <div>
          <i class="icon_clock large_icon"></i>
          <h3>MÅNDAG - FREDAG</h3>
            <p>
            05 - 07 <b class="red">49 kr/tim</b> (99 kr/tim)
            </p>  
            <p>
            07 - 16 <b class="red">125 kr/tim</b> (249 kr/tim)
            </p>
            <p>
            16 - 21 <b class="red">175 kr/tim</b> (349 kr/tim)
            </p>
          <p>21 - 23 <b class="red">99 kr/tim</b> (199 kr/tim)</p>
          <p class="padding-bottom-20">23 - 24 <b class="red">49 kr/tim</b> (99 kr/tim)</p>
          <a href="https://www.matchi.se/facilities/swedenindoorgolf" class="button">BOKA TID</a>
        </div>
        <div>
          <i class="icon_clock large_icon"></i>
          <h3>LÖRDAG - SÖNDAG</h3>
            <p>
            05 - 08 <b class="red">49 kr/tim</b> (99 kr/tim)
            </p>  
            <p>
            08 - 18 <b class="red">175 kr/tim</b> (349 kr/tim)
            </p>
            <p>
            18 - 20 <b class="red">125 kr/tim</b> (249 kr/tim)
            </p>
            <p>20 - 23 <b class="red">99 kr/tim</b> (199 kr/tim)</p>
            <p class="padding-bottom-20">23 - 24 <b class="red">49 kr/tim</b> (99 kr/tim)</p>
            <a href="https://www.matchi.se/facilities/swedenindoorgolf" class="button">BOKA TID</a>
        </div>
        <div> 
          <i class="icon_desktop large_icon"></i>
          <h3>GREENFEEMEDLEM</h3>
          <div class="left-align">
            <p>
              Perfekt för dig som spelar några gånger då och då men ändå vill ha riktigt låga timpriser hos oss. Obegränsat antal samtidiga bokningar.
            </p>
            <p>  
              <b class="red">799 kr</b> per säsong om gör att du spelar till <b class="red">50% rabatt mot ordinarie prislista.</b>
            </p>
            <p> 
              <div class="border-blue">15% rabatt på customfitting.PRO samt i fysisk golfshop på Industrigatan 5.</div>
            </p>
            <P>
              <div class="border-blue">Gratis Custom Fitting och genomgång av din bag i samarbete med customfitting.PRO</div>
            </p>
            <p>
              <b  class="red">Spela sedan för endast 49-175kr/timme fram till 1/10- 2025 enligt rödmarkerade timpriser till vänster/ovan. </b>
            </p>
          </div>
          <a href="https://www.matchi.se/facilities/membership/swedenindoorgolf" class="button">BLI GREENFEEMEDLEM</a>
        </div>
      </div>
    </section>
    <section class="features animate zoom-in">
      <div class="feature columns">
        <div> 
          <i class="icon_desktop large_icon"></i>
          <h3>ÅRSKORT 15 GRATISTIMMAR/MÅNAD</h3>
          <div class="left-align">
            <p>
              Perfekt för dig som vill spela mer och har möjlighet att främst spela på andra tider än ”Prime Time”.
            </p>
            <p>  
              <b class="red">399 kr/månad</b> (gäller 12 mån och betalas i förskott)
            </p>
            <p>
              20 gratistimmar per månad varav 1h "Prime Time"*
            </p>
            <p> 
              <div class="border-blue">15% rabatt på customfitting.PRO samt i fysisk golfshop på Industrigatan 5.</div>
            </p>
            <P>
              <div class="border-blue">Gratis Custom Fitting och genomgång av din bag i samarbete med customfitting.PRO</div>
            </p>
            <p>
              <b  class="red">NYHET: Nu kan du planera din inomhusgolf lång tid i förväg! Obegränsat antal förbokade tider på ÅRSKORT/ÅRSKORT+</b>
            </p>
            <p>
              * ”Prime Time” = Vardagar 16-21 + Helger 08-18
            </p>
          </div>
          <a href="https://www.matchi.se/facilities/membership/swedenindoorgolf" class="button">KÖP ÅRSKORT 15<br>GRATISTIMMAR/MÅNAD</a>
        </div>
        <div> 
          <i class="icon_desktop large_icon"></i>
          <h3>ÅRSKORT 20 GRATISTIMMAR/MÅNAD</h3>
          <div class="left-align">
            <p>
              Perfekt för dig som vill spela lite mer till ett bra pris per timme.
            </p>
            <p>  
              <b class="red">549 kr/månad</b> (gäller 12 mån och betalas i förskott)
            </p>
            <p>
              20 gratistimmar per månad varav 6h "Prime Time"*
            </p>
            <p> 
              <div class="border-blue">15% rabatt på customfitting.PRO samt i fysisk golfshop på Industrigatan 5.</div>
            </p>
            <P>
              <div class="border-blue">Gratis Custom Fitting och genomgång av din bag i samarbete med customfitting.PRO</div>
            </p>
            <p>
              <b  class="red">NYHET: Nu kan du planera din inomhusgolf lång tid i förväg! Obegränsat antal förbokade tider på ÅRSKORT/ÅRSKORT+</b>
            </p>
            <p>
              * ”Prime Time” = Vardagar 16-21 + Helger 08-18
            </p>
          </div>
          <a href="https://www.matchi.se/facilities/membership/swedenindoorgolf" class="button">KÖP ÅRSKORT 20<br>GRATISTIMMAR/MÅNAD</a>
        </div>
        <div> 
          <i class="icon_desktop large_icon"></i>
          <h3>ÅRSKORT+ 30 GRATISTIMMAR/MÅNAD + OBEGRÄNSAT GRATIS DROP-IN</h3>
          <div class="left-align">
            <p>
              Perfekt för dig som vill spela mer eller träna till ett extremt lågt pris per timme.
            </p>
            <p>  
              <b class="red">799 kr/månad</b> (gäller 12 mån och betalas i förskott)
            </p>
            <p>
              30 gratistimmar per månad varav 12h "Prime Time"
            </p>
            <p> 
              <div class="border-blue">15% rabatt på customfitting.PRO samt i fysisk golfshop på Industrigatan 5.</div>
            </p>
            <P>
              <div class="border-blue">Gratis Custom Fitting och genomgång av din bag i samarbete med customfitting.PRO</div>
            </p>
            <p>
              Spela även obegränsat gratis drop-in på oanvända speltider (gäller under golfshoppen customfitting.pro öppettider).
            </p>
            <p>
              <b  class="red">NYHET: Nu kan du planera din inomhusgolf lång tid i förväg! Obegränsat antal förbokade tider på ÅRSKORT/ÅRSKORT+</b>
            </p>
            <p>
              * ”Prime Time” = Vardagar 16-21 + Helger 08-18
            </p>
          </div>
          <a href="https://www.matchi.se/facilities/membership/swedenindoorgolf" class="button">KÖP ÅRSKORT 30<br>GRATISTIMMAR/MÅNAD</a>
      </div>
    </section>

`;
