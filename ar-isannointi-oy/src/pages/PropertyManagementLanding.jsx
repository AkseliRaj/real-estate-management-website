import '../css/PropertyManagementLanding.css';

import ArrowButton from '../components/ArrowButtonOrange.jsx';
import HouseImage from '../assets/svg/HouseMagnifierImage.svg';

import HeroWrapper from '../components/HeroWrapper.jsx';
import LogoCarousel from '../components/MarqueeCarousel.jsx';
import FormCardGrid from '../components/FormCardGrid.jsx';

function PropertyManagementLanding() {

  const formCardItems = [
    { heading: 'Kulutuslukema' },
    { heading: 'Muutos- ja korjaustyöilmoitus'},
    { heading: 'Vikailmoitus'}
  ];

  const handleQuoteRequest = () => {
    console.log("Tarjouspyyntö lähetetty!");
  };

  return (
    <div className='container-fluid px-0'>

      <HeroWrapper
        headerText="Ammattitaitoista isännöintiä Kankaanpäässä"
        buttonText="Lomakkeet"
        onButtonClick={handleQuoteRequest}
      />

      <div className='Introduction-Section row d-flex justify-content-center'>
        <div className='col-10'>
          <div className='row align-items-center'>
            <div className='col-12 col-lg-7 col-xl-6'>
              <h3 className='pb-3'>Luotettavaa ja asiakaslähtöistä isännöintiä</h3>
              <p>Tarjoamme kokonaisvaltaista isännöintipalvelua, joka kattaa kiinteistön hallinnon, talouden ja teknisen ylläpidon. Toimintamme perustuu suunnitelmallisuuteen, avoimuuteen ja sujuvaan asiakaspalveluun.</p>
              <p className='pb-3'>Vuodesta 2009 lähtien olemme palvelleet niin pieniä kuin suuria kiinteistöjä vahvalla ammattitaidolla ja paikallistuntemuksella. Tavoitteenamme on varmistaa kiinteistöjen arvon säilyminen sekä turvallinen ja viihtyisä asuminen.</p>
              <ArrowButton
                label="Kysy tarjous isännöinnistä"
                onClick={handleQuoteRequest}
                variant="orange"
              />
            </div>
            <div className='col-lg-5 col-xl-6 d-none d-lg-flex justify-content-center'>
              <img src={HouseImage} alt="House-Image" className="Introduction-Image" />
            </div>
          </div>
        </div>
      </div>

      <div className='Logo-Marquee-Section row d-flex justify-content-center'>
        <div className='col-12'>
          <div className='row d-flex justify-content-center'>
            <div className='col-12 col-md-10 text-center pb-5'>
              <h3 className='pb-3'>Apunamme ovat paikalliset yhteistyökumppanit</h3>
              <p>Vakiintuneesta verkostostamme löytyy ammattitaitoinen apu kaikkiin kiinteistöhuollon, rakentamisen ja korjausrakentamisen tehtäviin. Yhteistyökumppanimme allekirjoittavat saman laatulupauksen kuin me, jotta suuretkin remontit hoituvat laadukkaasti maaliin.</p>
            </div>
          </div>
          <div className='col-12 d-flex justify-content-center'>
            <LogoCarousel />
          </div>
        </div>
      </div>

      <div className='Logo-Marquee-Section row d-flex justify-content-center'>
        <div className='col-10'>
          <div className='row d-flex justify-content-start'>
            <div className='col-9 pb-5'>
              <h3 className='pb-3'>Sujuvaa asiointia sähköisillä lomakkeilla</h3>
              <p>Löydät kaikki tärkeimmät lomakkeemme yhdestä paikasta. Olitpa tekemässä muuttoilmoitusta, tilaamassa isännöitsijätodistusta tai ilmoittamassa viasta, sähköinen asiointimme palvelee sinua ympäri vuorokauden.</p>
              <p>Sähköisten lomakkeiden avulla ilmoituksesi siirtyy suoraan asiantuntijallemme käsiteltäväksi ilman turhia välikäsiä. Voit löytää kaikki lomakkeet isännöintiin liittyen täältä.</p>
            </div>
          </div>
          <div className='col-12 d-flex justify-content-start'>
            <FormCardGrid items={formCardItems} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default PropertyManagementLanding
