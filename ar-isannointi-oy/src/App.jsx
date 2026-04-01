import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import PropertyManagementLanding from './pages/PropertyManagementLanding';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<PropertyManagementLanding />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App