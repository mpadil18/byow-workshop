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
    const [buttonPopup, setButtonPopup] = useState(false);
    const [button2Popup, setButton2Popup] = useState(false);

    const images = [Banana, Black, Leopard, Grey];
    const facts = ["Like other slugs, Black slugs prefer to find a mate but can self-fertilize.", 
    "Banana slugs have two sets of tentacles. The bottom two tentacles are for feeling and smelling.", 
    "Leopard slugs are primarily active by night. They are often seen after rain. Their activity can be noticed due to the trails of slime which are left behind.",
    "Grey field slugs are omnivorous and like to eat leaves, seeds, and fruit. "];
    const options = ['IBM', 'Wong', 'Tol'];

    const defaultOption = "Click here to change the site color scheme!"; 

    const generateNum = () => {
        return Math.floor(Math.random() * 4);
    };

    const changeScheme = (option) => {
        if (option.value === options[0]) {
            console.log("IBM")
            document.getElementById("Home").style.backgroundColor="#0A0A0A";
            document.getElementById("Home").style.color="#CA3A7E";
            document.getElementById("Navbar").style.backgroundColor="#F3B33E";
            document.getElementById("Footer").style.backgroundColor="#F3B33E";
            // Index by 0- getByClassName returns a collection of objects. We can just access the 1st
            for (let i = 0; i < document.getElementsByClassName("button").length; i++) {
                document.getElementsByClassName("button")[i].style.backgroundColor="#745FE8";
            }
            for (let i = 0; i < document.getElementsByClassName("text").length; i++) {
                document.getElementsByClassName("text")[i].style.color="#745FE8";
            }

        }
        else if (option.value === options[1]) {
            console.log("Wong")
            document.getElementById("Home").style.backgroundColor="#0A0A0A";
            document.getElementById("Home").style.color="#3070AD";
            document.getElementById("Navbar").style.backgroundColor="#DCA237";
            document.getElementById("Footer").style.backgroundColor="#DCA237";
            // Index by 0- getByClassName returns a collection of objects. We can just access the 1st
            for (let i = 0; i < document.getElementsByClassName("button").length; i++) {
                document.getElementsByClassName("button")[i].style.backgroundColor="#C66526";
            }
            for (let i = 0; i < document.getElementsByClassName("text").length; i++) {
                document.getElementsByClassName("text")[i].style.color="#C66526";
            }

        }
        else if (option.value === options[2]) {
            console.log("Tol")
            //Index by 0- getByClassName returns a collection of objects. We can just access the 1st
            document.getElementById("Home").style.backgroundColor="#0A0A0A";
            document.getElementById("Home").style.color="#61A899";
            document.getElementById("Navbar").style.backgroundColor="#61A899";
            document.getElementById("Footer").style.backgroundColor="#61A899";
            for (let i = 0; i < document.getElementsByClassName("button").length; i++) {
                document.getElementsByClassName("button")[i].style.backgroundColor="#9E4A95";
            }
            for (let i = 0; i < document.getElementsByClassName("text").length; i++) {
                document.getElementsByClassName("text")[i].style.color="#9E4A95";
            }
        }
        return;
    };

    return (
        <div class="home" id="Home">
        <div class="button-group">
            <div class="button" id="button1" onClick={()=>setButtonPopup(true)}>Click here for a Slug Pic!</div>
            <div class="button" id="button2" onClick={()=>setButton2Popup(true)}>Click here for a Slug Fact!</div>
            <Dropdown className="dropdown" options={options} value={defaultOption} placeholder="Select an option" onChange={changeScheme}></Dropdown>
        </div>
    
        <div class="slug-group">
            <div class="slug">
                <h1 class="text">Black Slug</h1>
                <div class="slugRow">
                    <img src={Black} width="300" alt="Side profile of slug on mud"></img>
                    <div class="desc">
                        <p class="text">Here is some information about the black slug:</p>
                        <ul>
                            <li class="text">SCIENTIFIC NAME: Arion ater L</li>
                            <li class="text">SIZE: Between 3.9–5.9 inches</li>
                            <li class="text">DIET: decomposing organic matter, smaller organisms, and agricultural crops.</li>
                            <li class="text">FUN FACT: Like other slugs, these dudes prefer to find a mate but can self-fertilize.</li>
                    </ul>
                    </div>
                </div>
            </div>

            <div class="slug">
                <h1 class="text">Banana Slug</h1>
                <div class="slugRow">
                    <img src={Banana} width="300" alt="Side profile of slug on mud"></img>
                    <div class="desc">
                        <p class="text">Here is some information about the banana slug:</p>
                        <ul>
                            <li class="text">SCIENTIFIC NAME: Ariolimax</li>
                            <li class="text">SIZE: Up to 9.8 inches</li>
                            <li class="text">DIET: "It might be easier to answer the question, 'What don't banana slugs eat?'"</li>
                            <li class="text">FUN FACT: This slug has two sets of tentacles. The bottom two tentacles are for feeling and smelling.</li>
                    </ul>
                    </div>
                </div>
            </div>

            <div class="slug">
                <h1 class="text">Leopard Slug</h1>
                <div class="slugRow">
                    <img src={Leopard} width="300" alt="Side profile of slug on mud"></img>
                    <div class="desc">
                        <p class="text">Here is some information about the leopard slug:</p>
                        <ul >
                            <li class="text">SCIENTIFIC NAME: Limax maximus</li>
                            <li class="text">SIZE: Up to 7.9 inches long</li>
                            <li class="text">DIET: range of fungi, plants and deceased animals. These animals have also been known to consume other slugs.</li>
                            <li class="text">FUN FACT: These slugs are primarily active by night. They are often seen after rain. Their activity can be noticed due to the trails of slime which are left behind.</li>
                    </ul>
                    </div>
                </div>
            </div>
      
            <div class="slug">
                <h1 class="text">Grey Field Slug</h1>
                <div class="slugRow">
                    <img src={Grey} width="300" alt="Side profile of slug on mud"></img>
                    <div class="desc">
                        <p class="text">Here is some information about the grey field slug:</p>
                        <ul >
                            <li class="text">SCIENTIFIC NAME: Deroceras reticulatum</li>
                            <li class="text">SIZE: Up to 2.3 inches</li>
                            <li class="text">DIET: Like to eat leaves, seeds, and fruit. </li>
                            <li class="text">FUN FACT: Notorious for being an agricultural pest. They damage crops by making holes in them.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <img className="slugPic" src={images[generateNum()]} width="700" alt="slug popup"></img>
            </Popup>

            <Popup trigger={button2Popup} setTrigger={setButton2Popup}>
                <p width="1000">{facts[generateNum()]}</p>
            </Popup>
        </div>
    )

}