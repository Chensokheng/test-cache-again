import React from "react";
import Todo from "./components/Todo";
import { Suspense } from "react";

export default async function page() {
	return (
		<div className=" bg-slate-100 h-screen py-10">
			<h1>Hello world</h1>
			<Suspense fallback={<h1>Loading....</h1>}>
				<Todo />
			</Suspense>
		</div>
	);
}
