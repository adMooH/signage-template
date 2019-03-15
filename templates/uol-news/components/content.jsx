import React, { Component } from 'react';

import Header from './header';
import DateTime from './datetime';

import adMooHLogo from '../images/adMoohLogo.png'
import uolLogo from '../images/uolLogo.png'

import '../styles/components/content.css';

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
		const style = {
			backgroundImage: `url(${image})`
		}

		return (
			<div className="content" style={style}>
				<Header adMoohLogo={adMooHLogo} uolLogo={uolLogo} />

				<footer className="news position-absolute d-flex justify-content-between">
					<div className="news-content">
						<h2 className="type">
							{type}
						</h2>
						<h3 className="title">
							{title}
						</h3>
					</div>
					<div className="date">
						<DateTime />
					</div>
				</footer>
			</div>
		)
	}
}