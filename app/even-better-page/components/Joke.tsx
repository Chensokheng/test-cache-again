import { fetchRandomJoke } from "@/actions/fetchRandomJoke";
import React from "react";
import { unstable_noStore } from "next/cache";

export default async function Joke() {
	unstable_noStore();

	const data = await fetchRandomJoke();

	return <p className="text-black">{JSON.stringify(data)}</p>;
}
