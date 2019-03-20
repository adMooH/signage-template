import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'node-fetch';
import X2JS from "x2js";

// Add '.' to resolve relative path
const { getadMooHTemplate } = require(process.env.ADMOOH_TEMPLATE);
const rss = process.env.TEMPLATE_RSS;

if (rss !== undefined || rss !== "") {
	ReactDOM.render(<h1>{`Carregando RSS ${rss}`}</h1>, document.getElementById("app"));
	fetch("https://cors-anywhere.herokuapp.com/" + rss)
		.then(res => res.arrayBuffer())
		.then(arrayBuffer => {
			const dec = new TextDecoder("iso-8859-1");
			const feedXml = dec.decode(arrayBuffer);

			const x2js = new X2JS();
			const doc = x2js.xml2js(feedXml);
			const templateProps = {
				data: doc.rss.channel.item
			};
			setInterval(() => {
				const template = getadMooHTemplate(templateProps);
				ReactDOM.render(<div style={{
					width: "100%",
					height: "100%",
					zIndex: "10",
					top: "0",
					left: "0",
					position: "fixed",
					textAlign: "center"
				}}> {template}</div >, document.getElementById("app"));
			}, 10000);
		});
}
else {
	const template = getadMooHTemplate({});
	ReactDOM.render(<div style={{
		width: "100%",
		height: "100%",
		zIndex: "10",
		top: "0",
		left: "0",
		position: "fixed",
		textAlign: "center"
	}}> {template}</div >, document.getElementById("app"));
}
