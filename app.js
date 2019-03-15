import React from "react";
import ReactDOM from 'react-dom';

// Add '.' to resolve relative path
const { getTemplate } = require(process.env.ADMOOH_TEMPLATE);

const Template = getTemplate({});
ReactDOM.render(<Template />, document.getElementById("app"));