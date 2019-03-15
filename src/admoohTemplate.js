import React from "react";
export default function admoohTemplate(Template, data) {
	return class extends React.Component {
		render() {
			return <Template data={data} {...this.props} />;
		}
	}
}
