import { useEffect, useState } from "react";
import Popup from "../Popup/Popup"
import "./Home.css";
import Banana from "../../assets/banana.jpg";
import Black from "../../assets/black.jpg";
import Leopard from "../../assets/leopard.jpg";

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


export default function Home() {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [button2Popup, setButton2Popup] = useState(false);

    const images = [Banana, Black, Leopard];
    const facts = ["Like other slugs, Black slugs prefer to find a mate but can self-fertilize.", 
    "Banana slugs have two sets of tentacles. The bottom two tentacles are for feeling and smelling.", 
    "Leopard slugs are primarily active by night. They are often seen after rain. Their activity can be noticed due to the trails of slime which are left behind."];
    const options = [
        'IBM', 'Wong', 'Tol'
    ];

    const defaultOption = "Click here to change the site color scheme!"; 

    const generatePhoto = () => {
        return Math.floor(Math.random() * 3);
    };

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
        else if (option.value === options[1]) {
            console.log("Wong")
            //Index by 0- getByClassName returns a collection of objects. We can just access the 1st
            document.getElementsByClassName("Home")[0].style.backgroundColor="#0A0A0A";
            document.getElementsByClassName("Home")[0].style.color="#3070AD";
            document.getElementsByClassName("Navbar")[0].style.backgroundColor="#DCA237";
            document.getElementsByClassName("Footer")[0].style.backgroundColor="#DCA237";
            for (let i = 0; i < document.getElementsByClassName("button").length; i++) {
                document.getElementsByClassName("button")[i].style.backgroundColor="#C66526";
            }

        }
        else if (option.value === options[2]) {
            console.log("Tol")
            //Index by 0- getByClassName returns a collection of objects. We can just access the 1st
            document.getElementsByClassName("Home")[0].style.backgroundColor="#0A0A0A";
            document.getElementsByClassName("Home")[0].style.color="#61A899";
            document.getElementsByClassName("Navbar")[0].style.backgroundColor="#61A899";
            document.getElementsByClassName("Footer")[0].style.backgroundColor="#36753B";
            for (let i = 0; i < document.getElementsByClassName("button").length; i++) {
                document.getElementsByClassName("button")[i].style.backgroundColor="#9E4A95";
            }

        }
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
                <img className="slugPic" src={images[generatePhoto()]} alt="slug popup"></img>
            </Popup>

            <Popup trigger={button2Popup} setTrigger={setButton2Popup}>
                <p>{facts[generatePhoto()]}</p>
            </Popup>
        </div>
    )

}