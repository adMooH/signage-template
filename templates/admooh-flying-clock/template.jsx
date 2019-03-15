import React from 'react';

import HeavenComponent from './components/heavenComponent';
import ClockComponent from './components/clockComponent';

import AdmoohTemplate from "../../src/admoohTemplate";

import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css'

export default class AdmooHFlyingClock extends AdmoohTemplate {
	render() {
		return (
			<div className="template">
				<HeavenComponent />
				<ClockComponent />
			</div>
		);
	}
}
