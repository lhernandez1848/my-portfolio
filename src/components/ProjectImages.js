import React from 'react';

class ProjectImages extends React.Component {
    render() {
        return (
            <div>                
                <div className='imgsDiv' id={this.props.pImgDiv}> 
                    <img className={this.props.pImgsClass} src={this.props.pImgFirst} alt={this.props.pImgFirstAlt} />
                    <div className={this.props.pImgsTextDiv}>
                        <h3>{this.props.pImgHeading}</h3>
                        <p>{this.props.pImgPara1}</p>
                        <p>{this.props.pImgPara2}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectImages;