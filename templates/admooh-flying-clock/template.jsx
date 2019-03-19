import React from 'react';

import HeavenComponent from './components/heavenComponent';
import ClockComponent from './components/clockComponent';

import AdmoohTemplate from "../../src/admoohTemplate";


export default class AdmooHFlyingClock extends AdmoohTemplate {
	render() {
		return (
			<>
				<HeavenComponent />
				<ClockComponent />
			</>
		);
	}
}
