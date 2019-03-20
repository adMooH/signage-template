import React from "react";
import { Stage, Layer } from 'react-konva';


export default class AdmoohTemplate extends React.Component {

	constructor(props) {
		super(props);
		const defaultWidth = window.innerWidth;
		const defaultHeight = window.innerHeight;
		const templateHeight = props.height || defaultHeight;
		const templateWidth = props.width || defaultWidth;
		const scale = Math.min(templateWidth / defaultWidth, templateHeight / defaultHeight);

		this.state = {
			templateHeight,
			templateWidth,
			windowHeight: defaultHeight,
			windowWidth: defaultWidth,
			scale
		}
	}

	render() {
		const { scale, windowHeight, windowWidth } = this.state;

		return (
			<Stage
				scaleX={scale}
				scaleY={scale}
				width={windowWidth}
				height={windowHeight}
			>
				<Layer>
					{this.props.children}
				</Layer>
			</Stage>
		);
	}
}
