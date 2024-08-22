import { Suspense } from "react";
import Post from "./components/post";

export async function generateStaticParams() {
	return [];
}

export default async function Page({ params }: { params: { slug: string } }) {
	return (
		<div>
			<h1>This is is blog</h1>
			<Suspense fallback={<h1>Fetching post</h1>}>
				<Post slug={params.slug} />
			</Suspense>
		</div>
	);
}
