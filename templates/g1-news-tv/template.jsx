import React from 'react';
import * as layout from './template.css';

import logo from './images/g1.png'

export default class Template extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			date: new Date(),
			isVisible: false
		}
	}
	render() {
		const news = this._getNewsWithThumbnail();

		const description = news.title;
		return (
			<div style={layout.template_view_tv}>
			<div style={layout.logo}>
				<img style={layout.logo_img} src={logo} />
			</div>
			<div style={layout.news}>
				<p style={layout.news_text}>
					{description}
				</p>
			</div>

		</div>
		)
	}
	_getNewsWithThumbnail() {
		const items = this.props.data.filter(i => i.title !== "");
		return items[this._getRandomIndex(items.length)];
	}
	_getRandomIndex(arrayLength) {
		const itemsLenght = arrayLength - 1;
		return Math.floor(Math.random() * (itemsLenght - 0) + 0);
	}
}