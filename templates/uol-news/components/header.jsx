import React, { Component } from 'react'
import * as layout from '../styles/app.css';
import * as bootstrap from '../styles/bootstrap/css/bootstrap.min.css';

export default class Header extends Component {
	render() {
		return (
			<header style={layout.logos}>
				<div style={{ ...bootstrap.d_flex, ...bootstrap.justify_content_between, ...bootstrap.align_items_center }}>
					<img style={{ ...layout.logos__uol, ...bootstrap.img_fluid }} src={this.props.uolLogo} alt="UOL - O melhor conteúdo" />
					<img style={{ ...layout.logos__admooh, ...bootstrap.img_fluid }} src={this.props.adMoohLogo} alt="AdMooh" />
				</div>
			</header >
		)
	}
}