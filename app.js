import React from 'react';
import ReactDOM from 'react-dom';

// Add '.' to resolve relative path
const { getadMooHTemplate } = require(process.env.ADMOOH_TEMPLATE);

const template = getadMooHTemplate({
	data: [
		{
			title: "Oi | Hello World",
			content: {
				_url: "https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_1280.jpg"
			}
		}
	]
});

ReactDOM.render(<div className="template">{template}</div>, document.getElementById("app"));