import fetch from 'node-fetch';
import X2JS from "x2js";

export default class ResolveRSS {
	constructor(rssUrl) {
		this.rssUrl = rssUrl;
	}
	getRSSItems(rss) {
		let charSet = "iso-8859-1";
		return fetch("https://cors-anywhere.herokuapp.com/" + rss)
			.then(res => { 
				charSet = this.getCharsetEncoding(res.headers.get('content-type'));
				return res; 
			})
			.then(res => res.arrayBuffer())
			.then(rssBffr => {
				const dec = new TextDecoder(charSet);
				const feedXml = dec.decode(rssBffr);
				const x2js = new X2JS();
				const doc = x2js.xml2js(feedXml);
				return doc.rss.channel.item
			});
	}

	getCharsetEncoding(contentTypeHeader) {
		const regex = /(?<=charset=).*/gm;
		let match = regex.exec(contentTypeHeader);
		if (match) {
			return match[0];
		}
		return "iso-8859-1";
	}
}


