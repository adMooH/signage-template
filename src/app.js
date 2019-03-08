import React from 'react';

import AdmoohTemplate from './admoohTemplate';
export class Template extends React.Component {
	render() {
		return (
			<AdmoohTemplate>
				<h1>Sem novidades</h1>
			</AdmoohTemplate>
		);
	}
}

window.getadMooHTemplate = () => <Template />;