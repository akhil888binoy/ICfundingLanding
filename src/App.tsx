import {Route , BrowserRouter as Router ,  Routes} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/sections/Footer';
import WaitlistSection from './components/sections/WaitlistSection';

const App = () => {
  return (
    <main>
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path="/waitlist" element={<WaitlistSection />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </main>
  )
}

export default App