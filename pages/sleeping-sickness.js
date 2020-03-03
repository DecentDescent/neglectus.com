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
          title="Sleeping sickness - Neglect us! Kala Azar &amp; Company - Médecins Sans Frontières"
          description="My territory is mostly in sub-Saharan Africa; the Democratic Republic of the Congo is my favourite place. The tse-tse fly helps me get into people. At first, it's quite easy to get rid of me but the tough part is to diagnose me. I am inconspicuous and manifest  the same symptoms such as malaria: fever, headache, fatigue or joint aches. It takes a painful lumbar puncture on my hosts and examining the cerebrospinal fluid for doctors to be certain of me. Later, it's all me, I attack the central nervous system and my victims can't sleep at night. The sleep takes over during the day. But it's harder to treat me by then. And if they let me be, I kill. However, I must admit I'm getting weaker. People take greater caution. I get into several thousand of them annually. What's more, in 2018 they approved more effective treatment. I just hope they don’t improve the ways to detect me. That could be the end of me."
          ogTitle="Sleeping sickness - Neglect us! Kala Azar &amp; Company - Médecins Sans Frontières"
          ogDescription="My territory is mostly in sub-Saharan Africa; the Democratic Republic of the Congo is my favourite place. The tse-tse fly helps me get into people. At first, it's quite easy to get rid of me but the tough part is to diagnose me. I am inconspicuous and manifest  the same symptoms such as malaria: fever, headache, fatigue or joint aches. It takes a painful lumbar puncture on my hosts and examining the cerebrospinal fluid for doctors to be certain of me. Later, it's all me, I attack the central nervous system and my victims can't sleep at night. The sleep takes over during the day. But it's harder to treat me by then. And if they let me be, I kill. However, I must admit I'm getting weaker. People take greater caution. I get into several thousand of them annually. What's more, in 2018 they approved more effective treatment. I just hope they don’t improve the ways to detect me. That could be the end of me."
          ogImage={myUrl + "/static/img/og/spava-nemoc.jpg?v=1"}
          twitterCard="summary"
          twitterSite="@MSF"
          twitterCreator="@MSF"
        />
        <Header />
        <Disease
          name="sleeping-sickness"
          title="Sleeping sickness"
          description="My territory is mostly in sub-Saharan Africa; the Democratic Republic of the Congo is my favourite place. The tse-tse fly helps me get into people. At first, it's quite easy to get rid of me but the tough part is to diagnose me. I am inconspicuous and manifest  the same symptoms such as malaria: fever, headache, fatigue or joint aches. It takes a painful lumbar puncture on my hosts and examining the cerebrospinal fluid for doctors to be certain of me. Later, it's all me, I attack the central nervous system and my victims can't sleep at night. The sleep takes over during the day. But it's harder to treat me by then. And if they let me be, I kill. However, I must admit I'm getting weaker. People take greater caution. I get into several thousand of them annually. What's more, in 2018 they approved more effective treatment. I just hope they don’t improve the ways to detect me. That could be the end of me. "
          singlePage="is-single-page"
          direction="ltr"
        />
      </div>
    );
  };
}
