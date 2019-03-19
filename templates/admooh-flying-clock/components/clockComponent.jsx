import React from "react";
import { clearInterval } from "timers";

import * as layout from '../styles/app.css'

export default class ClockComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}
	componentDidMount() {
		this.clockerInterval = setInterval(
			() => this.setState({ date: new Date() }),
			60000
		);
	}
	componentWillUnmount() {
		clearInterval(this.clockerInterval);
	}

	render() {
		const hour = this.state.date.getHours();
		const minute = this.state.date.getMinutes();
		return (
			<div>
				<h1 style={layout.template__clock}>{`${hour}:${
					minute >= 10 ? minute : "0" + minute
					}`}</h1>
			</div>
		);
	}
}
