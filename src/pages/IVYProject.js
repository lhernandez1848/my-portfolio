import React from 'react';
import ProjectsTop from '../components/ProjectsTop';
import ProjectImages from '../components/ProjectImages';
import IVY from '../images/ivy.png';
import login from '../images/screens/login.png';
import home_page from '../images/screens/ivy_home2.png';
import product_result from '../images/screens/ivy_product_result2.png';
import inv_value from '../images/screens/ivy_value2.png';
  
const IVYProject = () => (
    <>
        <div>
            <ProjectsTop idName='image-area' projectNameP='Mobile Inventory Assistant for Quick Service Restaurant'
            imageId='img-ivy' 
            projectImage={IVY} projectImageAlt='IVY project logo' />
        </div>
        <br/><br/>

        <div className='textDivs'>
            <h2>About this app</h2>
            <hr/>
            <p>I.VY is a mobile application that provides main inventory functions including 
                order generation, track order, view order history, set and check inventory, usage analysis, and par 
                level recommendations. This app was developed as part of the Capstone graduation project. Our team of three was 
                asked to make this project for the client company, Huex Inc.</p>
            <br/><br/>
            <h2>Backend</h2>
            <hr/>
            <p>The back-end runs on a Linux database server and is accessed through a web service using MS SQL Server and NodeJS, 
                which was set up by the client company, Huex Inc.</p>
            <br/><br/>
            <h2>My contributions to this app</h2>
            <hr/>
        </div>

        <div className="img-row">
            <ProjectImages pImgDiv="ivyImgsDiv" pImgsClass="pImgsIvy" pImgFirst={login} pImgFirstAlt="" 
            pImgsTextDiv="pImgsTextIvy" pImgHeading="User Features" pImgPara1="Login screen UI and code" 
            pImgPara2="Profile screen UI and code" />
            <ProjectImages pImgDiv="ivyImgsDiv" pImgsClass="pImgsIvy" pImgFirst={home_page} pImgFirstAlt="" 
            pImgsTextDiv="pImgsTextIvy" pImgHeading="Home Screen" pImgPara1="UI and code" 
            pImgPara2="Popup menus" />
            <ProjectImages pImgDiv="ivyImgsDiv" pImgsClass="pImgsIvy" pImgFirst={product_result} pImgFirstAlt="" 
            pImgsTextDiv="pImgsTextIvy" pImgHeading="Create Order" pImgPara1="Product Search UI and code" 
            pImgPara2="Expandable List View" />
            <ProjectImages pImgDiv="ivyImgsDiv" pImgsClass="pImgsIvy" pImgFirst={inv_value} pImgFirstAlt="" 
            pImgsTextDiv="pImgsTextIvy" pImgHeading="Check Inventory" pImgPara1="UI and code" />
        </div>
        
        <div className='textDivs'>
            <h3>Github link:</h3>
            <p><a href="https://github.com/lhernandez1848/Capstone" target="_blank">https://github.com/lhernandez1848/Capstone</a></p>
            <br/><br/>
        </div>
    </>
)

export default IVYProject;