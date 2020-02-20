import React from 'react';
import * as layout from './template.css';

import logo from './images/catracalivre.png'

export default class UolNews extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			date: new Date(),
			isVisible: false
		}
	}
	render() {
		const news = this._getNewsWithThumbnail();

		const type = news.category[0] ;
		const description = news.title;
		return (
			<div style={layout.template_view_tv}>
			<div style={layout.logo}>
				<img style={layout.logo_img} src={logo} />
			</div>
			<div style={layout.news}>
				<p style={layout.news_type}>
					{type}
				</p>
				<p style={layout.news_text}>
					{description}
				</p>
			</div>

		</div>
		)
	}
	_getNewsWithThumbnail() {
		const items = this.props.data.filter(i => i.category[0] !== "" && i.title !== "");
		return items[this._getRandomIndex(items.length)];
	}
	_getRandomIndex(arrayLength) {
		const itemsLenght = arrayLength - 1;
		return Math.floor(Math.random() * (itemsLenght - 0) + 0);
	}
}