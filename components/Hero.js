import Particles from "react-particles-js";
export default () => (
  <section id="hero" className="section">
    <Particles
      className="particles"
      params={{
        particles: {
          number: {
            value: 500,
            density: {
              enable: 1,
              value_area: 500
            }
          },
          color: {
            value: "#000"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            }
          },
          opacity: {
            value: 0.15,
            random: 1,
            anim: {
              enable: 0
            }
          },
          size: {
            value: 3,
            random: 1,
            anim: {
              enable: 1,
              speed: 1,
              size_min: 0.3,
              sync: !1
            }
          },
          line_linked: {
            enable: false,
            shadow: {
              enable: !1,
              blur: 5,
              color: "lime"
            }
          },
          move: {
            enable: 1,
            speed: 1,
            direction: "none",
            random: 1,
            straight: !1,
            out_mode: "bounce",
            bounce: !0,
            attract: {
              enable: !1,
              rotateX: 3e3,
              rotateY: 3e3
            }
          },
          array: []
        },
        retina_detect: !0,
        fps_limit: 60
      }}
    />
    <div className="hero__background" />
    <div className="hero__left">
      <img src="static/img/headline.png" />
    </div>
    <div className="hero__right" />
  </section>
);
