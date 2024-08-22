"use client";

import { sleep } from "@/lib/util";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
	const [joke, setJoke] = useState("");

	const fetchJoke = async () => {
		const res = await fetch(
			"https://official-joke-api.appspot.com/random_joke"
		);
		const data = await res.json();
		await sleep(3000);
		setJoke(data);
	};

	useEffect(() => {
		fetchJoke();
	}, []);

	return (
		<div>
			My Post: {params.id} {JSON.stringify(joke)}
		</div>
	);
}
