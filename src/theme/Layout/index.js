import React from 'react';
import Layout from '@theme-original/Layout';
import CookieConsentBanner from "../../scripts/cookie_consent";
import BrowserOnly from "@docusaurus/BrowserOnly";

export default function LayoutWrapper({children, ...props}) {
  return (
    <Layout {...props}>
      <BrowserOnly>
        {() => <CookieConsentBanner />}
      </BrowserOnly>
      {children}
    </Layout>
  );
}
