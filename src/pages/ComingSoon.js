import React from 'react';
import soon from '../images/soon.png';

const ComingSoon = () => (
    <>
        <div class="w3-padding-large" id="main">
            <header class="w3-container w3-padding-32 w3-center" id="home">
                <h1>Coming Soon!</h1>
                <p>This page is not yet ready. Please check back later.</p>
            </header>

            <div id="img-cs">
                <img class="w3-image w3-round-large w3-hide-small" src={soon} alt="Plantpedia App Coming Soon" width="335" height="471"/>
            </div> 
        </div>       
    </>
)

export default ComingSoon;