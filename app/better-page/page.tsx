import { fetchRandomJoke } from "@/actions/fetchRandomJoke";
import { unstable_noStore } from "next/cache";
import React from "react";

export default async function page() {
	unstable_noStore();
	const data = await fetchRandomJoke();
	return (
		<div className="">
			<h1 className="text-3xl font-bold">This is better page</h1>
			<p className="text-black">{JSON.stringify(data)}</p>
		</div>
	);
}
