import React from 'react';
import Fade from 'react-reveal/Fade';
import tech_tree from '../images/tech_tree.png';
import dots from '../images/dots.png';
import aboutMe from '../images/avatar.png';
import Fruits from '../components/Fruits';
import FruitsExp from '../components/FruitsExp';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "FruitsExp",
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
                this.setState({ showHideSkillFruits: false });
                this.setState({ showHideAboutMe: false });
            break;
            case "skillFruits": 
                this.setState({ showHideSkillFruits: !this.state.showHideSkillFruits });
                this.setState({ showHideProjectFruits: false});
                this.setState({ showHideAboutMe: false });
            break;
            case "about":
                this.setState({ showHideAboutMe: !this.state.showHideAboutMe });
                this.setState({ showHideProjectFruits: false });
                this.setState({ showHideSkillFruits: false });
            break;
        }
    }

    render () {
        const { showHideProjectFruits, showHideSkillFruits, showHideAboutMe } = this.state;

        return (
        <div>
            <div>
                <button  id="btn-about" onClick={() => this.hideComponent("about")}>About</button>
            </div>

            <div id="all-img">
                <div id="dots-content">
                    <Fade top delay={1500}>
                        <img src={dots} alt="falling dots background image" id="tree-dots" width={500}/>
                    </Fade>
                </div>

                <div id="fruits-container">
                    <Fruits idName="projects-fruit" fruitsBtnId="projects" fruitsCaption="Projects"
                    fruitsClickFunction={() => this.hideComponent("projectFruits")}></Fruits>

                    <Fruits idName="skills-fruit" fruitsBtnId="skills" fruitsCaption="Skills"
                    fruitsClickFunction={() => this.hideComponent("skillFruits")}></Fruits>
                </div>

                <div id="hidden-content">
                    <div>{showHideProjectFruits 
                        && <div id="project-fruits">
                            <FruitsExp fDivId="plantpedia-fruit" fadeDelay={500}
                            linkId="plantpedia" linkName="/plantpedia" linkClassName="projects-button"/>
                            <FruitsExp fDivId="ivy-fruit" fadeDelay={500}
                            linkId="ivy" linkName="/ivy" linkClassName="projects-button"/>
                        </div>}
                    </div>

                    <div>{showHideSkillFruits 
                        && <div>
                            <Fade delay={500}>
                                <ul id="skill-fruits">
                                    <li className="skills-button skills-three">HTML</li>
                                    <li className="skills-button skills-two">CSS</li>
                                    <li className="skills-button" id="btn-js">JS</li>
                                    <li className="skills-button skills-two">C#</li>
                                    <li className="skills-button skills-three">Java</li>
                                </ul>     
                            </Fade>
                    </div>}

                    <div>{showHideAboutMe && 
                    <div id="about-me-exp">
                        <img src={aboutMe} alt="About Me avatar" />
                        <p>Conestoga College graduate of Computer Programmer/Analyst,
                        looking to apply my skills, passion, and inquisitiveness to a future role</p>
                    </div>}
                    </div>
                    
                    </div>
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