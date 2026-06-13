import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SmallBusiness from './pages/SmallBusiness';
import WhoWeHelpLawFirms from './pages/WhoWeHelpLawFirms';
import WhoWeHelpMedical from './pages/WhoWeHelpMedical';
import WhoWeHelpRestaurants from './pages/WhoWeHelpRestaurants';
import WhoWeHelpProfessional from './pages/WhoWeHelpProfessional';
import WhoWeHelpHomeServices from './pages/WhoWeHelpHomeServices';
import WhoWeHelpRealtors from './pages/WhoWeHelpRealtors';
import OnsiteHome from './pages/OnsiteHome';
import WarrenProposal from './pages/WarrenProposal';
import WarrenDemo from './pages/WarrenDemo';
import DowlessProposal from './pages/DowlessProposal';
import DowlessDemo from './pages/DowlessDemo';
import CanesLive from './pages/CanesLive';
import ForLinda from './pages/ForLinda';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  // Show loading spinner while checking app public settings or auth
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Handle authentication errors
  if (authError) {
    if (authError.type === 'user_not_registered') {
      return <UserNotRegisteredError />;
    } else if (authError.type === 'auth_required') {
      // Redirect to login automatically
      navigateToLogin();
      return null;
    }
  }

  // Render the main app
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/small-business" element={<SmallBusiness />} />
      <Route path="/who-we-help/law-firms" element={<WhoWeHelpLawFirms />} />
      <Route path="/who-we-help/medical" element={<WhoWeHelpMedical />} />
      <Route path="/who-we-help/restaurants" element={<WhoWeHelpRestaurants />} />
      <Route path="/who-we-help/professional" element={<WhoWeHelpProfessional />} />
      <Route path="/who-we-help/home-services" element={<WhoWeHelpHomeServices />} />
      <Route path="/who-we-help/realtors" element={<WhoWeHelpRealtors />} />
      <Route path="/onsite-computer-service" element={<OnsiteHome />} />
      <Route path="/warren" element={<WarrenProposal />} />
      <Route path="/warren-demo" element={<WarrenDemo />} />
      <Route path="/dowless" element={<DowlessProposal />} />
      <Route path="/dowless-demo" element={<DowlessDemo />} />
      <Route path="/canes" element={<CanesLive />} />
      <Route path="/linda" element={<ForLinda />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>
  );
};


function App() {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
