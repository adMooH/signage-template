import React from 'react';
import IntenalComponent from './internalComponent';


export class AdmooHTemplate extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.data}</h1>
				<IntenalComponent />
			</div>
		);
	}
}

window.getadMooHTemplate = (props) => <AdmooHTemplate {...props} />;