import ArrowButtonOrange from '../components/ArrowButtonOrange.jsx'

function PropertyManagementLanding() {
  const handleQuoteRequest = () => {
    console.log("Tarjouspyyntö lähetetty!");
  };

  return (
    <div>
      <h3>Luotettavaa ja asiakaslähtöistä isännöintiä</h3>
      <p>Tarjoamme kokonaisvaltaista isännöintipalvelua, joka kattaa kiinteistön hallinnon, talouden ja teknisen ylläpidon. Toimintamme perustuu suunnitelmallisuuteen, avoimuuteen ja sujuvaan asiakaspalveluun.</p>
      <p>Vuodesta 2009 lähtien olemme palvelleet niin pieniä kuin suuria kiinteistöjä vahvalla ammattitaidolla ja paikallistuntemuksella. Tavoitteenamme on varmistaa kiinteistöjen arvon säilyminen sekä turvallinen ja viihtyisä asuminen.</p>
      <ArrowButtonOrange
        label="Kysy tarjous isännöinnistä"
        onClick={handleQuoteRequest}
      />
    </div>
  )
}

export default PropertyManagementLanding
