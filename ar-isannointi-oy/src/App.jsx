import { Routes, Route, useLocation } from 'react-router-dom';

{ /*COMPONENTS*/ }
import NavBar from './components/NavBar';
import Footer from './components/Footer';

{ /*PAGES*/ }
import PropertyManagementLanding from './pages/propertyManagement/PropertyManagementLanding.jsx';
import PropertyManagementQuotePage from './pages/propertyManagement/PropertyManagementQuotePage.jsx';
import PropertyManagementInstructions from './pages/propertyManagement/PropertyManagementInstructions.jsx';
import ResponsibilityTablePage from './pages/propertyManagement/ResponsibilityTablePage.jsx';
import PropertyManagementFormsPage from './pages/propertyManagement/PropertyManagementFormsPage.jsx';
import BiddingQuotePage from './pages/realEstate/BiddingQuotePage.jsx';
import PublicDeedConfirmationsPage from './pages/realEstate/PublicDeedConfirmationsPage.jsx';
import RealEstateQuotePage from './pages/realEstate/RealEstateQuotePage.jsx';
import RealEstatePropertiesPage from './pages/realEstate/RealEstatePropertiesPage.jsx';
import RealEstateLandingPage from './pages/realEstate/RealEstateLandingPage.jsx';
import RentalPropertiesPage from './pages/rentals/RentalPropertiesPage.jsx';
import RentalLandingPage from './pages/rentals/RentalLandingPage.jsx';
import RentalApplicationPage from './pages/rentals/RentalApplicationPage.jsx';
import RentalQuotePage from './pages/rentals/RentalQuotePage.jsx';
import ContactInformationPage from './pages/ContactInformationPage.jsx';

function App() {
  const { pathname } = useLocation();

  return (
    <>
      <NavBar />
      <main key={pathname} className="page-transition">
        <Routes>
          <Route path="/" element={<PropertyManagementLanding />} />
          <Route path="/tarjous-isannoinnista" element={<PropertyManagementQuotePage />} />
          <Route path="/ohjeet-taloyhtion-asukkaille" element={<PropertyManagementInstructions />} />
          <Route path="/vastuunjakotaulukko" element={<ResponsibilityTablePage />} />
          <Route path="/lomakkeet" element={<PropertyManagementFormsPage />} />
          <Route path="/tarjouskaupat" element={<BiddingQuotePage />} />
          <Route path="/julkiset-kaupanvahvistukset" element={<PublicDeedConfirmationsPage />} />
          <Route path="/kiinteistonvalitys" element={<RealEstateLandingPage />} />
          <Route path="/arvio-kohteestasi" element={<RealEstateQuotePage />} />
          <Route path="/kiinteistonvalitys/kohteet" element={<RealEstatePropertiesPage />} />
          <Route path="/vuokraus/kohteet" element={<RentalPropertiesPage />} />
          <Route path="/vuokraus" element={<RentalLandingPage />} />
          <Route path="/vuokraa-asuntosi" element={<RentalQuotePage />} />
          <Route path="/vuokrahakemus" element={<RentalApplicationPage />} />
          <Route path="/yhteystiedot" element={<ContactInformationPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App