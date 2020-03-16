import "../styles/styles.scss";
import Head from "next/head";

export default ({ title, description, ogImage }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>{title || "Neglect us! - Médecins Sans Frontières"}</title>
    <meta
      name="description"
      content={
        description ||
        "Our dark land has one and a half billion inhabitants. We rule over them and no one gets in the way much. Well... almost no one. There are some marauders such as Médecins Sans Frontières, but they can’t do much alone. They call us neglected diseases. Because the world doesn’t care about us. "
      }
    />
    <meta
      property="og:title"
      content={title || "Neglect us! - Médecins Sans Frontières"}
    />
    <meta
      property="og:description"
      content={
        description ||
        "Our dark land has one and a half billion inhabitants. We rule over them and no one gets in the way much. Well... almost no one. There are some marauders such as Médecins Sans Frontières, but they can’t do much alone. They call us neglected diseases. Because the world doesn’t care about us. "
      }
    />
    <meta name="twitter:card" content="summary" />
    <meta name="twitter:site" content="@msf_czech" />
    <meta name="twitter:creator" content="@msf_czech" />
    <meta name="og:url" content="https://www.lekari-bez-hranic.cz" />
    <meta
      name="og:image"
      content={ogImage || "/static/img/og/og-main.jpg?v=1"}
    />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="https://www.lekari-bez-hranic.cz/sites/master/files/favicons/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://www.lekari-bez-hranic.cz/sites/master/files/favicons/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="https://www.lekari-bez-hranic.cz/sites/master/files/favicons/favicon-16x16.png"
    />
    <link
      rel="manifest"
      href="https://www.lekari-bez-hranic.cz/sites/master/files/favicons/manifest.json"
    />
    <link
      rel="mask-icon"
      href="https://www.lekari-bez-hranic.cz/sites/master/files/favicons/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="theme-color" content="#ffffff" />
  </Head>
);
