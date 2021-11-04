import React, { useState, useEffect } from "react"
import Card from "./Card"

export default function Cards() {
	const [cards, setCards] = useState([])

	useEffect(() => {
		fetch("https://reqres.in/api/users?page=2")
			.then((responseFetch) => responseFetch.json())
			.then((response) => {
				setCards(response.data)

				console.log(response.data)
			})
	}, [])

	return cards ? cards.map((item) => <Card key={item.id} data={item} />) : <></>
}
// avatar: "https://reqres.in/img/faces/7-image.jpg"
// email: "michael.lawson@reqres.in"
// first_name: "Michael"
// id: 7
// last_name: "Lawson"
