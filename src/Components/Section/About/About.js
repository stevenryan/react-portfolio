import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import mePic from '../../../Images/me_pic.jpg';

import './About.css';
class about extends React.Component {
    constructor() {
        super();
        this.state = {
            isHovered: false
        };

        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover = (event, index) => {
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    render() {
    const letterClass = this.state.isHovered? "about__section-letter hovered" : "about__section-letter";

    return (
        <div className="about__section">
            <div className="about__section-text">

                <div className="about__section-name">
                    <span className="about__section-namePart">
                        <span id="s" className={letterClass} onMouseEnter={(event) => this.toggleHover(event, 0)} onAnimationEnd={(event) => this.toggleHover(event, 0)}>S</span>
                        <span id="t" className={letterClass} onMouseEnter={this.toggleHover} onAnimationEnd={this.toggleHover}>T</span>
                        <span className="about__section-letter e" onMouseEnter={this.toggleHover} onAnimationEnd={this.toggleHover}>E</span>
                        <span className="about__section-letter v" onMouseEnter={this.toggleHover} onAnimationEnd={this.toggleHover}>V</span>
                        <span className="about__section-letter e2" onMouseEnter={this.toggleHover} onAnimationEnd={this.toggleHover}>E</span>
                        <span className="about__section-letter n" onMouseEnter={this.toggleHover} onAnimationEnd={this.toggleHover}>N</span>
                    </span>
                    <span className="about__section-namePart">
                        <span className="about__section-letter r">R</span>
                        <span className="about__section-letter y">Y</span>
                        <span className="about__section-letter a">A</span>
                        <span className="about__section-letter n2">N</span>
                    </span>
                </div>

                <p>Hello! I'm a full-stack web developer based in Center City, Philadelphia.</p>
                <p>My favorite part of coding is that I'm always improving my skills and learning new things. I love that programming languages are constantly being updated and that the tech industry is always growing; change keeps me on my toes.</p>
                <p>Aside from being a web developer, I'm also an avid coffee drinker, dog petter, art maker, Netflix binger, comic book reader, video game player, and Pokémon Go-er.</p>

                <a href="https://www.linkedin.com/in/stevenrng/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                <a href="https://github.com/stevenryan"><FontAwesomeIcon icon={['fab', 'github']} /></a>
                <a href="https://www.linkedin.com/in/stevenrng/"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            </div>
            <div className="about__section-img">
                <img src={mePic} alt="A picture of me with alcohol" />
            </div>
        </div>
    )
};
}

export default about;