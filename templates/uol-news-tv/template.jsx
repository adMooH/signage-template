import React from 'react';
import * as layout from './template.css';

import uolLogo from './images/uol-logo-content.png'

export default class UolNews extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			date: new Date(),
			isVisible: false
		}
	}
	render() {
		const daysOfWeek = [
			"Domingo",
			"Segunda",
			"Terça",
			"Quarta",
			"Quinta",
			"Sexta",
			"Sábado"
		]
		const hour = this.state.date.getHours();
		const minute = this.state.date.getMinutes();
		const day = daysOfWeek[this.state.date.getDay()];
		const date = this.state.date.getDate();
		const month = this.state.date.getMonth() + 1;

		const news = this._getNewsWithThumbnail();

		const type = news.title;
		const description = news.description;
		return (
			<div style={layout.template_uol_view_tv}>
				<div style={layout.uol_logo}>
					<img style={layout.uol_logo_img} src={uolLogo} />
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
		const items = this.props.data.filter(i => i.linkfoto !== "");
		return items[this._getRandomIndex(items.length)];
	}
	_getRandomIndex(arrayLength) {
		const itemsLenght = arrayLength - 1;
		return Math.floor(Math.random() * (itemsLenght - 0) + 0);
	}
}