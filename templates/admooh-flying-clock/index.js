import React from 'react';

import HeavenComponent from './heavenComponent';
import ClockComponent from './clockComponent';

import admoohTemplate from "../../src/admoohTemplate";

import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css'

export const getTemplate = (data) => admoohTemplate(AdmooHFlyingClock, data);

class AdmooHFlyingClock extends React.Component {
	render() {
		return (
			<div className="template">
				<HeavenComponent />
				<ClockComponent />
			</div>
		);
	}
}


window.getadMooHTemplate = (props) => getTemplate(props);