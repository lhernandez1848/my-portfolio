import React from 'react';
import Fade from 'react-reveal/Fade';
import tech_tree from '../images/tech_tree.png';
import dots from '../images/dots.png';
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
                    <Fruits idName="avatar-fruit" fruitsBtnId="avatar" fruitsCaption="About Me"
                    fruitsClickFunction={() => this.hideComponent("aboutMe")}></Fruits>

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
                        && <div id="skill-fruits">
                        <FruitsExp idName="first-fruits" fadeDelay={500} btnText="HTML" 
                        linkClassName="skills-button skills-three"/>
                        <FruitsExp idName="first-fruits" fadeDelay={500} btnText="CSS"
                        linkId="btn-css" linkClassName="skills-button skills-three"/>
                        <FruitsExp idName="first-fruits" fadeDelay={500} btnText="JS"
                        linkClassName="skills-button skills-three"/>

                        <FruitsExp idName="second-fruits" fadeDelay={1000} btnText="C#"
                        linkClassName="skills-button skills-two"/>
                        <FruitsExp idName="second-fruits" fadeDelay={1000} btnText="Java"
                        linkClassName="skills-button skills-two"/>
                    </div>}
                    
                    </div>

                    <div>{showHideAboutMe && <FruitsExp idName="about-me" 
                    aboutPar="Conestoga College graduate of Computer Programmer/Analyst,
                    looking to apply my skills, passion, and inquisitiveness to a future role"/>}</div>
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