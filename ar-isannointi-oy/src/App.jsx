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
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App