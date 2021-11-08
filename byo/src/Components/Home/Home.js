import { useEffect, useState } from "react";
import Popup from "../Popup/Popup"
import "./Home.css";
import Banana from "../../assets/banana.jpg";
import Black from "../../assets/black.jpg";
import Leopard from "../../assets/leopard.jpg";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function Home() {

    //Initialize 2 states, that indicate whether the photo or fact popup is displayed.
    //Both initialized as false, because by default, the user doesn't have a popup until they click a button.
    const [buttonPopup, setButtonPopup] = useState(false);
    const [button2Popup, setButton2Popup] = useState(false);

    //Initialized list of imported slug images
    //Initialized list of slug facts retreived from the website.
    const images = [Banana, Black, Leopard];
    const facts = ["Like other slugs, Black slugs prefer to find a mate but can self-fertilize.", 
    "Banana slugs have two sets of tentacles. The bottom two tentacles are for feeling and smelling.", 
    "Leopard slugs are primarily active by night. They are often seen after rain. Their activity can be noticed due to the trails of slime which are left behind."];
    const options = [
        'IBM', 'Wong', 'Tol'
    ];

    //The default text we display to the user that explains what interacting with the dropdown menu does.
    const defaultOption = "Click here to change the site color scheme!"; 

    //INFO:
    //  We need to generate a random number from 0-2, that we can use to access an image or fact in any list.
    //  (Hint: This can be done in one line!)
    //TASK:
    //  Return a random number using the length of the lists we have.
    const generateNum = () => {
        return /* CODE YOUR SOLUTION HERE */;
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
            //Index by 0- getByClassName returns a collection of objects. We can just access the 1st
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
        <div className="Home" id="casa">
            <div className="content">
                <button className="button" id="button1" onClick={()=>setButtonPopup(true)}>Click here for a Slug Pic!</button>
                <button className="button" id="button2" onClick={()=>setButton2Popup(true)}>Click here for a Slug Fact!</button>
                <Dropdown options={options} value={defaultOption} placeholder="Select an option" onChange={changeScheme}></Dropdown>

                <div className="slug">
                    <h1>Black Slug</h1>
                    <div className="slugRow">
                        <img className="slugPic" src={Black} alt="Side profile of slug on mud"></img>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet nisl nec
                        sapien aliquet ultrices.</p>
                        <ul>
                            <li>SCIENTIFIC NAME: Arion ater L</li>
                            <li>SIZE: Between 3.9–5.9 in</li>
                            <li>DIET: decomposing organic matter, smaller organisms, and agricultural crops</li>
                            <li>FUN FACT: Like other slugs, these dudes prefer to find a mate but can self-fertilize</li>
                        </ul>
                    </div>
                </div>

                <div className="slug">
                    <h1>Banana Slug</h1>
                    <div className="slugRow">
                        <img className="slugPic" src={Banana} alt="Side profile of slug on mud"></img>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet nisl nec
                        sapien aliquet ultrices.</p>
                        <ul>
                            <li>SCIENTIFIC NAME: Ariolimax</li>
                            <li>SIZE: Up to 9.8 inches</li>
                            <li>DIET: "It might be easier to answer the question, 'What don't banana slugs eat?'"</li>
                            <li>FUN FACT: This slug has two sets of tentacles. The bottom two tentacles are for feeling and smelling.</li>
                        </ul>
                    </div>
                </div>

                <div className="slug">
                    <h1>Leopard Slug</h1>
                    <div className="slugRow">
                        <img className="slugPic" src={Leopard} alt="Side profile of slug on mud"></img>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet nisl nec
                        sapien aliquet ultrices.</p>
                        <ul>
                            <li>SCIENTIFIC NAME: Limax maximus</li>
                            <li>SIZE: Up to 7.9 inches long.</li>
                            <li>DIET: range of fungi, plants and deceased animals. These animals have also been known to consume other slugs.</li>
                            <li>FUN FACT: These slugs are primarily active by night. They are often seen after rain. Their activity can be noticed due to the trails of slime which are left behind.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <img className="slugPic" src={"#image_source_solution"} alt="slug popup"></img>
            </Popup>
            

            {
                // ** ---------- WRITE YOUR POPUP SOLUTION HERE --------- **
                //
                // ** ----------                                --------- **

            }
            
        </div>
    )

}