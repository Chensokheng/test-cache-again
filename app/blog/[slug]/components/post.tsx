import { sleep } from "@/lib/util";
import React from "react";

export default async function Post({ slug }: { slug: string }) {
	const res = await fetch(
		"https://jsonplaceholder.typicode.com/posts/" + slug
	);
	await sleep(4000);
	const data = await res.json();

	return <div className="w-96">{JSON.stringify(data)}</div>;
}
