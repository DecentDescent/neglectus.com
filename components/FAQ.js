import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from "react-accessible-accordion";

export default class FAQ extends React.Component {
  render() {
    var VisibilitySensor = require("react-visibility-sensor");

    return (
      <VisibilitySensor
        partialVisibility={true}
        offset={{ top: 200, bottom: 200 }}
      >
        {({ isVisible }) => (
          <section
            id="faq"
            className={
              "section section--inverted section--padding " +
              (isVisible ? "section--visible" : "section--invisible")
            }
          >
            <div className="container">
              <h2>
                FREQUENTLY ASKED QUESTIONS ABOUT THE EXHIBITION AND THE WEB
                NEGLECT US! KALA AZAR & COMP.
              </h2>
              <Accordion accordion="false">
                <AccordionItem>
                  <AccordionItemTitle>
                    <h3>
                      <span>1</span> Why did you decide to present the neglected
                      diseases as demons? Are you trying to terrify people?
                    </h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>
                      We're not trying to terrify anyone but at the same time,
                      we want to illustrate how serious these illnesses are. As
                      the author Toy_Box says: “The primary idea was that the
                      communication would be urgent, utmost truthful but without
                      being literal.” While creating the characters of the
                      specific demons, Toy_Box was inspired by the hopelessness
                      and terror that the people affected must suffer and by
                      various pop-cultural models.
                    </p>
                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h3>
                      <span>2</span> Why are the neglected diseases talking
                      directly to us?
                    </h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>
                      Representing the neglected diseases as demons is already a
                      personification. It made sense for us to take it to the
                      next level, i.e. let the diseases themselves speak. What
                      would they tell us? Currently, they would probably be
                      content, confident, pompous, cheeky, and bragging. They
                      are doing well. Nobody gets in their way much. Effective
                      treatment is either almost non-existent, or it was
                      developed decades ago and is toxic, or it’s too expensive
                      and many people can’t afford it.
                    </p>
                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h3>
                      <span>3</span> What are the neglected diseases and why are
                      they neglected?
                    </h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>
                      These are diseases that lack prevention, can't be reliably
                      and easily diagnosed and for which effective drugs are
                      missing (or are too expensive). Specifically, it is Kala
                      Azar, Chagas disease, sleeping sickness, Dengue fever,
                      Chikungunya virus, Zika virus, MERS virus, haemorrhagic
                      fevers (for instance Ebola or Marburg), and other diseases
                      according to WHO’s list. They're thriving in poor regions
                      where people don’t have the money for treatment.
                      Pharmaceutical companies don't find the development and
                      production of cures lucrative enough. Although
                      tuberculosis doesn’t officially belong to the list of
                      WHO's list of neglected diseases, we included it because
                      it’s also overlooked and perceived as more of an illness
                      of the past, while actually, it’s one of the greatest
                      contemporary infectious killers.
                    </p>
                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h3>
                      <span>4</span> Why and how are Médecins Sans Frontières
                      involved in this issue?
                    </h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>
                      Médecins Sans Frontières treats patients with neglected
                      diseases and contribute to the treatment development
                      through the Drugs for Neglected Diseases initiative
                      (DNDi). Since 2003 when the initiative started, treatment
                      of malaria, sleeping sickness or Chagas disease in
                      children has been improved. Médecins Sans Frontières also
                      raise awareness and advocate for change, for instance by
                      pressing the pharmaceutical corporations not to overcharge
                      drugs unnecessarily.
                    </p>
                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h3>
                      <span>5</span> Why should I care? Are these diseases in
                      the developed world?
                    </h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>
                      Neglected diseases affect one and a half billion people
                      around the globe today. Médecins Sans Frontières is
                      convinced that every person deserves healthcare, dignity
                      and a human approach. Besides, the impact of the diseases
                      isn't only medical but can also have economic and
                      political implications. In the long-term, they can affect
                      all of us. And although they appear more often outside of
                      the so-called developed world, they are not only limited
                      to the developing countries. For example, tuberculosis is
                      present in Europe and the US.
                    </p>
                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h3>
                      <span>6</span> What is this website good for?
                    </h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>
                      The website raises awareness of the neglected diseases in
                      an innovative, informal, yet also educational and helpful
                      way. The goal is to recognise an issue which most of us
                      don’t notice and to contribute to its solution.
                    </p>
                  </AccordionItemBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemTitle>
                    <h3>
                      <span>7</span> I want to help – What can I do?
                    </h3>
                  </AccordionItemTitle>
                  <AccordionItemBody>
                    <p>
                      There are various ways. One of them is to raise awareness
                      of the neglected diseases, either via social media, press
                      or in everyday conversations. The solution to every
                      problem is to acknowledge its existence. You can also
                      contribute financially. Médecins Sans Frontières work
                      tirelessly on improving the situation (see activities
                      above). The easiest way to support us is through{" "}
                      <a
                        target="_blank"
                        href="https://darujte.lekari-bez-hranic.cz/osoba/vyse-daru/0?_ga=2.180922595.514679042.1533986827-1440885372.1533497215&_gac=1.247260848.1533501640.EAIaIQobChMIoJjx3eLW3AIVQeaaCh35qwWqEAAYASAAEgIF-vD_BwE"
                      >
                        our donation form.
                      </a>
                      .
                    </p>
                  </AccordionItemBody>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="more-info">
              More detailed information about each disease can be found here:
              <ul>
                <li>
                  <a
                    href="https://www.msf.org/search?keyword=kala-azar"
                    target="_blank"
                  >
                    Kala Azar
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.msf.org/search?keyword=chagas+disease"
                    target="_blank"
                  >
                    Chagas disease
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.msf.org/search?keyword=snakebite"
                    target="_blank"
                  >
                    Snakebite
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.msf.org/search?keyword=tuberculosis"
                    target="_blank"
                  >
                    Tuberculosis
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.msf.org/search?keyword=sleeping-sickness"
                    target="_blank"
                  >
                    Sleeping sickness
                  </a>
                </li>
              </ul>
            </div>
            <div className="container">
              <div className="donate">
                <a
                  href="https://www.msf.org/donate"
                  target="_blank"
                  className="btn"
                >
                  Donate
                </a>
              </div>
              <footer>
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/msf.english/"
                      target="_blank"
                      className="fb"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 486.392 486.392"
                      >
                        <path d="M243.196 0C108.89 0 0 108.89 0 243.196s108.89 243.196 243.196 243.196 243.196-108.89 243.196-243.196C486.392 108.86 377.502 0 243.196 0zm62.866 243.165l-39.854.03-.03 145.917h-54.69V243.196H175.01v-50.28l36.48-.03-.062-29.61c0-41.04 11.126-65.997 59.43-65.997h40.25v50.31h-25.17c-18.818 0-19.73 7.022-19.73 20.124l-.06 25.17h45.233l-5.318 50.28z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/doctorswithoutborders/"
                      target="_blank"
                      className="ig"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 438 438"
                      >
                        <path d="M333 132.7c-2.7-6.8-5.8-11.7-10.9-16.8-5.1-5.1-10-8.3-16.8-10.9-5.2-2-12.9-4.4-27.2-5-15.4-.7-20-.9-59.1-.9-39 0-43.7.1-59.1.9-14.3.7-22 3-27.2 5-6.8 2.7-11.7 5.8-16.8 10.9-5.1 5.1-8.3 10-10.9 16.8-2 5.2-4.4 12.9-5 27.2-.7 15.4-.9 20-.9 59.1 0 39 .1 43.7.9 59.1.7 14.3 3 22 5 27.2 2.7 6.8 5.8 11.7 10.9 16.8 5.1 5.1 10 8.3 16.8 10.9 5.2 2 12.9 4.4 27.2 5 15.4.7 20 .9 59.1.9s43.7-.1 59.1-.9c14.3-.6 22-3 27.2-5 6.8-2.7 11.7-5.8 16.8-10.9 5.1-5.1 8.3-10 10.9-16.8 2-5.2 4.4-12.9 5-27.2.7-15.4.9-20 .9-59.1 0-39-.1-43.7-.9-59.1-.6-14.3-3-22-5-27.2zM219 294.1c-41.5 0-75.1-33.6-75.1-75.1 0-41.5 33.6-75.1 75.1-75.1 41.5 0 75.1 33.6 75.1 75.1 0 41.5-33.6 75.1-75.1 75.1zm78.1-135.6c-9.7 0-17.5-7.9-17.5-17.5 0-9.7 7.9-17.5 17.5-17.5 9.7 0 17.5 7.9 17.5 17.5s-7.8 17.5-17.5 17.5z" />
                        <circle cx="219" cy="219" r="48.7" />
                        <path d="M219 0C98 0 0 98 0 219s98 219 219 219 219-98 219-219S340 0 219 0zm145.4 279.3c-.7 15.6-3.2 26.2-6.8 35.5-3.7 9.6-8.7 17.8-16.9 25.9-8.1 8.1-16.3 13.1-25.9 16.9-9.3 3.6-19.9 6.1-35.5 6.8-15.6.7-20.6.9-60.3.9-39.7 0-44.7-.2-60.3-.9-15.6-.7-26.2-3.2-35.5-6.8-9.6-3.7-17.8-8.7-25.9-16.9-8.1-8.1-13.1-16.3-16.9-25.9-3.6-9.3-6.1-19.9-6.8-35.5-.7-15.6-.9-20.6-.9-60.3 0-39.7.2-44.7.9-60.3.7-15.6 3.2-26.2 6.8-35.5 3.7-9.6 8.7-17.8 16.9-25.9 8.1-8.1 16.3-13.1 25.9-16.9 9.3-3.6 19.9-6.1 35.5-6.8 15.6-.7 20.6-.9 60.3-.9 39.7 0 44.7.2 60.3.9 15.6.7 26.2 3.2 35.5 6.8 9.6 3.7 17.8 8.7 25.9 16.9 8.1 8.1 13.1 16.3 16.9 25.9 3.6 9.3 6.1 19.9 6.8 35.5.7 15.6.9 20.6.9 60.3-.1 39.7-.2 44.7-.9 60.3z" />
                        <path fill="none" d="M72.8 72.8h292.5v292.5H72.8z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/m-decins-sans-fronti-res-msf-/"
                      target="_blank"
                      className="li"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M122.4 92.8h266.4v284H122.4z" fill="#000" />
                        <path d="M225.16 504.53c-43.78-5.47-84.55-21.92-120.01-48.43-10.61-7.93-32.168-28.67-41.77-40.18-30.424-36.46-50.365-83.19-55.976-131.16C-7.148 160.36 71.902 44.5 192.454 13.53c17.814-4.576 33.238-6.736 53.28-7.463 32.296-1.172 60.242 2.66 89.748 12.303 16.76 5.477 43.42 18.34 58.267 28.112 70.98 46.716 112.63 124.37 112.57 209.89-.057 83.54-41.446 160.55-111.86 208.14-23.217 15.69-56.197 29.744-84.507 36.013-25.035 5.544-59.45 7.167-84.79 4zm-17.144-242.85V185.1h-45.718v153.16h45.718v-76.58zm65.15 27.514V240.13l4.285-3.545c2.358-1.95 6.824-4.302 9.924-5.227 11.01-3.285 19.366-1.577 24.99 5.11l3.09 3.67v98.12h44.577v-50.05c0-55.216-.212-57.304-7.18-70.408-14.58-27.43-43.79-37.85-77.114-27.514-2.215.687-2.57.383-2.57-2.193v-2.99h-44.577V338.26h44.575v-49.064zm-76.62-122.92c20.282-10.49 21.122-37.85 1.514-49.377-10.177-5.982-24.218-3.842-32.555 4.962-14.483 15.292-7.78 39.54 12.784 46.246 3.855 1.258 14.31.208 18.255-1.832z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/msf"
                      target="_blank"
                      className="tw"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 49.652 49.652"
                      >
                        <path d="M24.826 0C11.136 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.136 38.516 0 24.826 0zM35.9 19.144c.012.246.018.494.018.742 0 7.55-5.746 16.255-16.26 16.255-3.226 0-6.23-.942-8.758-2.564.447.053.902.08 1.363.08 2.678 0 5.14-.914 7.097-2.446-2.5-.046-4.61-1.698-5.338-3.97.348.067.707.104 1.074.104.52 0 1.027-.068 1.506-.2-2.614-.523-4.583-2.832-4.583-5.602v-.072c.77.427 1.65.685 2.587.714-1.532-1.023-2.54-2.773-2.54-4.755 0-1.05.28-2.03.772-2.875 2.816 3.458 7.028 5.732 11.776 5.972-.098-.42-.147-.854-.147-1.303 0-3.155 2.557-5.714 5.712-5.714 1.644 0 3.127.694 4.17 1.804 1.304-.256 2.524-.73 3.63-1.387-.43 1.335-1.332 2.454-2.515 3.162 1.157-.14 2.26-.445 3.282-.9-.763 1.144-1.732 2.15-2.85 2.954z" />
                      </svg>
                    </a>
                  </li>
                </ul>
                <p>
                  2020 &copy; Médecins Sans Frontières
                  <br />
                  <a href="http://www.msf.org">msf.org</a>
                </p>
              </footer>
            </div>
          </section>
        )}
      </VisibilitySensor>
    );
  }
}
