import React from "react";
import Box_1 from "../assets/box_1.png"
import Box_2 from "../assets/box_2.png"
import Box_3 from "../assets/box_3.png"
import Box_4 from "../assets/box_4.png"
import Box_5 from "../assets/box_5.png"
import Box_6 from "../assets/box_6.png"
import Box_7 from "../assets/box_7.png"
import Box_8 from "../assets/box__8.png"
import Box_9 from "../assets/box_9.png"
import "../section_3/section_3.scss"

function BoxFoods({imges}) {
    return <div>
        <img src={imges} alt="" />
    </div>
}

export default class Section_3 extends React.Component {
    render() {
        return (
            <section className="section_3">
                <h1>Simple and tasty recipes</h1>
                <p>  Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut <br />
                    labore et dolore magna aliqut enim ad minim
                </p>
                <div className="boxFoods">
                    <div className="box_1">
                        <BoxFoods imges={Box_1}/>
                        <BoxFoods imges={Box_2}/>
                        <BoxFoods imges={Box_3}/>
                    </div>

                    <div className="box_1">
                        <BoxFoods imges={Box_4}/>
                        <BoxFoods imges={Box_5}/>
                        <BoxFoods imges={Box_6}/>
                    </div>

                    <div className="box_1">
                        <BoxFoods imges={Box_7}/>
                        <BoxFoods imges={Box_8}/>
                        <BoxFoods imges={Box_9}/>
                    </div>

                </div>
            </section>
        );
    }
}
