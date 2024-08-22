"use server";

import { sleep } from "@/lib/util";

export const fetchRandomJoke = async () => {
	const res = await fetch(
		"https://official-joke-api.appspot.com/random_joke"
	);
	const data = await res.json();
	return data;
};
