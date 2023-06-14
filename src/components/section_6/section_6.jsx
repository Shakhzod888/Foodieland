import React from "react";
import BackImg from "../assets/lastBeack.png"
import "../section_6/section_6.scss"

export default class Section_6 extends React.Component {
    render() {
        return (
            <section class="section_6">
                <div class="background">
                    <h3>Deliciousness to your inbox</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <br />
                        incididunt ut labore et dolore magna aliqut enim ad minim
                    </p>
                    <div className="inpDiv">
                        <input type="text" placeholder="Your email address..." />
                        <button>Subscribe</button>
                    </div>
                </div>

                <div className="footer">
                    <h1>Foodieland.</h1>
                    <div>
                        <p>Contact</p>
                        <p>Recipes</p>
                        <p>Blog</p>
                        <p>About Us</p>
                    </div>
                </div>
            </section>

        );
    }
}