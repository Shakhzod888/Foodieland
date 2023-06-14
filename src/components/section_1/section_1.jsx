import React from "react";
import BackFood from "../assets/backFood.png"
import Man from "../assets/man.png"
import "../section_1/section_1.scss"

export default class Section_1 extends React.Component {
    render() {
        return (
            <section className="section_1">
                <div className="wrapper">

                    <div className="box_1">
                        <button className="hot">Hot Recipes</button>
                        <h2>Spicy delicious <br />chicken wings</h2>
                        <p>  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                        <div className="buttons">
                            <button>30 Minutes</button>
                            <button>Chicken</button>
                        </div>
                        <div className="after">
                            <div className="drr">
                                <div><img src={Man} alt="" /></div>
                                <div className="boy">
                                    <div>John Smith</div>
                                    <div>15 March 2022</div>
                                </div>
                            </div>
                            <button className="view">
                                View Recipes
                            </button>
                        </div>
                    </div>

                    <div className="box_2">
                        <img src={BackFood} alt="" />
                    </div>
                </div>
            </section>
        );
    }
}
