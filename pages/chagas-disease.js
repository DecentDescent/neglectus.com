import "../styles/styles.scss";
import Head from "../components/Head";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Disease from "../components/Disease";
import Link from "next/link";
import SmartPage from "./SmartPage";

export default class extends SmartPage {
  render = () => {
    const { myUrl } = this.props;
    return (
      <div>
        <Head
          title="Chagas disease - Neglect us! Kala Azar &amp; Company - Médecins Sans Frontières"
          description="My favourite time is mostly during the night when the blood-sucking “kissing bugs” crawl from the muddy walls and straw rooftops of houses. Their kiss is often my ticket to ride inside human bodies. I can also sneak in through blood transfusions or breastfeeding. My victims usually don't know about me for years. I'm not easily discovered. At first, I am mild, showing up as other diseases with fevers, fatigue, aches, nausea. If I decide to move in, I settle down in the nervous and digestive systems, causing everlasting damage to the heart… Only a few drugs can defeat me and even these need to be brought in quickly after I’ve arrived. I nest in at least 6,000,000 people and I kill 8,000 of them every year. I attack almost exclusively in Latin America, although my hosts can carry me anywhere. Isn’t it wonderful?"
          ogTitle="Chagas disease - Neglect us! Kala Azar &amp; Company - Médecins Sans Frontières"
          ogDescription="My favourite time is mostly during the night when the blood-sucking “kissing bugs” crawl from the muddy walls and straw rooftops of houses. Their kiss is often my ticket to ride inside human bodies. I can also sneak in through blood transfusions or breastfeeding. My victims usually don't know about me for years. I'm not easily discovered. At first, I am mild, showing up as other diseases with fevers, fatigue, aches, nausea. If I decide to move in, I settle down in the nervous and digestive systems, causing everlasting damage to the heart… Only a few drugs can defeat me and even these need to be brought in quickly after I’ve arrived. I nest in at least 6,000,000 people and I kill 8,000 of them every year. I attack almost exclusively in Latin America, although my hosts can carry me anywhere. Isn’t it wonderful?"
          ogImage={myUrl + "/static/img/og/chagasova-choroba.jpg?v=1"}
          twitterCard="summary"
          twitterSite="@msf_czech"
          twitterCreator="@msf_czech"
        />
        <Header />
        <Preloader />
        <Disease
          name="chagas-disease"
          title="Chagas disease "
          description="My favourite time is mostly during the night when the blood-sucking “kissing bugs” crawl from the muddy walls and straw rooftops of houses. Their kiss is often my ticket to ride inside human bodies. I can also sneak in through blood transfusions or breastfeeding. My victims usually don't know about me for years. I'm not easily discovered. At first, I am mild, showing up as other diseases with fevers, fatigue, aches, nausea. If I decide to move in, I settle down in the nervous and digestive systems, causing everlasting damage to the heart… Only a few drugs can defeat me and even these need to be brought in quickly after I’ve arrived. I nest in at least 6,000,000 people and I kill 8,000 of them every year. I attack almost exclusively in Latin America, although my hosts can carry me anywhere. Isn’t it wonderful?"
          singlePage="is-single-page"
          direction="rtl"
        />
      </div>
    );
  };
}
