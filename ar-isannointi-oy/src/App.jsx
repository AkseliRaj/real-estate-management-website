import { Routes, Route, useLocation } from 'react-router-dom';

{ /*COMPONENTS*/ }
import NavBar from './components/NavBar';
import Footer from './components/Footer';

{ /*PAGES*/ }
import PropertyManagementLanding from './pages/PropertyManagementLanding';
import PropertyManagementQuotePage from './pages/PropertyManagementQuotePage';
import PropertyManagementInstructions from './pages/PropertyManagementInstructions';

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
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App