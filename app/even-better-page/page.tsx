import React, { Suspense } from "react";
import Joke from "./components/Joke";

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
