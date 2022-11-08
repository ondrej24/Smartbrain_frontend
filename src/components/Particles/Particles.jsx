import Particles from 'react-tsparticles';
import { loadFull } from "tsparticles";
import { useCallback } from 'react';

const Particle = () => {

    const particlesInit = useCallback(async (engine) => {
     await loadFull(engine);
    }, []);
    
    const particlesLoaded = useCallback(async () => {
    }, []);

    return (
        <Particles
            className='particles'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: "",
                    },
                },
                fpsLimit: 40,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        repulse: {
                            distance: 100,
                            duration: 1,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#dddddd",
                    },
                    links: {
                        color: "#eeeeee",
                        distance: 100,
                        enable: true,
                        opacity: 1,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 30,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 4 },
                    },
                },
                detectRetina: true,
            }}
        />
    )
}

export default Particle;
