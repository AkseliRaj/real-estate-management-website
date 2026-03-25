import '../css/PropertyManagementLanding.css';
import ArrowButton from '../components/ArrowButtonOrange.jsx';
import HeroWrapper from '../components/HeroWrapper.jsx';

function PropertyManagementLanding() {

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

      <div className='row d-flex justify-content-center'>
        <div className='col-10'>

          <div className='row'>
            <div className='col-6'>
              <h3>Luotettavaa ja asiakaslähtöistä isännöintiä</h3>
              <p>Tarjoamme kokonaisvaltaista isännöintipalvelua, joka kattaa kiinteistön hallinnon, talouden ja teknisen ylläpidon. Toimintamme perustuu suunnitelmallisuuteen, avoimuuteen ja sujuvaan asiakaspalveluun.</p>
              <p>Vuodesta 2009 lähtien olemme palvelleet niin pieniä kuin suuria kiinteistöjä vahvalla ammattitaidolla ja paikallistuntemuksella. Tavoitteenamme on varmistaa kiinteistöjen arvon säilyminen sekä turvallinen ja viihtyisä asuminen.</p>
              <ArrowButton
                label="Kysy tarjous isännöinnistä"
                onClick={handleQuoteRequest}
                variant="orange"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyManagementLanding
