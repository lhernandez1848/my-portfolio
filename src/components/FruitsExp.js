import React from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

class ProjectFruits extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "FruitsExp"
        };
    }

    render() {
        return (
            <div id={this.props.idName}> 
                <Fade delay={this.props.fadeDelay}>
                    <div id={this.props.fDivId}>
                        <Link to={this.props.linkName} id={this.props.linkId} className={this.props.linkClassName}>{this.props.btnText}</Link>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default ProjectFruits;