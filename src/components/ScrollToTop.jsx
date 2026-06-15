import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls the window to the top whenever the route changes.
// Without this, navigating to a new page can leave you scrolled
// partway down where the previous page was.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
