import React from 'react';

class ProjectsTop extends React.Component {
    render() {
        return (
            <div id={this.props.idName}> 
                <h2>{this.props.projectNameH}</h2>
                <img id={this.props.imageId} src={this.props.projectImage} alt={this.props.projectImageAlt} />
                <p>{this.props.projectNameP}</p>
            </div>
        );
    }
}

export default ProjectsTop;