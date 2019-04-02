import fetch from 'node-fetch';
import X2JS from "x2js";


export default class ResolveRSS {
	constructor(rssUrl) {
		this.rssUrl = rssUrl;
	}
	getRSSItems(rss) {
		return fetch("https://cors-anywhere.herokuapp.com/" + rss)
			.then(res => res.arrayBuffer())
			.then(rssBffr => {
				const dec = new TextDecoder("iso-8859-2");
				const feedXml = dec.decode(rssBffr);
				const x2js = new X2JS();
				const doc = x2js.xml2js(feedXml);
				return doc.rss.channel.item
			});
	}
}


