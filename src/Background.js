import React, { Component } from 'react'
import styled, { css } from 'styled-components'

const StyledBackground = styled.div`
	width: 100%;
	height: 1000%;
	position: absolute;
	background-color: ${props => props.color};
	z-index: -99999;
	margin-top: -16px;
`

class Background extends Component {
	render() {
		return (
			<StyledBackground
				{...this.props}
			>
				{this.props.children}
			</StyledBackground >
		)
	}
}

export default Background

//Props
//image: URL of background image (optional)
//color: Color of background (optional)