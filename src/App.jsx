import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';


// -- GNL Digital Group --
import GNL from './pages/GNL';
import GNLProposal from './pages/GNLProposal';
import Connect from './pages/Connect';
import Home from './pages/Home';
import About from './pages/About';
import About2 from './pages/About2';
import Contact from './pages/Contact';
import Contact2 from './pages/Contact2';
import SmallBusiness from './pages/SmallBusiness';
import ForLinda from './pages/ForLinda';

// -- Who We Help --
import WhoWeHelpMedical from './pages/WhoWeHelpMedical';
import WhoWeHelpRestaurants from './pages/WhoWeHelpRestaurants';
import WhoWeHelpProfessional from './pages/WhoWeHelpProfessional';
import WhoWeHelpHomeServices from './pages/WhoWeHelpHomeServices';
import WhoWeHelpLawFirms from './pages/WhoWeHelpLawFirms';
import WhoWeHelpRealtors from './pages/WhoWeHelpRealtors';

// -- Client demos & proposals --
import WarrenDemo from './pages/WarrenDemo';
import WarrenProposal from './pages/WarrenProposal';
import Dowless from './pages/dowless';
import DowlessProposal from './pages/DowlessProposal';
import CanesLive from './pages/CanesLive';
import WJHomesProposal from './pages/WJHomesProposal';
import WJHomesDemo from './pages/WJHomesDemo';
import CohenProposal from './pages/CohenProposal';
import CohenDemo from './pages/CohenDemo';
import CohenStillWater from './pages/CohenStillWater';
import CohenLakeLife from './pages/CohenLakeLife';
import CohenBlueprint from './pages/CohenBlueprint';
import PiedmontOrderDesk from './pages/PiedmontOrderDesk';
import PiedmontProposal from './pages/PiedmontProposal';
import PiedmontHome from './pages/PiedmontHome';

// -- Client sites --
import Featherline from './pages/Featherline';

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<GNL />} />

          {/* GNL Digital Group */}
          <Route path="/gnl" element={<GNL />} />
          <Route path="/gnl-proposal" element={<GNLProposal />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about2" element={<About2 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact2" element={<Contact2 />} />
          <Route path="/small-business" element={<SmallBusiness />} />
          <Route path="/for-linda" element={<ForLinda />} />

          {/* Who We Help */}
          <Route path="/who-we-help/medical" element={<WhoWeHelpMedical />} />
          <Route path="/who-we-help/restaurants" element={<WhoWeHelpRestaurants />} />
          <Route path="/who-we-help/professional" element={<WhoWeHelpProfessional />} />
          <Route path="/who-we-help/home-services" element={<WhoWeHelpHomeServices />} />
          <Route path="/who-we-help/law-firms" element={<WhoWeHelpLawFirms />} />
          <Route path="/who-we-help/realtors" element={<WhoWeHelpRealtors />} />

          {/* Client demos & proposals */}
          <Route path="/warren-demo" element={<WarrenDemo />} />
          <Route path="/warren-proposal" element={<WarrenProposal />} />
          <Route path="/dowless" element={<Dowless />} />
          <Route path="/dowless-proposal" element={<DowlessProposal />} />
          <Route path="/canes-live" element={<CanesLive />} />
          <Route path="/wj-homes-proposal" element={<WJHomesProposal />} />
          <Route path="/wj-homes-demo" element={<WJHomesDemo />} />
          <Route path="/cohen-proposal" element={<CohenProposal />} />
          <Route path="/cohen-demo" element={<CohenDemo />} />
          <Route path="/cohen-still-water" element={<CohenStillWater />} />
          <Route path="/cohen-lake-life" element={<CohenLakeLife />} />
          <Route path="/cohen-blueprint" element={<CohenBlueprint />} />
          <Route path="/piedmont-order-desk" element={<PiedmontOrderDesk />} />
          <Route path="/piedmont-proposal" element={<PiedmontProposal />} />
          <Route path="/piedmont-home" element={<PiedmontHome />} />

          {/* Client sites */}
          <Route path="/featherline" element={<Featherline />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
