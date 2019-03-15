import React, { Component } from 'react';
import Content from '../components/content';
import '../styles/views/template-view.css';

export default class TemplateUolView extends Component {
	render() {
		const props = { type: 'Notícias', title: 'Casos de dengue no Brasil sobem 47% de Janeiro a Março em relação a 2015', image: 'https://abrilsuperinteressante.files.wordpress.com/2017/03/criado-aplicativo-capaz-de-detectar-dengue-e-zika-em-atc3a9-30-minutos.jpg?quality=70&strip=info&resize=680,453' }
		return (
			<div className="template-uol-view">
				<Content {...props} />
			</div>
		)
	}
}