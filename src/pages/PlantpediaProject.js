import React from 'react';
import plantpedia from '../images/plant.png';
import sign_in from '../images/screens/sign_in.png';
import home_page from '../images/screens/home.png';
import add_plant from '../images/screens/add.png';
import search_plant from '../images/screens/search.png';
import selected_plant from '../images/screens/selected.png';
import rec from '../images/screens/rec.png';

const PlantpediaProject = () => (
    <>
        <div id="image-area">
            <h1>Plantpedia</h1>
            <img src={plantpedia} id="img-plantpedia" alt="Plantpedia logo"/>
            <p>The Houseplant Pocketbook</p>
        </div>
        <br/><br/>
        <div id="main">
            <h2>The Problem</h2>
            <hr/>
            <p>For many people, taking care of a few plants isn't difficult. But what happens when you have 10 plants? 20? 30? more?
                The more plants in a househould, the easier it is to forget about them. Eventually, your plants will either dry up
                or drown due to overwatering.
            </p>
            <br/>
            <h2>The Solution</h2>
            <hr/>
            <p>Developed for Android OS using Java, this mobile app is designed to help the user catalog and care for their houseplants. Each user can keep track of which plants they own and their specific needs.
                The app will send daily notifications to remind the user of which specific plants need to be watered that day.</p>
            <br/>
            <h2>Backend Firebase</h2>
            <div class="w3-row list-items">
                <div class="w3-half">
                    <p>Authentication</p>
                    <p>Realtime Database</p>
                </div>
            </div>
            
            <br/>
            <div class="w3-row-padding back-square">
                <h3>Sign In</h3>
                <div class="w3-col l4 m6">
                    <img class="w3-image w3-round-large w3-hide-small" src={sign_in} alt="Plantpedia App Sign In" width="335" height="471"/>
                </div>
                <div class="w3-col l8 m6" style={{paddingLeft:"4em"}}>
                    <h2 class="project-headings">Use default Sign In</h2>
                    <p>Username:  plantpedia@mailinator.com</p>
                    <p>Password:  123456</p>
                    <br/><br/>
                    <h2 class="project-headings">Or create your own!</h2>
                    <p>Click "Sign Up now" and follow the intructions to create your own account. Don't forget to verify your email when done.</p>
                    <br/>
                    <p>Alternatively, you may also sign in to the app using your Google account.</p>
                </div>
            </div>

            <div class="w3-row-padding back-square-lighter">
                <h3>Home Page</h3>
                <div class="w3-col l8 m6" style={{paddingRight:"4em"}}>
                    <h2 class="project-headings">Choose a leaf!</h2>
                    <p>Use the menu plant pot for easy navigation to some of the main features.</p>
                    <br/><br/>
                    <h2 class="project-headings">Or use the top menu</h2>
                    <p>Use the top menu to navigate to any part of the app at any time.</p>
                    <br/>
                </div>
                <div class="w3-col l4 m6">
                    <img class="w3-image w3-round-large w3-hide-small"  src={home_page} alt="Plantpedia App Home Page" width="335" height="471"/>
                </div>
            </div>

            <div class="w3-row-padding back-square">
                <h3>Add Plant</h3>
                    <div class="w3-col l4 m6">
                        <img class="w3-image w3-round-large w3-hide-small" src={add_plant} alt="Plantpedia App Add Plant" width="335" height="471"/>
                    </div>
                    <div class="w3-col l8 m6" style={{paddingLeft:"4em"}}>
                        <h2 class="project-headings">Image</h2>
                        <p>Clicking on the default image space, will display a prompt where you can choose to take a picture or select one from your device gallery. An image is not required, but can be helpful in identifying your plant.</p>
                        <br/><br/>
                        <h2 class="project-headings">Plant information!</h2>
                        <p>Only the Name field is required in order to save the plant to the database.</p>
                        <br/>
                        <p>Last Watered and Water fields: these fields are not required, but necessary in calculating when your plant needs to be watered again. The list of plants that need to be watered each day, can be viewed under "Water Recommendations".</p>
                    </div>                    
            </div>

            <div class="w3-row-padding back-square-lighter">
                <h3>Search Plant</h3>
                <div class="w3-col l8 m6" style={{paddingRight:"4em"}}>
                    <h2 class="project-headings">Search by keyword</h2>
                    <p>Type in the name of a plant then click <i>Search</i>. A list of all plants matching the keyword will be displayed. </p>
                    <br/>
                    <p>Clicking on any plant displayed will redirect you to its corresponding information page.</p>
                    <br/>
                </div>
                <div class="w3-col l4 m6">
                    <img class="w3-image w3-round-large w3-hide-small" src={search_plant} alt="Plantpedia App Search Plant" width="335" height="471"/>
                </div>
            </div>

            <div class="w3-row-padding back-square">
                <h3>Selected Plant</h3>
                <div class="w3-col l4 m6">
                    <img class="w3-image w3-round-large w3-hide-small" src={selected_plant} alt="Plantpedia App Add Plant" width="335" height="471"/>
                </div>
                <div class="w3-col l8 m6" style={{paddingLeft:"4em"}}>
                    <h2 class="project-headings">Edit or Delete</h2>
                    <p>You may edit or delete the selected plant by clicking on the corresponding icons below the image.</p>
                    <br/><br/>
                    <h2 class="project-headings">Water Day!</h2>
                    <p>A red bell will appear at the top of the screen if the plant requires water that day. Clicking on this icon will display a message asking if the plant has been watered. Selecting <i>Yes</i> will update the database appropriately.</p>
                    <br/>
                </div>
            </div>

            <div class="w3-row-padding back-square-lighter">
                <h3>Water Recommendations</h3>
                    <div class="w3-col l8 m6" style={{paddingRight:"4em"}}>
                        <h2 class="project-headings">Water Icon</h2>
                        <p>Click on the water icon next to each plant to update its last watered date.</p>
                        <br/>
                        <h2 class="project-headings">Select a Plant</h2>
                        <p>Select a plant from the list to view all its information.</p>
                        <br/>
                    </div>
                    <div class="w3-col l4 m6">
                        <img class="w3-image w3-round-large w3-hide-small" src={rec} alt="Plantpedia App Search Plant" width="335" height="471"/>
                    </div>
            </div>
            <br/>
            <div>
                <h2>Github link:</h2>
                <p><a href="https://github.com/lhernandez1848/Plantpedia"target="_blank">https://github.com/lhernandez1848/Plantpedia</a></p>
            </div>
        </div>
    </>
)

export default PlantpediaProject;