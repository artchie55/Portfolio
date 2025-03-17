
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import PortfolioContent from './components/PortfolioContent'
import Contacts from './components/Contacts'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function App() {
 

  return (
   <div>
    <Navbar />
    <Home />
    <About />
    <PortfolioContent/>
   </div>
  )
}

export default App
