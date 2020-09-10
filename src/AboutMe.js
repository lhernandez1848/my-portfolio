import React from 'react';

class AboutMe extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Fruits"
        };
    }

    render() {
        return (
            <div id="about-me">
                <p>
                    I am a recent Conestoga College graduate of Computer Programmer/Analyst,
                    looking to apply my skills, passion, and inquisitiveness to a future role.</p>
            </div>
        );
    }
}

export default AboutMe;
