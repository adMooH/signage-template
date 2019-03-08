import React from 'react';
import './styles/app.css';
import logo from './images/logo.png';

export default class IntenalComponent extends React.Component {

	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<img className="logo img-fluid rounded float-right" src={logo} />
				</div>
				<h1 className="text">Component</h1>
			</div>);
	}
}