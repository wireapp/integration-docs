import { useEffect } from "react";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";
import { useColorMode } from '@docusaurus/theme-common';

export default function CookieConsentBanner() {
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark")
      document.documentElement.classList.add('cc--darkmode');

    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "bar inline",
          position: "bottom",
          equalWeightButtons: true,
          flipButtons: false
        },
        preferencesModal: {
          layout: "box",
          position: "right",
          equalWeightButtons: false,
          flipButtons: false
        }
      },
      categories: {
        necessary: {
          readOnly: true
        },
        analytics: {}
      },
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              description: "This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow us to remember you. We use this information in order to improve and customize your browsing experience and for analytics and metrics about our visitors both on this website and other media. To find out more about the cookies we use, see our Privacy Policy.\n\n" +
                "If you decline, your information won’t be tracked when you visit this website. A single cookie will be used in your browser to remember your preference not to be tracked.",
              acceptAllBtn: "Accept",
              acceptNecessaryBtn: "Decline",
              showPreferencesBtn: "Cookie settings",
              footer: "<a href=\"#link\">Privacy Policy</a>"
            },
            preferencesModal: {
              title: "About Cookies",
              acceptAllBtn: "Accept All",
              savePreferencesBtn: "Save settings",
              closeIconLabel: "Close modal",
              serviceCounterLabel: "Service|Services",
              sections: [
                {
                  description: "This site uses cookies. We use cookies mainly to improve and analyze your experience on our websites. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change your default settings."
                },
                {
                  title: "Necessary <span class=\"pm__badge\">Always active</span>",
                  description: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences or filling in forms",
                  linkedCategory: "necessary"
                },
                {
                  title: "Analytics",
                  description: "These cookies help us to understand how visitors engage with the website. We may use a set of cookies to collect information and report site usage statistics.",
                  linkedCategory: "analytics"
                }
              ]
            }
          }
        }
      },
      disablePageInteraction: true
    });
  }, []);
}
