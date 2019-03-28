import React from 'react';
import * as layout from './template.css';

import uolLogo from './images/uolLogo.png'
import adMooHLogo from './images/adMoohLogo.png'

const daysOfWeek = [
	"Domingo",
	"Segunda",
	"Terça",
	"Quarta",
	"Quinta",
	"Sexta",
	"Sábado"
];



export default class UolTemplate extends React.Component {
	constructor(props){
		super(props);
	}
	render() {		
        return(
			<div style={{
				width: "100%",
				height: "100%"
			}}>			
				<UolSplash/>
				 <UolNews {...this.props}/>
			</div>
		);
    }
}


class UolSplash extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			shown: true
		}
	}
	componentDidMount(){
		setTimeout(() => {
			this.setState({shown: false});
		}, 1100);
	}
    render() {
		const animation = this.state.shown
		? {} 
		:{
			transition: 'opacity 0.5s linear',
			opacity: 0
		}
		const style = {
			width: "100%",
			height: "100%",
			backgroundColor: '#363636',			
			position: 'absolute',
			zIndex: 9
		};
        return(
			<div style={{...style, ...animation}}>
				<img style={{
					position: "absolute",
					margin: "auto",
					width: "30%",
					height: "20%",				
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
			}} src={uolLogo}/> 
		   </div>
		);
    }
}

class UolNews extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			date: new Date(),
			showingHolder: true,
			isVisible: false
		}
	}
	render() {
	
		const hour = this.state.date.getHours();
		const minute = this.state.date.getMinutes();
		const day = daysOfWeek[this.state.date.getDay()];
		const date = this.state.date.getDate();
		const month = this.state.date.getMonth() + 1;
		const news = this._getNewsWithThumbnail()
		const type = news.title;
		const description = news.description;
		const picture = news.linkfoto;

		return (
			<div style={{ ...layout.template_uol_view }}>
				<div style={{ ...layout.content, backgroundImage: `url(${picture})` }}>
					<header style={layout.logos}>
						<div>
							<img style={{ ...layout.logos__uol }} src={uolLogo} />
							<img style={{ ...layout.logos__admooh }} src={adMooHLogo} />
						</div>
					</header >
					<footer style={{ ...layout.news }} >
						<div key="bola" style={layout.news__news_content}>
							<h2 style={layout.type}>
								{type}
							</h2>
							<h3 style={layout.title}>
								{description}
							</h3>
						</div>
						<div style={layout.date}>
							<div>
								<h2 style={layout.date_h2}>
									{("0" + hour).slice(-2)}h{("0" + minute).slice(-2)}
								</h2>
								<h3 style={layout.date_h3}>
									{day},  {("0" + date).slice(-2)}/{("0" + month).slice(-2)}
								</h3>
							</div>
						</div>
					</footer>
				</div>	
			</div>
		);
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