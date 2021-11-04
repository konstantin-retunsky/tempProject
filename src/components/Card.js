import React from "react"

export default function Card(props) {
	const {
		data
	} = props

	return (
		<div>
			<h1>{data.first_name}</h1>
			<img src={data.avatar}/>
		</div>
	)
}
