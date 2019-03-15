import React from 'react';
import TemplateUolView from './views/templateUolView';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/app.css';

import admoohTemplate from "../../src/admoohTemplate";

export const getTemplate = (data) => admoohTemplate(UolNews, data);

export class UolNews extends React.Component {
	render() {
		return (
			<TemplateUolView />
		);
	}
}

window.getadMooHTemplate = (props) => getTemplate(props);