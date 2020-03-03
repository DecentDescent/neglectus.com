import "../styles/styles.scss";
import Head from "../components/Head";
import Link from "next/link";
import ReactGA from "react-ga";

export default class extends React.Component {
  componentDidMount() {
    ReactGA.initialize("UA-50377630-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js"
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-5DMDW8M");
  }

  static async getInitialProps({ req }) {
    const url =
      req && req.headers && req.headers.host
        ? "https://" + req.headers.host
        : window.location.origin;
    return { myUrl: url };
  }

  render = () => <div>Not so smart</div>;
}
