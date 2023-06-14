import React from "react";
import Header from "./components/header/header";
import Section_1 from "./components/section_1/section_1";
import Section_2 from "./components/section_2/section_2";
import Section_3 from "./components/section_3/section_3";
import Section_4 from "./components/section_4/section_4";
import Section_5 from "./components/section_5/section_5";
import Section_6 from "./components/section_6/section_6";

export default class App extends React.Component {
	render() {
		return (
			<div className="container mt-2">
				<Header />
				<Section_1 />
				<Section_2 />
				<Section_3 />
				<Section_4 />
				<Section_5 />
				<Section_6 />
			</div>
		);
	}
}
