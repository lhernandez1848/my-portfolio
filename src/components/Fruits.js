import React from 'react';
import Fade from 'react-reveal/Fade';

class Fruits extends React.Component {
    render() {
        return (
            <Fade delay={2400}>
                <div id={this.props.idName}>
                    <button id={this.props.fruitsBtnId} className="fruits" onClick={this.props.fruitsClickFunction}></button>
                    <span className="fruits-caption">{this.props.fruitsCaption}</span>
                </div>
            </Fade>
        );
    }
}

export default Fruits;