import { Routes, Route } from 'react-router-dom';

{ /*COMPONENTS*/ }
import NavBar from './components/NavBar';
import Footer from './components/Footer';

{ /*PAGES*/ }
import PropertyManagementLanding from './pages/PropertyManagementLanding';
import PropertyManagementQuotePage from './pages/PropertyManagementQuotePage';
import PropertyManagementInstructions from './pages/PropertyManagementInstructions';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<PropertyManagementLanding />} />
        <Route path="/tarjous-isannoinnista" element={<PropertyManagementQuotePage />} />
        <Route path="/ohjeet-taloyhtion-asukkaille" element={<PropertyManagementInstructions />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App