import React from 'react';
import ReactDOM from 'react-dom';

import IntenalComponent from './internalComponent';

import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css'

export class AdmooHTemplate extends React.Component {
	render() {
		return (
			<div className="template">
				<IntenalComponent />
				<h1>{this.props.data}</h1>
			</div>
		);
	}
}
window.getadMooHTemplate = (props) => <AdmooHTemplate {...props} />;

ReactDOM.render(<AdmooHTemplate />, document.getElementById("app"));