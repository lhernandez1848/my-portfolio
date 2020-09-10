import React from 'react';
import Fade from 'react-reveal/Fade';
import tech_tree from '../images/tech_tree.png';
import dots from '../images/dots.png';
import ProjectFruits from '../ProjectFruits';
import SkillFruits from '../SkillFruits';
import AboutMe from '../AboutMe';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Fruits",
            showHideProjectFruits: false,
            showHideSkillFruits: false,
            showHideAboutMe: false
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(name) {
        switch (name) {
            case "projectFruits": 
                this.setState({ showHideProjectFruits: !this.state.showHideProjectFruits });
            break;
            case "skillFruits": 
                this.setState({ showHideSkillFruits: !this.state.showHideSkillFruits });
            break;
            case "aboutMe":
                this.setState({ showHideAboutMe: !this.state.showHideAboutMe });
            break;
        }
    }

    render () {
        const { showHideProjectFruits, showHideSkillFruits, showHideAboutMe } = this.state;

        return (
        <div>
            <div id="all-img">
                <div id="dots-content">
                    <Fade top delay={1500}>
                        <img src={dots} alt="falling dots background image" id="tree-dots" width={500}/>
                    </Fade>
                </div>

                <div>
                    <Fade delay={2400}>
                        <div id="avatar-fruit">
                            <button id="avatar" class="fruits" onClick={() => this.hideComponent("aboutMe")}></button>
                            <span class="fruits-caption">About Me</span>
                        </div>
                        <div id="projects-fruit">
                            <button id="projects" class="fruits" onClick={() => this.hideComponent("projectFruits")}></button>
                            <span class="fruits-caption">Projects</span>
                        </div>
                        <div id="skills-fruit">
                            <button id="skills" class="fruits" onClick={() => this.hideComponent("skillFruits")}></button>
                            <span class="fruits-caption">Skills</span>
                        </div>
                    </Fade>
                </div>

                <div id="hidden-content">
                    <div>{showHideProjectFruits && <ProjectFruits/>}</div>
                    
                    <div>{showHideSkillFruits && <SkillFruits/>}</div>

                    <div>{showHideAboutMe && <AboutMe/>}</div>
                </div>

                <div id="trunk-content">
                    <Fade bottom delay={1000}>
                        <img src={tech_tree} alt="tech tree background image" id="tree-trunk" width={450}/>
                    </Fade>
                </div>
            
            </div>

        </div>
        )
    }
}

export default HomePage;