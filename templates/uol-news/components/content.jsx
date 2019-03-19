import React, { Component } from 'react';

import Header from './header';
import DateTime from './datetime';

import adMooHLogo from '../images/adMoohLogo.png'
import uolLogo from '../images/uolLogo.png'

import * as layout from '../styles/app.css';
import * as bootstrap from '../styles/bootstrap/css/bootstrap.min.css';

export default class Content extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		const {
			type,
			title,
			image
		} = this.props
		return (
			<div style={{ ...layout.content, backgroundImage: `url(${image})` }}>
				<Header adMoohLogo={adMooHLogo} uolLogo={uolLogo} />
				<footer style={{ ...layout.news, ...bootstrap.position_absolute, ...bootstrap.d_flex, ...bootstrap.justify_content_between }} >
					<div style={layout.news__news_content}>
						<h2 style={layout.type}>
							{type}
						</h2>
						<h3 style={layout.title}>
							{title}
						</h3>
					</div>
					<div style={layout.date}>
						<DateTime />
					</div>
				</footer>
			</div>
		)
	}
}