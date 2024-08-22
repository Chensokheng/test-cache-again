"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
	const [joke, setJoke] = useState("");

	const fetchJoke = async () => {
		const res = await fetch(
			"https://official-joke-api.appspot.com/random_joke"
		);
		const data = await res.json();

		setJoke(data);
	};

	useEffect(() => {
		fetchJoke();
	}, []);

	return (
		<div>
			<h1>Hello world</h1>
			<p>{joke}</p>
		</div>
	);
}
