import React from "react";
import { unstable_noStore as noStore } from "next/cache";
import { sleep } from "@/lib/util";
export default async function Todo() {
	noStore();

	const res = await fetch(
		"https://official-joke-api.appspot.com/random_joke"
	);
	if (!res.ok) {
		return <h1>Fail to fetch</h1>;
	}

	const data = await res.json();
	await sleep(3000);

	return (
		<div>
			<h1>{data?.setup}</h1>
		</div>
	);
}
