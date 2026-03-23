import { Routes, Route } from 'react-router-dom';
import PropertyManagementLanding from './pages/PropertyManagementLanding';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<PropertyManagementLanding />} />
      </Routes>
    </>
  )
}

export default App