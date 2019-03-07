import React from 'react';
import './styles/app.css';
import logo from './images/logo.png';

export default class AdmoohTemplate extends React.Component {

	render() {
		return (
			<>
				<img src={logo} />
				<h1 className="text">Component</h1>
				{this.props.children}
			</>);
	}
}