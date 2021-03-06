import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Particles from "react-tsparticles";

const Home = () => {
  return (
    <Layout>
    <Section grid>
        <Hero />
        <Particles
          params={{
            "particles": {
                "number": {
                  "value": 90,
                  "density": {
                      "enable": true,
                      "value_area": 500
                  }
                },
                "color": {
                  "value": "#fffff"
                },
                "line_linked": {
                  "enable": true,
                  "opacity": 0.08
                },
                "move": {
                  "enable": true,
                  "direction": "none",
                  "speed": 0.8,
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                },
                "size": {
                  "value": 2
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                }
            },
            "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "grab"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 100,
                    "line_linked": {
                      "opacity": 0.25
                    }
                  },
                  "push": {
                      "particles_nb": 1
                  }
                }
            },
            "retina_detect": true
        }} />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
