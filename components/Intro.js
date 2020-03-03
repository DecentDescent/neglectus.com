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
            id="nevsimejte-si-nas"
            className={
              "section section--inverted " +
              (isVisible ? "section--visible" : "section--invisible")
            }
          >
            <div className="container">
              <h2> Neglect us!</h2>
              <p>
                Our dark land has one and a half billion inhabitants. We rule
                over them and no one gets in the way much. Well... almost no
                one. There are some marauders such as Médecins Sans Frontières,
                but they can’t do much alone. They call us neglected diseases.
                Because the world doesn’t care about us. We thrive the most in
                poor regions, where the people we infect don’t have the money
                for treatment. There is nothing to treat some of us, as
                pharmaceutical companies would not turn a profit if they
                developed new medications. Our enemies have weak weapons – often
                old-fashioned medication that was discovered decades ago. What
                to say? Keep it up. Neglect us. We like it.
              </p>
              <p>Gratefully Yours,</p>
              <p>Kala Azar &amp; Company.</p>
              <p>
                P. S. If anyone happens to be interested, some of us introduce
                ourselves below. So that it’s clear it’s not advisable to mess
                with us!
              </p>
            </div>
          </section>
        )}
      </VisibilitySensor>
    );
  }
}
