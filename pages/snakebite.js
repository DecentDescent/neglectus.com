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
          title="Snakebite - Neglect us! Kala Azar &amp; Company - Médecins Sans Frontières"
          description="Until quite recently I have been so neglected, that I wasn’t even on the list of neglected diseases of the World Health Organization (WHO), although my ambassadors – snakes - bite five million people annually. Over 100,000 of them die, leaving further 400,000 disabled (sometimes their leg or something else needs to be amputated). I'm almost everywhere but most of my victims live in the countryside where there are not enough doctors and money for expensive serums. For example, a serum effective for most types of poisons is needed in Africa. They had one which worked against 10 types of me! But the pharmaceutical company stopped producing it (it wasn’t profitable). Now people in Africa have issues with serums that treat fewer of my forms. My victims usually don’t know which of my snake delegates visited them, so it's hard for the health workers to figure out how to get rid of me. Last year I got a little nervous when WHO put me on that list of theirs. But let's see…"
          ogTitle="Snakebite - Neglect us! Kala Azar &amp; Company - Médecins Sans Frontières"
          ogDescription="Until quite recently I have been so neglected, that I wasn’t even on the list of neglected diseases of the World Health Organization (WHO), although my ambassadors – snakes - bite five million people annually. Over 100,000 of them die, leaving further 400,000 disabled (sometimes their leg or something else needs to be amputated). I'm almost everywhere but most of my victims live in the countryside where there are not enough doctors and money for expensive serums. For example, a serum effective for most types of poisons is needed in Africa. They had one which worked against 10 types of me! But the pharmaceutical company stopped producing it (it wasn’t profitable). Now people in Africa have issues with serums that treat fewer of my forms. My victims usually don’t know which of my snake delegates visited them, so it's hard for the health workers to figure out how to get rid of me. Last year I got a little nervous when WHO put me on that list of theirs. But let's see…"
          ogImage={myUrl + "/static/img/og/hadi-ustknuti.jpg?v=1"}
          twitterCard="summary"
          twitterSite="@MSF"
          twitterCreator="@MSF"
        />
        <Header type="single-page" />
        <Disease
          name="snakebite"
          title="Snakebite"
          description="Until quite recently I have been so neglected, that I wasn’t even on the list of neglected diseases of the World Health Organization (WHO), although my ambassadors – snakes - bite five million people annually. Over 100,000 of them die, leaving further 400,000 disabled (sometimes their leg or something else needs to be amputated). I'm almost everywhere but most of my victims live in the countryside where there are not enough doctors and money for expensive serums. For example, a serum effective for most types of poisons is needed in Africa. They had one which worked against 10 types of me! But the pharmaceutical company stopped producing it (it wasn’t profitable). Now people in Africa have issues with serums that treat fewer of my forms. My victims usually don’t know which of my snake delegates visited them, so it's hard for the health workers to figure out how to get rid of me. Last year I got a little nervous when WHO put me on that list of theirs. But let's see… "
          singlePage="is-single-page"
          direction="ltr"
        />
      </div>
    );
  };
}
