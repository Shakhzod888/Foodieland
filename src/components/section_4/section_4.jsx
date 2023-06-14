import React from "react";
import Sheff from "../assets/sheff.png"
import "../section_4/section_4.scss"

export default class Section_4 extends React.Component {
    render() {
        return (
            <section className="section_4">

                <div className="aboutSheff">
                    <div>
                        <h2>  Everyone can be a <br />
                            chef in their own kitchen
                        </h2>
                        <p>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br />
                         eiusmod tempor incididunt ut labore et dolore magna aliqut enim <br />
                          ad minim 
                        </p>
                        <button>
                            Learn More
                        </button>
                    </div>

                    <div className="shefimg">
                        <img src={Sheff} alt="" />
                    </div>
                </div>

            </section>
        );
    }
}