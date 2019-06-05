import React from 'react'
import { QuotaChart } from './quota-chart'

export const App = () =>
	<div>
		<p>weyt</p>
		<QuotaChart quota={10} booked={210}/>
		<QuotaChart quota={8} booked={210}/>
	</div>
