import React from 'react';
import * as layout from './template.css';

import dnoticiasLogo from './images/dnoticias-pt-logo.png'

export default class DNoticiasNews extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const news = this._getNewsWithThumbnail();		
		const type = news.source.__text;
		const dnew = news.description.replace(/(<([^>]+)>)/g, "").split('.')[0];
		return (
			<div style={layout.template_dnoticias}>
				<div style={layout.dnoticias_logo}>
					<img style={layout.dnoticias_logo_img} src={dnoticiasLogo} />
				</div>
				<div style={layout.news}>
				<p style={layout.news_type} >
					{type}
				</p>
				<p style={layout.news_text}>
					{dnew.length > 157 ? dnew.substring(0,157) + "...": dnew + "."}
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