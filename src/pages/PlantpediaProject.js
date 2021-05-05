import React from 'react';
import ProjectsTop from '../components/ProjectsTop';
import ProjectImages from '../components/ProjectImages';
import plantpedia from '../images/plant.png';
import home from '../images/screens/home2.png'
import add from '../images/screens/add2.png'
import rec from '../images/screens/rec2.png'

const PlantpediaProject = () => (
    <>
        <div>
            <ProjectsTop idName='image-area' projectNameH='Plantpedia' imageId='img-plantpedia' 
            projectImage={plantpedia} projectImageAlt='Plantpedia project logo' />
        </div>

        <div className='textDivs'>
            <h3>The Problem</h3>
            <hr/>
            <p>For many people, taking care of a few plants isn't difficult. But what happens when you have 10 plants? 20? 30? more?
                The more plants in a househould, the easier it is to forget about them. Eventually, your plants will either dry up
                or drown due to overwatering.
            </p>
            <br/>
            <h3>The Solution</h3>
            <hr/>
            <p>Developed for Android OS using Java, this mobile app is designed to help the user catalog and care for their houseplants. Each user can keep track of which plants they own and their specific needs.
                The app will send daily notifications to remind the user of which specific plants need to be watered that day.</p>
            <br/>
            <h3>Backend Firebase</h3>
            <div>
                <div>
                    <p>Authentication</p>
                    <p>Realtime Database</p>
                </div>
            </div>
        </div>
        <br />

        <div className="img-row">
            <ProjectImages pImgDiv="plImgsDiv" pImgsClass="pImgsPl" pImgFirst={home} pImgFirstAlt="" 
            pImgsTextDiv="pImgsTextPl" pImgHeading="Home Screen" pImgPara1="Access the three main functions: 
            Add, View All, and Search" />
            <ProjectImages pImgDiv="plImgsDiv" pImgsClass="pImgsPl" pImgFirst={add} pImgFirstAlt="" 
            pImgsTextDiv="pImgsTextPl" pImgHeading="Add Plant" pImgPara1="Create a profile for each plant owned" />
            <ProjectImages pImgDiv="plImgsDiv" pImgsClass="pImgsPl" pImgFirst={rec} pImgFirstAlt="" 
            pImgsTextDiv="pImgsTextPl" pImgHeading="Recommendations" pImgPara1="Get notified each day with watering recomendations" />
        </div>

        <div className='textDivs'>
            <h3>Github link:</h3>
            <p><a href="https://github.com/lhernandez1848/Plantpedia" target="_blank">https://github.com/lhernandez1848/Plantpedia</a></p>
            <br/><br/>
        </div>
    </>
)

export default PlantpediaProject;