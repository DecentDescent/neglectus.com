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
          title="Tuberculosis - Neglect us! Kala Azar &amp; Company - Médecins Sans Frontières"
          description="Officially I might not belong to the company of the neglected diseases, but you cannot deny my place here. The world had almost forgotten about me – I didn’t scare it as much anymore – thinking me a disease of the past. They couldn't be more wrong. I'm the deadliest infection in the world. I surpass HIV in the number of victims. Every year I make nearly 10 million people sick and send two million to the afterlife. I'm doing well in India, China, Nigeria or in Central Asian countries. Mostly I go after the lungs, but I don't mind bones and the nervous system either. I'm especially horrifying in my resistant forms. These are called “Ebola with wings”. We are both equally deadly but all I need to spread is air. Once I get this strong, it takes a very long time to destroy me and my hosts suffer. Recently, three new drugs have been developed against my resistant form. I'm quite scared of them. But they are expensive and only a small amount of people get them. So, I'm hoping they will keep gathering dust on pharmacies' shelves."
          ogTitle="Tuberculosis - Neglect us! Kala Azar &amp; Company - Médecins Sans Frontières"
          ogDescription="Officially I might not belong to the company of the neglected diseases, but you cannot deny my place here. The world had almost forgotten about me – I didn’t scare it as much anymore – thinking me a disease of the past. They couldn't be more wrong. I'm the deadliest infection in the world. I surpass HIV in the number of victims. Every year I make nearly 10 million people sick and send two million to the afterlife. I'm doing well in India, China, Nigeria or in Central Asian countries. Mostly I go after the lungs, but I don't mind bones and the nervous system either. I'm especially horrifying in my resistant forms. These are called “Ebola with wings”. We are both equally deadly but all I need to spread is air. Once I get this strong, it takes a very long time to destroy me and my hosts suffer. Recently, three new drugs have been developed against my resistant form. I'm quite scared of them. But they are expensive and only a small amount of people get them. So, I'm hoping they will keep gathering dust on pharmacies' shelves."
          ogImage={myUrl + "/static/img/og/tuberkuloza.jpg?v=1"}
          twitterCard="summary"
          twitterSite="@msf_czech"
          twitterCreator="@msf_czech"
        />
        <Header />
        <Disease
          name="tuberculosis"
          title="Tuberculosis"
          description="Officially I might not belong to the company of the neglected diseases, but you cannot deny my place here. The world had almost forgotten about me – I didn’t scare it as much anymore – thinking me a disease of the past. They couldn't be more wrong. I'm the deadliest infection in the world. I surpass HIV in the number of victims. Every year I make nearly 10 million people sick and send two million to the afterlife. I'm doing well in India, China, Nigeria or in Central Asian countries. Mostly I go after the lungs, but I don't mind bones and the nervous system either. I'm especially horrifying in my resistant forms. These are called “Ebola with wings”. We are both equally deadly but all I need to spread is air. Once I get this strong, it takes a very long time to destroy me and my hosts suffer. Recently, three new drugs have been developed against my resistant form. I'm quite scared of them. But they are expensive and only a small amount of people get them. So, I'm hoping they will keep gathering dust on pharmacies' shelves."
          singlePage="is-single-page"
          direction="rtl"
        />
      </div>
    );
  };
}
