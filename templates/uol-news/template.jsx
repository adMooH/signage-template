import React from 'react';
import * as layout from './template.css';

import uolLogo from './images/uolLogo.png'
import adMooHLogo from './images/adMoohLogo.png'

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
		const picture = news.linkfoto;

		return (
			<div style={{ ...layout.template_uol_view }}>
				<div style={{ ...layout.content, backgroundImage: `url(${picture})` }}>
					<header style={layout.logos}>
						<div>
							<img style={{ ...layout.logos__uol }} src={uolLogo} />
							<img style={{ ...layout.logos__admooh }} src={adMooHLogo} />
						</div>
					</header >
					<footer style={{ ...layout.news }} >
						<div key="bola" style={layout.news__news_content}>
							<h2 style={layout.type}>
								{type}
							</h2>
							<h3 style={layout.title}>
								{description}
							</h3>
						</div>
						<div style={layout.date}>
							<div>
								<h2 style={layout.date_h2}>
									{("0" + hour).slice(-2)}h{("0" + minute).slice(-2)}
								</h2>
								<h3 style={layout.date_h3}>
									{day},  {("0" + date).slice(-2)}/{("0" + month).slice(-2)}
								</h3>
							</div>
						</div>
					</footer>
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