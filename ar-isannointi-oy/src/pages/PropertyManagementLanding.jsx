import ArrowButtonOrange from '../components/ArrowButtonOrange.jsx'

function PropertyManagementLanding() {
  const handleQuoteRequest = () => {
    console.log("Tarjouspyyntö lähetetty!");
  };

  return (
    <div className='container-fluid'>
      <div className='row d-flex justify-content-center'>
        <div className='col-10'>

          <div className='row'>
            <div className='col-6'>
              <h3>Luotettavaa ja asiakaslähtöistä isännöintiä</h3>
              <p>Tarjoamme kokonaisvaltaista isännöintipalvelua, joka kattaa kiinteistön hallinnon, talouden ja teknisen ylläpidon. Toimintamme perustuu suunnitelmallisuuteen, avoimuuteen ja sujuvaan asiakaspalveluun.</p>
              <p>Vuodesta 2009 lähtien olemme palvelleet niin pieniä kuin suuria kiinteistöjä vahvalla ammattitaidolla ja paikallistuntemuksella. Tavoitteenamme on varmistaa kiinteistöjen arvon säilyminen sekä turvallinen ja viihtyisä asuminen.</p>
              <ArrowButtonOrange
                label="Kysy tarjous isännöinnistä"
                onClick={handleQuoteRequest}
              />
            </div>
            <div className='col-6'>
              <p>Vuodesta 2009 lähtien olemme palvelleet niin pieniä kuin suuria kiinteistöjä vahvalla ammattitaidolla ja paikallistuntemuksella. Tavoitteenamme on varmistaa kiinteistöjen arvon säilyminen sekä turvallinen ja viihtyisä asuminen.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PropertyManagementLanding
