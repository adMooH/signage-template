import React from 'react';
import './styles/app.css';
import logo from './images/logo.png';

export default class IntenalComponent extends React.Component {

	render() {
		return (
			<>
				<img src={logo} />
				<h1 className="text">Component</h1>
			</>);
	}
}