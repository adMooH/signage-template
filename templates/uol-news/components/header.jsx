import React, { Component } from 'react'
import * as layout from '../styles/app.css';

export default class Header extends Component {
	render() {
		return (
			<header style={layout.logos}>
				<div>
					<img style={{ ...layout.logos__uol}} src={this.props.uolLogo} />
					<img style={{ ...layout.logos__admooh }} src={this.props.adMoohLogo}/>
				</div>
			</header >
		)
	}
}