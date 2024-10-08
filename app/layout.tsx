import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="space-x-4">
					<Link href={"/bad-page"}>bad-page</Link>
					<Link href={"/better-page"}>better-page</Link>
					<Link href={"/even-better-page"}>even-better-page</Link>
				</div>
				{children}
			</body>
		</html>
	);
}
