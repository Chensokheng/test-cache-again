import React, { Suspense } from "react";
import Joke from "./components/Joke";

import type { Metadata, ResolvingMetadata } from "next";
import { fetchRandomJoke } from "@/actions/fetchRandomJoke";

type Props = {
	params: { id: string };
	searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata() {
	const res = await fetchRandomJoke();
	return {
		title: res.setup,
	};
}

export default async function page() {
	return (
		<div className="">
			<h1 className="text-3xl font-bold">This is even better page</h1>
			<Suspense fallback={<h1>Fetching joke...</h1>}>
				<Joke />
			</Suspense>
		</div>
	);
}
