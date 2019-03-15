import React from 'react';
import '../styles/app.css'
import { clearInterval } from 'timers';

export default class ClockComponent extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			date: new Date(),
		}
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
				<h1 className="clock">{`${hour}:${minute}`}</h1>
			</div>
		);
	}
}
