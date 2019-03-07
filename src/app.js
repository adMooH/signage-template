import React from 'react';
import ReactDOM from 'react-dom';

import AdmoohTemplate from './admoohTemplate';

const title = 'My Minimal React Webpack Babel Setup';
ReactDOM.render(
	<AdmoohTemplate><div>{title}</div></AdmoohTemplate>,
	document.getElementById('app')
);

module.hot.accept();