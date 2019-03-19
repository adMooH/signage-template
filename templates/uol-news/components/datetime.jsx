import React, { Component } from 'react';
import * as layout from '../styles/app.css';
import * as bootstrap from 'bootstrap/dist/css/bootstrap.css';

export default class DateTime extends Component {

	constructor(props) {
		super(props)

		this.state = {
			date: new Date()
		}
	}

	render() {
		const daysOfWeek = [
			"Domingo",
			"Segunda",
			"Terça",
			"Quarta",
			"Quinta",
			"Sexta",
			"Sábado"
		]
		const hour = this.state.date.getHours()
		const minute = this.state.date.getMinutes()
		const day = daysOfWeek[this.state.date.getDay()]
		const date = this.state.date.getDate()
		const month = this.state.date.getMonth() + 1



		return (
			<div style={bootstrap.datetime}>
				<h2 style={layout.date_h2}>
					{("0" + hour).slice(-2)}h
                    {("0" + minute).slice(-2)}
				</h2>
				<h3 style={layout.date_h3}>
					{day},  {("0" + date).slice(-2)}/{("0" + month).slice(-2)}
				</h3>
			</div>
		)
	}
}