import { Fragment } from 'react';
import './topics.styles.scss';

import Discussion from '../discussion/discussion.component';

// Below is Code for React Particles which are the stars you see floating around the page
// React Particles
import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

const Topics = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <Fragment>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        // color: {
                        //     value: '#0d47a1',
                        // },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'push',
                            },
                            onHover: {
                                enable: true,
                                mode: 'repulse',
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: '#99f7f2',
                        },
                        links: {
                            color: '#D0D6F9',
                            distance: 150,
                            enable: true,
                            opacity: 0,
                            width: 1,
                        },
                        collisions: {
                            enable: false,
                        },
                        move: {
                            directions: 'none',
                            enable: true,
                            outModes: {
                                default: 'bounce',
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
                            type: 'star',
                        },
                        size: {
                            value: { min: 0.1, max: 3 },
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className="topics-container">
                <div className="image-container">
                    <h2 className="image-title">
                        Celestial Body Name
                    </h2>
                    <div className="image" />
                </div>
                <Discussion />
            </div>
        </Fragment>
    );
};

export default Topics;
