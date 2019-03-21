import React from 'react';
import ReactDOM from 'react-dom';

import LoadTemplate from './src/loadTemplate';

const { getadMooHTemplate } = require(process.env.ADMOOH_TEMPLATE);
ReactDOM.render(<LoadTemplate getTemplate={getadMooHTemplate} />, document.getElementById("app"));
