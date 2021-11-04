import { useEffect, useState } from "react";

import "./Home.css";
import Banana from "../../assets/banana.jpg";
import Black from "../../assets/black.jpg";
import Leopard from "../../assets/leopard.jpg";


export default function Home() {
    const [popup, setPopup] = useState(false);

    // const generatePhoto = () => {

    // };

    return (
        <div className="Home">
            <div className="content">
                <button className="button" id="button1">Click here for a Slug Pic!</button>
                <button className="button" id="button2">Click here for a Slug Fact!</button>
                <button className="button" id="button3">Click here to change the site color scheme!</button>

                <div className="slug">
                    <h1>Black Slug</h1>
                    <div className="slugRow">
                        <img className="slugPic" src={Black} alt="Side profile of slug on mud"></img>
                        <p className="desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet nisl nec
                        sapien aliquet ultrices.</p>
                        <ul>
                            <li>Aenean aliquet nisl nec sapien aliquet ultrices.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Sit amet, consectetur adipiscing elit.</li>
                            <li>Sapien aliquet ultrices.</li>
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
                            <li>Aenean aliquet nisl nec sapien aliquet ultrices.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Sit amet, consectetur adipiscing elit.</li>
                            <li>Sapien aliquet ultrices.</li>
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
                            <li>Aenean aliquet nisl nec sapien aliquet ultrices.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                            <li>Sit amet, consectetur adipiscing elit.</li>
                            <li>Sapien aliquet ultrices.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}