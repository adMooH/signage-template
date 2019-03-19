import React from 'react';
import ReactDOM from 'react-dom';

// Add '.' to resolve relative path
const { getadMooHTemplate } = require(process.env.ADMOOH_TEMPLATE);

const template = getadMooHTemplate({
	data: [
		{
			title: "Oi | Lorem luizai ipsum dolor sit amet, consectetur adipiscing elit.",
			content: {
				_url: "https://www.elastic.co/assets/blt3541c4519daa9d09/maxresdefault.jpg?uid=blt3541c4519daa9d09"
			}
		}
	]
});

ReactDOM.render(<div style={{
	width: "100%",
	height: "100%",
	zIndex: "10",
	top: "0",
	left: "0",
	position: "fixed",
	textAlign: "center"
}}> {template}</div >, document.getElementById("app"));