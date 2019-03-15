import React, { Component } from 'react'
import '../styles/components/header.css';

export default class Header extends Component {
	render() {
		return (

			<header className="logos">
				<div className="d-flex justify-content-between d-flex align-items-center">
					<img className="img-fluid uol" src={this.props.uolLogo} alt="UOL - O melhor conteúdo" />
					<img className="img-fluid admooh" src={this.props.adMoohLogo} alt="AdMooh" />
				</div>
			</header>
		)
	}
}