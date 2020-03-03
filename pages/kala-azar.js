import "../styles/styles.scss";
import Head from "../components/Head";
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
          title="Kala Azar - Neglect us! Kala Azar &amp; Company - Médecins Sans Frontières"
          description="They call me “black fever”, which translates in Hindi to kala-azar. But beware, I'm not picky when it comes to places to go. You can find me in over 70 countries. My favourites are India, Bangladesh, Ethiopia or Brazil. My minions – mosquitos – infect hundreds of thousands of people a year with Visceral Leishmaniasis. And if it develops into a serious stage, it's my turn. You will recognize me by the ulcers around the bite mark. Later I attack the immune system. I love internal organs, especially the liver and spleen. When I feed, my hosts lose weight and tend to be anaemic. Mostly in Africa, they try to get rid of me with treatment developed in the 1930s which is long, painful, toxic, and expensive. Even then some hosts don't have access to it. Without treatment, most people die. Just to tell you, I am the deadliest parasitic disease after malaria. I kill thousands of people every year."
          ogTitle="Kala Azar - Neglect us! Kala Azar &amp; Company - Médecins Sans Frontières"
          ogDescription="They call me “black fever”, which translates in Hindi to kala-azar. But beware, I'm not picky when it comes to places to go. You can find me in over 70 countries. My favourites are India, Bangladesh, Ethiopia or Brazil. My minions – mosquitos – infect hundreds of thousands of people a year with Visceral Leishmaniasis. And if it develops into a serious stage, it's my turn. You will recognize me by the ulcers around the bite mark. Later I attack the immune system. I love internal organs, especially the liver and spleen. When I feed, my hosts lose weight and tend to be anaemic. Mostly in Africa, they try to get rid of me with treatment developed in the 1930s which is long, painful, toxic, and expensive. Even then some hosts don't have access to it. Without treatment, most people die. Just to tell you, I am the deadliest parasitic disease after malaria. I kill thousands of people every year."
          ogImage={myUrl + "/static/img/og/kala-azar.jpg?v=1"}
          twitterCard="summary"
          twitterSite="@MSF"
          twitterCreator="@MSF"
        />
        <Header />
        <Disease
          name="kala-azar"
          title="Kala Azar"
          description="They call me “black fever”, which translates in Hindi to kala-azar. But beware, I'm not picky when it comes to places to go. You can find me in over 70 countries. My favourites are India, Bangladesh, Ethiopia or Brazil. My minions – mosquitos – infect hundreds of thousands of people a year with Visceral Leishmaniasis. And if it develops into a serious stage, it's my turn. You will recognize me by the ulcers around the bite mark. Later I attack the immune system. I love internal organs, especially the liver and spleen. When I feed, my hosts lose weight and tend to be anaemic. Mostly in Africa, they try to get rid of me with treatment developed in the 1930s which is long, painful, toxic, and expensive. Even then some hosts don't have access to it. Without treatment, most people die. Just to tell you, I am the deadliest parasitic disease after malaria. I kill thousands of people every year."
          singlePage="is-single-page"
          direction="ltr"
        />
      </div>
    );
  };
}
