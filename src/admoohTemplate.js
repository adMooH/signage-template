import React from 'react';

import HeavenComponent from './heavenComponent';
import ClockComponent from './clockComponent';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css'

export class AdmooHTemplate extends React.Component {
	render() {
		return (
			<div className="template">
				<HeavenComponent />
				<ClockComponent />
			</div>
		);
	}
}
window.getadMooHTemplate = (props) => <AdmooHTemplate {...props} />;
