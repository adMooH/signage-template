import React from 'react';
import Content from '../components/content';
import * as layout from '../styles/app.css';

export default class TemplateUolView extends React.Component {
	render() {
		const news = this.props.news;
		const title = news.title.split('|')[1];
		return (
			<div style={layout.template_uol_view}>
				<Content type='Notícias' title={title} image={news.content._url} />
			</div>
		)
	}
}