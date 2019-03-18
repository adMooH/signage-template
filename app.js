import React from 'react';
import ReactDOM from 'react-dom';

// Add '.' to resolve relative path
const { getadMooHTemplate } = require(process.env.ADMOOH_TEMPLATE);

const template = getadMooHTemplate({});

ReactDOM.render(<div className="template">{template}</div>, document.getElementById("app"));