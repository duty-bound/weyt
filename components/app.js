import React from 'react'
import { QuotaChart } from './quota-chart'

export const App = () =>
	<div>
		<p>weyt</p>
		<QuotaChart booked={10} quota={10} />
		<QuotaChart booked={8} quota={8} />
	</div>
