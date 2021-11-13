import { useEffect, useState } from "react";
import Popup from "../Popup/Popup"
import "./Home.css";
import Banana from "../../assets/banana1.jpg";
import Black from "../../assets/black.jpg";
import Leopard from "../../assets/leopard1.jpg";
import Grey from "../../assets/grey.jpg";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function Home() {

    // Initialize 2 states, that indicate whether the photo or fact popup is displayed.
    // Both initialized as false, because by default, the user doesn't have a popup until they click a button.
    const [buttonPopup, setButtonPopup] = useState(false);
    const [button2Popup, setButton2Popup] = useState(false);

    // Initialized list of imported slug images
    // Initialized list of slug facts 
    // Initialized list of color schemes for our web app
    const images = [Banana, Black, Leopard, Grey];
    const facts = ["Like other slugs, Black slugs prefer to find a mate but can self-fertilize.", 
    "Banana slugs have two sets of tentacles. The bottom two tentacles are for feeling and smelling.", 
    "Leopard slugs are primarily active by night. They are often seen after rain. Their activity can be noticed due to the trails of slime which are left behind.",
    "Grey field slugs are omnivorous and like to eat leaves, seeds, and fruit. "];
    const options = ['IBM', 'Wong', 'Tol'];

    // The default text we display to the user that explains what interacting with the dropdown menu does.
    const defaultOption = "Click here to change the site color scheme!"; 

    // Return a random number using the length of the lists we have.
    const generatePhoto = () => {
        return Math.floor(Math.random() * 4);
    };

    //INFO:
    //  Function that changes the color scheme of the website depending on the option selected on the dropdown menu.
    //  We can select from 'IBM', 'Wong', or 'Tol'.
    //  The code for changing the scheme based on the 1st option is already written for you. 
    //TASK:
    //  Finish the code by writing out the logic that changes the color if the user selects the other 2 options!
    const changeScheme = (option) => {
        console.log("PICKED", option, options[2]);
        if (option.value === options[0]) {
            console.log("IBM")
            //Index by 0 - getByClassName returns a collection of objects. We can just access the 1st element
            document.getElementsByClassName("Home")[0].style.backgroundColor="#0A0A0A";
            document.getElementsByClassName("Home")[0].style.color="#CA3A7E";
            document.getElementsByClassName("Navbar")[0].style.backgroundColor="#F3B33E";
            document.getElementsByClassName("Footer")[0].style.backgroundColor="#F3B33E";
            for (let i = 0; i < document.getElementsByClassName("button").length; i++) {
                document.getElementsByClassName("button")[i].style.backgroundColor="#745FE8";
            }

        }

        // ** ---------- WRITE YOUR SOLUTION HERE --------- **
        //else if...
        // ** ----------                          --------- **

        return;
    };

    return (
        <div class="content">
            <div class="button-group">
                <div class="button" id="button1" onClick={()=>setButtonPopup(true)}>Click here for a Slug Pic!</div>
                <div class="button" id="button2" onClick={()=>setButton2Popup(true)}>Click here for a Slug Fact!</div>
                <Dropdown className="button" options={options} value={defaultOption} placeholder="Select an option" onChange={changeScheme}></Dropdown>
            </div>
        
            <div class="slug-group">
                <div class="slug">
                    <h1>Black Slug</h1>
                    <div class="slugRow">
                        <img src={Black} width="300" alt="Side profile of slug on mud"></img>
                        <div class="desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet nisl nec
                        sapien aliquet ultrices.</p>
                            <ul>
                            <li>Aenean aliquet nisl nec sapien aliquet ultrices.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Sit amet, consectetur adipiscing elit.</li>
                            <li>Sapien aliquet ultrices.</li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div class="slug">
                    <h1>Banana Slug</h1>
                    <div class="slugRow">
                        <img src={Banana} width="300" alt="Side profile of slug on mud"></img>
                        <div class="desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet nisl nec
                        sapien aliquet ultrices.</p>
                            <ul>
                            <li>Aenean aliquet nisl nec sapien aliquet ultrices.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Sit amet, consectetur adipiscing elit.</li>
                            <li>Sapien aliquet ultrices.</li>
                        </ul>
                        </div>
                    </div>
                </div>

                <div class="slug">
                    <h1>Leopard Slug</h1>
                    <div class="slugRow">
                        <img src={Leopard} width="300" alt="Side profile of slug on mud"></img>
                        <div class="desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet nisl nec
                        sapien aliquet ultrices.</p>
                            <ul>
                            <li>Aenean aliquet nisl nec sapien aliquet ultrices.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Sit amet, consectetur adipiscing elit.</li>
                            <li>Sapien aliquet ultrices.</li>
                        </ul>
                        </div>
                    </div>
                </div>
          
                <div class="slug">
                    <h1>Grey Field Slug</h1>
                    <div class="slugRow">
                        <img src={Grey} width="300" alt="Side profile of slug on mud"></img>
                        <div class="desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet nisl nec
                        sapien aliquet ultrices.</p>
                            <ul>
                                <li>Aenean aliquet nisl nec sapien aliquet ultrices.</li>
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Sit amet, consectetur adipiscing elit.</li>
                                <li>Sapien aliquet ultrices.</li>
                            </ul>
                        </div>
                    </div>
                </div>
    	    </div>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <img className="slugPic" src={"#image_source_solution"} width="1000" alt="slug popup"></img>
            </Popup>
            

            {
                // ** ---------- WRITE YOUR POPUP SOLUTION HERE --------- **
                //
                // ** ----------                                --------- **

            }
            
        </div>
    )

}