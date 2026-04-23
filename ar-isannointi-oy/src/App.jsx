import { Routes, Route, useLocation } from 'react-router-dom';

{ /*COMPONENTS*/ }
import NavBar from './components/NavBar';
import Footer from './components/Footer';

{ /*PAGES*/ }
import PropertyManagementLanding from './pages/PropertyManagementLanding';
import PropertyManagementQuotePage from './pages/PropertyManagementQuotePage';
import PropertyManagementInstructions from './pages/PropertyManagementInstructions';
import ResponsibilityTablePage from './pages/ResponsibilityTablePage.jsx';
import PropertyManagementFormsPage from './pages/PropertyManagementFormsPage.jsx';
import BiddingQuotePage from './pages/BiddingQuotePage.jsx';
import PublicDeedConfirmationsPage from './pages/PublicDeedConfirmationsPage.jsx';
import RealEstateQuotePage from './pages/RealEstateQuotePage.jsx';
import RealEstatePropertiesPage from './pages/RealEstatePropertiesPage.jsx';
import RealEstateLandingPage from './pages/RealEstateLandingPage.jsx';

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
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App