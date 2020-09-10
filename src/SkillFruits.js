import React from 'react';
import Fade from 'react-reveal/Fade';

class SkillFruits extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Fruits"
        };
    }

    render() {
        return (
            <div id="skill-fruits">
                <Fade delay={500}>
                    <div id="first-fruits">
                        <div id="c-fruit">
                            <button id="btn-c" class="skills-button skills-three">C#</button>
                        </div>
                        <div id="java-fruit">
                            <button id="btn-java" class="skills-button skills-three">Java</button>
                        </div>
                        <div id="html-fruit">
                            <button id="btn-html" class="skills-button skills-three">HTML/CSS</button>
                        </div>
                    </div>
                </Fade>
                <Fade delay={1000}>
                    <div id="second-fruits">
                        <div id="js-fruit">
                            <button id="btn-js" class="skills-button skills-two">Javascript</button>
                        </div>
                        <div id="sql-fruit">
                            <button id="btn-sql" class="skills-button skills-two">SQL</button>
                        </div>
                    </div>
                </Fade>
                <Fade delay={1500}>
                    <div id="third-fruits">
                        <div id="asp-fruit">
                            <button id="btn-asp" class="skills-button skills-one">ASP.NET</button>
                        </div>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default SkillFruits;