import React from 'react';
import { useLocation } from '@docusaurus/router';
import * as CookieConsent from 'vanilla-cookieconsent';

export default function Root({ children }) {
  const location = useLocation();

  React.useEffect(() => {
    if (CookieConsent.acceptedCategory('analytics') && window.dataLayer) {
      window.dataLayer.push({event: 'pageview'});
    }
  }, [location]);

  return <>{children}</>;
}
