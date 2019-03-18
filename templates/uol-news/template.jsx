import React from 'react';
import TemplateUolView from './views/templateUolView'
import AdmoohTemplate from '../../src/admoohTemplate';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css';

export default class UolNews extends AdmoohTemplate {
	render() {
		return (
			<TemplateUolView news={this._getNewsWithThumbnail()} />
		);
	}
	_getNewsWithThumbnail() {
		const items = this.props.data.filter(i => i.content !== undefined && i.content._url !== "");
		return items[this._getRandomIndex(items.length)];
	}

	_getRandomIndex(arrayLength) {
		const itemsLenght = arrayLength - 1;
		return Math.floor(Math.random() * (itemsLenght - 0) + 0);
	}
}