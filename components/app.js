import React from 'react'
import { Header } from './header'
import { Deal } from './deal'

export class App extends React.Component {

	render() {
		return (
			<div>
				<Header>weyt</Header>
				<Deal />
				<Deal />
			</div>
		)
	}
}
