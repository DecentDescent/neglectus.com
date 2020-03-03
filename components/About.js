export default class About extends React.Component {
  render() {
    var VisibilitySensor = require("react-visibility-sensor");

    return (
      <VisibilitySensor
        partialVisibility={true}
        offset={{ top: 200, bottom: 200 }}
      >
        {({ isVisible }) => (
          <section
            id="about-project"
            className={
              "section " +
              (isVisible ? "section--visible" : "section--invisible")
            }
          >
            <div className="container">
              <h2>Neglect us! Kala Azar &amp; Company</h2>
              <p>
                While you're reading this text, people are dying of neglected
                diseases such as sleeping sickness, kala azar, Chagas disease,
                dengue fever or Chikungunya. And almost nobody cares. They are
                dying because the prevention is deficient, there are no reliable
                and easily used diagnostic methods, and effective drugs don’t
                exist or are too expensive. Since most people suffering from
                these diseases are in poor countries, the development of drugs
                is not lucrative for pharmaceutical companies. Médecins Sans
                Frontières treat patients with neglected diseases, that's why we
                highlight the issue. This exhibition saw an artist Toy_Box
                illustrate some of the illnesses as demons. Médecins Sans
                Frontières also contribute to the treatment development through
                the Drugs for Neglected Diseases initiative (DNDi). Since 2003
                when the initiative started, treatment of malaria, sleeping
                sickness or Chagas disease in children has been improved. It’s
                still not enough though. You can help too. Support Médecins Sans
                Frontières or spread awareness about the diseases on social
                media.
              </p>
            </div>
          </section>
        )}
      </VisibilitySensor>
    );
  }
}
