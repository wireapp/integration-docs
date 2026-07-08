import { useEffect } from "react";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import * as CookieConsent from "vanilla-cookieconsent";

export default function CookieConsentBanner() {
  console.log("module is executed")
  useEffect(() => {
    /**
     * All config. options available here:
     * https://cookieconsent.orestbida.com/reference/configuration-reference.html
     */
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
              title: "Hello traveller, it's cookie time!",
              description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              showPreferencesBtn: "Manage preferences",
              footer: "<a href=\"#link\">Privacy Policy</a>\n<a href=\"#link\">Terms and conditions</a>"
            },
            preferencesModal: {
              title: "Consent Preferences Center",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Reject all",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close modal",
              serviceCounterLabel: "Service|Services",
              sections: [
                {
                  title: "Cookie Usage",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                },
                {
                  title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  linkedCategory: "necessary"
                },
                {
                  title: "Analytics Cookies",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  linkedCategory: "analytics"
                },
                {
                  title: "More information",
                  description: "For any query in relation to my policy on cookies and your choices, please <a class=\"cc__link\" href=\"#yourdomain.com\">contact me</a>."
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
