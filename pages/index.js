import "../styles/styles.scss";
import Head from "../components/Head";
import Preloader from "../components/Preloader";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Disease from "../components/Disease";
import About from "../components/About";
import FAQ from "../components/FAQ";
import ShareModal from "../components/ShareModal";
import ReactGA from "react-ga";

export default class Index extends React.Component {
  constructor(onShareClick) {
    super();

    this.state = { shareModalOpened: false };
    this.state = { shareModalName: undefined };
    this.state = { shareModalTitle: undefined };
    this.state = { infoModalOpened: false };
    this.onShareClick = this.onShareClick.bind(this);
    this.closeInfoModal = this.closeInfoModal.bind(this);
    this.onShareModalClose = this.onShareModalClose.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  toggleModal() {
    this.setState(() => ({
      shareModalOpened: true,
    }));
  }

  closeInfoModal() {
    this.setState(() => ({
      infoModalOpened: false,
    }));
    document.body.classList.remove("modal--active");
  }

  onShareClick(name, title) {
    this.setState(() => ({
      shareModalName: name,
      shareModalTitle: title,
    }));
    this.toggleModal();
    document.body.classList.add("modal--active");
  }

  onShareModalClose() {
    this.setState(() => ({
      shareModalOpened: false,
    }));
    document.body.classList.remove("modal--active");
  }
  handleScroll() {
    var header = document.getElementById("header");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    var heroElement = document.getElementById("hero");
    var darkElement1 = document.getElementById("neglect-us");
    var darkElement2 = document.getElementById("faq");
    var heroElementHeight = parseInt(heroElement.clientHeight);
    var darkElement1Height = parseInt(darkElement1.clientHeight);
    var darkElement1Offset = parseInt(darkElement1.offsetTop);
    var darkElement2Height = parseInt(darkElement2.clientHeight);
    var darkElement2Offset = parseInt(darkElement2.offsetTop);

    if (
      (scrollTop >= darkElement1Offset - 64 &&
        scrollTop < darkElement1Offset + darkElement1Height) ||
      (scrollTop >= darkElement2Offset - 64 &&
        scrollTop < darkElement2Offset + darkElement2Height)
    ) {
      header.classList.remove("header--light");
      header.classList.add("header--dark");
    } else if (scrollTop === 0) {
      header.classList.remove("header--light");
      header.classList.remove("header--dark");
    } else {
      header.classList.add("header--light");
      header.classList.remove("header--dark");
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.handleScroll();

    ReactGA.initialize("UA-50377630-2");
    ReactGA.pageview(window.location.pathname + window.location.search);
    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        "gtm.start": new Date().getTime(),
        event: "gtm.js",
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "GTM-5DMDW8M");

    var thisURL = location.hash.substr(1);
    if (thisURL === "notice") {
      this.setState(() => ({
        infoModalOpened: true,
      }));
      document.body.classList.add("modal--active");
    }
  }

  render() {
    return (
      <div>
        <Head />
        <Preloader />
        <ShareModal
          onShareModalClose={this.onShareModalClose}
          className={
            this.state.shareModalOpened
              ? "share-modal share-modal--opened"
              : "share-modal"
          }
          title={this.state.shareModalTitle}
          name={this.state.shareModalName}
        />
        <Header />
        <Hero />
        <Intro />
        <Disease
          name="kala-azar"
          title="Kala Azar"
          copyTitle="Kala Azar"
          description="They call me “black fever”, which translates in Hindi to kala-azar. But beware, I'm not picky when it comes to places to go. You can find me in over 70 countries. My favourites are India, Bangladesh, Ethiopia or Brazil. My minions – mosquitos – infect hundreds of thousands of people a year with Visceral Leishmaniasis. And if it develops into a serious stage, it's my turn. You will recognize me by the ulcers around the bite mark. Later I attack the immune system. I love internal organs, especially the liver and spleen. When I feed, my hosts lose weight and tend to be anaemic. Mostly in Africa, they try to get rid of me with treatment developed in the 1930s which is long, painful, toxic, and expensive. Even then some hosts don't have access to it. Without treatment, most people die. Just to tell you, I am the deadliest parasitic disease after malaria. I kill thousands of people every year. "
          onShareClick={this.onShareClick}
          singlePage="not-single-page"
          direction="ltr"
        />
        <Disease
          name="chagas-disease"
          title="Chagas disease"
          copyTitle="Chagas disease"
          description="My favourite time is mostly during the night when the blood-sucking “kissing bugs” crawl from the muddy walls and straw rooftops of houses. Their kiss is often my ticket to ride inside human bodies. I can also sneak in through blood transfusions or breastfeeding. My victims usually don't know about me for years. I'm not easily discovered. At first, I am mild, showing up as other diseases with fevers, fatigue, aches, nausea. If I decide to move in, I settle down in the nervous and digestive systems, causing everlasting damage to the heart… Only a few drugs can defeat me and even these need to be brought in quickly after I’ve arrived. I nest in at least 6,000,000 people and I kill 8,000 of them every year. I attack almost exclusively in Latin America, although my hosts can carry me anywhere. Isn’t it wonderful? "
          onShareClick={this.onShareClick}
          singlePage="not-single-page"
          direction="rtl"
        />
        <Disease
          name="snakebite"
          title="Snakebite"
          copyTitle="Snakebite"
          description="Until quite recently I have been so neglected, that I wasn’t even on the list of neglected diseases of the World Health Organization (WHO), although my ambassadors – snakes - bite five million people annually. Over 100,000 of them die, leaving further 400,000 disabled (sometimes their leg or something else needs to be amputated). I'm almost everywhere but most of my victims live in the countryside where there are not enough doctors and money for expensive serums. For example, a serum effective for most types of poisons is needed in Africa. They had one which worked against 10 types of me! But the pharmaceutical company stopped producing it (it wasn’t profitable). Now people in Africa have issues with serums that treat fewer of my forms. My victims usually don’t know which of my snake delegates visited them, so it's hard for the health workers to figure out how to get rid of me. Last year I got a little nervous when WHO put me on that list of theirs. But let's see… "
          onShareClick={this.onShareClick}
          singlePage="not-single-page"
          direction="ltr"
        />
        <Disease
          name="tuberculosis"
          title="Tuberculosis"
          copyTitle="Tuberculosis"
          description="Officially I might not belong to the company of the neglected diseases, but you cannot deny my place here. The world had almost forgotten about me – I didn’t scare it as much anymore – thinking me a disease of the past. They couldn't be more wrong. I'm the deadliest infection in the world. I surpass HIV in the number of victims. Every year I make nearly 10 million people sick and send one and a half million to the afterlife. I'm doing well in India, China, Nigeria or in Central Asian countries. Mostly I go after the lungs, but I don't mind bones and the nervous system either. I'm especially horrifying in my resistant forms. These are called “Ebola with wings”. We are both equally deadly but all I need to spread is air. Once I get this strong, it takes a very long time to destroy me and my hosts suffer. Recently, three new drugs have been developed against my resistant form. I'm quite scared of them. But they are expensive and only a small amount of people get them. So, I'm hoping they will keep gathering dust on pharmacies' shelves."
          onShareClick={this.onShareClick}
          singlePage="not-single-page"
          direction="rtl"
        />
        <Disease
          name="sleeping-sickness"
          title="Sleeping sickness"
          copyTitle="Sleeping sickness"
          description="My territory is mostly in sub-Saharan Africa; the Democratic Republic of the Congo is my favourite place. The tse-tse fly helps me get into people. At first, it's quite easy to get rid of me but the tough part is to diagnose me. I am inconspicuous and manifest  the same symptoms such as malaria: fever, headache, fatigue or joint aches. It takes a painful lumbar puncture on my hosts and examining the cerebrospinal fluid for doctors to be certain of me. Later, it's all me, I attack the central nervous system and my victims can't sleep at night. The sleep takes over during the day. But it's harder to treat me by then. And if they let me be, I kill. However, I must admit I'm getting weaker. People take greater caution. I get into several thousand of them annually. What's more, in 2018 they approved more effective treatment. I just hope they don’t improve the ways to detect me. That could be the end of me. "
          onShareClick={this.onShareClick}
          singlePage="not-single-page"
          direction="ltr"
        />
        <About />
        <FAQ />
      </div>
    );
  }
}
