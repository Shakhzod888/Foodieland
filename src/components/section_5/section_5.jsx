import React from "react";
import NationalFood_1 from "../assets/nationalFood_1.png"
import NationalFood_2 from "../assets/nationalFood_2.png"
import NationalFood_3 from "../assets/nationalFood_3.png"
import NationalFood_4 from "../assets/nationalFood_4.png"
import NationalFood_5 from "../assets/nationalFood_5.png"
import NationalFood_6 from "../assets/nationalFood_6.png"
import NationalFood_7 from "../assets/nationalFood_7.png"
import NationalFood_8 from "../assets/nationalFood_8.png"
import "../section_5/section_5.scss"

function NationalFoods({ imgs, text }) {
    return
}

export default class Section_5 extends React.Component {
    render() {
        return (
            <section className="section_5">

                <div className="abb">
                    <h3>  Try this delicious recipe <br />
                        to make your day
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqut enim ad minim
                    </p>
                </div>

                <div className="imgesss">

                    <div>
                        <img src={NationalFood_1} alt="" />
                        <img src={NationalFood_2} alt="" />
                        <img src={NationalFood_3} alt="" />
                        <img src={NationalFood_4} alt="" />
                    </div>

                    <div>
                        <img src={NationalFood_5} alt="" />
                        <img src={NationalFood_6} alt="" />
                        <img src={NationalFood_7} alt="" />
                        <img src={NationalFood_8} alt="" />
                    </div>

                </div>

            </section>
        );
    }
}