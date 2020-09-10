import React from 'react';
import Slider from 'infinite-react-carousel';
import IVY from '../images/ivy.png'
import sign_in from '../images/screens/ivy_login.png';
import profile from '../images/screens/ivy_profile.png';
import home_page from '../images/screens/ivy_home.png';
import home_inv from '../images/screens/ivy_home_inv.png';
import home_orders from '../images/screens/ivy_home_orders.png';
import new_order from '../images/screens/ivy_new_order.png';
import product_new from '../images/screens/ivy_product_new.png';
import product_sugar from '../images/screens/ivy_product_sugar.png';
import product_result from '../images/screens/ivy_product_result.png';
import order_quantity from '../images/screens/ivy_order_quantity.png';
import order_summary from '../images/screens/ivy_order_sum.png';
import inv_value from '../images/screens/ivy_value.png';
import inv_pie from '../images/screens/ivy_pie.png';
import inv_bar from '../images/screens/ivy_bar.png';
  
const IVYProject = () => (
    <>
      <div id="image-area">
            <img src={IVY} id="img-ivy" alt="IVY logo"/>
            <p>Mobile Inventory Assistant for Quick Service Restaurant</p>
        </div>
        <br/><br/>
        <div id="main">
            <h2>About this app</h2>
            <hr/>
            <p>I.VY is a mobile application that provides main inventory functions including 
                order generation, track order, view order history, set and check inventory, usage analysis, and par 
                level recommendations. This app was developed as part of the Capstone graduation project. Our team of three was 
                asked to make this project for the client company, Huex Inc.</p>
            <p>My contributions to the development of this app were:</p>
            
            <div class="w3-row list-items">
                <div class="w3-half">
                    <p class="w3-xlarge features"><a href="#sign-in">User Features</a></p>
                    <p>Login screen UI and code</p>
                    <p>Profile screen UI and code</p>
                </div>
                
                <div class="w3-half">
                    <p class="w3-xlarge features"><a href="#home-page">Home Screen</a></p>
                    <p>UI and code</p>
                    <p>Popup menus</p>
                </div>
            </div>

            <div class="w3-row list-items">
                <div class="w3-half">
                    <p class="w3-xlarge features"><a href="#order">Create Order</a></p>
                    <p>Product Search UI and code</p>
                    <p>Expandable List View</p>
                </div>
                
                <div class="w3-half">
                    <p class="w3-xlarge features"><a href="#inventory">Check Inventory</a></p>
                    <p>UI and code</p>
                    <p>Used PhilJay's MPAndroidChart library for the charts</p>
                </div>
            </div>
            <br/><br/>
            <h2>Backend</h2>
            <hr/>
            <p>The back-end runs on a Linux database server and is accessed through a web service using MS SQL Server and NodeJS, 
                which was set up by the client company, Huex Inc.</p>
            <br/>
            <div class="w3-row-padding back-square" id="sign-in">
                <h3>Sign In</h3>
                    <div class="w3-col l4 m6">
                    <Slider dots>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={sign_in} alt="IVY Login Screen" width="335" height="471"/>
                            <h3>Login Screen</h3>
                            </div>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={profile} alt="IVY Profile" width="335" height="471"/>
                            <h3>Profile Screen</h3>
                            </div>
                        </Slider>
                    </div>
                    <div class="w3-col l8 m6" style={{paddingLeft:"4em"}}>
                        <h2 class="w3-text-teal">Sign In</h2>
                        <p class="inside-text">Use the following credentials for testing/demo purposes only.</p>
                        <p class="inside-text">Username:  lis</p>
                        <p class="inside-text">Password:  123456</p>
                        <br/><br/>
                        <h2 class="w3-text-teal">Profile</h2>
                        <p class="inside-text">Login password can be changed in this screen by following the prompts.</p>
                        <br/><br/>
                    </div>
                </div>

                <div class="w3-row-padding back-square-lighter" id="home-page">
                <h3>Home Page</h3>
                    <div class="w3-col l8 m6" style={{paddingRight:"4em"}}>
                        <h2 class="w3-text-teal">Inventory and Orders</h2>
                        <p class="inside-text">Clicking the "Inventory" or "Orders" buttons will display a popup menu. These 
                        menus can be used to navigate to the corresponding screens.</p>
                        <br/><br/>
                        <h2 class="w3-text-teal">Usage Analysis and Profile</h2>
                        <p class="inside-text">"Usage Analysis" can be used to view analytical charts based on certain criteria.</p>
                        <br/>
                        <p class="inside-text">Use "Profile" to change your login password.</p>
                        <br/>
                    </div>
                    <div class="w3-col l4 m6">
                        <Slider dots>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={home_page} alt="IVY Home Page" width="335" height="471"/>
                            <h3>Home Page</h3>
                            </div>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={home_inv} alt="IVY Inventory Popup" width="335" height="471"/>
                            <h3>Inventory Popup</h3>
                            </div>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={home_orders} alt="IVY Orders Popup" width="335" height="471"/>
                            <h3>Orders Popup</h3>
                            </div>
                        </Slider>
                    </div>
                </div>

                <div class="w3-row-padding back-square" id="order">
                <h3>Create Order</h3>
                    <div class="w3-col l4 m6">
                        <Slider dots>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={new_order} alt="IVY New Order" width="335" height="471"/>
                            <h3>New Order</h3>
                            </div>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={product_new} alt="IVY Product Search" width="335" height="471"/>
                            <h3>Product Search</h3>
                            </div>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={product_sugar} alt="IVY Search Sugar" width="335" height="471"/>
                            <h3>Search Sugar</h3>
                            </div>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={product_result} alt="IVY Product Search Result" width="335" height="471"/>
                            <h3>Product Search Result</h3>
                            </div>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={order_quantity} alt="IVY Enter Order Quantity" width="335" height="471"/>
                            <h3>Enter Order Quantity</h3>
                            </div>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={order_summary} alt="IVY Order Summary" width="335" height="471"/>
                            <h3>Order Summary</h3>
                            </div>
                        </Slider>
                    </div>
                    <div class="w3-col l8 m6" style={{paddingLeft:"4em"}}>
                        <h2 class="w3-text-teal">Select from the list</h2>
                        <p class="inside-text">Use the expandable list to find a product by its corresponding category 
                        and subcategory.</p>
                        <br/>
                        <h2 class="w3-text-teal">Or search for a product</h2>
                        <p class="inside-text">Select the "Search Product" radio button to search for a product by name.</p>
                        <br/>
                        <p class="inside-text">Enter desired product quantity by selecting the product once found. Click 
                        "Proceed To Checkout" to view a summary of the order before confirming.</p>
                        <br/>
                    </div>
                </div>

                <div class="w3-row-padding back-square-lighter" id="inventory">
                <h3>Check Inventory</h3>
                    <div class="w3-col l8 m6" style={{paddingRight:"4em"}}>
                        <h2 class="w3-text-teal">Check by Value</h2>
                        <p class="inside-text">To check inventory by value, enter the required criteria and click "Check Inventory".
                        A value will be shown for each category, subcategory, and product.</p>
                        <br/><br/>
                        <h2 class="w3-text-teal">Check by Proportion</h2>
                        <p class="inside-text">Checking by proportion will display a pie chart of subcategory quantity in the 
                        chosen category. </p>
                        <br/>
                        <p class="inside-text">Clicking on any subcategory will display a bar chart of the product quantities in 
                        that subcategory.</p>
                        <br/>
                    </div>
                    <div class="w3-col l4 m6">
                        <Slider dots>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={inv_value} alt="IVY Check Inventory Value" width="335" height="471"/>
                            <h3>Inventory Value</h3>
                            </div>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={inv_pie} alt="IVY Check Subcategory Proportion" width="335" height="471"/>
                            <h3>Subcategory Proportions</h3>
                            </div>
                            <div>
                            <img class="w3-image w3-round-large w3-hide-small" src={inv_bar} alt="IVY Check Product Proportion" width="335" height="471"/>
                            <h3>Product Proportion</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
            <br/>
            <div>
                <h2>Github link:</h2>
                <p><a href="https://github.com/lhernandez1848/Capstone" target="_blank">https://github.com/lhernandez1848/Capstone</a></p>
            </div>
        </div>
             
    </>
)

export default IVYProject;