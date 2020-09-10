import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

class ProjectFruits extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Fruits"
        };
    }

    render() {
        return (
            <div id="project-fruits">
                <Fade delay={500}>
                    <div id="plantpedia-fruit">
                        <Link to="/plantpedia" id="plantpedia" class="projects-button"></Link>
                    </div>
                </Fade>
                <Fade delay={1000}>
                    <div id="ivy-fruit">
                        <Link to="/ivy" id="ivy" class="projects-button"></Link>
                    </div>
                </Fade>
                <Fade delay={1500}>
                    <div id="carpool-fruit">
                        <Link to="/coming-soon" id="ccarpool" class="projects-button"></Link>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default ProjectFruits;
