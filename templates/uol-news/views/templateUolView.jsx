import React from 'react';
import Content from '../components/content';
import '../styles/views/template-view.css';

export default class TemplateUolView extends React.Component {
	render() {
		const news = this.props.news;
		const title = news.title.split('|')[1];
		return (
			<div className="template-uol-view">
				<Content type='Notícias' title={title} image={news.content._url} />
			</div>
		)
	}
}