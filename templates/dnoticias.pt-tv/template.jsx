import React from 'react';
import * as layout from './template.css';

import dnoticiasLogo from './images/dnoticias-pt-logo.png'

export default class DNoticiasNews extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const news = this._getNewsWithThumbnail();		
		const title = news.title;
		const pic = news.content._url;
		const dnew = news.description.replace(/(<([^>]+)>)/g, "").split('.')[0];
		return (
			<div style={layout.template_dnoticias}>
				<DNoticiasLogo src={pic}/>
				<div style={layout.dnoticias_logo}>
					<div style={{...layout.dnoticias_logo_img,backgroundImage: `url(${pic || dnoticiasLogo})` }}/>
				</div>
				<div style={layout.news}>
					<p style={layout.news_title} >
						{title}
					</p>
					<p style={layout.news_text} >
						{dnew.length > 130 ? dnew.substring(0,130) + "..." : dnew + "." }
					</p>			
				</div>
			</div>
		)
	}
	_getNewsWithThumbnail() {
		const items = this.props.data.filter(i => i.linkfoto !== "");
		return items[this._getRandomIndex(items.length)];
	}
	_getRandomIndex(arrayLength) {
		const itemsLenght = arrayLength - 1;
		return Math.floor(Math.random() * (itemsLenght - 0) + 0);
	}
}


class DNoticiasLogo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			shown: true
		}
	}
	componentDidMount(){
		setTimeout(() => {
			this.setState({shown: false});
		}, 3000);
	}


	render(){
		const animation = this.state.shown ? {} 
		:{
			transition: 'opacity 0.5s linear',
			opacity: 0
		}
		return (
			<div style={{...layout.dnoticias_logo,zIndex: 9, ...animation}}>
				<div style={{...layout.dnoticias_logo_img,backgroundImage: `url(${dnoticiasLogo})` }}/>
			</div>
		)
	}	
}