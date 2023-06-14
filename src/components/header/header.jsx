import React from "react";
import Logo from "../header/assets/logo.png";
import Facebook from "../header/assets/facebook.png"
import Twitter from "../header/assets/twiter.png"
import Instagram from "../header/assets/instagram.png"
import "../header/header.scss"

function Link(props) {
    return <li>{props.text}</li>;
}

function ContactImgs(props) {
    return <img src={props.img} alt="" />
}

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <img className="logo" src={Logo} alt="" />

                <div className="links">
                    <ul>
                        <Link text="Home" />
                        <Link text="Recipes" />
                        <Link text="Blog" />
                        <Link text="Contact" />
                        <Link text="About Us" />
                    </ul>
                </div>

                <div className="contactLogos">
                    <ContactImgs img={Facebook} />
                    <ContactImgs img={Twitter} />
                    <ContactImgs img={Instagram} />
                </div>

                <div className="contacts"></div>
            </header>
        );
    }
}
