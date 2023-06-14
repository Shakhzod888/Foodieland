import React from "react";
import Sushi from "../assets/sushi.png"
import Vegan from "../assets/vegan.png"
import Meat from "../assets/meat.png"
import Cake from "../assets/cake.png"
import Sandivich from "../assets/sandivich.png"
import Chokolate from "../assets/chocolate.png"


import "../section_2/section_2.scss"


function Food({img,text}) {
    return <div className="food">
        <img src={img} alt="" />
        <p>{text}</p>
    </div>
}

export default class Section_2 extends React.Component {
    render() {
        return (
            <section className="section_2">
                <div className="categories">
                    <div className="first">Categories</div>
                    <div className="cecond">View All Categories</div>
                </div>

                <div className="foods">
                    <Food img =  {Sushi} text = "Breakfast"/>
                    <Food img = {Vegan} text = "Vegan"/>
                    <Food img = {Meat} text = "Meat"/>
                    <Food img = {Cake} text = "Dessert"/>
                    <Food img = {Sandivich} text = "Lunch"/>
                    <Food img = {Chokolate} text = "Chokolate"/>
                </div>
            </section>
        );
    }
}
